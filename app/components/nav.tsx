"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/about-me": {
    name: "about-me",
  },
  "/chatbot": {
    name: "chatbot",
  },
};

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="tracking-tight border-b border-green-500 sticky top-0 bg-white shadow-md z-10">
      <nav
        className="navigation container flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = pathname === path;
          return (
            <Link
              key={path}
              href={path}
              className={cn(
                "navigation__link transition-all flex align-middle relative p-4",
                "first-of-type:pl-0",
                isActive && "navigation__link--active",
              )}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
