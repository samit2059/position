"use client";

import React from "react";
import HeroGeometric from "@/components/ui/shape-landing-hero";
import SkillsSection from "@/components/SkillsSection";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <main className="bg-neutral-950 min-h-screen relative overflow-hidden">
            {/* Signature Glow Background for Home */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] blur-3xl pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-purple-600 rounded-full" />
                <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] bg-teal-600 rounded-full" />
            </div>

            {/* Hero Section */}
            <div className="relative z-10">
                <HeroGeometric
                    badge="Full-Stack Developer"
                    title1="Samit"
                    title2="Shrestha"
                />
            </div>

            {/* Skills & Radial Orbital Timeline Section */}
            <div className="relative z-20 -mt-24">
                <SkillsSection />
            </div>

            {/* Extra breathing room at bottom */}
            <div className="pb-32" />
        </main>
    );
};

export default Home;