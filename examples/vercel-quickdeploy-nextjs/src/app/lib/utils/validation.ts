import { NextRequest } from 'next/server';

interface ErrorWithStatus extends Error {
  status?: number;
}

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Pluggy ids (items, accounts, transactions, investments...) are UUIDs.
// Check them before using them in an API request or a database query.
export function isUuid(value: unknown): value is string {
  return typeof value === 'string' && UUID_REGEX.test(value);
}

// Ids carried by a webhook payload. Fields that are absent are not checked.
export function hasValidWebhookIds(payload: object): boolean {
  const { itemId, accountId, transactionIds } = payload as Record<string, unknown>;

  return (
    (itemId == null || isUuid(itemId)) &&
    (accountId == null || isUuid(accountId)) &&
    (transactionIds == null ||
      (Array.isArray(transactionIds) && transactionIds.every(isUuid)))
  );
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

  if (!isUuid(itemId)) {
    const error = new Error('itemId must be a valid UUID') as ErrorWithStatus;
    error.status = 400;
    throw error;
  }

  return itemId;
}
