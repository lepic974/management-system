import { Inter } from "next/font/google";
import "../../globals.css";

const NavLink = [
  { label: "Login", href: "/login" },
  { label: "Password", href: "/password" },
  { label: "Forgot Paaword", href: "/forgot-password" },
  { label: "Register", href: "/register" },
];

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth page",
  description: "Login and Register",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <body className={`${inter.className}`}>{children}</body>
    </section>
  );
}
