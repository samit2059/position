import { motion } from 'framer-motion';
import React from 'react';

// TypeScript interfaces for props
interface HeroGeometricProps {
    title: string;
    description: string;
}

interface ElegantShapeProps {
    color: string;
}

// ElegantShape component
const ElegantShape: React.FC<ElegantShapeProps> = ({ color }) => (
    <motion.div
        className={`shape ${color}`}
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], opacity: [0, 1, 0] }}
        transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
        }}
    />
);

// HeroGeometric component
const HeroGeometric: React.FC<HeroGeometricProps> = ({ title, description }) => (
    <div className="hero-container flex flex-col items-center justify-center text-center space-y-4">
        <motion.h1 className="text-5xl font-bold fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            {title}
        </motion.h1>
        <motion.p className="text-xl fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
            {description}
        </motion.p>
        <div className="shapes-container relative w-full h-full">
            <ElegantShape color="bg-red-500" />
            <ElegantShape color="bg-blue-500" />
            <ElegantShape color="bg-green-500" />
            <ElegantShape color="bg-yellow-500" />
            <ElegantShape color="bg-purple-500" />
        </div>
    </div>
);

export { HeroGeometric, ElegantShape };