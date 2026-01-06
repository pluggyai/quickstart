import { NextRequest, NextResponse } from 'next/server';
import { accountsService } from '@/app/lib/services/accounts';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { requireItemId } from '@/app/lib/utils/validation';
import { toPaginatedResponse, getPaginationParams } from '@/app/lib/utils/pagination';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetAccounts(request: NextRequest) {
  const itemId = requireItemId(request);
  const { searchParams } = request.nextUrl;
  const paginationOptions = getPaginationParams(searchParams);

  const accounts = await accountsService.getAccountsByItemId(itemId);

  return NextResponse.json(toPaginatedResponse(accounts, paginationOptions));
}

export const GET = withErrorHandling(handleGetAccounts);