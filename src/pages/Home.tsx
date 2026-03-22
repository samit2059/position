"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";
import HeroGeometric from "@/components/ui/shape-landing-hero";

const featuredProjects = [
    { title: "I-Space E-Commerce", tag: "MERN Stack", image: "/E-commerce.jpeg.png", link: "/work" },
    { title: "Travel App", tag: "Next.js / Firebase", image: "/travelApp.jpeg.png", link: "/work" },
    { title: "Hult Prize site", tag: "React / Firebase", image: "/hultprizeatsamriddhi.jpeg.png", link: "/work" },
    { title: "Vibe Couture", tag: "Three.js / React", image: "/vibeCouture.jpeg.png", link: "/work" },
];

const Home: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    const headingY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
    const subY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <main>
            <HeroGeometric badge="Full-Stack Developer" title1="Samit" title2="Shrestha" imageSrc="/profile-placeholder.jpg" />

            <section ref={heroRef} className="relative -mt-24 md:-mt-32 lg:-mt-40 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground" style={{ y: headingY, opacity: headingOpacity }}>
                        Samit <span className="text-primary">Shrestha</span>
                    </motion.h2>

                    <motion.p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto" style={{ y: subY }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}>
                        Web developer crafting bold, performant digital experiences.
                    </motion.p>

                    <motion.div className="mt-8 flex items-center justify-center gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                        <MagneticButton>
                            <Link to="/work" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
                                View Work
                            </Link>
                        </MagneticButton>
                        <MagneticButton>
                            <Link to="/contact" className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground">
                                Get in Touch
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto">
                    <motion.h3 className="font-display text-2xl sm:text-3xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        Featured Projects
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProjects.map((p, idx) => (
                            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                                <Link to={p.link} className="group block rounded-2xl overflow-hidden border border-border bg-muted/30 aspect-[16/10] relative">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded backdrop-blur-md border border-primary/20">{p.tag}</span>
                                        <h4 className="mt-3 text-2xl font-bold text-foreground">{p.title}</h4>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;