import React from "react";
import { Button } from "../ui/button";
import SignInButton from "../signInButton";

export default async function Header() {
  return (
    <header className="w-full border-b border-border border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">YaniPay Customers</h2>
        <Button>Demo</Button>
        <SignInButton />
      </div>
    </header>
  );
}
