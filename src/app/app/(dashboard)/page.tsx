import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/dashboard-page";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "./_components/chart";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Dashboard</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain className="grid gap-4">
        <div className="grid grid-cols-4 gap-4">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">UNDER CONSTRUCTION</CardTitle>
              <CardContent className="p-0">
                <h1 className="text-xl">NO INFO YET.</h1>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-4 py-2">
                <h1 className="flex-1 text-4xl font-semibold">Income</h1>
                <span className="text-2xl font-light">R$: 4250,92</span>
                <ArrowUpIcon className="w-10 h-10 text-green-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="pt-4 border-t border-border space-y-2">
                <h2 className="text-lg">Recent transactions</h2>
                <div className="w-full space-y-2">
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Store</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Market</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Steam</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Salary</Badge>
                  </div>
                </div>
                <Button variant="secondary" className="w-full">See more</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-4 py-2">
                <h1 className="flex-1 text-4xl font-semibold">Expense</h1>
                <span className="text-2xl font-light">R$: 4250,92</span>
                <ArrowDownIcon className="w-10 h-10 text-red-500" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="pt-4 border-t border-border space-y-2">
                <h2 className="text-lg">Recent transactions</h2>
                <div className="w-full space-y-2">
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Store</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Market</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Steam</Badge>
                  </div>
                  <div className="flex justify-between gap-2 border border-border rounded p-2">
                    <p>R$: 250,09</p>
                    <p>12/04/2023</p>
                    <Badge>Salary</Badge>
                  </div>
                </div>
                <Button variant="secondary" className="w-full">See more</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Chart</CardTitle>
              <CardDescription>Income/Expense</CardDescription>
            </CardHeader>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}
