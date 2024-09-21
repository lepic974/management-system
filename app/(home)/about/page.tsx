import { DemoCard } from "@/components/DemoCard"
import { Footer, Navbar } from "@/components/sections"
import { Metadata } from "next"

export const generateMetadata = ({params }: {params: {id: string}}): Metadata => {
	return {
		title: {
			absolute: "About" 
		}
	}
}

const AboutPage = () => {
	return (
		<>
			<main className="flex flex-col w-full h-screen gap-2">
				<Navbar />
				<section className="flex w-full h-full items-center mt-20">
					<DemoCard label="About Page" color="bg-accent2" />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default AboutPage
