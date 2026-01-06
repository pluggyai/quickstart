import { NextRequest, NextResponse } from 'next/server';
import { investmentTransactionsService } from '@/app/lib/services/investment-transactions';
import { withErrorHandling } from '@/app/lib/utils/error-handler';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetInvestmentTransactions(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const investmentId = searchParams.get('investmentId');
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');

  if (!investmentId) {
    return NextResponse.json(
      { success: false, error: 'investmentId is required' },
      { status: 400 }
    );
  }

  const investmentTransactions = await investmentTransactionsService.getTransactionsByInvestmentId(
    investmentId,
    limit ? parseInt(limit) : undefined,
    offset ? parseInt(offset) : undefined
  );

  return NextResponse.json({
     success: true,
     data: {
       total: investmentTransactions.length,
       totalPages: 1,
       page: offset ? Math.floor(parseInt(offset) / (parseInt(limit || '50') || 50)) + 1 : 1,
       results: investmentTransactions,
     },
  });
}

export const GET = withErrorHandling(handleGetInvestmentTransactions);
