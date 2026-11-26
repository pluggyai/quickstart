import { NextRequest, NextResponse } from 'next/server';
import { identityService } from '@/app/lib/services/identity';
import { withAuth, assertItemOwner } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { requireItemId } from '@/app/lib/utils/validation';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetIdentity(request: NextRequest, session: Session) {
  const itemId = requireItemId(request);
  await assertItemOwner(session, itemId);

  // Fetch from database (kept in sync by webhooks)
  const identity = await identityService.getIdentityByItemId(itemId);

  if (!identity) {
    return NextResponse.json(
      { success: false, error: 'Identity not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: identity,
  });
}

export const GET = withAuth(handleGetIdentity);
