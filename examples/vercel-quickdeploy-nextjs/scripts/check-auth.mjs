// Proves that the API rejects callers without a session and webhooks without
// a valid Pluggy signature. Runs against a production build made with
// NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:3124 (the local database stand-in below):
//
//   pnpm run test:auth
//
// It starts `next start` with throwaway configuration. No request reaches
// Pluggy or Supabase: the database is a local stand-in that only answers the
// ownership lookup, and every check stops before a Pluggy API call.
import { spawn } from 'node:child_process';
import { createHmac } from 'node:crypto';
import { createServer } from 'node:http';

const PORT = process.env.PORT ?? '3123';
const BASE = `http://127.0.0.1:${PORT}`;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const ACCESS_CODE = 'test-access-code';
const WEBHOOK_SECRET = 'whsec_' + '0'.repeat(64);
const UUID = '00000000-0000-4000-8000-000000000000';
// An item that exists in the database but was connected by another user.
const OTHER_USERS_ITEM = '11111111-1111-4111-8111-111111111111';
// Next.js inlines NEXT_PUBLIC_SUPABASE_URL at build time, so the build must
// already point at this address: `NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:3124 pnpm build`.
const DB_PORT = '3124';

// Stand-in for the Supabase REST API: `pluggy_items` has one row, owned by
// someone else. Anything else is an empty table.
let ownershipLookups = 0;
const database = createServer((req, res) => {
  const url = new URL(req.url, 'http://db');
  const rows = [];
  if (url.pathname === '/rest/v1/pluggy_items' && url.searchParams.get('item_id') === `eq.${OTHER_USERS_ITEM}`) {
    ownershipLookups++;
    rows.push({ user_id: 'another-user' });
  }
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(rows));
});
await new Promise((resolve) => database.listen(Number(DB_PORT), '127.0.0.1', resolve));

const server = spawn('pnpm', ['exec', 'next', 'start', '-p', PORT, '-H', '127.0.0.1'], {
  env: {
    ...process.env,
    PLUGGY_CLIENT_ID: 'dummy',
    PLUGGY_CLIENT_SECRET: 'dummy',
    NEXT_PUBLIC_SUPABASE_URL: `http://127.0.0.1:${DB_PORT}`,
    SUPABASE_SERVICE_ROLE_KEY: 'dummy',
    APP_ACCESS_CODE: ACCESS_CODE,
    SESSION_SECRET: 'x'.repeat(48),
    PLUGGY_WEBHOOK_SECRET: WEBHOOK_SECRET,
  },
  stdio: ['ignore', 'pipe', 'inherit'],
});

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      await fetch(`${BASE}/login`);
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }
  throw new Error('next start did not come up');
}

const sameOrigin = { Origin: ORIGIN, 'Content-Type': 'application/json' };

// Every API route, called without a session cookie.
const unauthenticated = [
  ['GET', '/api/items'],
  ['GET', `/api/items?itemId=${UUID}`],
  ['DELETE', `/api/items?itemId=${UUID}`],
  ['POST', '/api/token'],
  ['GET', `/api/accounts?itemId=${UUID}`],
  ['GET', `/api/identity?itemId=${UUID}`],
  ['GET', `/api/investments?itemId=${UUID}`],
  ['GET', `/api/loans?itemId=${UUID}`],
  ['GET', `/api/transactions?accountId=${UUID}`],
  ['GET', `/api/bills?accountId=${UUID}`],
  ['GET', `/api/investment-transactions?investmentId=${UUID}`],
];

function sign(body, t = Math.floor(Date.now() / 1000)) {
  const v1 = createHmac('sha256', WEBHOOK_SECRET).update(`${t}.${body}`).digest('hex');
  return `t=${t},v1=${v1}`;
}

