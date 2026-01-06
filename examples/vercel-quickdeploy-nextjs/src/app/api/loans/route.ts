import { NextRequest, NextResponse } from 'next/server';
import { loansService } from '@/app/lib/services/loans';
import { withErrorHandling } from '@/app/lib/utils/error-handler';
import { requireItemId } from '@/app/lib/utils/validation';
import { toPaginatedResponse, getPaginationParams } from '@/app/lib/utils/pagination';

export const runtime = 'nodejs';
export const maxDuration = 30;

async function handleGetLoans(request: NextRequest) {
  const itemId = requireItemId(request);
  const { searchParams } = request.nextUrl;
  const paginationOptions = getPaginationParams(searchParams);

  const loans = await loansService.getLoansByItemId(itemId);

  return NextResponse.json(toPaginatedResponse(loans, paginationOptions));
}

export const GET = withErrorHandling(handleGetLoans);