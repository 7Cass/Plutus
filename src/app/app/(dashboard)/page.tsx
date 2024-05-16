import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderNav,
  DashboardPageHeaderTitle,
  DashboardPageMain,
} from "@/components/dashboard/dashboard-page";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Page() {
  return (
    <DashboardPage>
      <DashboardPageHeader className="py-2.5">
        <DashboardPageHeaderTitle>Dashboard</DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>Data</DashboardPageMain>
    </DashboardPage>
  );
}
