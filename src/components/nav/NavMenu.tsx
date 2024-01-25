import { Menu } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Menu size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8}>
        <DropdownMenuLabel>Choix de la liste</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownLink href="/list/0">Old{"'"}elpasliste</DropdownLink>
        <DropdownLink href="/list/1">Pyraliste</DropdownLink>
        <DropdownLink href="/list/2">HarryPotliste</DropdownLink>
        <DropdownLink href="/list/3">Ségoliste</DropdownLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DropdownLink = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>{children}</Link>
    </DropdownMenuItem>
  );
};

export default NavMenu;
