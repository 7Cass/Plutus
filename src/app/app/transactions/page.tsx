import { TransactionsTable } from "./_components/transactions-table";
import { getUserTransactions } from "./actions";

export default async function Page() {
  const transactions = await getUserTransactions();

  if (!transactions.data) {
    // todo: add error toaster
    return;
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <TransactionsTable transactions={transactions.data} />
      </div>
    </div>
  );
}
