import Link from "next/link";

const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <h2 className="sm:text-2xl text-xl font-bold whitespace-nowrap">
        Allo Roulette
      </h2>
    </Link>
  );
};

export default NavLogo;
