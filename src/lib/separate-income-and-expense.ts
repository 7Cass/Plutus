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

  const categoriesRating = transactions.reduce((acc: any, transaction) => {
    const category = transaction.category;
    const existingCategory = acc.find((c: any) => c.name === category.name);
    if (existingCategory) {
      existingCategory.size++;
    } else {
      acc.push({ name: category.name, size: 1 });
    }
    return acc;
  }, []).sort((a: any, b: any) => b.size - a.size);

  return { categoriesRating, income, expense };
};