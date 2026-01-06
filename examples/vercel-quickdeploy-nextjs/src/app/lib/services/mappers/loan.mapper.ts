import { Loan } from "pluggy-sdk";
import { LoanRecord } from "../../../types/pluggy";

export function mapLoanFromPluggyToDb(loan: Loan): Omit<LoanRecord, 'id'> {
  return {
    loan_id: loan.id,
    item_id: loan.itemId,
    type: loan.type || undefined,
    product_name: loan.productName,
    contract_number: loan.contractNumber || undefined,
    date: loan.date ? (loan.date instanceof Date ? loan.date.toISOString() : loan.date) : undefined,
    currency_code: loan.currencyCode,
    due_date: loan.dueDate ? (loan.dueDate instanceof Date ? loan.dueDate.toISOString() : loan.dueDate) : undefined,
    amortization_scheduled: loan.amortizationScheduled || undefined,
    warranties: loan.warranties 
      ? (loan.warranties as unknown as Record<string, unknown>)
      : undefined,
    installments: loan.installments 
      ? (loan.installments as unknown as Record<string, unknown>)
      : undefined,
  };
}

