"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Target } from "lucide-react";
import { Player } from "@/lib/types";
import gsap from "gsap";

interface PlayerHeroProps {
    player: Player;
}

export function PlayerHero({ player }: PlayerHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const statsBarRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(badgeRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
            })
                .from(titleRef.current, {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                }, "-=0.6")
                .from(infoRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.7")
                .from(ctaRef.current, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.6")
                .from(statusRef.current, {
                    x: 20,
                    opacity: 0,
                    duration: 1,
                }, "-=1")
                .from(statsBarRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                }, "-=0.5");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-24 overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none text-[20vw] font-display font-black leading-none uppercase tracking-tighter">
                {player.number}
            </div>

            <div className="container relative z-10 px-4 md:px-6 pt-20 pb-32">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                            <ShieldCheck className="h-3 w-3" /> Individual Intel Report
                        </div>
                        <h1 ref={titleRef} className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8] mb-4">
                            {player.displayName.split(" ")[0]} <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">
                                {player.displayName.split(" ").slice(1).join(" ")}
                            </span>
                        </h1>
                        <div ref={infoRef} className="flex flex-wrap gap-4 pt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary" /> {player.position}
                            </span>
                            <span>•</span>
                            <span>Class of {player.classYear}</span>
                            <span>•</span>
                            <span>#{player.number}</span>
                            <span>•</span>
                            <span>{player.clubTeam}</span>
                        </div>

                        <div ref={ctaRef} className="pt-6">
                            <Button asChild size="lg" className="font-black uppercase tracking-[0.2em] text-[10px] h-12 px-8 rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all group">
                                <Link href="#film-room">
                                    Analyze Film <Target className="ml-2 h-3.5 w-3.5 group-hover:animate-pulse" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div ref={statusRef} className="hidden lg:block pb-4">
                        <div className="flex flex-col items-end gap-2 p-6 rounded-2xl border border-white/5 bg-secondary/20 backdrop-blur-md">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Recruitment Status</span>
                            <span className="text-2xl font-display font-black uppercase tracking-tighter">Active Prospect</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Stats Bar - Synced with Dashboard */}
            <div ref={statsBarRef} className="absolute bottom-0 w-full bg-secondary/30 backdrop-blur-2xl border-t border-white/5 py-4 z-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Position</span>
                            <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">{player.position}</span>
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">HT / WT</span>
                            <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">
                                {player.height} / {player.weight}
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Status</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">Verified</span>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Dossier ID</span>
                            <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">#{player.number}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Intel Grade</span>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className={`h-1.5 w-4 rounded-full ${i <= 4 ? "bg-primary" : "bg-white/10"}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
