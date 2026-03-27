"use client";

import { Timeline } from "@/components/ui/timeline";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
    const educationData = [
        {
            date: "2082-12-10",
            title: "Samriddhi College (Present )",
            description: "Focused on Computer science and Information Technology",
            href: "#",
            icon: <BookOpen className="h-3 w-3" />,
        },
        {
            date: "2080-02-01",
            title: "Khwopa Secondary School",
            description: "Completed with honors in Mathematics and Physics.(GPA: 3.59)",
            href: "#",
            icon: <School className="h-3 w-3" />,
        },
        {
            date: "2078-01-05",
            title: "Jaycees Secondary School",
            description: "Obtained excellence results in various subjects (GPA : 3.50)",
            href: "#",
            icon: <Award className="h-3 w-3" />,
        },
    ];

    return (
        <div className="education-section min-h-screen py-24 bg-neutral-950 relative overflow-hidden text-neutral-200">
            {/* Background Gradients: Consistent with Certificates page */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] blur-3xl pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-purple-600 rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-blue-600 rounded-full" />
            </div>

            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-6 mb-20 text-center relative z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Educational Journey</h1>
                <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                    A timeline of my academic background and foundational learning.
                </p>
            </motion.div>

            {/* Timeline Section */}
            <div className="relative z-10">
                <Timeline
                    items={educationData}
                    initialCount={3}
                    showMoreText="View Older History"
                    dotClassName="bg-purple-500 ring-4 ring-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    titleClassName="text-white font-bold group-hover:text-purple-400 transition-colors"
                />
            </div>
        </div>
    );
}