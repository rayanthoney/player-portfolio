"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HQ", href: "/" },
  { label: "Dossier", href: "/journey" },
  { label: "Intelligence", href: "/film-room" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="text-primary font-display font-black text-sm">EP</span>
          </div>
          <span className="font-display font-black text-lg uppercase tracking-tighter">
            Elite Prospect<span className="text-primary ml-0.5">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex font-bold uppercase tracking-tight text-xs h-9 px-5">
            <Link href="/contact">Recruit</Link>
          </Button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5 mt-2">
              <Button asChild size="lg" className="w-full font-bold uppercase tracking-tight">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Initiate Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
