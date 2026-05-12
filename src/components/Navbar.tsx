"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MagneticButton from "./MagneticButton";
import {
  Home,
  Briefcase,
  Cpu,
  Award,
  GraduationCap,
  User,
  Mail,
  Menu,
  X,
  ExternalLink
} from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "About", path: "/about", icon: <User size={18} /> },
  { label: "Contact", path: "/contact", icon: <Mail size={18} /> },
  { label: "Skills", path: "/skills", icon: <Cpu size={18} /> },
  { label: "Work", path: "/work", icon: <Briefcase size={18} /> },
  { label: "Education", path: "/education", icon: <GraduationCap size={18} /> },
  { label: "Certificates", path: "/certificate", icon: <Award size={18} /> },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled || mobileOpen
          ? "bg-neutral-950 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] py-1"
          : "bg-neutral-950/20 backdrop-blur-md border-b border-white/5 py-1"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-400 flex items-center justify-center font-black text-black text-lg">
            S
          </div>
          <span className="font-display text-xl font-black tracking-tighter text-white group-hover:text-teal-400 transition-colors">
            SAMIT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full font-display text-[11px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 ${isActive ? "text-teal-400" : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-teal-400/5 border border-teal-400/20 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <MagneticButton strength={0.1} as="div">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-teal-400 text-black text-[11px] font-black tracking-[0.15em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(94,234,212,0.3)]"
            >
              HIRE ME
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden relative z-[110] p-2 -mr-2 text-teal-400"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Fullscreen Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[105] bg-black flex flex-col p-8 md:p-12 lg:hidden overflow-y-auto"
            >
              {/* Mobile Branding */}
              <div className="flex items-center gap-3 mb-12 pt-4">
                <div className="w-10 h-10 rounded-xl bg-teal-400 flex items-center justify-center font-black text-black text-xl">
                  S
                </div>
                <span className="text-2xl font-black text-white italic tracking-tighter">NAVIGATION</span>
              </div>

              {/* Mobile Nav Links */}
              <ul className="flex flex-col gap-1 pb-10">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center justify-between py-4 border-b border-neutral-800 transition-all ${isActive ? "text-teal-400 px-4" : "text-neutral-300"
                          }`}
                      >
                        <div className="flex items-center gap-6">
                          <span className={`transition-all duration-300 ${isActive ? "scale-110 text-teal-400" : "text-neutral-500 group-hover:text-white"}`}>
                            {item.icon}
                          </span>
                          <span className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
                            {item.label}
                          </span>
                        </div>
                        {isActive && <ExternalLink size={20} className="text-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                className="mt-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center py-6 rounded-2xl bg-teal-400 text-black font-black text-xl tracking-widest shadow-xl shadow-teal-400/20"
                >
                  HIRE ME
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;