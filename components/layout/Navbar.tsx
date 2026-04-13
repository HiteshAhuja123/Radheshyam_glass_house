"use client";
import Link from "next/link";
import { useState } from "react";
import { BUSINESS_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const navLinks = [
  { href: "/collections", label: "Collections" },
  { href: "/gallery", label: "Gallery" },
  { href: "/customize", label: "Customize" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to know more about your glass and mirror collections.")}`;

  return (
    <header className="sticky top-0 z-50 bg-charcoal border-b border-gold/20">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col gap-0.5">
          <span className="font-sans text-gold text-[15px] tracking-[0.12em] uppercase">
            {BUSINESS_NAME}
          </span>
          <span className="font-body text-[9px] text-gold/60 tracking-[0.18em] uppercase">
            Est. 1979 · Ambarnath
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}
              className="font-body text-[11px] tracking-[0.14em] uppercase text-white/60 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="font-body text-[11px] tracking-[0.12em] uppercase bg-gold text-charcoal px-5 py-2 rounded-sm font-medium hover:bg-gold-light transition-colors">
            Enquire Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-charcoal border-t border-gold/10 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-body text-sm tracking-widest uppercase text-white/70 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <a href={waUrl} target="_blank" rel="noopener noreferrer"
            className="mt-2 font-body text-sm font-medium tracking-widest uppercase bg-gold text-charcoal px-5 py-3 rounded-sm text-center">
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
