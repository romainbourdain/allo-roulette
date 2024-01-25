"use client";

import LaunchButton from "@/components/buttons/LaunchButton";
import { Button } from "@/components/ui/button";
import { listes } from "@/data/listes";
import { useScreenSize } from "@/hooks/useScreenSize";
import Details from "@/layout/Details";
import RoueDeLaFortune from "@/layout/roue/Roue";
import { useWheel } from "@/layout/roue/useWheel";

import { useRouter } from "next/navigation";

const ListPage = () => {
  const router = useRouter();
  const { wheelRef, tournerRoue, isSpinning, index, showDetails } =
    useWheel(listes);
  const { width } = useScreenSize();

  const logoOffset = width > 768 ? 120 : 100;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Allo Roulette</h1>
        <RoueDeLaFortune
          isSpinning={isSpinning}
          wheelRef={wheelRef}
          data={listes}
          logo_offset={logoOffset}
          logo_size={75}
        />
        <Details show={showDetails} title={listes[index]?.name} />
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
            <Button
              variant="secondary"
              className="text-xl flex-1"
              disabled={!showDetails}
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
