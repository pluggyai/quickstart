import { NextRequest, NextResponse } from 'next/server';
import { investmentTransactionsService } from '@/app/lib/services/investment-transactions';
import { withAuth, assertInvestmentOwner } from '@/app/lib/auth/guards';
import type { Session } from '@/app/lib/auth/session';
import { isUuid } from '@/app/lib/utils/validation';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetInvestmentTransactions(request: NextRequest, session: Session) {
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

  if (!isUuid(investmentId)) {
    return NextResponse.json(
      { success: false, error: 'investmentId must be a valid UUID' },
      { status: 400 }
    );
  }

  await assertInvestmentOwner(session, investmentId);

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

export const GET = withAuth(handleGetInvestmentTransactions);
