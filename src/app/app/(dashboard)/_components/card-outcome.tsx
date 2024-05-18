import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export function CardOutcome() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-semibold">Expense</h1>
          <ArrowDownIcon className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-md font-light pt-2">R$: 4250,92</p>
      </CardHeader>
      <CardContent>
        <div className="pt-4 border-t border-border space-y-2">
          <p className="text-xs">Recent transactions</p>
          <div className="w-full space-y-2">
            <div className="flex justify-between items-center gap-4 border border-border rounded px-2 py-1.5">
              <small className="text-xs">R$: 250,09</small>
              <small className="text-xs">12/04/2023</small>
              <div className="flex-1 flex justify-end">
                <Badge>Store</Badge>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4 border border-border rounded px-2 py-1.5">
              <small className="text-xs">R$: 250,09</small>
              <small className="text-xs">12/04/2023</small>
              <div className="flex-1 flex justify-end">
                <Badge>Market</Badge>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4 border border-border rounded px-2 py-1.5">
              <small className="text-xs">R$: 250,09</small>
              <small className="text-xs">12/04/2023</small>
              <div className="flex-1 flex justify-end">
                <Badge>Steam</Badge>
              </div>
            </div>
          </div>
          <Button variant="secondary" className="w-full">
            See more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
