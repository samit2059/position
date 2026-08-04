"use client";

import React, { useState, useEffect } from "react";
import {
    Brain,
    Target,
    Lightbulb,
    Code2,
    Zap,
    ArrowRight,
    Monitor,
    Server,
    Database,
    type LucideIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface Skill {
    id: number;
    title: string;
    description: string;
    category: string;
    icon: LucideIcon; // Fixed 'any' ESLint error
    color: string;
    angle: number;
    orbitRadius: number;
    // energy: number;
    status: string;
    content: string;
    date: string;
    relatedIds: number[];
}

// Explicitly type the array as Skill[] and add missing fields
const skills: Skill[] = [
    {
        id: 1,
        title: "React & Next.js",
        description: "Building responsive, component-driven web applications with modern React patterns.",
        category: "Frontend",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500",
        angle: 0,
        orbitRadius: 120,
        // energy: 90,
        status: "active",
        content: "Advanced engineering with Next.js App Router, Server Components, and optimized client-side state management systems.",
        date: "Current Focus",
        relatedIds: [2, 3],
    },
    {
        id: 2,
        title: "Node.js & Express",
        description: "Developing scalable REST APIs, authentication systems, and backend services.",
        category: "Backend",
        icon: Server,
        color: "from-green-500 to-emerald-500",
        angle: 90,
        orbitRadius: 90,
        // energy: 85,
        status: "active",
        content: "Building decoupled microservices, implementing robust JWT authentication, and structuring middleware logic pipelines.",
        date: "Continuous Development",
        relatedIds: [1, 3],
    },
    {
        id: 3,
        title: "MongoDB & Firebase",
        description: "Designing secure cloud databases and implementing real-time data solutions.",
        category: "Database",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        angle: 180,
        orbitRadius: 120,
        // energy: 80,
        status: "maintained",
        content: "Structuring non-relational database models, optimizing indexing structures, and integrating real-time document change streams.",
        date: "Production Ready",
        relatedIds: [1, 2],
    },
    {
        id: 4,
        title: "Problem Solving",
        description: "Analyzing complex requirements, debugging efficiently, and delivering maintainable solutions.",
        category: "Professional",
        icon: Brain,
        color: "from-amber-500 to-orange-500",
        angle: 270,
        orbitRadius: 90,
        // energy: 95,
        status: "core",
        content: "Applying optimal algorithmic approaches, profiling operational runtimes, and systematically resolving edge-case production performance bugs.",
        date: "Core Foundation",
        relatedIds: [1, 2, 3],
    },
];

interface OrbitingSkillProps {
    skill: Skill;
    rotation: number;
    isSelected: boolean;
    onSelect: (id: number) => void;
}

function OrbitingSkill({ skill, rotation, isSelected, onSelect }: OrbitingSkillProps) {
    const Icon = skill.icon;
    const angle = (skill.angle + rotation) * (Math.PI / 180);
    const x = Math.cos(angle) * skill.orbitRadius;
    const y = Math.sin(angle) * skill.orbitRadius;

    return (
        <motion.div
            onClick={() => onSelect(skill.id)}
            className="absolute cursor-pointer"
            style={{
                left: "50%",
                top: "50%",
                x: x,
                y: y,
                marginLeft: "-24px",
                marginTop: "-24px",
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border-2 transition-all duration-300 ${isSelected
                    ? `bg-white/[0.2] border-white/[0.5] shadow-lg shadow-white/[0.3]`
                    : `bg-white/[0.08] border-white/[0.2] hover:bg-white/[0.12] hover:border-white/[0.3]`
                    }`}
                animate={{
                    boxShadow: isSelected
                        ? [
                            "0 0 20px rgba(255,255,255,0.2)",
                            "0 0 30px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.2)",
                        ]
                        : "0 0 0px rgba(255,255,255,0)",
                }}
                transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
            >
                <div className={`p-1.5 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                    <Icon className="h-5 w-5 text-white" />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function CoreSkillsSection() {
    const [selectedSkillId, setSelectedSkillId] = useState<number>(4);
    const [rotation, setRotation] = useState(0);

    // Auto-rotate the orbit
    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const selectedSkill = skills.find((s) => s.id === selectedSkillId);

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] blur-3xl pointer-events-none">
                <motion.div
                    className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600 rounded-full"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter">
                        Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">Competencies</span>
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mb-4" />
                    <p className="text-white/50 max-w-md font-light text-base leading-relaxed">
                        A blend of technical expertise and strategic thinking that drives innovative solutions.
                    </p>
                </motion.div>

                {/* Main Grid: Left Details + Right Orbit */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* LEFT SIDE: Detailed Information Panel */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="absolute -left-20 top-1/2 w-40 h-40 bg-gradient-to-r from-purple-600/[0.1] to-cyan-600/[0.1] rounded-full blur-3xl transform -translate-y-1/2" />

                            {/* Content Card */}
                            <motion.div
                                key={selectedSkillId}
                                className="relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.15]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <motion.div
                                        className={`p-4 rounded-xl bg-gradient-to-br ${selectedSkill?.color} bg-opacity-15`}
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                                    >
                                        {selectedSkill && <selectedSkill.icon className="h-8 w-8 text-white" />}
                                    </motion.div>
                                    <span className="text-xs px-3 py-1.5 rounded-full bg-white/[0.08] text-white/70 font-semibold border border-white/[0.1]">
                                        {selectedSkill?.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black text-white mb-2">
                                    {selectedSkill?.title}
                                </h3>
                                <p className="text-sm text-white/50 mb-6">
                                    {selectedSkill?.date}
                                </p>

                                <p className="text-base text-white/70 leading-relaxed mb-8">
                                    {selectedSkill?.content}
                                </p>

                                {/* Proficiency Bar */}
                                {/* <div className="mb-8">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm text-white/60 font-semibold">Proficiency Level</span>
                                        <span className="text-lg font-bold text-white">{selectedSkill?.energy}%</span>
                                    </div>
                                    <div className="h-2.5 bg-white/[0.1] rounded-full overflow-hidden border border-white/[0.1]">
                                        <motion.div
                                            className={`h-full bg-gradient-to-r ${selectedSkill?.color}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${selectedSkill?.energy}%` }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                        />
                                    </div>
                                </div> */}

                                {/* Status Badge */}
                                <div className="flex items-center gap-2 p-4 rounded-lg bg-white/[0.05] border border-white/[0.1]">
                                    <Zap className="h-4 w-4 text-yellow-400" />
                                    <span className="text-sm text-white/70">
                                        Status: <span className="font-semibold text-white capitalize">{selectedSkill?.status}</span>
                                    </span>
                                </div>
                            </motion.div>

                            {/* Related Skills Indicator */}
                            <motion.div
                                className="mt-6 flex gap-2"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-xs text-white/50 font-semibold">Related:</span>
                                <div className="flex gap-2">
                                    {selectedSkill?.relatedIds.map((id) => {
                                        const relatedSkill = skills.find((s) => s.id === id);
                                        const RelatedIcon = relatedSkill?.icon;
                                        return (
                                            <motion.button
                                                key={id}
                                                onClick={() => setSelectedSkillId(id)}
                                                className="p-2 rounded-lg bg-white/[0.08] border border-white/[0.15] hover:bg-white/[0.12] transition-all"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {RelatedIcon && <RelatedIcon className="h-4 w-4 text-white/70" />}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Solar System Orbit */}
                    <motion.div
                        className="order-1 lg:order-2 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full aspect-square max-w-md">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                                <circle cx="150" cy="150" r="120" fill="none" stroke="url(#ringGradient)" strokeWidth="1" opacity="0.3" />
                                <circle cx="150" cy="150" r="90" fill="none" stroke="url(#ringGradient2)" strokeWidth="1" opacity="0.2" />
                                <circle cx="150" cy="150" r="60" fill="none" stroke="url(#ringGradient3)" strokeWidth="1" opacity="0.15" />
                                <defs>
                                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.5" />
                                    </linearGradient>
                                    <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                                        <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.3" />
                                    </linearGradient>
                                    <linearGradient id="ringGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <motion.div
                                className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-white/[0.2] backdrop-blur-md"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    boxShadow: [
                                        "0 0 20px rgba(168, 85, 247, 0.3)",
                                        "0 0 40px rgba(168, 85, 247, 0.5)",
                                        "0 0 20px rgba(168, 85, 247, 0.3)",
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                                </div>
                            </motion.div>

                            <div className="absolute inset-0">
                                {skills.map((skill) => (
                                    <OrbitingSkill
                                        key={skill.id}
                                        skill={skill}
                                        rotation={rotation}
                                        isSelected={selectedSkillId === skill.id}
                                        onSelect={setSelectedSkillId}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile Skill Selector */}
                <motion.div
                    className="lg:hidden mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm text-white/60 text-center mb-4">Tap on the orbit or select below:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <motion.button
                                    key={skill.id}
                                    onClick={() => setSelectedSkillId(skill.id)}
                                    className={`p-3 rounded-lg backdrop-blur-md border transition-all ${selectedSkillId === skill.id
                                        ? `bg-white/[0.15] border-white/[0.3]`
                                        : `bg-white/[0.05] border-white/[0.1] hover:bg-white/[0.08]`
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="h-5 w-5 text-white mx-auto" />
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="mt-16 md:mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white/60 mb-6 text-sm md:text-base">
                        Ready to see these skills in action?
                    </p>
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
                    >
                        View My Projects
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
