"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const navLinks = [
    { name: "All tickets", href: "/tickets" },
    { name: "Reported tickets", href: "/reported-tickets" },
    { name: "Assigned tickets", href: "/assigned-tickets" },
  ];
  return (
    <div>
      {navLinks.map((navLink) => {
        const isActive = pathname.includes(navLink.href);
        return (
          <Link
            href={navLink.href}
            key={navLink.href}
            className={`font-medium p-4 ${
              isActive
                ? "text-[#e93330] border-b-4 border-b-[#e93330]"
                : "hover:text-gray-400"
            }`}
          >
            {navLink.name}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
