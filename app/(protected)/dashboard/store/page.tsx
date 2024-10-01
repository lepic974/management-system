"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import Loading from "@/app/(protected)/dashboard/loading"
import BlurIn from "@/components/magicui/blur-in"
import { MagicCardDemo } from "../_components/MagicCard"
import { RainbowButtonDemo } from "../_components/RainbowButton"

interface PageData {
	title: string
	description: string
	button: string
	image: string
	link: string
	color: string
}

const StoreDashboardPage = () => {
	const [pageData, setPageData] = useState<PageData>({
		title: "Store",
		description: "Commencez à créer votre store et gérer vos produits.",
		button: "Créer",
		image: "/Shop.svg",
		link: "/dashboard/store/create",
		color: "secondaryNew-light",
	})

	const { data: session, status } = useSession()

	useEffect(() => {
		const fetchStoreInfo = async () => {
			if (session?.user?.email) {
				try {
					const response = await fetch(`/api/store?email=${session.user.email}`)
					if (response.ok) {
						const storeInfo = await response.json()
						setPageData((prevData) => ({
							...prevData,
							title: storeInfo.name || "Your Store",
							description:
								storeInfo.description || "Manage your store and products.",
							button: "Manage Store",
							link: `/dashboard/store/${storeInfo.id}`,
						}))
					}
				} catch (error) {
					console.error("Failed to fetch store info:", error)
				}
			}
		}

		fetchStoreInfo()
	}, [session])

	return (
		<section className="flex flex-col w-full h-full px-2">
			<Suspense fallback={<Loading />}>
				<div className="flex flex-row w-full items-center">
					<Image
						src={pageData.image}
						alt={pageData.title}
						width={60}
						height={60}
					/>
					<h1 className="font-extrabold tracking-tight py-4 px-2">
						<BlurIn
							word={pageData.title}
							className="text-md font-bold text-black dark:text-white"
						/>
					</h1>
					<div className="flex flex-row items-center ml-auto">
						<RainbowButtonDemo />
					</div>
				</div>

				<p className={`text-sm text-primary-dark font-semibold px-2 py-2`}>
					{pageData.description}
				</p>
				<div
					className={`flex flex-row w-full h-[1px] my-4 bg-${pageData.color}`}
				/>
			</Suspense>

			<Suspense fallback={<Loading />}>
				<MagicCardDemo />
			</Suspense>
		</section>
	)
}

export default StoreDashboardPage
