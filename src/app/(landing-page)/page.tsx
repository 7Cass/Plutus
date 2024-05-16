import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/auth">
        <Button>Sign In</Button>
      </Link>
    </main>
  );
}
