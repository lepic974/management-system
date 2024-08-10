import Image from "next/image";

export interface TransactionProp {
    id: string;
    img: string;
    desc: string;
    amount: string;
    reward?: number;
    createAt: string;
}

interface Prop {
    transaction: TransactionProp;
    index: number;
}

async function TransactionCard({ transaction }: Prop ) {
  return (
    <div className="max-w-sm rounded relative w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-[80vh] h-auto mt-5 justify-start items-center
           border-s-orange-500 border-2 rounded-xl py-5 px-4 mx-auto space-x-4 relative">
            <Image
                // src={transaction.img.original}
                src={transaction.img}
                alt={transaction.desc}
                fill
                priority
                className="rounded-xl gap-3"
            />

              <div className="flex w-full flex-row justify-between gap-5">
                <div className="flex flex-col justify-center items-center gap-2">
                  <p className="flex justify-start items-center text-nowrap text-white text-normal font-medium ">
                    {transaction.desc}
                  </p>
                  <p className="flex w-full justify-start text-white text-xs">

                    {
                        "Votre récompenses est de :" 
                    }

                    <span className="flex ml-2 text-cyan-500">{transaction.reward}€</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="flex ">
                    <p className="text-green-500">{transaction.amount} €</p>
                  </span>
                  <span className="flex text-white text-xs ">
                    {transaction.createAt}
                  </span>
              </div>


              </div>
          </div>
        </div>
        
    </div>
  )
}

export default TransactionCard