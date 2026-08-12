"use client";

import Link from "next/link";
import { site } from "@/data/site";
import Magnetic from "./Magnetic";

export default function Footer() {
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-left">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-right">
          {site.socials.map((s) => (
            <Magnetic key={s.label} strength={0.25}>
              <a href={s.url} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <button className="back-top" onClick={top}>
              ↑ Top
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
