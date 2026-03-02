import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "I-Space E-Commerce Platform",
    description: "Full-stack shopping experience with cart, checkout, and uses concept of admin and super admin.Full mern stack project.i have used all the CRUD operations and also used JWT token for authentication and authorization.",
    tags: ["React", "Node.js", "MongoDB", "Express js"],
    span: "md:col-span-2 md:row-span-2",
    image: "/E-commerce.jpeg.png",
    link: "https://github.com/samit2059/iNoteBook"
  },
  {
    title: "Travel App",
    description: "Travel app with map works and custom cards and role-based access.",
    tags: ["Next.js", "Tailwind", "firebase"],
    image: "/travelApp.jpeg.png",
    span: "md:col-span-1 md:row-span-1",
    link: "https://travel-app-six-iota.vercel.app/"
  },
  {
    title: "Portfolio",
    description: "Portfolio website for developers.Include the operations of email.js and for showing projects.",
    tags: ["React", "Tailwind", "TypeScript"],
    span: "md:col-span-1 md:row-span-2",
    image: "/portfolio.jpeg.png",
    link: "/"
  },
  {
    title: "Hult Prize at Samriddhi College",
    description: "Hult Prize at Samriddhi College is a global entrepreneurship program that challenges students to solve real-world problems through innovation and creativity.This site displays the information about the past Winners , Mentors and also Sponsers of the college.",
    tags: ["React", "firebase store", 'tailwind css', 'framer motion'],
    span: "md:col-span-1 md:row-span-2",
    image: "/hultprizeatsamriddhi.jpeg.png",
    link: "https://hultprizeatsamriddhi.web.app/"
  },
  {
    title: "Vibe Couture",
    description: "Project for solving real-world problem of wrong items as displayed in online and displaying it 3D makes it more unique and interactive.",
    tags: ["React", "Express", "three.js", "MongoDb", "Node.js"],
    span: "md:col-span-2 md:row-span-1",
    image: "/vibeCouture.jpeg.png",
    link: "https://vibecouture.web.app/"
  },
  {
    title: "Eventra -event management system",
    description: "Eventra is an event management system that allows users to create, manage, and promote events. It also provides a platform for event organizers to manage their events and for attendees to register for events.",
    tags: ["html", 'css', 'javaScript', 'bootstrap'],
    span: "md:col-span-2 md:row-span-1",
    image: "/eventra.jpeg.png",
    link: "https://eventsme-me.web.app/"
  },

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[280px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm flex flex-col cursor-pointer transition-all duration-500 hover:border-primary/50 shadow-sm hover:shadow-primary/10 ${project.span}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="relative z-20 p-6 h-full flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[10px] font-body font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/80 hover:bg-primary hover:text-primary-foreground p-2.5 rounded-full transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
