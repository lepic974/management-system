import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "YaniPay Products page",
    template: "Product page",
  },
  description: "Page des produits de YaniPay",
};

export default function ProductsPage({ params }: { params: string }) {
  return (
    <div className="container">
      <div className="flex-1 text-white">
        <h1 className="header">Products List</h1>
        <ul>
          <h2>
            <Link href="/products/particuliers">Particuliers</Link>
          </h2>
          <h2>
            <Link href="/products/business">Business</Link>
          </h2>
          <h2>
            <Link href="/products/identity">Digital Identity</Link>
          </h2>
        </ul>
      </div>
    </div>
  );
}
