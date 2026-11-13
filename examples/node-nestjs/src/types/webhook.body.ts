export interface WebhookPayload {
  id: string;
  itemId: string;
  event: string;
  eventId: string;
}

export interface WebhookPayloadTransaction extends WebhookPayload {
  accountId: string;
  transactionsCreatedAtFrom: string;
  createdTransactionsLink: string;
  transactionIds: string[];
}

export interface WebhookPayloadItem extends WebhookPayload {
  triggeredBy: string;
}

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isUuid(value: unknown): value is string {
  return typeof value === 'string' && UUID_REGEX.test(value);
}

/**
 * Pluggy ids are UUIDs. Check the ones carried by a webhook payload before
 * using them in an API request or a database query. Absent fields are skipped.
 */
export function hasValidIds(payload: Partial<WebhookPayloadTransaction>) {
  const { itemId, accountId, transactionIds } = payload;

  return (
    (itemId == null || isUuid(itemId)) &&
    (accountId == null || isUuid(accountId)) &&
    (transactionIds == null ||
      (Array.isArray(transactionIds) && transactionIds.every(isUuid)))
  );
}
