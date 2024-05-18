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
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardIncome } from "./_components/card-income";
import { CardOutcome } from "./_components/card-outcome";

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Dashboard</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain className="grid gap-6 h-[calc(100vh_-_80px)] overflow-y-auto">
        <div className="grid grid-cols-4 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">🏗️ UNDER CONSTRUCTION</CardTitle>
              <CardContent className="p-0">
                <h1 className="text-xl">NO INFO YET.</h1>
              </CardContent>
            </CardHeader>
          </Card>
          <CardIncome />
          <CardOutcome />
        </div>
        <div>
          <Card className="relative overflow-hidden">
            <div className="z-10 absolute backdrop-blur-sm left-0 top-0 w-full h-[580px] flex flex-col items-center justify-center gap-4">
              <p>This feature is not available on Free Tier.</p>
              <Button>Unlock with PRO</Button>
            </div>
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
