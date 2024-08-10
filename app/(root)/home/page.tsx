import React from "react";
import Balancer from "react-wrap-balancer";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <section className="mx-auto flex max-w-6xl flex-col-reverse gap-2 px-4 pb-12 translate-all md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-6 pt-8 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
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
            <button className="border-black w-fit mt-10 rounded-xl border-2 bg-black px-4 py-2
              text-white translate-all hover:border-black/90 hover:bg-black hover:bg-transparent hover:text-black/90">
              Learn more
            </button>
          </p>
        </div>

      </section>
    </div>
  );
};

export default page;
