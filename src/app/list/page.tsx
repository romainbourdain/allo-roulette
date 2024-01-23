"use client";

import animation from "@/app/animation.json";
import RoueDeLaFortune from "@/components/roue/Roue";
import { useWheel } from "@/components/roue/useWheel";
import { Button } from "@/components/ui/button";
import { listes } from "@/data/listes";
import Lottie from "lottie-react";

import { useRouter } from "next/navigation";

const ListPage = () => {
  const router = useRouter();
  const { wheelRef, tournerRoue, rotation, isSpinning } = useWheel();

  const index =
    !isSpinning && rotation
      ? Math.floor(
          (((rotation + 180 / listes.length) % 360) * listes.length) / 360
        )
      : undefined;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Allo Roulette</h1>
        <RoueDeLaFortune
          wheelRef={wheelRef}
          data={listes}
          logo_offset={120}
          logo_size={75}
        />
        <div className="relative w-full flex justify-center">
          {index !== undefined && (
            <Lottie
              animationData={animation}
              loop={false}
              autoPlay
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}
          <span className="text-3xl text-center font-extrabold">
            {index !== undefined ? listes[index]?.name : "\u00a0"}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant="secondary"
            className="text-xl"
            onClick={tournerRoue}
            disabled={isSpinning}
          >
            Lancer la roue
          </Button>
          <div className="flex gap-2 w-full">
            <Button
              variant="secondary"
              className="text-xl flex-1"
              onClick={() => router.back()}
            >
              Précédent
            </Button>
            <Button
              variant="secondary"
              className="text-xl flex-1"
              disabled={index === undefined}
              onClick={() => router.push(`/list/${index}`)}
            >
              Suivant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
