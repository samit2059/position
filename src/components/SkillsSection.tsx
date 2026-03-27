"use client";

import {
    Brain,
    Target,
    Lightbulb,
    Code2,
    Cpu
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const skillsData = [
    {
        id: 1,
        title: "Critical Thinking",
        date: "Core Skill",
        content: "Analyzing complex logic and debugging architectural bottlenecks in full-stack applications.",
        category: "Soft Skill",
        icon: Brain,
        relatedIds: [2, 4],
        status: "completed" as const,
        energy: 95,
    },
    {
        id: 2,
        title: "Strategic Planning",
        date: "Management",
        content: "Mapping out project milestones, prioritizing features, and optimizing development workflows.",
        category: "Soft Skill",
        icon: Target,
        relatedIds: [1, 5],
        status: "completed" as const,
        energy: 85,
    },
    {
        id: 3,
        title: "Creative Thinking",
        date: "Design",
        content: "Implementing unique UI/UX patterns and motion design using Framer Motion and Tailwind.",
        category: "Soft Skill",
        icon: Lightbulb,
        relatedIds: [4],
        status: "completed" as const,
        energy: 90,
    },
    {
        id: 4,
        title: "MERN Stack",
        date: "Technical",
        content: "Advanced proficiency in MongoDB, Express, React, and Node.js for scalable web apps.",
        category: "Development",
        icon: Code2,
        relatedIds: [1, 3, 5],
        status: "completed" as const,
        energy: 98,
    },
    {
        id: 5,
        title: "System Architecture",
        date: "Engineering",
        content: "Designing secure RBAC systems and integrating cloud databases like Firebase/Firestore.",
        category: "Development",
        icon: Cpu,
        relatedIds: [2, 4],
        status: "in-progress" as const,
        energy: 80,
    },
];

export default function SkillsSection() {
    return (
        <section className="py-24 bg-transparent relative z-20">
            <div className="container px-4 mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tighter uppercase italic">
                    Core <span className="text-teal-400">Competencies.</span>
                </h2>
                <div className="h-1 w-24 bg-teal-400/30 mx-auto rounded-full mb-6" />
                <p className="text-neutral-500 max-w-lg mx-auto font-medium text-lg leading-relaxed">
                    Explore the ecosystem where my technical stack meets strategic problem-solving.
                </p>
            </div>
            
            <div className="h-[750px] w-full relative">
                <RadialOrbitalTimeline timelineData={skillsData} />
            </div>
        </section>
    );
}