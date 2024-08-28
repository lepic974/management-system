import { data } from "@/app/_data"
import LoadMore from "@/components/LoadMore"
import TransactionCard, { TransactionProp } from "@/components/TransactionCard"

export default async function Page() {

  return (
    <div className=" flex min-h-screen flex-col items-center justify-between p-24">

        <h2 className="flex text-white text-2xl font-semibold">Transactions</h2>

        <section className="grid grid-cols-1 w-[80vh] gap-2">
          {data.map((item: TransactionProp, index) => (
            <TransactionCard key={item.id} index={index} transaction={item} />
          ))}
        </section>

        <LoadMore />
      </div>
  );
}
