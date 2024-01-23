"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Number = ({ value }: { value: number }) => {
  return (
    <div className="border-blue-500 text-blue-500 font-bold border rounded-full w-7 h-7 flex items-center justify-center text-sm">
      {value}
    </div>
  );
};

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Allo Roulette</h1>
        <Card>
          <CardHeader>
            <CardTitle>Comment ça marche ?</CardTitle>
            <CardDescription>Appelez un listeux au hasard</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Number value={1} />
              Choix de la liste
            </div>
            <div className="flex items-center gap-2">
              <Number value={2} />
              Choix de la personne à appeler
            </div>
          </CardContent>
        </Card>
        <Button
          variant="secondary"
          className="text-xl"
          onClick={() => router.push("/list")}
        >
          Go
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
