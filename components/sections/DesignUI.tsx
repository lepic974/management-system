"use client";

import { Button } from "@/components/ui/button";
import { CopyCheck } from "lucide-react";
import Link from "next/link";
import { ColorItem } from "@/data/_data";

export const DesignUI = () => {
  return (
    <>
      <section className="flex flex-col h-screen w-full justify-center items-center gap-4">
        <h2 className="header pt-8">Our Color Design</h2>
        {ColorItem.map((color, index) => (
          <>
            <h3 className="sub-header text-left py-4 mx-auto">{color.title}</h3>
            <div className="flex flex-row w-full">
              {color.children.map((c, index) => (
              <div className="flex w-full justify-center items-center gap-4">
                <div key={color.id} className={`flex gap-4 w-[150px] h-[150px] border border-zinc-200 rounded-lg bg-${c.color} shadow-lg`}>
                  <Button variant="ghost" size="icon" >
                    <Link href="#">
                      <CopyCheck className="flex flex-row w-full gap-2" />
                    </Link>
                  </Button>
                  <span className="flex flex-col items-center justify-center">{c.name}</span>
                </div>
              </div>
              ))}        

            </div>
          </>
        ))}
    
      </section>
    </>
  );
};
