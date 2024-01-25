"use client";

import { useScreenSize } from "@/hooks/useScreenSize";
import { dataType } from "@/types/Data";
import Image from "next/image";
import { LegacyRef, useEffect, useRef } from "react";

const RoueDeLaFortune = ({
  wheelRef,
  data,
  logo_offset,
  logo_size,
  isSpinning,
}: {
  wheelRef: LegacyRef<HTMLDivElement> | undefined;
  data: dataType;
  logo_offset: number;
  logo_size: number;
  isSpinning: boolean;
}) => {
  const list_length = data.length;
  const { width } = useScreenSize();

  const pizza_size = width > 768 ? 350 : 300;

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isSpinning) {
        (audioRef.current as HTMLAudioElement).play();
      } else {
        (audioRef.current as HTMLAudioElement).pause();
        (audioRef.current as HTMLAudioElement).currentTime = 0;
      }
    }
  }, [isSpinning, audioRef]);

  return (
    <div className="relative">
      <audio src="/italie.mp3" ref={audioRef} />
      <div className="bg-red-500 w-[30px] h-[50px] absolute z-10 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 [clip-path:polygon(50%_100%,0%_0%,100%_0%)]"></div>
      <div
        ref={wheelRef}
        style={{ width: pizza_size, height: pizza_size }}
        className="relative"
      >
        <Image
          src="/pizza.png"
          alt="pizza"
          width={pizza_size}
          height={pizza_size}
          className="absolute top-0 left-0 -z-10 w-full h-full"
        />
        <div className="w-full h-full rounded-full z-0 relative bg-[#00000075]">
          {data.map((element, index) => (
            <Image
              key={index}
              src={element.logo_url}
              alt={element.name}
              width={logo_size}
              height={logo_size}
              className="absolute"
              style={{
                left:
                  pizza_size / 2 -
                  logo_size / 2 +
                  Math.cos((2 * Math.PI * index) / list_length + Math.PI / 2) *
                    logo_offset,
                bottom:
                  pizza_size / 2 -
                  logo_size / 2 +
                  Math.sin((2 * Math.PI * index) / list_length + Math.PI / 2) *
                    logo_offset,
                rotate: `-${(360 * index) / list_length}deg`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoueDeLaFortune;
