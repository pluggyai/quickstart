import { Account } from "pluggy-sdk";
import { AccountRecord } from "../../../types/pluggy";

export function mapAccountFromPluggyToDb(account: Account, itemId: string): Omit<AccountRecord, 'id'> {
  return {
    item_id: itemId,
    account_id: String(account.id),
    type: account.type,
    subtype: account.subtype,
    number: account.number,
    name: account.name,
    marketing_name: account.marketingName || undefined,
    balance: account.balance,
    currency_code: account.currencyCode,
    owner: account.owner || undefined,
    tax_number: account.taxNumber || undefined,
    bank_data: account.bankData as AccountRecord['bank_data'] || undefined,
    credit_data: account.creditData as AccountRecord['credit_data'] || undefined,
    disaggregated_credit_limits: undefined,
  };
}

