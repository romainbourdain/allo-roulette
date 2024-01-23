import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const HomeButton = ({ ...props }: ButtonProps) => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="text-xl" {...props}>
          Accueil
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Retourner à l{"'"}accueil</DialogTitle>
          <DialogDescription>
            Êtes vous sûr de vouloir retourner à l{"'"}accueil ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Annuler</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="default" onClick={() => router.push("/")}>
              Retourner à l{"'"}accueil
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HomeButton;
