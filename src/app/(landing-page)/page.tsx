import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-[100dvh] grid grid-rows-[auto_1fr]">
      <header className="flex items-baseline justify-between py-6 px-12 border-b border-muted">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Plutus</h1>
        </div>
        <nav className="space-x-2">
          <Button className="" variant="ghost">
            Main
          </Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
        <div className="space-x-4">
          <Link href="/auth">
            <Button>Sign In</Button>
          </Link>
          <Link href="/auth">
            <Button variant="ghost">Register</Button>
          </Link>
        </div>
      </header>
      <section className="relative max-w-4xl mx-auto flex flex-col">
        <h1 className="font-bold text-[96px] leading-tight text-center mb-8 mt-32">
          Unlock Your{" "}
          <span className="text-background bg-foreground rounded px-2">
            Financial Freedom
          </span>{" "}
          with Plutus
        </h1>
        <p className="max-w-2xl mx-auto text-center text-muted-foreground text-lg mt-8 mb-12">
          Simplify your financial management with Plutus, the all-in-one
          solution for tracking and organizing your financial data.
        </p>

        <Button size="lg" className="w-fit self-center text-lg">
          Start for Free
        </Button>
      </section>
    </main>
  );
}
