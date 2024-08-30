import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/lib/SessionWapper";
import { Inter, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500"] });

export const metadata = {
  title: "YaniPay",
  description: "Super Application for save your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"> 
      {/* <SessionWrapper> */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <body
            className={`${inter.className} ${
              process.env.NODE_ENV == "development" ? "debug-screens" : ""
            }`}
          >
            {children}
          </body>
        </ThemeProvider>
      {/* </SessionWrapper> */}
    </html>
  );
}
