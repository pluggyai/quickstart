import { NextRequest, NextResponse } from 'next/server';
import { identityService } from '@/app/lib/services/identity';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { requireItemId } from '@/app/lib/utils/validation';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetIdentity(request: NextRequest) {
  const itemId = requireItemId(request);

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

export const GET = withErrorHandling(handleGetIdentity);
