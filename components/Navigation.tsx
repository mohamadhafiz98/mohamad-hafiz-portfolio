"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClasses = (href: string) =>
    [
      "relative px-0.5 pb-1 text-sm sm:px-1.5 md:px-2 md:text-base motion-fast after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#111111] after:transition-all after:duration-300",
      pathname === href
        ? "text-[#111111] after:w-[64%]"
        : "text-[#666666] hover:text-[#111111] hover:after:w-[40%]",
    ].join(" ");

  return (
    <nav
      className={[
        "sticky top-0 z-50 border-b border-[#e0e0dc] bg-[#f5f5f3]/95 backdrop-blur-sm motion-ui transition-shadow",
        isScrolled ? "shadow-[0_6px_18px_rgba(17,17,17,0.06)]" : "shadow-none",
      ].join(" ")}
    >
      <div className="container mx-auto max-w-[1120px] px-6 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="whitespace-nowrap shrink-0 text-base font-semibold tracking-wide text-[#111111] motion-fast hover:opacity-70 sm:text-lg md:text-2xl md:tracking-wider"
          >
            Hafiz
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1.5 sm:gap-3 md:gap-6">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>

            <Link href="/projects" className={linkClasses("/projects")}>
              Projects
            </Link>

            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
