"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full py-16 border-t border-white/5 bg-background text-foreground"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-2xl font-display font-black uppercase tracking-tighter italic">
              Elite Showcase <span className="text-primary text-[0.8em] font-normal not-italic ml-1">v1.2</span>
            </div>
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">
              Authorized Internal Build
            </p>
          </div>

          {/* Technical Links */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">HQ</Link>
            <Link href="/journey" className="hover:text-primary transition-colors">Dossier</Link>
            <Link href="/film-room" className="hover:text-primary transition-colors">Intelligence</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Protocol</Link>
          </div>

          {/* Legal / Metadata */}
          <div className="flex flex-col items-center md:items-end gap-2 text-[9px] font-bold uppercase tracking-widest">
            <div className="text-white/20">
              © {new Date().getFullYear()} TOP PROSPECTS DATABASE.
            </div>
            <div className="text-primary/40">
              Youth Privacy Protected
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
