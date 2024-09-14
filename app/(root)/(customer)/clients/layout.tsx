import { Footer, Navbar } from "@/components/sections";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/src/features/layout/Header";
// import { Header } from "@/features/layout/Header";
import type { LayoutParams } from "@/src/types/next";

export default async function CustomerLayout({children}:{ children: React.ReactNode}) {
  return (
    <div className="h-full">
      <Header />
      <body>
        {children}
      </body>
      <Toaster />
      <Footer />
    </div>
  );
}
