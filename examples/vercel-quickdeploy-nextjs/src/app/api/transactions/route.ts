import { NextRequest, NextResponse } from 'next/server';
import { transactionsService } from '@/app/lib/services/transactions';
import { withAuth, assertAccountOwner } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { isUuid } from '@/app/lib/utils/validation';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetTransactions(request: NextRequest, session: Session) {
  const { searchParams } = request.nextUrl;
  const accountId = searchParams.get('accountId');
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');

  if (!accountId) {
    return NextResponse.json(
      { success: false, error: 'accountId is required' },
      { status: 400 }
    );
  }

  if (!isUuid(accountId)) {
    return NextResponse.json(
      { success: false, error: 'accountId must be a valid UUID' },
      { status: 400 }
    );
  }

  await assertAccountOwner(session, accountId);

  const currentPage = page ? parseInt(page) : 1;
  const currentPageSize = pageSize ? parseInt(pageSize) : 50;

  const transactions = await transactionsService.getTransactionsByAccountId(
    accountId,
    currentPage,
    currentPageSize
  );

  const totalCount = await transactionsService.getTransactionsCountByAccountId(accountId);

  return NextResponse.json({
    success: true,
    data: {
      results: transactions,
      page: currentPage,
      pageSize: currentPageSize,
      totalPages: Math.ceil(totalCount / currentPageSize),
      totalRecords: totalCount,
    },
  });
}

export const GET = withAuth(handleGetTransactions);
