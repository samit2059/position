import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Platform", description: "Full-stack shopping experience with cart, checkout, and payment integration.", tags: ["React", "Node.js", "Stripe"], span: "col-span-2 row-span-2" },
  { title: "SaaS Dashboard", description: "Analytics dashboard with real-time data visualization and role-based access.", tags: ["Next.js", "Tailwind", "D3"], span: "col-span-1 row-span-1" },
  { title: "Portfolio CMS", description: "Headless CMS-powered portfolio with dynamic content management.", tags: ["TypeScript", "Supabase"], span: "col-span-1 row-span-2" },
  { title: "Task Manager", description: "Collaborative task management app with drag-and-drop kanban boards.", tags: ["React", "DnD Kit"], span: "col-span-1 row-span-1" },
  { title: "Restaurant Booking", description: "Online reservation system with real-time availability and email confirmations.", tags: ["React", "Express"], span: "col-span-2 row-span-1" },
  { title: "Weather App", description: "Minimalist weather dashboard with geolocation and 7-day forecasts.", tags: ["React", "OpenWeather API"], span: "col-span-1 row-span-1" },
];

const Work = () => {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="font-display text-4xl sm:text-6xl font-900 text-foreground mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Work
        </motion.h1>
        <motion.p
          className="font-body text-muted-foreground text-lg mb-16 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A selection of web development projects — each one a unique challenge solved with code.
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 flex flex-col justify-end cursor-pointer transition-colors hover:border-primary ${project.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-body font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
