import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ ...window.screen });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ ...window.screen });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};
