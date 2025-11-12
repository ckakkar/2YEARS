'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  
  const petNames = [
    'Rose', 'Angel', 'Kutty Baby', 'Puu', 
    'Puttu', 'Puchu', 'Love', 'Dummy Baby', 
    'Lovey', 'GAY', 'KGB', 'Mushu Pork'
  ];

  // Animated counter
  useEffect(() => {
    const animation = animate(count, 730, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return animation.stop;
  }, [count]);

  // Pet names rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % petNames.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [petNames.length]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full filter blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Anniversary text with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="overflow-hidden">
            <motion.h1 
              className="text-[clamp(3rem,10vw,8rem)] font-thin text-white/90 leading-[0.9] tracking-tight"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-block">Happy</span>
            </motion.h1>
          </div>
          
          <div className="overflow-hidden">
            <motion.h1 
              className="text-[clamp(3rem,10vw,8rem)] font-thin text-white/90 leading-[0.9] tracking-tight"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="inline-block">Anniversary</span>
            </motion.h1>
          </div>

          {/* Dynamic name with smooth transitions */}
          <div className="h-20 flex items-center justify-center relative">
            <motion.h2
              key={currentNameIndex}
              className="text-[clamp(2rem,6vw,4rem)] font-extralight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {petNames[currentNameIndex]}
            </motion.h2>
          </div>

          {/* Days counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-2"
          >
            <motion.p className="text-6xl font-thin text-white/20">
              {rounded}
            </motion.p>
            <p className="text-sm font-light text-white/30 tracking-[0.3em] uppercase">
              Days Together
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16"
        >
          <motion.button
            onClick={onEnter}
            className="group relative px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-purple-300/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Button border */}
            <div className="relative px-8 py-3 rounded-full border border-purple-300/20 backdrop-blur-sm">
              <span className="relative text-sm font-light text-purple-100/70 tracking-wider uppercase">
                Begin Our Story
              </span>
            </div>

            {/* Animated arrow */}
            <motion.span
              className="absolute right-8 top-1/2 -translate-y-1/2 text-purple-300/50"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-purple-300/40 to-transparent"
          animate={{
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}