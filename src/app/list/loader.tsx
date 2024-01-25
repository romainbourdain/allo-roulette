import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <Skeleton className="w-full h-[50px] rounded-xl" />
        <Skeleton className="w-[300px] h-[300px] rounded-full" />

        <div className="h-[64px]" />
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-[40px] rounded-xl" />
          <div className="flex gap-2 w-full">
            <Skeleton className="w-full h-[40px] rounded-xl" />
            <Skeleton className="w-full h-[40px] rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
