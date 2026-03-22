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
            initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
            animate={{ opacity: 1, y: 0, rotate }}
            transition={{ duration: 2.2, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.1 } }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ width, height }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.12]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.35)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]"
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
    imageSrc?: string;
}

export function HeroGeometric({
    badge = "Full-Stack Developer",
    title1 = "Samit",
    title2 = "Shrestha",
    imageSrc = "/profile-placeholder.jpg",
}: HeroGeometricProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] } as const }),
    };

    return (
        <header className="relative w-full bg-[#030303]">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/[0.04] via-transparent to-rose-600/[0.04] -z-10" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: text */}
                    <div className="lg:col-span-7">
                        <motion.div custom={0} variants={fadeUpVariants} initial="hidden" animate="visible" className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
                            <Circle className="h-2 w-2 fill-rose-500/80" />
                            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
                        </motion.div>

                        <motion.h1 custom={1} variants={fadeUpVariants} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white">
                            <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">{title1} </span>
                            <span className="block text-primary">{title2}</span>
                        </motion.h1>

                        <motion.p custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-6 text-lg sm:text-xl text-white/40 max-w-2xl">
                            Web developer crafting bold, performant digital experiences. I build interfaces, animations and full-stack applications with a focus on performance and modern UX.
                        </motion.p>

                        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible" className="mt-8 flex flex-wrap gap-4">
                            <a href="/work" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:opacity-95 transition">
                                View Work
                            </a>
                            <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full border border-border text-white/90">
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: image + shapes */}
                    <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <div className="relative w-[360px] h-[360px]">
                            <div className="absolute inset-0">
                                <ElegantShape delay={0.2} width={360} height={200} rotate={8} gradient="from-indigo-500/[0.14]" className="left-[-10%] top-[-6%]" />
                                <ElegantShape delay={0.45} width={260} height={140} rotate={-12} gradient="from-rose-500/[0.12]" className="right-[-6%] top-[56%]" />
                                <ElegantShape delay={0.6} width={160} height={90} rotate={18} gradient="from-cyan-400/[0.12]" className="left-[18%] top-[6%]" />
                            </div>

                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                                <img src={imageSrc} alt="profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeroGeometric;