"use client";

import React from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -150, rotate: rotate - 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 }
            }}
            className={cn("absolute z-0", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [rotate, rotate + 3, rotate],
                }}
                transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
                style={{ width, height }}
                className="relative"
            >
                {/* The main glass shape */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent via-white/[0.01]",
                        gradient,
                        "backdrop-blur-[8px] border-[1px] border-white/[0.15]",
                        "shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                        // Inner reflection "sheen"
                        "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]",
                        // Outer glow softener
                        "before:absolute before:-inset-2 before:rounded-full before:bg-inherit before:blur-xl before:opacity-20 before:-z-10"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
    // imageSrc?: string;
}

export function HeroGeometric({
    badge = "Full-Stack Developer",
    title1 = "Samit",
    title2 = "Shrestha",
}: HeroGeometricProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] }
        } as const),
    };

    return (
        <header className="relative w-full bg-[#030303] overflow-hidden">
            {/* Background Ambient Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] -z-10" />
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-sm">
                            <Circle className="h-2 w-2 fill-rose-500 animate-pulse" />
                            <span className="text-sm text-white/60 tracking-widest uppercase font-medium">{badge}</span>
                        </motion.div>

                        <motion.h1 custom={1} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                                {title1}
                            </span>
                            <span className="block text-primary italic pr-4">
                                {title2}
                            </span>
                        </motion.h1>

                        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-8 text-lg sm:text-xl text-white/30 max-w-xl font-light leading-relaxed">
                            Web developer crafting bold, performant digital experiences. Focus on modern UX, clean architecture, and fluid animations.
                        </motion.p>

                        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-10 flex flex-wrap gap-5">
                            <a href="/work" className="group relative inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-bold transition-all hover:scale-105 active:scale-95 overflow-hidden">
                                <span className="relative z-10">View Work</span>
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                            </a>
                            <a href="/contact" className="inline-flex items-center px-8 py-4 rounded-full border border-white/10 text-white/80 font-medium hover:bg-white/5 transition-colors">
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Geometric Composition */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">

                            {/* Central Glow Ball */}
                            <div className="absolute inset-0 m-auto w-3/4 h-3/4 bg-primary/5 blur-[80px] rounded-full animate-pulse" />

                            {/* Elevated Shapes */}
                            <ElegantShape delay={0.2} width={380} height={160} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-15%] top-[-5%]" />
                            <ElegantShape delay={0.4} width={280} height={120} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-5%] top-[50%]" />
                            <ElegantShape delay={0.6} width={180} height={80} rotate={25} gradient="from-cyan-400/[0.15]" className="left-[5%] top-[10%]" />
                            <ElegantShape delay={0.8} width={120} height={50} rotate={-5} gradient="from-white/[0.1]" className="right-[15%] top-[-10%]" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}
export default HeroGeometric;