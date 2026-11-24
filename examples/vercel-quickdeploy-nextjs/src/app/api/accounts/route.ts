import { NextRequest, NextResponse } from 'next/server';
import { accountsService } from '@/app/lib/services/accounts';
import { withAuth, assertItemOwner } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { requireItemId } from '@/app/lib/utils/validation';
import { toPaginatedResponse, getPaginationParams } from '@/app/lib/utils/pagination';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetAccounts(request: NextRequest, session: Session) {
  const itemId = requireItemId(request);
  await assertItemOwner(session, itemId);
  const { searchParams } = request.nextUrl;
  const paginationOptions = getPaginationParams(searchParams);

  const accounts = await accountsService.getAccountsByItemId(itemId);

  return NextResponse.json(toPaginatedResponse(accounts, paginationOptions));
}

export const GET = withAuth(handleGetAccounts);