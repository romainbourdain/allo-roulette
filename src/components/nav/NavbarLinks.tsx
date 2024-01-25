import Link from "next/link";
import { PropsWithChildren } from "react";
import { buttonVariants } from "../ui/button";

const NavbarLinks = () => {
  return (
    <div className="flex gap-2 text-muted-foreground">
      <NavLink href="/list/0">Old{"'"}elpasliste</NavLink>
      <NavLink href="/list/1">Pyraliste</NavLink>
      <NavLink href="/list/2">HarryPotliste</NavLink>
      <NavLink href="/list/3">Ségoliste</NavLink>
    </div>
  );
};

const NavLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <Link href={href} className={buttonVariants({ variant: "ghost" })}>
      {children}
    </Link>
  );
};

export default NavbarLinks;
