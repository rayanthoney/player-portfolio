"use client";

import React from "react";

export function MeshBackground() {
    return (
        <div className="fixed inset-0 min-h-screen w-full -z-10 overflow-hidden pointer-events-none bg-background">
            {/* Primary Orb - Top Right */}
            <div
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-primary/20 blur-[120px] animate-drift"
            />

            {/* Secondary Orb - Bottom Left */}
            <div
                className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-primary/15 blur-[100px] animate-drift-slow"
            />

            {/* Tertiary Accent Orb - Center */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] opacity-50"
            />

            {/* Grid Overlay for Technical Feel */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
}