let failures = 0;
async function expect(label, promise, status) {
  const res = await promise;
  const ok = res.status === status;
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} -> ${res.status} (expected ${status})`);
  return res;
}

try {
  await waitForServer();

  for (const [method, path] of unauthenticated) {
    await expect(`${method} ${path} without session`, fetch(BASE + path, { method, headers: sameOrigin }), 401);
  }

  const forged = { ...sameOrigin, Cookie: 'pluggy_quickstart_session=eyJ1aWQiOiJ4IiwiZXhwIjo5OTk5OTk5OTk5fQ.forged' };
  await expect('GET /api/items with a forged cookie', fetch(`${BASE}/api/items`, { headers: forged }), 401);

  await expect(
    'POST /api/session with a wrong access code',
    fetch(`${BASE}/api/session`, { method: 'POST', headers: sameOrigin, body: JSON.stringify({ accessCode: 'nope' }) }),
    401
  );
  await expect(
    'POST /api/session from another origin',
    fetch(`${BASE}/api/session`, {
      method: 'POST',
      headers: { ...sameOrigin, Origin: 'https://attacker.example' },
      body: JSON.stringify({ accessCode: ACCESS_CODE }),
    }),
    403
  );

  const login = await expect(
    'POST /api/session with the access code',
    fetch(`${BASE}/api/session`, { method: 'POST', headers: sameOrigin, body: JSON.stringify({ accessCode: ACCESS_CODE }) }),
    200
  );
  const cookie = (login.headers.get('set-cookie') ?? '').split(';')[0];
  const authed = { ...sameOrigin, Cookie: cookie };

  // With a session the request gets past authentication and stops at input
  // validation, before any database call.
  await expect(
    'GET /api/transactions with session and a bad id',
    fetch(`${BASE}/api/transactions?accountId=not-a-uuid`, { headers: authed }),
    400
  );
  await expect(
    'DELETE /api/items with session from another origin',
    fetch(`${BASE}/api/items?itemId=${UUID}`, {
      method: 'DELETE',
      headers: { ...authed, Origin: 'https://attacker.example' },
    }),
    403
  );
  await expect(
    'DELETE /api/items with session and no Origin header',
    fetch(`${BASE}/api/items?itemId=${UUID}`, { method: 'DELETE', headers: { Cookie: cookie } }),
    403
  );

  // An item that belongs to another user answers 404, like one that does not exist.
  for (const [method, path] of [
    ['GET', `/api/items?itemId=${OTHER_USERS_ITEM}`],
    ['DELETE', `/api/items?itemId=${OTHER_USERS_ITEM}`],
    ['GET', `/api/accounts?itemId=${OTHER_USERS_ITEM}`],
    ['GET', `/api/identity?itemId=${OTHER_USERS_ITEM}`],
  ]) {
    await expect(`${method} ${path} for another user's item`, fetch(BASE + path, { method, headers: authed }), 404);
  }
  if (ownershipLookups !== 4) {
    failures++;
    console.log(`FAIL the ownership lookup ran ${ownershipLookups} time(s) (expected 4)`);
  }

  // Signing in again (new browser, after sign-out, after expiry) is the same user.
  const again = await fetch(`${BASE}/api/session`, { method: 'POST', headers: sameOrigin, body: JSON.stringify({ accessCode: ACCESS_CODE }) });
  const userIdOf = (response) =>
    JSON.parse(Buffer.from((response.headers.get('set-cookie') ?? '').split('=')[1].split('.')[0], 'base64url').toString()).uid;
  const sameUser = userIdOf(login) === userIdOf(again);
  if (!sameUser) failures++;
  console.log(`${sameUser ? 'ok  ' : 'FAIL'} two sign-ins with the access code are the same user`);

  // Webhook: unsigned, badly signed, stale, and correctly signed.
  const body = JSON.stringify({ event: 'connector/status_updated', eventId: 'evt-test' });
  const post = (headers) => fetch(`${BASE}/api/webhook`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body });
  await expect('POST /api/webhook without signature', post({}), 401);
  await expect('POST /api/webhook with a wrong signature', post({ 'X-Pluggy-Signature': `t=${Math.floor(Date.now() / 1000)},v1=${'a'.repeat(64)}` }), 401);
  await expect('POST /api/webhook with a 10-minute-old signature', post({ 'X-Pluggy-Signature': sign(body, Math.floor(Date.now() / 1000) - 600) }), 401);
  // An event the app does not handle is acknowledged without any API call.
  await expect('POST /api/webhook with a valid signature', post({ 'X-Pluggy-Signature': sign(body) }), 200);
} catch (error) {
  failures++;
  console.error(error);
} finally {
  server.kill();
  database.close();
}

if (failures > 0) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nAll auth checks passed');
