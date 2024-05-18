import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/dashboard-page";

export const metadata: Metadata = {
  title: "Plutus | Analytics",
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Analytics</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div>{children}</div>
      </DashboardPageMain>
    </DashboardPage>
  );
}