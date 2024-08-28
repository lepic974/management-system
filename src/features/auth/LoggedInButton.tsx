import { authConfig } from "@/app/api/exAuth/[...nextauth]";
import { LoginButton } from "@/components/AuthButtons";
import { Button } from "@/components/ui/button";
import getServerSession from "next-auth";

async function LoggedInButton() {
  const session = await getServerSession(authConfig);

  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>;
  }

  return (
    <div className="flex h-screen max-h-screen w-full">
      <section className="remove-scollbar container my-auto">
        <h1 className="header text-3xl text-white">Sign In</h1>
      </section>

      <Button variant="link">Link</Button>
      <LoginButton />
    </div>
  );
}

export default LoggedInButton;
