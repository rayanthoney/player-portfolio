"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/player/PlayerCard";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Player } from "@/lib/types";
import gsap from "gsap";

interface HeroProps {
    featuredPlayer?: Player;
}

export function Hero({ featuredPlayer }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

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
                .from(descriptionRef.current, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                }, "-=0.7")
                .from(buttonsRef.current?.children || [], {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                }, "-=0.6")
                .from(taglineRef.current, {
                    opacity: 0,
                    duration: 1,
                }, "-=0.4")
                .from(cardRef.current, {
                    x: 60,
                    opacity: 0,
                    rotateY: -20,
                    duration: 1.2,
                }, "-=1.2");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden border-b border-white/5">
            {/* Background Typography */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-[25vw] font-display font-black leading-none uppercase tracking-tighter">
                    ELITE
                </h2>
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div ref={badgeRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                            <ShieldCheck className="h-3 w-3" /> Recruiting Intelligence Platform
                        </div>

                        <h1 ref={titleRef} className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.85] uppercase tracking-tighter">
                            A serious <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">scouting profile</span> <br />
                            for your athlete
                        </h1>

                        <p ref={descriptionRef} className="max-w-xl text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                            Elite Prospect turns your game film, strengths, and journey into a professional scouting dossier
                            that coaches can understand in seconds.
                        </p>

                        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="xl" className="font-bold uppercase tracking-tight h-16 px-10 text-lg">
                                <Link href="/request">
                                    Request Your Athlete’s Profile <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            {featuredPlayer && (
                                <Button asChild variant="outline" size="xl" className="font-bold uppercase tracking-tight h-16 px-10 text-lg border-white/10 hover:bg-white/5">
                                    <Link href={`/players/${featuredPlayer.slug}`}>
                                        View Example Profile
                                    </Link>
                                </Button>
                            )}
                        </div>

                        <p ref={taglineRef} className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
                            Built for youth basketball families in 12U–15U who want more than a highlight reel.
                        </p>
                    </div>

                    {/* Right Column - Featured Player Card Preview */}
                    <div ref={cardRef} className="hidden lg:block relative">
                        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50" />
                        <div className="relative flex justify-center">
                            {featuredPlayer && (
                                <div className="scale-105 md:scale-110">
                                    <PlayerCard player={featuredPlayer} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
