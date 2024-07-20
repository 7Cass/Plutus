import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/dashboard-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chart } from "./_components/chart";
import { CardIncome } from "./_components/card-income";
import { CardExpense } from "./_components/card-outcome";
import { getUserTransactions } from "../transactions/actions";
import { separateIncomeAndExpense } from "@/lib/separate-income-and-expense";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const transactions = await getUserTransactions();

  if (!transactions.data) {
    // todo: add error toaster
    return;
  }

  const { expense, income, categoriesRating } = separateIncomeAndExpense(
    transactions.data
  );

  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Dashboard</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain className="grid grid-rows-auto gap-4 h-[calc(100dvh_-_80px)] overflow-y-auto">
        <div className="xl:grid xl:grid-cols-[1fr_1fr] flex flex-col gap-4">
          <Card className="h-auto flex flex-col gap-8">
            <CardHeader className="flex-row items-baseline">
              <div className="space-y-4 flex-1">
                <CardTitle className="text-2xl font-medium">
                  Current Balance
                </CardTitle>
                <h1 className="text-4xl font-semibold">$ 3936,23</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Showing period of July/2024
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg font-medium">
                  Most Expensive Transaction
                </p>

                <div className="flex gap-2">
                  <p className="text-2xl font-semibold">$ 982,93 - Income</p>
                  <small className="text-muted-foreground">23/07/2024</small>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium">Most Used Categories</p>
                <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                  {categoriesRating.map((category: any, i: number) => (
                    <Badge key={i}>
                      {category.name} - {category.size}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-4 flex-wrap">
              <CardIncome income={income} />
              <CardExpense expense={expense} />
            </div>
            <Card className="flex-1 w-full border border-muted overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-baseline">
                  <CardTitle className="text-2xl font-medium">
                    Últimas Transações
                  </CardTitle>
                  <Link href="/app/transactions">
                    <Button variant="link" className="text-xs font-semibold">
                      Ver mais
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="h-40 mb-6 space-y-2 overflow-y-auto">
                <div className="flex gap-4 justify-between items-center border border-muted rounded">
                  <div className="flex-1 flex flex-col rounded-sm border-l-6 border-green-600 p-2">
                    <p>Salário</p>
                    <small className="text-muted-foreground text-xs">
                      06/07/2024
                    </small>
                  </div>
                  <Badge>Salary</Badge>
                  <div className="p-2 font-semibold">
                    <p>$4096.00</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-between items-center border border-muted rounded">
                  <div className="flex-1 flex flex-col rounded-sm border-l-6 border-red-700 p-2">
                    <p>Aluguel</p>
                    <small className="text-muted-foreground text-xs">
                      06/07/2024
                    </small>
                  </div>
                  <Badge>Rent</Badge>
                  <div className="p-2 font-semibold">
                    <p>$900.00</p>
                  </div>
                </div>
                <div className="flex gap-4 justify-between items-center border border-muted rounded">
                  <div className="flex-1 flex flex-col rounded-sm border-l-6 border-red-700 p-2">
                    <p>Compras do mês</p>
                    <small className="text-muted-foreground text-xs">
                      20/07/2024
                    </small>
                  </div>
                  <Badge>Groceries</Badge>
                  <div className="p-2 font-semibold">
                    <p>$982.90</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="relative grid xl:grid-cols-[1fr_1fr] gap-4 rounded overflow-hidden">
          {/* <div className="z-10 absolute backdrop-blur left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-4">
            <p>This feature is not available on Free Tier.</p>
            <Button>Unlock with PRO</Button>
          </div> */}
          <Chart />
          <Chart />
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}
