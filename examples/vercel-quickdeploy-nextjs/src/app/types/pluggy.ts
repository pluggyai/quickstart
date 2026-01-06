// Types from pluggy-sdk are used internally but not exported
// If needed, import directly from 'pluggy-sdk' where required

import { ConnectorCredential } from "pluggy-sdk";

export interface ConnectToken {
  accessToken: string;
  expiresAt: string;
}

export interface PluggyConnectOptions {
  connectToken: string;
  includeSandbox?: boolean;
  connectorTypes?: Array<'PERSONAL_BANK' | 'BUSINESS_BANK' | 'INVESTMENT'>;
  countries?: string[];
  products?: Array<'ACCOUNTS' | 'CREDIT_CARDS' | 'TRANSACTIONS' | 'INVESTMENTS'>;
}

export interface PluggySuccessData {
  item: Record<string, unknown>; // Item type from pluggy-sdk
}

export interface PluggyErrorData {
  message: string;
  data?: {
    item?: Record<string, unknown>; // Item type from pluggy-sdk
  };
}

export interface PluggyItemRecord {
  item_id: string;
  user_id?: string;
  connector_id?: string;
  connector_name?: string;
  connector_image_url?: string;
  status?: 'UPDATED' | 'UPDATING' | 'WAITING_USER_INPUT' | 'LOGIN_ERROR' | 'OUTDATED' | 'CREATED';
  created_at?: string;
  updated_at?: string;
  last_updated_at?: string | null;
  webhook_url?: string | null;
  parameters?: ConnectorCredential | null;
  institution_name?: string;
  institution_url?: string;
  primary_color?: string;
  secondary_color?: string;
}

export interface DeleteItemResponse {
  success: boolean;
  message: string;
  itemId?: string;
  warnings?: string[];
}

// ============================================================================
// ACCOUNT TYPES
// ============================================================================

export interface BankData {
  transferNumber?: string;
  closingBalance?: number;
  [key: string]: unknown;
}

export interface CreditData {
  level?: string;
  brand?: string;
  balance_close_date?: string;
  balance_due_date?: string;
  available_credit_limit?: number;
  balance_foreign_currency?: number | null;
  minimum_payment?: number;
  credit_limit?: number;
  is_limit_flexible?: boolean;
  holder_type?: string;
  status?: string;
  disaggregated_credit_limits?: DisaggregatedCreditLimits | null;
  additional_cards?: unknown | null;
  [key: string]: unknown;
}

export interface DisaggregatedCreditLimits {
  purchases?: number;
  cash?: number;
  installments?: number;
  [key: string]: unknown;
}

