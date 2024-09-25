"use client"

import Loading from "@/app/(protected)/dashboard/loading"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const RewardDashboardPage = async () => {
	let title = "Reward"
	let description = "Commercez à créer votre Reward et gérer vos produits."
	let button = "Créer"
	let image = "/Trophy.svg"
	let link = "/dashboard/reward/create"
	let color = "secondaryNew-light"

	return (
		<section className="flex flex-col w-full h-full px-2">
			<Suspense fallback={<Loading />}>
				<div className="flex flex-row w-full item-center">
					<Image src={image} alt={title} width={60} height={60} />
					<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-4 px-2">
						{title}
					</h1>
					<Button className="ml-auto self-center uppercase">
						<Link href={link}>{button}</Link>
					</Button>
				</div>

				<p className={`text-sm text-primary-dark font-semibold px-2 py-2`}>
					{description}
				</p>
				<div className={`flex flex-row w-full h-[1px] my-4 bg-${color}`} />
			</Suspense>

			<Suspense fallback={<Loading />}>
				<div
					className={`flex flex-col w-full h-[50vh] justify-center items-center border-1 border-${color} bg-${color} rounded-md`}
				>
					<Image src={image} alt={title} width={150} height={150} />

					<h3 className="text-2xl text-primary font-bold tracking-tight py-4 px-2">
						Vous n'avez aucun {title} pour le moment !
					</h3>

					<p className="text-sm font-semibold text-primary-light px-2 py-2">
						Commercez à créer votre {title} et gérer vos produits.
					</p>
					<div className={`flex flex-row w-full h-[1px] my-2 bg-${color}`} />

					<Button>
						<Link href={link}>Créer votre {title}</Link>
					</Button>
				</div>
			</Suspense>
		</section>
	)
}

export default RewardDashboardPage
