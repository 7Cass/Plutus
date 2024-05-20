import { Transaction } from "@/types/transaction";

/**
 * Separates INCOME and EXPENSE transactions from the given array of transactions.
 * 
 * @param {Transaction[]} transactions - The array of transactions to separate.
 * @returns {Object} An object containing two arrays: INCOME and EXPENSE transactions.
 */
export function separateIncomeAndExpense(transactions: Transaction[]) {
  const income = transactions.filter(transaction => transaction.type === 'INCOME').slice(0, 5);
  const expense = transactions.filter(transaction => transaction.type === 'EXPENSE').slice(0, 5);

  return { income, expense };
};