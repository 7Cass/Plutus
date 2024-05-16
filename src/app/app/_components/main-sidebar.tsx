"use client";

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
  DashboardSidebarTitle,
} from "@/components/dashboard/sidebar";
import {
  ArchiveIcon,
  BarChartIcon,
  DashboardIcon,
  GearIcon,
  MixerVerticalIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { UserDropwdown } from "./user-dropdown";
import { Logo } from "@/components/logo";

type MainSidebarProps = {
  user: Session["user"];
};

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader className="flex items-center gap-4">
        <Logo className="bg-primary" />
        <DashboardSidebarTitle>Plutus</DashboardSidebarTitle>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive("/app")}>
              <DashboardIcon className="w-4 h-4 mr-3" />
              Dashboard
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/transactions"
              active={isActive("/app/transactions")}
            >
              <ArchiveIcon className="w-4 h-4 mr-3" />
              Transactions
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/analytics"
              active={isActive("/app/analytics")}
            >
              <BarChartIcon className="w-4 h-4 mr-3" />
              Analytics
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <GearIcon className="w-4 h-4 mr-3" />
              Settings
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Extra Links
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Need help?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Website</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>

      <DashboardSidebarFooter>
        <UserDropwdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}
