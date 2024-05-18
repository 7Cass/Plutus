import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/dashboard-page";
import { SettingsSidebar } from "./_components/settings-sidebar";

export const metadata: Metadata = {
  title: "Plutus | Settings",
};

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Settings</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-[10rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </DashboardPageMain>
    </DashboardPage>
  );
}