"use client"

import Image from "next/image"
import LoadMore from "@/components/LoadMore"
import TransactionCard from "@/components/TransactionCard"
import { data } from "@/data/_data"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { exportTraceState } from "next/dist/trace"

interface TransactionProps {
	id: string
	title: string
	imgUrl: string
	desc: string
	amount: number
	reward: number
	createdAt: string
	index: number
}

// const TransactionProp = {
// 	transaction: Transaction,
// 	index: React.ReactNode
// }

const TransactionPage = ({ id, imgUrl, title, amount, desc, reward, createdAt, index }: TransactionProps) => {
	return (
		<div className=" flex min-h-screen flex-col items-center justify-between p-24">
			<h2 className="flex text-white text-2xl font-semibold">Transactions</h2>

			<section className="grid grid-cols-1 w-[80vh] gap-2">
				{/* {[data].map(transaction) => {{ (e) => console.log((e))
					// <TransactionCard transaction={data} index={index}/>}
				}}
				*/}

				<div className="max-w-sm rounded relative w-full">
					<div className="flex flex-col justify-center items-center">
						<div className="flex w-[80vh] h-auto mt-5 justify-start items-center border-s-orange-500 border-2 rounded-xl py-5 px-4 mx-auto space-x-4 relative">
							<Image
								src={imgUrl}
								alt={title}
								fill
								priority
								className="rounded-xl gap-3"
							/>

							<div className="flex w-full flex-row justify-between gap-5">
								<div className="flex flex-col justify-center items-center gap-2">
									<p className="flex justify-start items-center text-nowrap text-white text-normal font-medium ">
										{desc}
									</p>
									<p className="flex w-full justify-start text-white text-xs">
										{"Votre récompenses est de :"}

										<span className="flex ml-2 text-cyan-500">{reward}€</span>
									</p>
								</div>
								<div className="flex flex-col justify-center items-center gap-2">
									<span className="flex ">
										<p className="text-green-500">{amount} €</p>
									</span>
									<span className="flex text-white text-xs ">{createdAt}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<LoadMore />
		</div>
	)
}

export default TransactionPage
