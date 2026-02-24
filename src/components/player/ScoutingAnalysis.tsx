"use client";

import { CheckCircle2, Shield, Target, Zap, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StrengthProps {
    label: string;
    icon: any;
    delay: number;
}

function StrengthBlock({ label, icon: Icon, delay }: StrengthProps) {
    const blockRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            blockRef.current,
            { opacity: 0, y: 30, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: blockRef.current,
                    start: "top 85%",
                },
            }
        );
    }, [delay]);

    return (
        <div
            ref={blockRef}
            className="group relative p-6 rounded-xl bg-secondary/20 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                <Icon size={80} />
            </div>
            <div className="relative z-10 flex flex-col gap-4">
                <div className="p-3 rounded-lg bg-primary/10 w-fit border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                </div>
                <div>
                    <h4 className="text-xl font-display font-black uppercase tracking-tight mb-2">{label}</h4>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                        Verified as a core tactical advantage in high-pressure competition environments.
                    </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/40 w-full" />
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">Confirmed</span>
                </div>
            </div>
        </div>
    );
}

export function ScoutingAnalysis({ strengths }: { strengths: string[] }) {
    const icons = [Target, Shield, Zap, TrendingUp, CheckCircle2];

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((strength, index) => (
                <StrengthBlock
                    key={strength}
                    label={strength}
                    icon={icons[index % icons.length]}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
}
