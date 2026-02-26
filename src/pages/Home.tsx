import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticButton from "@/components/MagneticButton";

const featuredProjects = [
  {
    title: "I-Space E-Commerce",
    tag: "MERN Stack",
    image: "/E-commerce.jpeg.png",
    link: "/work"
  },
  {
    title: "Travel App",
    tag: "Next.js / Firebase",
    image: "/travelApp.jpeg.png",
    link: "/work"
  },
  {
    title: "Hult Prize site",
    tag: "React / Firebase",
    image: "/hultprizeatsamriddhi.jpeg.png",
    link: "/work"
  },
  {
    title: "Vibe Couture",
    tag: "Three.js / React",
    image: "/vibeCouture.jpeg.png",
    link: "/work"
  },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  to={project.link}
                  className="group block relative overflow-hidden rounded-2xl border border-border bg-muted/30 aspect-[16/10]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded backdrop-blur-md border border-primary/20">
                      {project.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
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
