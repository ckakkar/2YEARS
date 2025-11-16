'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import ColorBends from './ColorBends';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const petNames = [
    'Rose', 'Angel', 'Kutty Baby', 'Puu', 
    'Puttu', 'Puchu', 'Love', 'Dummy Baby', 
    'Lovey', 'GAY', 'KGB', 'Mushu Pork'
  ];

  // Calculate anniversary date
  const startDate = new Date('2023-11-13');
  const today = new Date();
  const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  // Sync motion value to state for rendering
  useMotionValueEvent(rounded, 'change', (latest) => {
    setDisplayCount(latest);
  });

  // Animated counter
  useEffect(() => {
    const animation = animate(count, daysDiff, {
      duration: 3,
      ease: [0.22, 1, 0.36, 1],
    });
    return animation.stop;
  }, [count, daysDiff]);

  // Pet names rotation with smoother timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prev) => (prev + 1) % petNames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [petNames.length]);

  // Smooth cursor tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* ColorBends animated background */}
      <div className="absolute inset-0">
        <ColorBends
          className="absolute inset-0"
          colors={['#e9d5ff', '#c4b5fd', '#a78bfa', '#8b5cf6']}
          rotation={30}
          speed={0.1}
          scale={1.2}
          frequency={0.8}
          warpStrength={1.2}
          mouseInfluence={0.6}
          parallax={0.3}
          noise={0.01}
          transparent={true}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/10 via-[#0a0a0a]/30 to-[#0a0a0a]/60" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Enhanced top section with prominent date display */}
        <motion.div 
          className="pt-8 md:pt-12 px-6 md:px-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Journey badge - Minimalistic */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="text-center">
                <p className="text-xs font-light text-white/40 tracking-[0.2em] uppercase mb-2">
                  Our Journey Began
                </p>
                <p className="text-sm font-light text-white/60 tracking-wide">
                  November 13, 2023
                </p>
              </div>
            </motion.div>

            {/* Days counter - Minimalistic */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-baseline justify-center gap-3 mb-3">
                <span className="text-[clamp(4rem,8vw,6rem)] font-thin text-white/90 tabular-nums">
                  {displayCount}
                </span>
                <span className="text-2xl font-light text-white/50">
                  Days
                </span>
              </div>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xs font-light text-white/30 tracking-[0.2em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                And counting every moment
              </motion.p>
            </motion.div>
          </div>
        </motion.div>

        {/* Center content - Anniversary message */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-8 py-8">
          <div className="text-center space-y-8 max-w-6xl mx-auto">
            {/* Main title with refined animation */}
            <div className="space-y-0">
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-[clamp(3rem,11vw,9rem)] font-thin text-white leading-[0.85] tracking-[-0.02em]"
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transform: `translateX(${mousePosition.x * 20}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  Happy
                </motion.h1>
              </div>
              
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-[clamp(3rem,11vw,9rem)] font-thin text-white leading-[0.85] tracking-[-0.02em]"
                  initial={{ y: 120 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transform: `translateX(${mousePosition.x * -20}px)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  Anniversary
                </motion.h1>
              </div>
            </div>

            {/* Dynamic name with enhanced presentation */}
            <div className="h-20 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNameIndex}
                  className="absolute"
                  initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, scale: 0.9, filter: 'blur(10px)' }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-extralight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 tracking-[0.05em]">
                    {petNames[currentNameIndex]}
                  </h2>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 text-[clamp(1.8rem,5vw,3.5rem)] font-extralight text-purple-300/20 blur-2xl -z-10">
                    {petNames[currentNameIndex]}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Love message */}
            <motion.p
              className="text-sm md:text-base font-light text-white/50 tracking-wider max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            >
              Two years of endless love, laughter, and Dummy baby behaviours
            </motion.p>
          </div>
        </div>

        {/* Bottom section with CTA */}
        <motion.div 
          className="pb-12 md:pb-16 px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
            {/* Modern minimalistic CTA button */}
            <motion.button
              onClick={onEnter}
              className="group relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="relative flex items-center space-x-3 px-1 py-2">
                {/* Underline effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-white/40"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '100%' : 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                
                {/* Content */}
                <span className="text-sm font-light text-white/70 tracking-[0.15em] uppercase">
                  Begin Our Story
                </span>
                <motion.div
                  animate={{
                    x: isHovered ? 4 : 0,
                    opacity: isHovered ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  <svg 
                    className="w-3.5 h-3.5 text-white/60" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.button>

            {/* Subtle scroll indicator */}
            <motion.div
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <p className="text-[10px] font-light text-white/20 tracking-[0.3em] uppercase">Scroll to explore</p>
              <motion.div
                className="w-[1px] h-12 bg-gradient-to-b from-purple-300/40 via-purple-300/20 to-transparent"
                animate={{
                  height: ['30px', '48px', '30px'],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 800,
            }}
            animate={{
              y: -20,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}