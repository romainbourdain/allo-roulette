import { getIndexFromRotation } from "@/lib/getIndexFromRotation";
import { dataType } from "@/types/Data";
import { useRef, useState } from "react";

export const useWheel = (data: dataType) => {
  const [rotation, setRotation] = useState<number | undefined>(undefined);
  const [isSpinning, setIsSpinning] = useState(false);
  const wheelRef = useRef(null);

  const tournerRoue = () => {
    if (!wheelRef.current) return;

    setIsSpinning(true);

    const nouvelAngle = Math.floor(Math.random() * 360);

    // Ajouter plusieurs tours complets pour une rotation plus fluide
    const toursComplets = Math.floor(Math.random() * 10) + 5;
    const rotationTotale = 360 * toursComplets + nouvelAngle;

    // Reset de la rotation
    (wheelRef.current! as HTMLElement).style.transition = "transition 0s";
    (wheelRef.current! as HTMLElement).style.transform = `rotate(0deg)`;

    // Mettre à jour l'état pour déclencher la rotation de la roue
    setTimeout(() => {
      setRotation(rotationTotale);
      // Ajouter une animation de rotation à l'élément de la roue
      (wheelRef.current! as HTMLElement).style.transition =
        "transform 3s ease-out";
      (
        wheelRef.current! as HTMLElement
      ).style.transform = `rotate(${rotationTotale}deg)`;
    }, 0);

    // Arrêter la rotation après 3 secondes
    setTimeout(() => {
      setIsSpinning(false);
    }, 3000);
  };

  const index = getIndexFromRotation(rotation, data.length);
  const showDetails = index >= 0 && !isSpinning;

  return { wheelRef, tournerRoue, isSpinning, index, showDetails };
};
