import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Travel Discovery",
    description: "Geo-fenced travel platform with real-time map integration and dynamic destination cards.",
    tags: ["Next.js", "Firebase", "Leaflet"],
    image: "/travelApp.jpeg.png",
    span: "md:col-span-2 md:row-span-2",
    link: "https://travel.kritishsainju.com.np/",
    color: "from-blue-500/20"
  },
  {
    title: "Vibe Couture",
    description: "An experimental 3D product showcase using Three.js to solve spatial awareness issues in online fashion retail.",
    tags: ["Three.js", "React", "React Spring"],
    image: "/vibeCouture.jpeg.png",
    span: "md:col-span-1 md:row-span-1",
    link: "https://vibecouture.web.app/",
    color: "from-purple-500/20"
  },
  {
    title: "I-Space Store",
    description: "A flagship MERN e-commerce architecture with multi-level RBAC (Admin/Super Admin), real-world CRUD, and secure JWT-based identity management.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    span: "md:col-span-1 md:row-span-1",
    image: "/E-commerce.jpeg.png",
    link: "https://github.com/samit2059/iNoteBook",
    color: "from-teal-500/20"
  },
  {
    title: "Hult Prize Hub",
    description: "The global entrepreneurship center for Samriddhi College, showcasing winners, mentors, and local impact.",
    tags: ["React", "Framer Motion", "Postman"],
    span: "md:col-span-1 md:row-span-1",
    image: "/hultprizeatsamriddhi.jpeg.png",
    link: "https://hultprizeatsamriddhi.web.app/",
    color: "from-rose-500/20"
  },
  {
    title: "Eventra System",
    description: "End-to-end event management featuring ticketing, organizer dashboards, and real-time attendee tracking.",
    tags: ["Bootstrap", "JS", "Firebase"],
    span: "md:col-span-2 md:row-span-1",
    image: "/eventra.jpeg.png",
    link: "https://eventsme-me.web.app/",
    color: "from-amber-500/20"
  },
  {
    title: "Elite Portfolio",
    description: "The very experience you are browsing now — built for maximum performance and visual impact.",
    tags: ["TypeScript", "Tailwind", "Vite"],
    span: "md:col-span-1 md:row-span-1",
    image: "/portfolio.jpeg.png",
    link: "/",
    color: "from-cyan-500/20"
  },
];

const Work = () => {
  return (
    <main className="min-h-screen pt-32 pb-32 px-6 bg-neutral-950 relative overflow-hidden text-neutral-200 selection:bg-purple-500/30">

      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] blur-3xl pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-purple-600 rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[50%] h-[50%] bg-teal-600 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Content */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] italic uppercase mb-6">
                Selected <br />
                <span className="text-purple-500 underline decoration-purple-500/30">Works.</span>
              </h1>
              <div className="flex items-center gap-4 text-neutral-500 font-bold tracking-[0.2em] uppercase text-xs">
                <span>Showcase</span>
                <div className="w-12 h-px bg-neutral-800" />
                <span>2023 - 2025</span>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-neutral-400 text-lg md:text-xl max-w-sm font-medium leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "Turning complex technical requirements into elegant, high-performance digital solutions."
          </motion.p>
        </header>

        {/* Improved Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[340px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-neutral-800 flex flex-col transition-all duration-700 hover:border-white/20 active:scale-[0.98] ${project.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              {/* Vibrant Image Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />

                {/* Thematic Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent transition-all duration-500 group-hover:bg-neutral-950/20`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>

              {/* Top Bar with Tags */}
              <div className="relative z-20 p-8 flex justify-between items-start">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-20 p-8 mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-6 bg-purple-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
                  <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-sm font-medium leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 line-clamp-2">
                  {project.description}
                </p>

                {/* Animated "Explore" Link */}
                <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black tracking-widest text-white uppercase border-b border-white pb-1 flex items-center gap-2 hover:text-purple-400 hover:border-purple-400 transition-all"
                  >
                    View Project <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-1 rounded-full bg-neutral-900 border border-neutral-800">
            <div className="px-8 py-4 rounded-full bg-neutral-950 text-neutral-500 text-sm font-bold tracking-widest uppercase italic">
              More projects coming soon
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default Work;
