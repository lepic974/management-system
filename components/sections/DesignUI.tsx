"use client";

import { Button } from "@/components/ui/button";
import { CopyCheck } from "lucide-react";
import Link from "next/link";

export const DesignUI = () => {
  return (
    <>
      <section className="flex flex-col h-screen w-full items-center gap-4">
        <h2 className="header pt-8">Our Color Design</h2>
        <h3 className="sub-header text-left py-4 mx-auto">Color Primary</h3>

        <div className="flex md:flex-wrap gap-4 w-[150px] h-[150px] border border-zinc-200 rounded-lg bg-primary shadow-lg">
          <Button variant="ghost" size="icon">
            <Link href="#">
              <CopyCheck className="gap-2" />
            </Link>
          </Button>

          <p className="flex items-center text-sm text-center gap-4">
            <p>White</p>
            <span className="hidden hover:flex">#FFFFFF</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4 w-[150px] h-[150px] border border-zinc-200 rounded-lg bg-primary-light">
          Color name
        </div>
        <div className="flex flex-wrap gap-4 w-[150px] h-[150px] border border-zinc-200 rounded-lg bg-primary-dark">
          Color name
        </div>
        <div className="flex flex-wrap gap-4 w-[150px] h-[150px] border border-zinc-200 rounded-lg">
          Color name
        </div>
      </section>
    </>
  );
};
