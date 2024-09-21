import { DemoCard } from "@/components/DemoCard"
import { Footer, Navbar } from "@/components/sections"

const BlogPage = () => {
	return (
		<>
			<main className="flex flex-col w-full h-screen gap-2">
				<Navbar />
				<section className="flex w-full h-full items-center mt-20">
					<DemoCard label="Blog Page" color="bg-accent3" />
				</section>
			</main>
			<Footer />
		</>
	)
}

export default BlogPage
