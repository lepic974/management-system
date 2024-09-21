import { DemoCard } from "@/components/DemoCard"
import { Footer, Navbar } from "@/components/sections"
import { Suspense } from "react"

const CardPlaceholder = () => {
	return <div className="w-10 h-10 bg-slate-500"></div>
}

const ContactPage = () => {
	const handleClick = {}

	return (
		<>
			<main className="flex flex-col w-full h-screen gap-2">
				<Navbar />
				<section className="flex w-full h-full items-center mt-20">
					<Suspense fallback={<CardPlaceholder />}>
						<DemoCard
							label="Contact Page"
							color="bg-green-500"
							icon="@/public/logo/logo.png"
						/>
					</Suspense>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default ContactPage
