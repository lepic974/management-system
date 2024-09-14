import { DemoCard } from "@/components/DemoCard"
import { Footer, Navbar } from "@/components/sections"

const FeaturesPage = () => {
	return (
		<>
			<main className="flex flex-col w-full h-screen gap-2">
				<Navbar />
				<section className="flex w-full h-full items-center mt-20">
					<DemoCard label="Features Page" color="bg-secondary" />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default FeaturesPage
