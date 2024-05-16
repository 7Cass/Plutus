import { auth } from "@/services/auth";
import type { Metadata } from "next";
import { MainSidebar } from "./_components/main-sidebar";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Plutus | Dashboard",
};

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session?.user) return;

  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <MainSidebar user={session?.user} />

      <main>{children}</main>
    </div>
  );
}
