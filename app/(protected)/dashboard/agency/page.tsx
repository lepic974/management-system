"use client"

import Loading from "@/app/(protected)/dashboard/loading"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { MagicCardDemo } from "../_components/MagicCard"
import BlurIn from "@/components/magicui/blur-in"

const AgencyDashboardPage = async () => {
	let title = "Agency"
	let description = "Commercez à créer votre Acgency et gérer vos produits."
	let button = "Créer"
	let image = "/Shop.svg"
	let link = "/dashboard/agency/create"
	let color = "secondaryNew-light"

	return (
		<section className="flex flex-col w-full h-full px-2">
			<Suspense fallback={<Loading />}>
				<div className="flex flex-row w-full item-center">
					<Image src={image} alt={title} width={60} height={60} />
					<h1 className=" font-extrabold tracking-tight py-4 px-2">
						<BlurIn
							word={title}
							className="text-md font-bold text-black dark:text-white"
						/>
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
				<MagicCardDemo />
			</Suspense>
		</section>
	)
}

export default AgencyDashboardPage
