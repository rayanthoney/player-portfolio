"use client";

import React, { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Player } from "@/lib/types";
import gsap from "gsap";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation (max 10 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Apply rotation
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
      overwrite: true,
    });

    // Move glow effect
    gsap.to(glowRef.current, {
      backgroundImage: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, transparent 80%)`,
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.5)",
    });

    gsap.to(glowRef.current, {
      backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0%, transparent 80%)`,
      duration: 0.7,
    });
  };

  return (
    <div
      className="perspective-1000 w-full max-w-sm group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="relative transition-shadow duration-500 group-hover:shadow-[0_20px_50px_rgba(0,128,128,0.2)] rounded-xl overflow-hidden border border-white/5 bg-[#0c0c0c]">
        {/* Holographic Glow Layer */}
        <div
          ref={glowRef}
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />

        <div className="relative aspect-[4/5] w-full bg-muted overflow-hidden">
          {/* Main Image with Parallax Zoom */}
          {player.photos && player.photos.length > 0 ? (
            <img
              src={player.photos[0]}
              alt={player.displayName}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
              <span className="text-4xl font-bold">{player.number}</span>
            </div>
          )}

          {/* Technical Overlay Badges */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-0" />

          <div className="absolute bottom-4 left-4 z-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-primary/20 backdrop-blur-md border border-primary/30">
              <span className="text-xs font-black text-primary uppercase tracking-widest italic">Dossier verified</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 z-20">
            <Badge variant="default" className="text-lg font-display uppercase tracking-tighter bg-primary text-white border-none shadow-lg">
              #{player.number}
            </Badge>
          </div>
        </div>

        <CardHeader className="relative z-20 pt-6">
          <CardTitle className="text-3xl font-display font-black uppercase tracking-tighter italic leading-none mb-1 group-hover:text-primary transition-colors">
            {player.displayName}
          </CardTitle>
          <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
            <span>{player.position}</span>
            <span className="text-primary">•</span>
            <span>Class of {player.classYear}</span>
          </div>
          <p className="text-xs font-bold text-primary uppercase tracking-widest">{player.clubTeam}</p>
        </CardHeader>

        <CardContent className="relative z-20 pb-4">
          <div className="flex flex-wrap gap-1.5">
            {player.strengths.slice(0, 3).map((strength) => (
              <span
                key={strength}
                className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 rounded group-hover:border-primary/30 transition-colors"
              >
                {strength}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="relative z-20 pt-2 pb-6">
          <Button asChild className="w-full h-11 bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-widest text-[10px] rounded-none group-hover:translate-y-[-2px] transition-transform duration-300 shadow-xl">
            <Link href={`/players/${player.slug}`}>Unlock Full Report</Link>
          </Button>
        </CardFooter>

        {/* Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />
      </div>
    </div>
  );
}
