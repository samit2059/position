"use client";

import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
    { name: "LINKEDIN", href: "https://www.linkedin.com/in/samit-shrestha-539a0126a/" },
    { name: "GITHUB", href: "https://github.com/samit2059" },
    // { name: "TWITTER", href: "https://twitter.com/SamitShrestha1" },
    { name: "EMAIL", href: "mailto:[EMAIL_ADDRESS]" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#030303] border-t border-white/[0.05] py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Left Side: Copyright & Credits */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white/30 text-xs sm:text-sm tracking-tight font-light"
                >
                    © {currentYear} Samit Shrestha.

                </motion.div>

                {/* Right Side: Social Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-10"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em]"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.nav>

            </div>
        </footer>
    );
};

export default Footer;