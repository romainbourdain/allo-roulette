"use client";

import HomeButton from "@/components/buttons/HomeButton";
import LaunchButton from "@/components/buttons/LaunchButton";
import { Button } from "@/components/ui/button";
import { listeux } from "@/data/listeux";
import Details from "@/layout/Details";
import RoueDeLaFortune from "@/layout/roue/Roue";
import { useWheel } from "@/layout/roue/useWheel";

import { useRouter } from "next/navigation";

const ListPage = ({ params }: { params: { index: string } }) => {
  const router = useRouter();
  const listIndex = Number(params.index);
  const data =
    isNaN(listIndex) || listIndex < 0 || listIndex >= 4
      ? listeux[0]
      : listeux[listIndex];

  const { wheelRef, tournerRoue, isSpinning, index, showDetails } =
    useWheel(data);

  if (isNaN(listIndex) || listIndex < 0 || listIndex >= 4) {
    router.push("/not-found");
    return null;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Allo Roulette</h1>
        <RoueDeLaFortune
          wheelRef={wheelRef}
          data={data}
          logo_offset={120}
          logo_size={40}
        />
        <Details
          title={data[index]?.name}
          subtitle={data[index]?.tel}
          show={showDetails}
        />
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
