"use client";

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

export const SignInButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <form action="">
      <Button
        variant="secondary"
        size="sm"
        formAction={async () => {
          "use server";
          await signIn();
        }}
      >
        <LogIn size={16} className="mr-2 h-4 w-4" />
        {isPending ? "Loading" : "Login"}
      </Button>
    </form>
  );
};
