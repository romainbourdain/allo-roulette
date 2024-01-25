"use client";

import pizzaAnimation from "@/assets/animations/pizza.json";
import Lottie from "lottie-react";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center w-full">
          <Lottie
            animationData={pizzaAnimation}
            loop
            autoPlay
            className="w-[300px] h-[300px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-3xl">404</h1>
            <h2 className="text-xl">
              Oh oh ! La page recherchée n{"'"}existe pas
            </h2>
          </div>
          <Link href="/" className="text-muted-foreground underline text-lg">
            Revenir à l{"'"}accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
