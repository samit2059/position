import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLink2, FiCalendar, FiBookOpen, FiX, FiExternalLink, FiChevronLeft, FiChevronRight, FiEye, FiDownload } from 'react-icons/fi';

interface Certificate {
    title: string;
    issuer: string;
    description: string;
    date: string;
    link: string;
    issuerLogo: string;
    image?: string; // High-res image or thumbnail
}

const certificatesData: Certificate[] = [
    {
        title: "Web Development Bootcamp",
        issuer: "Samriddhi IT Club",
        description: "Successfully completed intensive training in HTML, CSS, JavaScript, and React JS best practices, building a solid foundation in modern frontend architecture.",
        date: "June 18 – July 9, 2025",
        link: "/certificates/21daybootcamp.jpg",
        issuerLogo: "SITC",
        image: "/certificates/21daybootcamp.jpg",
    },
    {
        title: "AI and Prompt Engineering",
        issuer: "Skill Lab",
        description: "Mastered essential AI skills including fundamentals, effective prompting, advanced patterns, and workflow tools to drive productivity and innovation.",
        date: "December 25 – 26, 2025",
        link: "/certificates/promptengineer.jpg",
        issuerLogo: "SL",
        image: "/certificates/promptengineer.jpg",
    },
    {
        title: "HULT Prize – Participation",
        issuer: "Hult Prize at Samriddhi",
        description: "Recognized for active participation as a Competitor in the 2024-2025 On-Campus Program, focusing on social entrepreneurship and impact.",
        date: "February 24, 2025",
        link: "/certificates/hult2025participate.jpg",
        issuerLogo: "HP",
        image: "/certificates/hult2025participate.jpg",
    },
    {
        title: "HULT Prize - Web & Tech Team",
        issuer: "Hult Prize at Samriddhi",
        description: "Volunteered as a key member of the Web & Tech Team for the Hult Prize On-Campus Final, managing digital assets and technical operations.",
        date: "February 13, 2026",
        link: "/certificates/hultprize2026volunteer.jpg",
        issuerLogo: "HPv",
        image: "/certificates/hultprize2026volunteer.jpg",
    },
    {
        title: "CSIT Nepal - Lakshyarambha",
        issuer: "CSIT Association of Nepal",
        description: "Awarded Certificate of Appreciation for valuable contribution as a Participant/Volunteer at the Lakshyarambha 'Craft Your Career' session.",
        date: "September, 2025",
        link: "/certificates/csit-lachyarambha.jpg",
        issuerLogo: "CSIT",
        image: "/certificates/csit-lachyarambha.jpg",
    },
    {
        title: "Red Hat Academy – Linux Fundamental",
        issuer: "Red Hat Academy",
        description: "Focused on command-line proficiency, file system management, and server environments.",
        date: "March 19, 2025",
        link: "/certificates/redhat-linux.pdf",
        issuerLogo: "RH",
        image: "/certificates/redhat-linux.pdf",
    },
    {
        title: "Customer Service Essentials",
        issuer: "Cloud Factory",
        description: "Developed core competencies in professional customer engagement and high service standards.",
        date: "March 27, 2025",
        link: "/certificates/Customer_Service_Certificate.pdf",
        issuerLogo: "CF",
        image: "/certificates/Customer_Service_Certificate.pdf",
    },
    {
        title: "Professional Productivity & Time Management",
        issuer: "Cloud Factory",
        description: "Developed strategies for task prioritization, project scheduling, and workflow optimization.",
        date: "July 23, 2025",
        link: "/certificates/Time_Management_Certificate.pdf",
        issuerLogo: "CF",
        image: "/certificates/Time_Management_Certificate.pdf",
    },
    {
        title: "Communication Skills (Basic)",
        issuer: "General Education",
        description: "Enhanced ability to convey ideas effectively and build professional connections.",
        date: "December 8, 2026",
        link: "/certificates/basicCommunication.pdf",
        issuerLogo: "CS",
        image: "/certificates/basicCommunication.pdf",
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 25 }
    },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

