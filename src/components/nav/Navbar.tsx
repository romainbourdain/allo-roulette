"use client";

import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavTools from "./NavTools";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <>
      <LargeNavbar />
      <SmallNavbar />
    </>
  );
};

const LargeNavbar = () => {
  return (
    <nav className="bg-background border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-50 hidden md:flex items-center justify-between py-2 px-5">
      <div className="flex items-center gap-5">
        <NavLogo />
        <NavbarLinks />
      </div>
      <NavTools />
    </nav>
  );
};

const SmallNavbar = () => {
  return (
    <nav className="bg-background border-b border-b-fg-subtle-gray fixed w-full bg-subtle-gray z-50 flex md:hidden items-center justify-between py-2 px-5">
      <NavLogo />
      <div className="flex">
        <NavTools />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
