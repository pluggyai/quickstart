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