const Certificates = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

    const selectedCert = selectedIndex !== null ? certificatesData[selectedIndex] : null;

    const closeViewer = () => setSelectedIndex(null);

    const goNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % certificatesData.length);
        }
    }, [selectedIndex]);

    const goPrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + certificatesData.length) % certificatesData.length);
        }
    }, [selectedIndex]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeViewer();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, goNext, goPrev]);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedIndex]);

    const isPDF = (url: string) => url.toLowerCase().endsWith('.pdf');

    return (
        <div className="certificates-section min-h-screen p-6 md:p-20 bg-neutral-950 relative overflow-hidden text-neutral-200">
            {/* BG Gradient */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] blur-3xl pointer-events-none">
                <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-purple-600 rounded-full" />
                <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-blue-600 rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 relative z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Certifications</h1>
                <p className="text-lg text-neutral-400 max-w-2xl">
                    A record of my professional training and accredited achievements.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            >
                {certificatesData.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="group bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full"
                    >
                        {/* Image Preview Container - COMMENTED OUT as requested */}
                        {/* 
                        <div
                            className="relative aspect-[4/3] bg-neutral-800 overflow-hidden cursor-pointer"
                            onClick={() => setSelectedIndex(index)}
                        >
                            {!imageErrors.has(index) && cert.image && !isPDF(cert.image) ? (
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    onError={() => setImageErrors(prev => new Set(prev).add(index))}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-600">
                                    {isPDF(cert.link) ? <FiLink2 size={32} /> : <FiBookOpen size={32} />}
                                    <span className="text-xs font-medium uppercase tracking-widest">{cert.issuerLogo}</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <FiEye className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" size={24} />
                            </div>
                        </div>
                        */}

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors leading-snug">{cert.title}</h3>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-700 bg-neutral-800 text-neutral-400 shrink-0 tracking-wider uppercase">
                                        {cert.issuerLogo}
                                    </span>
                                </div>
                                <p className="text-neutral-500 text-sm mb-4 line-clamp-3">{cert.description}</p>
                                <div className="flex items-center gap-2 text-xs text-neutral-300 mb-6 font-medium">
                                    <FiCalendar size={12} />
                                    <span>{cert.date}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedIndex(index)}
                                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
                            >
                                <span>View Credential</span>
                                <FiEye size={16} className="text-purple-400" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox / Modal Overlay */}
            <AnimatePresence>
                {selectedIndex !== null && selectedCert && (
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(12px)' }}
                        onClick={closeViewer}
                    >
                        <motion.div
                            variants={modalVariants}
                            className="relative w-full max-w-5xl max-h-full flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between mb-4 text-white">
                                <div className="pr-12">
                                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{selectedCert.title}</h2>
                                    <p className="text-neutral-400 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <a
                                        href={selectedCert.link}
                                        download
                                        className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                                        title="Download"
                                    >
                                        <FiDownload size={20} />
                                    </a>
                                    <button
                                        onClick={closeViewer}
                                        className="p-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer"
                                    >
                                        <FiX size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="relative flex-1 min-h-0 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden group shadow-2xl">
                                {isPDF(selectedCert.link) ? (
                                    <iframe
                                        src={`${selectedCert.link}#toolbar=0`}
                                        className="w-full h-[70vh] md:h-[75vh]"
                                        title={selectedCert.title}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center p-2">
                                        <img
                                            src={selectedCert.link}
                                            alt={selectedCert.title}
                                            className="max-w-full max-h-[75vh] object-contain rounded-lg"
                                        />
                                    </div>
                                )}

                                {/* Nav Arrows - Horizontal */}
                                <button
                                    onClick={goPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                                >
                                    <FiChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                                >
                                    <FiChevronRight size={24} />
                                </button>
                            </div>

                            <p className="mt-4 text-center text-neutral-500 text-xs font-medium uppercase tracking-widest">
                                {selectedIndex + 1} of {certificatesData.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;