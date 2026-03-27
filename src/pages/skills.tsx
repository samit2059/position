"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillsData = {
    languages: [
        { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
        { name: "C", icon: 'https://skillicons.dev/icons?i=c' },
        { name: "C++", icon: 'https://skillicons.dev/icons?i=cpp' }

    ],
    tools: [
        { name: "ReactJS", icon: "https://skillicons.dev/icons?i=react" },
        { name: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "shadcn/ui" },
        { name: "Framer Motion", icon: "https://svgl.app/library/framer.svg" },
        { name: "NodeJS", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=express" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
        { name: "BootStrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    ],
};

const SkillPill = ({ name, icon, index }: { name: string; icon: string; index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="flex items-center gap-3 bg-neutral-900/40 backdrop-blur-sm px-5 py-3 rounded-2xl border border-neutral-800 hover:border-teal-400/50 transition-all duration-300 group cursor-default shadow-xl"
    >
        <img
            src={icon}
            alt={name}
            className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <span className="text-neutral-300 group-hover:text-white text-xs font-black tracking-widest uppercase transition-colors">
            {name}
        </span>
    </motion.div>
);

const Skills = () => {
    return (
        <main className="relative min-h-screen bg-neutral-950 overflow-hidden pt-40 pb-24">
            {/* Background Glows: Consistent with Samit Theme */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] blur-3xl pointer-events-none">
                <div className="absolute -top-1/4 -right-1/2 w-[80%] h-[80%] bg-purple-600 rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/2 w-[80%] h-[80%] bg-teal-600 rounded-full" />
            </div>

            <div className="relative z-10 px-6 max-w-6xl mx-auto">
                {/* Header Section */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-4">
                            Skills & <br />
                            <span className="text-teal-400 italic">Tools.</span>
                        </h1>
                        <div className="h-1.5 w-32 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full mb-8" />
                        <p className="text-neutral-500 max-w-xl font-medium text-lg leading-relaxed">
                            A specialized stack for building scalable web applications with a focus on high-performance architecture and polished user experiences.
                        </p>
                    </motion.div>
                </header>

                {/* Languages Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-white text-sm font-black tracking-[0.4em] uppercase italic bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-lg">
                            Languages
                        </h3>
                        <div className="h-px flex-1 bg-neutral-800/50" />
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        {skillsData.languages.map((skill, i) => (
                            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                        ))}
                    </div>
                </div>

                {/* Frameworks & Tools Section */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-white text-sm font-black tracking-[0.4em] uppercase italic bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-lg">
                            Tech Stack
                        </h3>
                        <div className="h-px flex-1 bg-neutral-800/50" />
                    </div>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        {skillsData.tools.map((skill, i) => (
                            <SkillPill key={skill.name} name={skill.name} icon={skill.icon || "https://skillicons.dev/icons?i=react"} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Skills;