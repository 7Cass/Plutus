"use client";

import {
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
} from "@/components/dashboard/sidebar";
import { MagicWandIcon, MixerVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";

export function SettingsSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            href="/app/settings"
            active={isActive("/app/settings")}
          >
            <PersonIcon className="w-4 h-4 mr-3" />
            Profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/preferences"
            active={isActive("/app/settings/preferences")}
          >
            <MixerVerticalIcon className="w-4 h-4 mr-3" />
            Preferences
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/app/settings/billing"
            active={isActive("/app/settings/billing")}
          >
            <MagicWandIcon className="w-4 h-4 mr-3" />
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  );
}