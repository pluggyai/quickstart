import type { CreditCardBills } from "pluggy-sdk/dist/types/creditCardBills";
import { CreditCardBillRecord } from "../../../types/pluggy";

export function mapCreditCardBillFromPluggyToDb(bill: CreditCardBills, accountId: string): Omit<CreditCardBillRecord, 'id'> {
  return {
    bill_id: bill.id,
    account_id: accountId,
    due_date: bill.dueDate instanceof Date ? bill.dueDate.toISOString() : bill.dueDate,
    total_amount: bill.totalAmount,
    total_amount_currency_code: bill.totalAmountCurrencyCode,
    minimum_payment_amount: bill.minimumPaymentAmount || undefined,
    allows_installments: bill.allowsInstallments || undefined,
    finance_charges: bill.financeCharges && bill.financeCharges.length > 0 
      ? (bill.financeCharges as unknown as Record<string, unknown>)
      : undefined,
  };
}