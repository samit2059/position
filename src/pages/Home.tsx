import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

const featuredProjects = [
  { title: "E-Commerce Platform", tag: "React / Node.js" },
  { title: "SaaS Dashboard", tag: "Next.js / Tailwind" },
  { title: "Portfolio CMS", tag: "TypeScript / Supabase" },
];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-900 leading-[0.95] tracking-tight text-foreground"
            style={{ y: headingY, opacity: headingOpacity }}
          >
            Samit
            <br />
            <span className="text-primary">Shrestha</span>
          </motion.h1>

          <motion.p
            className="mt-6 font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto"
            style={{ y: subY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web developer crafting bold, performant digital experiences.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <MagneticButton>
              <Link
                to="/work"
                className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide hover:bg-primary/90 transition-colors"
              >
                View Work
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full border border-border text-foreground font-body font-semibold text-sm tracking-wide hover:bg-muted transition-colors"
              >
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Featured teaser */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Link
                  to="/work"
                  className="group flex items-center justify-between py-6 border-b border-border hover:border-primary transition-colors duration-300"
                >
                  <span className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                  <span className="font-body text-sm text-muted-foreground">
                    {project.tag}
                  </span>
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
