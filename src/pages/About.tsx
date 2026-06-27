"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Palette,
  History,
  Zap,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <Code2 className="w-5 h-5 text-teal-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Bootstrap"]
  },
  {
    title: "Backend & Systems",
    icon: <Terminal className="w-5 h-5 text-purple-400" />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    title: "Professional Tools",
    icon: <Palette className="w-5 h-5 text-blue-400" />,
    skills: ["Git", "GitHub", "Figma", "Postman", "Firebase", "VS Code"]
  }
];

const timelineEvents = [
  { year: "2022", label: "Started Coding Journey", detail: "Fell in love with logic and problem-solving through my first few lines of C and HTML." },
  { year: "2023 – 2024", label: "Intermediate React Learning", detail: "Transitioned to building complex client-side applications with a focus on modern UI/UX." },
  { year: "2025", label: "Learned TypeScript & MERN Stack", detail: "Joined local tech teams and worked across various fundamentals of React in real projects." },
  { year: "2026", label: "Team Projects & Scalable Websites", detail: "Currently building high-impact products that solve real-world problems for people." },
];

const About = () => {
  return (
    <main className="min-h-screen bg-neutral-950 relative overflow-hidden text-neutral-200 selection:bg-teal-500/30">

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] blur-3xl pointer-events-none">
        <div className="absolute -top-1/4 -right-1/2 w-[80%] h-[80%] bg-purple-600 rounded-full" />
        <div className="absolute -bottom-1/4 -left-1/2 w-[80%] h-[80%] bg-teal-600 rounded-full" />
      </div>

      <div className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                Who <span className="text-teal-400">IS</span> <br />
                Samit <span className="text-purple-500 italic">Shrestha?</span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full" />
            </motion.div>
          </div>

          {/* Bio Section */}
          <section className="grid md:grid-cols-12 gap-12 md:gap-20 mb-32 md:mb-48 border-b border-neutral-900 pb-20">
            <motion.div
              className="md:col-span-5 relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-neutral-800 relative z-10 bg-neutral-900 shadow-2xl">
                <img
                  src="/profilepg.jpeg"
                  alt="Samit Shrestha"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
                />
                {/* subtle gradient overlay for polish instead of grayscale toggle */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -inset-4 border border-teal-400/20 rounded-[36px] -z-0 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
            </motion.div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Passionate Web Developer & Creative Problem Solver
              </motion.h2>
              <div className="space-y-6 text-lg text-neutral-400 font-medium leading-relaxed">
                <p>
                  I'm a full-stack developer with a deep specialization in crafting highly interactive frontend experiences. My work bridges the gap between complex logic and elegant design.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-teal-400 font-black text-3xl mb-1">5+</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Projects Built</p>
                  </div>
                  <div>
                    <p className="text-purple-500 font-black text-3xl mb-1">100%</p>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-bold">Dedication</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="mb-32 md:mb-48">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Capabilities</h2>
                <p className="text-neutral-500 font-medium mt-2">Tools of the trade I've mastered over the years.</p>
              </div>
              <div className="h-px flex-1 mx-8 bg-neutral-900 hidden md:block" />
              <Zap className="text-teal-400 hidden md:block" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-teal-400/30 hover:bg-neutral-900/60 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neutral-700 transition-all">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-bold text-neutral-500 hover:text-white hover:border-neutral-600 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Vertical Timeline Section */}
          <section className="pb-20">
            <div className="flex items-center gap-4 mb-24 md:justify-center">
              <History className="text-purple-500" />
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic text-center">Journey Path</h2>
            </div>

            <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
              {/* The Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-purple-500 to-transparent opacity-20" />

              <div className="space-y-24">
                {timelineEvents.map((event, idx) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: idx * 0.1 }}
                    className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-32.5px] md:left-1/2 md:-ml-[4px] top-6 md:top-1/2 w-4 h-4 rounded-full bg-neutral-950 border-2 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.6)] z-20" />

                    {/* Content Card */}
                    <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="p-6 md:p-8 rounded-[2rem] bg-neutral-900/40 border border-neutral-800 backdrop-blur-sm hover:border-teal-400/20 hover:bg-neutral-900/60 transition-all group">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-teal-400/10 text-teal-400 text-xs font-black tracking-widest mb-4">
                          {event.year}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                          {event.label}
                        </h4>
                        <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-medium">
                          {event.detail}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for 2-column layout */}
                    <div className="hidden md:block w-[10%]" />
                    <div className="hidden md:block w-[45%]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default About;