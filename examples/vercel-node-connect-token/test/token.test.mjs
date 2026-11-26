// Checks that /api/token rejects callers it cannot authenticate.
// Run with `pnpm test` (Node >= 24 runs the TypeScript handler directly).
// The Pluggy API is stubbed: no network and no real credentials are used.
import { test, beforeEach } from 'node:test'
import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import { PluggyClient } from 'pluggy-sdk'

const SECRET = 'test-secret-not-used-anywhere-else'
const OWN_ITEM = '11111111-1111-4111-8111-111111111111'
const OTHER_ITEM = '22222222-2222-4222-8222-222222222222'

const calls = []
PluggyClient.prototype.createConnectToken = async function (itemId, options) {
  calls.push({ itemId, options })
  return { accessToken: 'connect-token' }
}
PluggyClient.prototype.fetchItem = async function (id) {
  return { id, clientUserId: id === OWN_ITEM ? 'user-1' : 'someone-else' }
}

const { default: handler } = await import('../api/token.ts')

function jwt(payload, secret = SECRET, alg = 'HS256') {
  const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url')
  const head = `${b64({ alg, typ: 'JWT' })}.${b64(payload)}`
  return `${head}.${createHmac('sha256', secret).update(head).digest('base64url')}`
}
const valid = () => jwt({ sub: 'user-1', exp: Math.floor(Date.now() / 1000) + 300 })

async function call({ method = 'POST', headers = {}, body } = {}) {
  const res = {
    statusCode: 200,
    headers: {},
    body: undefined,
    setHeader(k, v) { this.headers[k.toLowerCase()] = v },
    status(code) { this.statusCode = code; return this },
    json(b) { this.body = b; return this },
    end() { return this },
  }
  await handler({ method, headers, body }, res)
  return res
}

beforeEach(() => {
  calls.length = 0
  Object.assign(process.env, {
    PLUGGY_CLIENT_ID: 'id',
    PLUGGY_CLIENT_SECRET: 'secret',
    AUTH_JWT_SECRET: SECRET,
    ALLOWED_ORIGIN: 'https://app.example.com',
  })
})

test('missing configuration answers 503', async () => {
  delete process.env.AUTH_JWT_SECRET
  const res = await call({ headers: { authorization: `Bearer ${valid()}` } })
  assert.equal(res.statusCode, 503)
  assert.equal(calls.length, 0)
})

test('only POST is accepted', async () => {
  const res = await call({ method: 'GET', headers: { authorization: `Bearer ${valid()}` } })
  assert.equal(res.statusCode, 405)
  assert.equal(calls.length, 0)
})

for (const [name, authorization] of [
  ['no Authorization header', undefined],
  ['not a bearer token', 'Basic abc'],
  ['malformed token', 'Bearer not-a-jwt'],
  ['wrong secret', `Bearer ${jwt({ sub: 'user-1', exp: Math.floor(Date.now() / 1000) + 300 }, 'wrong-secret')}`],
  ['alg none', `Bearer ${jwt({ sub: 'user-1', exp: Math.floor(Date.now() / 1000) + 300 }, SECRET, 'none')}`],
  ['expired', `Bearer ${jwt({ sub: 'user-1', exp: Math.floor(Date.now() / 1000) - 10 })}`],
  ['no exp', `Bearer ${jwt({ sub: 'user-1' })}`],
  ['no sub', `Bearer ${jwt({ exp: Math.floor(Date.now() / 1000) + 300 })}`],
]) {
  test(`rejects: ${name}`, async () => {
    const headers = authorization ? { authorization } : {}
    const res = await call({ headers })
    assert.equal(res.statusCode, 401)
    assert.equal(calls.length, 0)
  })
}

test('authenticated caller gets a token bound to its user id', async () => {
  const res = await call({
    headers: { authorization: `Bearer ${valid()}` },
    body: { options: { clientUserId: 'attacker-chosen' } },
  })
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.body, { accessToken: 'connect-token' })
  assert.deepEqual(calls, [{ itemId: undefined, options: { clientUserId: 'user-1' } }])
})

test('itemId of another user answers 404', async () => {
  const res = await call({ headers: { authorization: `Bearer ${valid()}` }, body: { itemId: OTHER_ITEM } })
  assert.equal(res.statusCode, 404)
  assert.equal(calls.length, 0)
})

test('itemId of the caller is accepted', async () => {
  const res = await call({ headers: { authorization: `Bearer ${valid()}` }, body: { itemId: OWN_ITEM } })
  assert.equal(res.statusCode, 200)
  assert.equal(calls[0].itemId, OWN_ITEM)
})

test('CORS only for the configured origin', async () => {
  const allowed = await call({ method: 'OPTIONS', headers: { origin: 'https://app.example.com' } })
  assert.equal(allowed.statusCode, 204)
  assert.equal(allowed.headers['access-control-allow-origin'], 'https://app.example.com')
  const other = await call({ method: 'OPTIONS', headers: { origin: 'https://evil.example.com' } })
  assert.equal(other.headers['access-control-allow-origin'], undefined)
})
