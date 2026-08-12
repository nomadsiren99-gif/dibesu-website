"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="logo">
          {site.name}
          <sup>®</sup>
        </Link>

        <div className="nav-right">
          <div className="nav-links">
            {links.map((l) => {
              const active = pathname === l.href || pathname.startsWith(`${l.href}/`);
              return (
                <Magnetic key={l.href}>
                  <Link href={l.href} className={active ? "active" : ""}>
                    <ScrambleText text={l.label} />
                  </Link>
                </Magnetic>
              );
            })}
          </div>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`menu ${open ? "open" : ""}`}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className="menu-item"
            style={{ "--i": i }}
            onClick={() => setOpen(false)}
          >
            <span className="num">0{i + 1}</span>
            {l.label}
          </Link>
        ))}
        <div className="menu-foot">
          <span>{site.tagline}</span>
          <span>{site.email}</span>
        </div>
      </div>
    </>
  );
}
