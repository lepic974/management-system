import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full max-h-screen`}>
        <div className="container">
          <h2 className="header">Inner Layout</h2>
          {children}
        </div>
      </body>
    </html>
  );
}
