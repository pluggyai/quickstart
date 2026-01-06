import { NextRequest, NextResponse } from 'next/server';
import { transactionsService } from '@/app/lib/services/transactions';
import { withErrorHandling } from '@/app/lib/utils/error-handler';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetTransactions(request: NextRequest) {
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

export const GET = withErrorHandling(handleGetTransactions);
