import { createHash, createHmac, timingSafeEqual } from 'node:crypto';
import type { NextRequest, NextResponse } from 'next/server';
import { HttpError } from '@/app/lib/utils/http-error';

// Demo session: a signed, httpOnly cookie that carries an opaque user id.
// The access code is the only identity here, so everyone who signs in with it
// is the same user. Replace it with your own authentication and your real user id.
export const SESSION_COOKIE = 'pluggy_quickstart_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

export interface Session {
  userId: string;
}

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new HttpError(503, 'SESSION_SECRET is not configured (use at least 32 random characters)');
  }
  return secret;
}

function sign(value: string): string {
  return createHmac('sha256', getSessionSecret()).update(value).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  // Hash first so both buffers have the same length.
  const ha = createHash('sha256').update(a).digest();
  const hb = createHash('sha256').update(b).digest();
  return timingSafeEqual(ha, hb);
}

// Compares the code typed on the login page with APP_ACCESS_CODE.
export function isValidAccessCode(code: unknown): boolean {
  const expected = process.env.APP_ACCESS_CODE;
  if (!expected) {
    throw new HttpError(503, 'APP_ACCESS_CODE is not configured');
  }
  return typeof code === 'string' && code.length > 0 && safeEqual(code, expected);
}

export function readSession(request: NextRequest): Session | null {
  const raw = request.cookies.get(SESSION_COOKIE)?.value;
  if (!raw) return null;

  const [payload, signature] = raw.split('.');
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return null;

  try {
    const { uid, exp } = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (typeof uid !== 'string' || typeof exp !== 'number' || exp < Date.now() / 1000) {
      return null;
    }
    return { userId: uid };
  } catch {
    return null;
  }
}

export function requireSession(request: NextRequest): Session {
  const session = readSession(request);
  if (!session) {
    throw new HttpError(401, 'Not authenticated');
  }
  return session;
}

// The user id is derived from the access code instead of being random, so
// signing out, an expired cookie or another browser all reach the same items.
// Changing APP_ACCESS_CODE or SESSION_SECRET starts a new, empty user.
function userIdForAccessCode(): string {
  return createHmac('sha256', getSessionSecret())
    .update(`user:${process.env.APP_ACCESS_CODE}`)
    .digest('hex')
    .slice(0, 32);
}

// Call only after isValidAccessCode() accepted the code.
export function startSession(response: NextResponse): Session {
  const userId = userIdForAccessCode();
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  const payload = Buffer.from(JSON.stringify({ uid: userId, exp })).toString('base64url');

  response.cookies.set(SESSION_COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });
  return { userId };
}

export function endSession(response: NextResponse): void {
  response.cookies.set(SESSION_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
}
