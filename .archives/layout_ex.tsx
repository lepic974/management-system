import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YaniPay App",
  description: "Un compte bancaire avec la fidélité réinventée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          inter.className,
          "h-full",
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="h-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
