import { Investment } from "pluggy-sdk";
import { InvestmentRecord } from "../../../types/pluggy";

export function mapInvestmentFromPluggyToDb(investment: Investment): Omit<InvestmentRecord, 'id'> {
  return {
    investment_id: investment.id,
    item_id: investment.itemId,
    name: investment.name,
    code: investment.code || undefined,
    isin: investment.isin || undefined,
    number: investment.number || undefined,
    owner: investment.owner || undefined,
    currency_code: investment.currencyCode || 'BRL',
    type: investment.type,
    subtype: investment.subtype || undefined,
    last_month_rate: investment.lastMonthRate || undefined,
    last_twelve_months_rate: investment.lastTwelveMonthsRate || undefined,
    annual_rate: investment.annualRate || undefined,
    date: investment.date ? (investment.date instanceof Date ? investment.date.toISOString() : investment.date) : undefined,
    value: investment.value || undefined,
    quantity: investment.quantity || undefined,
    amount: investment.amount || undefined,
    balance: investment.balance || undefined,
    taxes: investment.taxes || undefined,
    taxes2: investment.taxes2 || undefined,
    due_date: investment.dueDate ? (investment.dueDate instanceof Date ? investment.dueDate.toISOString() : investment.dueDate) : undefined,
    rate: investment.rate || undefined,
    rate_type: investment.rateType || undefined,
    fixed_annual_rate: investment.fixedAnnualRate || undefined,
    issuer: investment.issuer || undefined,
    issue_date: investment.issueDate ? (investment.issueDate instanceof Date ? investment.issueDate.toISOString() : investment.issueDate) : undefined,
    amount_profit: investment.amountProfit || undefined,
    amount_withdrawal: investment.amountWithdrawal || undefined,
    amount_original: investment.amountOriginal || undefined,
    status: investment.status || 'ACTIVE',
    institution: investment.institution ? {
      name: investment.institution.name || undefined,
      number: investment.institution.number || undefined,
    } : undefined,
    metadata: investment.metadata ? JSON.stringify(investment.metadata) : undefined,
  };
}

