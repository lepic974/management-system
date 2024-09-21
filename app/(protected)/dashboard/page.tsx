"use client"

import { Suspense } from "react"
import Balance from "./@balance/page"
import { Navbar } from "../_components/navbar"
import Loading from "./loading"

export const DashboardPage = () => {
	
	return (
		<>
			<section className="h-screen w-screen flex flex-col">
				<div className="flex flex-row w-full h-full">
					<div className="flex flex-col w-full h-screen">
						<div className="flex flex-row w-full h-full">
							<div className="flex flex-col w-full h-full bg-blue-300">

								<Suspense fallback={<Loading/>}>
									<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl py-2 px-2 mb-8">
										Dashboard
									</h1>
								</Suspense>

								<Suspense fallback={<Loading/>}>
									<Navbar />
								</Suspense>

								<Suspense fallback={<Loading/>}>
									<Balance />
								</Suspense>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default DashboardPage
