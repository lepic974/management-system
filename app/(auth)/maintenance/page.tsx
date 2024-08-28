"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function MaintenancePage() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center gap-4">
        <h1 className="header font-black uppercase">Maintenance en cours...</h1>
        <p className="text-sm font-semibold">
          Veillez nous excusés pour la gêne occasioné. Ce site est en cours de
          construction...
        </p>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="default"
            onClick={() => router.push("/accueil")}
          >
            Accueil
          </Button>
          <Button
            variant="default"
            size="default"
            onClick={() => router.push("/contact")}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
}
