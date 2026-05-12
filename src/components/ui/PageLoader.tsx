import { motion } from "framer-motion";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950">
            <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 blur-3xl bg-teal-500/20 rounded-full" />
                
                <motion.div
                    className="h-24 w-24 rounded-full border-t-2 border-teal-500 border-r-2 border-r-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-teal-400 text-[10px] tracking-[0.2em] font-black uppercase italic"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.4, 1, 0.4],
                      scale: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    Loading
                </motion.div>
            </div>
        </div>
    );
};

export default PageLoader;
