import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer, Hero, Navbar } from "@/components/sections";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <ThemeProvider>
            <Navbar />
            {/* <Hero /> */}
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
