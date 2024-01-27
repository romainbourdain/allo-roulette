import animation from "@/assets/animations/confetti.json";
import { Button, buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import Lottie from "lottie-react";
import { Check, Copy, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Details = ({
  show,
  title = "\u00a0",
  subtitle = "\u00a0",
  isSubtitle = true,
}: {
  show: boolean;
  title?: string;
  subtitle?: string;
  isSubtitle?: boolean;
}) => {
  const [showCopy, setShowCopy] = useState(true);
  const handleCopy = () => {
    if (showCopy) {
      setShowCopy(false);
      navigator.clipboard.writeText(subtitle);
      setTimeout(() => setShowCopy(true), 3000);
    }
  };
  return (
    <div className="relative w-full flex justify-center">
      {show && (
        <Lottie
          animationData={animation}
          loop={false}
          autoPlay
          className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <div className="flex items-center flex-col gap-2">
        <span
          className={clsx(
            "text-3xl text-center font-extrabold",
            !show && "invisible"
          )}
        >
          {title}
        </span>
        {isSubtitle && (
          <div className="flex gap-3 items-center">
            <span
              className={clsx(
                "text-secondary-foreground text-center",
                !show && "invisible"
              )}
            >
              {subtitle}
            </span>
            <div className="flex gap-1">
              <Button
                variant="outline"
                size="icon"
                className={clsx(!show && "invisible", "relative")}
                onClick={handleCopy}
              >
                <Copy
                  size={10}
                  className={clsx(
                    "absolute transition-all",
                    showCopy ? "scale-100" : "scale-0"
                  )}
                />
                <Check
                  size={10}
                  className={clsx(
                    "transition-all",
                    showCopy ? "scale-0" : "scale-100"
                  )}
                />
              </Button>
              <Link
                href={`tel:${subtitle}`}
                className={clsx(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  !show && "invisible"
                )}
              >
                <Phone size={10} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
