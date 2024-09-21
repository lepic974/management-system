"use client"

import Head from "next/head"

const MaintenancePage = () => {

  return (
		<>
			<Head>
				<title>Site en construction</title>
				<meta
					name="description"
					content="Ce site est actuellement en construction. Revenez plus tard !"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="text-4xl font-bold">🚧 Site en construction 🚧</h1>
				<p className="text-lg">Ce site est actuellement en construction.</p>
				<p className="text-md">Revenez bientôt !</p>
			</div>
		</>
	)
}

export default MaintenancePage