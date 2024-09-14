import { DemoCard } from "@/components/DemoCard"
import { Footer, Navbar } from "@/components/sections"

const DonatePage = () => {
	return (
		<>
			<main className="flex flex-col w-full h-screen gap-2">
				<Navbar />
				<section className="flex w-full h-full items-center mt-20">
					<DemoCard label="Donate Page" color="bg-primary-dark" />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default DonatePage
