import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/format-currency";
import { formatDate } from "@/lib/format-date";
import { Transaction } from "@/types/transaction";
import { ArrowUpIcon } from "@radix-ui/react-icons";

type CardIncomeProps = {
  income: Transaction[];
}

export function CardIncome({ income }: CardIncomeProps) {

  if (income.length === 0) {
    return (
      <Card className="col-span-1">
        <CardContent className="flex flex-col items-center justify-center h-full gap-2">
          <h1 className="text-muted-foreground text-center">No income yet.</h1>
          <p className="text-muted-foreground text-center">Go to transactions page and create a new income   transaction</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-semibold">Income</h1>
          <ArrowUpIcon className="w-8 h-8 text-green-500" />
        </div>
        <p className="text-md font-light">{formatCurrency(income.reduce((prev, curr) => prev + curr.amount, 0), 'BRL')}</p>
      </CardHeader>
      <CardContent>
        <div className="pt-4 border-t border-border space-y-2">
          <p className="text-xs">Recent transactions</p>
          <div className="w-full space-y-2">
            {income.map((transaction, index) => (
              <div key={index} className="flex justify-between items-center gap-4 border border-border rounded px-2 py-1.5">
                <small className="text-xs">{formatCurrency(transaction.amount, 'BRL')}</small>
                <small className="text-xs">{formatDate(transaction.date)}</small>
                <div className="flex-1 flex justify-end">
                  <Badge variant={transaction.category.isDefault ? 'default' : 'secondary'}>{transaction.category.name}</Badge>
                </div>
              </div>
            ))}
          </div>
          <Button variant="secondary" className="w-full">
            See more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
