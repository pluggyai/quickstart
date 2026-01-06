import { NextRequest } from 'next/server';

interface ErrorWithStatus extends Error {
  status?: number;
}

export function validateItemId(request: NextRequest): string | null {
  const { searchParams } = request.nextUrl;
  const itemId = searchParams.get('itemId');

  if (!itemId) {
    return null;
  }

  return itemId;
}

export function requireItemId(request: NextRequest): string {
  const itemId = validateItemId(request);

  if (!itemId) {
    const error = new Error('itemId is required') as ErrorWithStatus;
    error.status = 400;
    throw error;
  }

  return itemId;
}
