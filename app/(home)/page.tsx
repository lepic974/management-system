"use client"

import Head from "next/head" // Importer le composant Head
import { useRouter } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import ExampleComponent from "@/components/ExampleComponent"
import { Footer, Navbar } from "@/components/sections"
import { DesignUI } from "@/components/sections/DesignUI"

export default function Home() {
	const [isMaintenanceMode, setIsMaintenanceMode] = useState(false)
	const [isDevMode, setIsDevMode] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
		const developmentMode = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === "true"
		setIsMaintenanceMode(maintenanceMode)
		setIsDevMode(developmentMode)

		if (maintenanceMode) {
			router.push("/maintenance")
		}
	}, [router])	

	const devModeMessage = useMemo(
		() => (
			<div className="mt-6 p-4 border border-red-500 bg-red-50 text-red-600">
				<h2 className="text-2xl font-bold">⚙️ Mode développement</h2>
				<p>
					Le mode développement est actuellement actif. Cela signifie que le
					site est en cours de développement et que des erreurs peuvent
					survenir.
				</p>
			</div>
		),
		[]
	)

	if (isMaintenanceMode) {
		return null
	}

	return (
		<>
			<Head>
				<title>Accueil</title>
				{/* Ajouter des scripts ici si nécessaire */}
				{/* <script async src="https://example.com/some-script.js"></script> */}
			</Head>
			<main>
				<Navbar />
				{/* Section 1 */}
				<div className="flex flex-col h-screen max-w-7xl md:flex-row items-center justify-center p-4 mx-auto scroll-my-100">
					<div className="">
					{isDevMode && devModeMessage}
					<ExampleComponent />
					</div>
				</div>

				{/* Section 2 */}
				<DesignUI />

				{/* Affichage en mode développement */}
				<Footer />
			</main>
		</>
	)
}
