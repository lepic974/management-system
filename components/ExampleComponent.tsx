import bg from "@/assets/images/bg.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const ExampleComponent = () => {
  return (
		<>
			<section className="flex md:flex-row w-full max-w-7xl items-center justify-center mx-auto px-4 gap-5 flex-wrap">
				<div className="flex-1 h-full flex-col py-4 my-6 justify-center items-center text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left ">
					<h1 className="text-4xl font-semibold md:text-6xl">
						<Balancer>Le meilleur sinon <span className="text-accent1">rien.</span></Balancer>
					</h1>

					<p className="text-neutral-400 md:max-w-[400px]">
						<Balancer>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							voluptatum maxime delectus tempora! Qui veritatis, architecto
							exercitationem adipisci officiis facilis, blanditiis corrupti
							minima officia debitis quae deleniti?
						</Balancer>
					</p>

					<button
						className="border-black w-fit rounded-xl border-2 bg-black px-4 py-2
                  text-white translate-all hover:border-black/90 hover:bg-black hover:bg-transparent hover:text-black/90"
					>
						Learn more
					</button>
				</div>
				<div className="flex-1 h-full items-center">
					<AspectRatio ratio={16 / 9}>
						<Balancer>
							<Image
								src={bg}
								alt="Image"
								className="my-8 rounded-lg object-fit"
							/>
						</Balancer>
					</AspectRatio>
				</div>
			</section>
		</>
	)
};

export default ExampleComponent;
