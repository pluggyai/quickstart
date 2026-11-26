import { NextRequest, NextResponse } from 'next/server';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { assertSameOrigin } from '@/app/lib/auth/guards';
import { endSession, isValidAccessCode, startSession } from '@/app/lib/auth/session';

export const runtime = 'nodejs';

// Demo login: trades APP_ACCESS_CODE for a signed session cookie.
// Replace this route with your own sign-in.
async function handleLogin(request: NextRequest) {
  assertSameOrigin(request);

  const body = await request.json().catch(() => ({}));
  if (!isValidAccessCode(body?.accessCode)) {
    return NextResponse.json({ success: false, error: 'Invalid access code' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  startSession(response);
  return response;
}

async function handleLogout(request: NextRequest) {
  assertSameOrigin(request);
  const response = NextResponse.json({ success: true });
  endSession(response);
  return response;
}

export const POST = withErrorHandling(handleLogin);
export const DELETE = withErrorHandling(handleLogout);
