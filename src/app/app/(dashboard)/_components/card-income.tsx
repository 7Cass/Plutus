import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export function CardIncome() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-4xl font-semibold">Income</h1>
          <ArrowUpIcon className="w-10 h-10 text-green-500" />
        </div>
        <p className="text-2xl font-light pt-2">R$: 4250,92</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="pt-4 border-t border-border space-y-2">
          <p className="text-sm">Past 7 days</p>
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
  )
}