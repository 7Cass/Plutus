import { TransactionsTable } from "./_components/transactions-table";
import { getUserTransactions, getUserCategories } from "./actions";

export default async function Page() {
  const transactions = await getUserTransactions();
  const categories = await getUserCategories();

  if (!transactions.data || !categories) {
    // todo: add error toaster
    return;
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <TransactionsTable
          transactions={transactions.data}
          categories={categories}
        />
      </div>
    </div>
  );
}
