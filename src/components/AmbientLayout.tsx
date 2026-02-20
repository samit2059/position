import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface AmbientLayoutProps {
  children: ReactNode;
}

const AmbientLayout = ({ children }: AmbientLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const blob1X = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const blob2X = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blob3X = useTransform(scrollYProgress, [0, 1], ["-50%", "-30%"]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ["-50%", "-70%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Ambient glow */}
      <div className="ambient-glow">
        <motion.div
          className="glow-blob glow-blob-1"
          style={{ left: blob1X, top: blob1Y }}
        />
        <motion.div
          className="glow-blob glow-blob-2"
          style={{ right: blob2X, bottom: blob2Y }}
        />
        <motion.div
          className="glow-blob glow-blob-3"
          style={{ left: blob3X, top: blob3Y }}
        />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AmbientLayout;
