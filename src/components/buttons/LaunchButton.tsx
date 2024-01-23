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

const LaunchButton = ({
  first,
  onClick,
  ...props
}: ButtonProps & {
  first: boolean;
}) => {
  if (first)
    return (
      <Button
        variant="secondary"
        className="text-xl"
        onClick={onClick}
        {...props}
      >
        Lancer la roue
      </Button>
    );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="text-xl"
          {...props}
          onClick={() => {}}
        >
          Relancer la roue
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Relancer la roue</DialogTitle>
          <DialogDescription>
            Êtes vous sûr de vouloir relancer la roue ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Annuler</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="default" onClick={onClick}>
              Relancer la roue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LaunchButton;
