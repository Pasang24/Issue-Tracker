import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-b-[#DFD9D9] p-4">
      <Link href="/tickets" className="font-bold text-lg">
        Issue Tracker
      </Link>
      <NavLinks />
      <div className="border w-8 h-8 rounded-full" />
    </nav>
  );
}

export default Navbar;
