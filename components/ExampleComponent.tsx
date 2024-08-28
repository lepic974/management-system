import bg from "@/assets/images/bg.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const ExampleComponent = () => {
  return (
    <>
      <section className="md:flex items-center h-screen mx-auto gap-5 flex-col">
        <div className="flex h-full flex-col items-center gap-6 pt-20 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left ">
          <h1 className="text-4xl font-semibold md:text-6xl">
            <Balancer>Le meilleur sinon rien.</Balancer>
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
            className="border-black w-fit mt-10 rounded-xl border-2 bg-black px-4 py-2
                  text-white translate-all hover:border-black/90 hover:bg-black hover:bg-transparent hover:text-black/90"
          >
            Learn more
          </button>
        </div>
        <div className="w-1/2 h-full">
          <AspectRatio ratio={16 / 9}>
            <Balancer>
              <Image
                src={bg}
                alt="Image"
                className="pt-20 my-8 rounded-lg object-fit z-10"
              />
            </Balancer>
          </AspectRatio>
        </div>
      </section>
    </>
  );
};

export default ExampleComponent;