export interface AccountRecord {
  id: string;
  item_id: string;
  account_id: string;
  type: 'BANK' | 'CREDIT' | 'PAYMENT_ACCOUNT';
  subtype?: string;
  number?: string;
  name: string;
  marketing_name?: string;
  balance?: number;
  currency_code?: string;
  owner?: string;
  tax_number?: string;
  bank_data?: BankData | null;
  credit_data?: CreditData | null;
  disaggregated_credit_limits?: DisaggregatedCreditLimits | null;
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// TRANSACTION TYPES
// ============================================================================

export interface TransactionRecord {
  id?: string;
  item_id?: string;
  account_id: string;
  transaction_id: string;
  date: string;
  description: string;
  description_raw?: string;
  amount: number;
  amount_in_account_currency?: number;
  balance?: number;
  currency_code?: string;
  category?: string;
  category_id?: string;
  provider_code?: string;
  provider_id?: string;
  status?: 'POSTED' | 'PENDING';
  type: 'CREDIT' | 'DEBIT';
  operation_type?: string;
  operation_category?: string;
  payment_data?: Record<string, unknown> | null;
  credit_card_metadata?: Record<string, unknown> | null;
  merchant?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// CREDIT CARD BILL TYPES
// ============================================================================

export interface CreditCardBillRecord {
  id?: string;
  bill_id: string;
  account_id: string;
  due_date?: string;
  total_amount: number;
  total_amount_currency_code?: string;
  minimum_payment_amount?: number;
  allows_installments?: boolean;
  finance_charges?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// IDENTITY TYPES
// ============================================================================

export interface Address {
  full_address?: string;
  primary_address?: string;
  city?: string;
  postal_code?: string;
  state?: string;
  country?: string;
  type?: string;
  additional_info?: string;
  [key: string]: unknown;
}

export interface PhoneNumber {
  type?: string;
  value: string;
  [key: string]: unknown;
}

export interface Email {
  type?: string;
  value: string;
  [key: string]: unknown;
}

export interface Relation {
  type?: string;
  name?: string;
  document?: string | null;
  [key: string]: unknown;
}

export interface IdentityRecord {
  id?: string;
  identity_id: string;
  item_id: string;
  full_name?: string;
  company_name?: string;
  document?: string;
  document_type?: string;
  tax_number?: string;
  job_title?: string;
  birth_date?: string;
  investor_profile?: string;
  establishment_code?: string;
  establishment_name?: string;
  addresses?: Address[] | null;
  phone_numbers?: PhoneNumber[] | null;
  emails?: Email[] | null;
  relations?: Relation[] | null;
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// INVESTMENT TYPES
// ============================================================================

export interface InvestmentRecord {
  id?: string;
  investment_id: string;
  item_id: string;
  name: string;
  code?: string | null;
  isin?: string | null;
  number?: string | null;
  owner?: string | null;
  currency_code?: string;
  type?: 'FIXED_INCOME' | 'SECURITY' | 'MUTUAL_FUND' | 'EQUITY' | 'ETF' | 'COE' | string;
  subtype?: string;
  last_month_rate?: number | null;
  last_twelve_months_rate?: number | null;
  annual_rate?: number | null;
  date?: string;
  value?: number | null;
  quantity?: number | null;
  amount?: number | null;
  balance?: number | null;
  taxes?: number | null;
  taxes2?: number | null;
  due_date?: string | null;
  rate?: number | null;
  rate_type?: 'CDI' | 'IPCA' | 'PRE_FIXADO' | 'SELIC' | string | null;
  fixed_annual_rate?: number | null;
  issuer?: string | null;
  issue_date?: string | null;
  amount_profit?: number | null;
  amount_withdrawal?: number | null;
  amount_original?: number | null;
  amount_withdrawable?: number | null;
  redemption_date?: string | null;
  originator?: string | null;
  amortization?: string | null;
  amortization_value?: number | null;
  amortization_rate?: number | null;
  amortization_normalized_quantity?: number | null;
  status?: 'ACTIVE' | 'PENDING' | 'TOTAL_WITHDRAWAL' | string;
  institution?: {
    name?: string;
    number?: string;
  } | null;
  metadata?: string;
  provider_id?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface InvestmentTransactionRecord {
  transaction_id?: string;
  investment_id: string;
  trade_date: string;
  date: string;
  description?: string | null;
  quantity?: number;
  value: number;
  amount: number;
  net_amount?: number | null;
  brokerage_number?: string | null;
  expenses?: number | null;
  type: 'BUY' | 'SELL' | 'DIVIDEND' | 'SPLIT' | 'BONUS' | 'TRANSFER' | string;
  created_at?: string;
  updated_at?: string;
  currency_code?: string;
}

// ============================================================================
// LOAN TYPES
// ============================================================================

export interface LoanRecord {
  id?: string;
  loan_id: string;
  item_id: string;
  type?: string;
  subtype?: string;
  product_name?: string;
  contract_number?: string;
  date?: string;
  currency_code?: string;
  contracted_amount?: number;
  current_debt_amount?: number;
  borrower?: string;
  installments?: Record<string, unknown> | null;
  installments_quantity?: number;
  installments_value?: number;
  principal_amount?: number;
  interest_amount?: number;
  interest_rate?: number;
  interest_rate_type?: string;
  tax_amount?: number;
  payment_date?: string;
  past_due_balance?: number;
  outstanding_balance?: number;
  payment_address?: string;
  due_date?: string;
  guarantor?: string;
  amortization_scheduled?: string;
  fees?: Record<string, unknown> | null;
  warranties?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
}

// ============================================================================
// WEBHOOK TYPES
// ============================================================================

export type WebhookEventType =
  // Data Events
  | 'item/created'
  | 'item/updated'
  | 'item/deleted'
  | 'item/error'
  | 'item/waiting_user_input'
  | 'item/login_succeeded'
  | 'connector/status_updated'
  | 'transactions/deleted'
  | 'transactions/created'
  | 'transactions/updated'
  // Payment Events
  | 'payment_intent/created'
  | 'payment_intent/completed'
  | 'payment_intent/waiting_payer_authorization'
  | 'payment_intent/error'
  | 'scheduled_payment/created'
  | 'scheduled_payment/completed'
  | 'scheduled_payment/error'
  | 'scheduled_payment/canceled'
  | 'payment_refund/completed'
  | 'payment_refund/error'
  | 'payment_request/updated'
  | 'automatic_pix_payment/created'
  | 'automatic_pix_payment/completed'
  | 'automatic_pix_payment/error'
  | 'automatic_pix_payment/canceled';

export type TriggeredBy = 'USER' | 'CLIENT' | 'SYNC' | 'INTERNAL';
export type ConnectorStatus = 'ONLINE' | 'UNSTABLE' | 'OFFLINE';
export type PaymentRequestStatus = 'CANCELED' | 'PENDING' | 'COMPLETED' | 'ERROR';

export interface BaseWebhookPayload {
  event: WebhookEventType;
  eventId: string;
  id?: string;
  clientId?: string;
  clientUserId?: string;
  triggeredBy?: TriggeredBy;
}

export interface ItemWebhookPayload extends BaseWebhookPayload {
  itemId: string;
  id?: string;
  triggeredBy: TriggeredBy;
  clientUserId?: string;
  clientId?: string;
}

export interface ConnectorStatusWebhookPayload extends BaseWebhookPayload {
  event: 'connector/status_updated';
  connectorId: string;
  id?: string;
  data: {
    status: ConnectorStatus;
  };
}

export interface TransactionsWebhookPayload extends BaseWebhookPayload {
  itemId: string;
  accountId?: string;
  transactionIds?: string[];
}

export interface PaymentIntentWebhookPayload extends BaseWebhookPayload {
  paymentIntentId: string;
  paymentRequestId?: string;
  bulkPaymentId?: string;
}

export interface ScheduledPaymentWebhookPayload extends BaseWebhookPayload {
  scheduledPaymentId: string;
  paymentRequestId?: string;
}

export interface PaymentRefundWebhookPayload extends BaseWebhookPayload {
  paymentRefundId: string;
  paymentRequestId?: string;
}

export interface PaymentRequestWebhookPayload extends BaseWebhookPayload {
  paymentRequestId: string;
  status: PaymentRequestStatus;
}

export interface AutomaticPixPaymentWebhookPayload extends BaseWebhookPayload {
  automaticPixPaymentId: string;
  paymentRequestId?: string;
}

export type WebhookPayload =
  | ItemWebhookPayload
  | ConnectorStatusWebhookPayload
  | TransactionsWebhookPayload
  | PaymentIntentWebhookPayload
  | ScheduledPaymentWebhookPayload
  | PaymentRefundWebhookPayload
  | PaymentRequestWebhookPayload
  | AutomaticPixPaymentWebhookPayload;

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  details?: string;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;