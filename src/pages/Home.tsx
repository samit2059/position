// "use client";

// import React from "react";
// import HeroGeometric from "@/components/ui/shape-landing-hero";
// import SkillsSection from "@/components/SkillsSection";
// import { motion } from "framer-motion";

// const Home: React.FC = () => {
//     return (
//         <main className="bg-neutral-950 min-h-screen relative overflow-hidden">
//             {/* Signature Glow Background for Home */}
//             <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] blur-3xl pointer-events-none">
//                 <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600 rounded-full" />
//                 <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-teal-600 rounded-full" />
//             </div>

//             {/* Hero Section */}
//             <div className="relative z-20">
//                 <HeroGeometric
//                     badge="Full-Stack Developer"
//                     title1="Samit"
//                     title2="Shrestha"
//                 />
//             </div>

//             {/* Skills & Radial Orbital Timeline Section */}
//             <div className="relative z-10 -mt-12 md:-mt-24 lg:-mt-32">
//                 <SkillsSection />
//             </div>

//             {/* Extra breathing room at bottom */}
//             <div className="pb-32" />
//         </main>
//     );
// };

// export default Home;"use client";

import React from "react";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import CoreSkillsSection from "@/components/core";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <main className="bg-neutral-950 min-h-screen relative overflow-hidden">
            {/* Unified Background System - Consistent across all sections */}
            
            {/* 1. ANIMATED GLOW ORBS: These drift slowly in the background */}
            <div className="fixed top-0 left-0 w-full h-full opacity-[0.03] blur-3xl pointer-events-none -z-50">
                <motion.div 
                    className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600 rounded-full"
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, 20, -20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-cyan-600 rounded-full"
                    animate={{
                        x: [0, -40, 40, 0],
                        y: [0, -30, 30, 0],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-rose-600 rounded-full"
                    animate={{
                        x: [0, 25, -25, 0],
                        y: [0, -25, 25, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
            </div>

            {/* 2. TECHNICAL GRID OVERLAY: Adds a subtle developer-themed texture */}
            <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20 pointer-events-none -z-40" />

            {/* Main Content */}
            <div className="relative z-20">
                {/* Hero Section */}
                <div className="relative z-20">
                    <HeroGeometric
                        badge="Full-Stack Developer"
                        title1="Samit"
                        title2="Shrestha"
                    />
                </div>

                {/* Refined Divider: Smooth transition between sections */}
                <motion.div 
                    className="relative z-10 py-12 md:py-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                    </div>
                </motion.div>

                {/* Core Skills Section - Solar System / Orbital Design */}
                <div className="relative z-10">
                    <CoreSkillsSection />

                </div>

                {/* Extra breathing room at bottom with gradient fade */}
                <div className="relative z-0 h-20 md:h-32 bg-gradient-to-b from-transparent to-neutral-950/50" />
            </div>
        </main>
    );
};

export default Home;
