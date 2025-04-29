import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-b-[#DFD9D9] p-4">
      <Link href="/tickets" className="font-bold text-lg">
        Issue Tracker
      </Link>
      <NavLinks />
      <UserProfile />
    </nav>
  );
}

export default Navbar;
