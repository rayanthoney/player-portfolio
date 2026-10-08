"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    distance?: number;
}

export function SectionReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 40,
}: SectionRevealProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        let x = 0;
        let y = 0;

        if (direction === "up") y = distance;
        else if (direction === "down") y = -distance;
        else if (direction === "left") x = distance;
        else if (direction === "right") x = -distance;

        const ctx = gsap.context(() => {
            gsap.from(element, {
                x,
                y,
                opacity: 0,
                duration: 1,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, element);

        return () => ctx.revert();
    }, [direction, distance, delay]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
}
