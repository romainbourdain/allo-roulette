"use client";

import animation from "@/app/animation.json";
import HomeButton from "@/components/buttons/HomeButton";
import LaunchButton from "@/components/buttons/LaunchButton";
import RoueDeLaFortune from "@/components/roue/Roue";
import { useWheel } from "@/components/roue/useWheel";
import { Button } from "@/components/ui/button";
import { listeux } from "@/data/listeux";
import { getIndexFromRotation } from "@/lib/getIndexFromRotation";
import Lottie from "lottie-react";

import { useRouter } from "next/navigation";

const ListPage = ({ params }: { params: { index: string } }) => {
  const router = useRouter();
  const listIndex = Number(params.index);
  const { wheelRef, tournerRoue, rotation, isSpinning } = useWheel();

  const index = getIndexFromRotation(rotation, listeux[listIndex].length);
  const showDetails = index >= 0 && !isSpinning;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Allo Roulette</h1>
        <RoueDeLaFortune
          wheelRef={wheelRef}
          data={listeux[listIndex]}
          logo_offset={120}
          logo_size={40}
        />
        <div className="relative w-full flex justify-center">
          {showDetails && (
            <Lottie
              animationData={animation}
              loop={false}
              autoPlay
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          )}
          <div className="flex items-center flex-col">
            <span className="text-3xl text-center font-extrabold">
              {showDetails ? listeux[listIndex][index]?.name : "\u00a0"}
            </span>
            <span className="text-lg text-secondary-foreground text-center">
              {showDetails ? listeux[listIndex][index]?.tel : "\u00a0"}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <LaunchButton
            onClick={tournerRoue}
            first={!showDetails}
            disabled={isSpinning}
          />
          <div className="flex gap-2 w-full">
            <Button
              variant="secondary"
              className="text-xl flex-1"
              onClick={() => router.back()}
            >
              Précédent
            </Button>
            <HomeButton className="text-xl flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
