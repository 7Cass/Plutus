import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import { formatDate } from "@/lib/format-date";
import { Transaction } from "@/types/transaction";
import { ArrowDownIcon } from "@radix-ui/react-icons";

type CardExpenseProps = {
  expense: Transaction[];
};

export function CardExpense({ expense }: CardExpenseProps) {
  if (expense.length === 0) {
    return (
      <Card className="flex-grow">
        <CardContent className="flex flex-col items-center justify-center h-full gap-2">
          <h1 className="text-muted-foreground text-center">
            No expenses yet.
          </h1>
          <p className="text-muted-foreground text-center">
            Go to transactions page and create a new expense transaction
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-grow">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-medium">Expense</h1>
          <ArrowDownIcon className="w-8 h-8 text-red-500" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-semibold">
          {formatCurrency(
            expense.reduce((prev, curr) => prev + curr.amount, 0),
            "BRL"
          )}
        </p>
        {/* <div className="pt-4 border-t border-border space-y-2">
          <p className="text-md font-semibold">Recent transactions</p>
          <div className="w-full space-y-2">
            {expense.map((transaction, index) => (
              <div
                key={index}
                className="flex justify-between items-center gap-4 border border-border rounded px-2 py-1.5"
              >
                <small className="text-xs">
                  {formatCurrency(transaction.amount, "BRL")}
                </small>
                <small className="text-xs">
                  {formatDate(transaction.date)}
                </small>
                <div className="flex-1 flex justify-end">
                  <Badge
                    variant={
                      transaction.category.isDefault ? "default" : "secondary"
                    }
                  >
                    {transaction.category.name}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full">
            See more
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}
