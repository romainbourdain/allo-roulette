import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [dimensions, setDimensions] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({ width: undefined, height: undefined });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ ...window.screen });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};
