"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Circle, Code2, Database, Layers3, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const geometryItems = [
    { label: "Interface", value: "React", icon: Layers3 },
    { label: "API Layer", value: "Node", icon: Server },
    { label: "Data", value: "MongoDB", icon: Database },
];

function ProfessionalGeometry() {
    return (
        <motion.div
            className="relative mx-auto h-[320px] w-full max-w-[440px] sm:h-[420px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
        >
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.08] bg-[#071014]/45 backdrop-blur-sm" />
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/[0.06] bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <svg className="absolute inset-0 h-full w-full text-white/20" viewBox="0 0 440 420" fill="none" aria-hidden="true">
                <path d="M92 310L220 102L348 310H92Z" stroke="currentColor" strokeWidth="1" />
                <path d="M124 286L220 132L316 286H124Z" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" />
                <path d="M220 102V332" stroke="currentColor" strokeWidth="1" strokeDasharray="4 10" />
                <path d="M92 310H348" stroke="currentColor" strokeWidth="1" />
                <circle cx="220" cy="102" r="5" fill="rgb(148 163 184)" />
                <circle cx="92" cy="310" r="5" fill="rgb(45 212 191)" />
                <circle cx="348" cy="310" r="5" fill="rgb(168 85 247)" />
            </svg>

            <motion.div
                className="absolute left-1/2 top-[43%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/[0.14] bg-white/[0.07] shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-[#071014] shadow-lg">
                    <Code2 className="h-8 w-8" />
                </div>
            </motion.div>

            {geometryItems.map((item, index) => {
                const Icon = item.icon;
                const positions = [
                    "left-4 top-8 sm:left-8 sm:top-12",
                    "right-4 top-24 sm:right-8 sm:top-28",
                    "bottom-8 left-1/2 -translate-x-1/2",
                ];

                return (
                    <motion.div
                        key={item.label}
                        className={cn(
                            "absolute flex min-w-[138px] items-center gap-3 rounded-xl border border-white/[0.1] bg-[#071014]/70 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-md",
                            positions[index]
                        )}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.65 + index * 0.12 }}
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.06]">
                            <Icon className="h-4 w-4 text-slate-100" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                            <p className="text-sm font-semibold text-slate-100">{item.value}</p>
                        </div>
                    </motion.div>
                );
            })}
            <div className="absolute bottom-2 left-2 hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-center backdrop-blur-sm sm:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Build architecture: </p>
                <p className="text-sm font-semibold text-slate-100">Next js </p>
            </div>
        </motion.div>
);
}

export interface HeroGeometricProps {
    badge?: string;
    title1?: string;
    title2?: string;
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    return (
        <header className="relative w-full overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div className="lg:col-span-7" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div custom={0} variants={fadeUpVariants} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.12] mb-10 backdrop-blur-md">
                            <Circle className="h-2 w-2 fill-teal-300 text-teal-300 animate-pulse" />
                            <span className="text-xs sm:text-sm text-slate-200/80 tracking-widest uppercase font-semibold">{badge}</span>
                        </motion.div>

                        <motion.h1 custom={1} variants={fadeUpVariants} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-normal text-white">
                            <span className="block text-slate-50">
                                {title1}
                            </span>
                            <span className="block text-teal-300 italic">
                                {title2}
                            </span>
                        </motion.h1>

                        <motion.p custom={2} variants={fadeUpVariants} className="mt-8 text-base sm:text-lg text-slate-300/75 max-w-2xl font-light leading-relaxed">
                            Crafting elegant, high-performance digital experiences with modern technologies. Specializing in React, TypeScript, and creating fluid, intuitive interfaces.
                        </motion.p>

                        <motion.div custom={3} variants={fadeUpVariants} className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4">
                            <Link to="/work" className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-teal-300 text-[#071014] font-bold transition-all duration-300 hover:bg-teal-200 hover:shadow-[0_18px_40px_rgba(45,212,191,0.18)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    View My Work
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/[0.16] text-slate-100 font-medium hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm">
                                Get in Touch
                            </Link>
                        </motion.div>

                        <motion.div custom={4} variants={fadeUpVariants} className="mt-16 pt-8 border-t border-white/[0.08] flex gap-8">
                            <div>
                                <div className="text-2xl font-bold text-slate-50">5+</div>
                                <div className="text-sm text-slate-400">Projects</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-50">100%</div>
                                <div className="text-sm text-slate-400">Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-50">2+</div>
                                <div className="text-sm text-slate-400">Years Exp.</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Professional Geometry */}
                    <motion.div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                        <ProfessionalGeometry />
                    </motion.div>
                </div>
            </div>
        </header>
    );
}

export default HeroGeometric;
