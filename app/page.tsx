import Image from "next/image";
import { data } from "./_data";
import TransactionCard, { TransactionProp } from "@/components/TransactionCard";
import LoadMore from "@/components/LoadMore";
import { Navbar } from "@/components/sections";
import { auth } from "@/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButtons";

export default async function Home() {
  
  const session = await auth();

  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-col items-center flex-1 bg-gray-800 ">

        {/* <Navbar /> */}
        <div className="flex flex-row items-center justify-between mb-10">
          <h1 className="header text-white">
            {session?.user ? "Authentificated " + session?.user.email : "Not Authentificated"}
          </h1>
          {session?.user ? (<LogoutButton />) : (<LoginButton />)}
        </div>

        <h2 className="flex text-white text-2xl font-semibold">
          Transactions
        </h2>

        <section className="grid grid-cols-1 w-[80vh] gap-2">
          {data.map((item: TransactionProp, index) => (
            <TransactionCard 
              key={item.id}
              index={index}
              transaction={item}
            />
          ))}
        </section>

        <LoadMore />

      </div>

    </main>
  );
}
