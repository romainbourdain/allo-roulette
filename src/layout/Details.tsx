import animation from "@/app/animation.json";
import Lottie from "lottie-react";

const Details = ({
  show,
  title,
  subtitle,
}: {
  show: boolean;
  title?: string;
  subtitle?: string;
}) => {
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
      <div className="flex items-center flex-col">
        <span className="text-3xl text-center font-extrabold">
          {show ? title : "\u00a0"}
        </span>
        <span className="text-lg text-secondary-foreground text-center">
          {show ? subtitle : "\u00a0"}
        </span>
      </div>
    </div>
  );
};

export default Details;
