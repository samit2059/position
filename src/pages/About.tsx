import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js",
  "Supabase", "PostgreSQL", "Framer Motion", "Git", "Figma",
];

const About = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingX = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="overflow-hidden mb-20">
          <motion.h1
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-900 text-foreground"
            style={{ x: headingX }}
          >
            About Me
          </motion.h1>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          {/* Photo placeholder */}
          <motion.div
            className="md:col-span-2 aspect-[3/4] rounded-2xl bg-muted/50 border border-border flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-sm text-muted-foreground">Your Photo</span>
          </motion.div>

          <div className="md:col-span-3 flex flex-col justify-center">
            {[
              "I'm Samit Shrestha — a web developer passionate about building fast, beautiful, and accessible digital experiences.",
              "I specialize in front-end development with React and TypeScript, bringing designs to life with clean code and smooth animations.",
              "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and constantly pushing the boundaries of what's possible on the web.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Skills */}
        <motion.h2
          className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Tools
        </motion.h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-4 py-2 rounded-full border border-border font-body text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
