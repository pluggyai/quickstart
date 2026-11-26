import { NextRequest, NextResponse } from 'next/server';
import { loansService } from '@/app/lib/services/loans';
import { withAuth, assertItemOwner } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { requireItemId } from '@/app/lib/utils/validation';
import { toPaginatedResponse, getPaginationParams } from '@/app/lib/utils/pagination';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetLoans(request: NextRequest, session: Session) {
  const itemId = requireItemId(request);
  await assertItemOwner(session, itemId);
  const { searchParams } = request.nextUrl;
  const paginationOptions = getPaginationParams(searchParams);

  const loans = await loansService.getLoansByItemId(itemId);

  return NextResponse.json(toPaginatedResponse(loans, paginationOptions));
}

export const GET = withAuth(handleGetLoans);