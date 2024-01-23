"use client";

import NavLogo from "./NavLogo";
import NavTools from "./NavTools";

const Navbar = () => {
  return (
    <>
      <LargeNavbar />
    </>
  );
};

const LargeNavbar = () => {
  return (
    <nav className="bg-background border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-50 flex items-center justify-between py-2 px-5">
      <div className="flex items-center gap-5">
        <NavLogo />
      </div>
      <NavTools />
    </nav>
  );
};

export default Navbar;
