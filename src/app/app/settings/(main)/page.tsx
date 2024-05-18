import { auth } from "@/services/auth"

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    return;
  }
  
  return (
    <h1>Profile</h1>
  )
}