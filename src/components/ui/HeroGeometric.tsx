import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const AnimatedShape = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="absolute"
  >
    {children}
  </motion.div>
);

const HeroGeometric = ({ badge, title1, title2 }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      {badge && <div className="badge text-sm">{badge}</div>}
      <h1 className="text-4xl font-bold">{title1}</h1>
      <h2 className="text-2xl font-light">{title2}</h2>
      
      <div className="shapes-container relative w-full h-full">
        {[...Array(5)].map((_, index) => (
          <AnimatedShape key={index}>
            <div className={`shape shape-${index + 1}`}></div>
          </AnimatedShape>
        ))}
      </div>
      <Circle className="absolute top-4 left-4" size={24} />
    </div>
  );
};

export default HeroGeometric;
