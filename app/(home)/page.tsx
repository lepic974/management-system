"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import ExampleComponent from "@/components/ExampleComponent"
import { Footer, Navbar } from "@/components/sections"
import { DesignUI } from "@/components/sections/DesignUI"

export default function Home() {
	// const { data: session, status } = useSession();

	// if (session) {
	//   console.log(session);
	// }

	// if (status === "authenticated") {
	//   return <p>Sign in as {session.user.email}</p>;
	// }
	// return <a href="/api/auth/signin">Sign in</a>;

	const [isMaintenanceMode, setIsMaintenanceMode] = useState(false)
	const [isDevMode, setIsDevMode] = useState(false)
	const router = useRouter()

	useEffect(() => {
		const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"
		const developmentMode = process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === "true"
		setIsMaintenanceMode(maintenanceMode)
		setIsDevMode(developmentMode)

		if (isMaintenanceMode) {
			router.push("/maintenance")
		}
	}, [router])

	if (isMaintenanceMode) {
		return null
	}

	return (
		<main>
			<Navbar />
			{/* Section 1 */}
			<div className="flex flex-col h-screen max-w-7xl md:flex-row items-center justify-center p-4 mx-auto scroll-my-100">
				<ExampleComponent />
			</div>

			{/* Section 2 */}
			<DesignUI />
			{/* <Header /> */}

			{/* Affichage en mode developpement */}
			{isDevMode && (
				<div className="mt-6 p-4 border border-red-500 bg-red-50 text-red-600">
					<h2 className="text-2xl font-bold">⚙️ Mode developpement</h2>
					<p>
						Le mode developpement est actuellement actif. Cela signifie que le
						site est en cours de développement et que des erreurs peuvent
						survenir.
					</p>
				</div>
			)}
			<Footer />
		</main>
	)
}
