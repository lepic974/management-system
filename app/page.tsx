import Image from "next/image";
import { data } from "./_data";
import TransactionCard, { TransactionProp } from "@/components/TransactionCard";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-col items-center flex-1 ">

        <h2 className="flex text-white text-2xl font-semibold">
          Chart
        </h2>

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
