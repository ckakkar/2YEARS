'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import ColorBends from './ColorBends';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
            {/* Journey badge - More prominent */}
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400/20 blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Badge container */}
                <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/5 via-purple-400/10 to-purple-500/5 backdrop-blur-md border border-purple-400/20">
                  <div className="flex items-center gap-4">
                    {/* Left decoration */}
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" />
                      <div className="w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-purple-200/30 rounded-full animate-pulse delay-150" />
                    </div>
                    
                    {/* Date content */}
                    <div className="text-center">
                      <p className="text-xs font-light text-purple-200/60 tracking-[0.3em] uppercase mb-1">
                        Our Journey Began
                      </p>
                      <p className="text-sm font-light text-purple-100/80 tracking-wider">
                        November 13, 2023
                      </p>
                    </div>
                    
                    {/* Right decoration */}
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-purple-200/30 rounded-full animate-pulse delay-150" />
                      <div className="w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-75" />
                      <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced days counter - Now prominently displayed */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="relative inline-block">
                {/* Background glow for days */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-purple-300/20 to-purple-400/10 blur-3xl scale-150" />
                
                {/* Days display */}
                <div className="relative">
                  <motion.div 
                    className="flex items-baseline justify-center gap-3"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.span 
                      className="text-[clamp(4rem,8vw,6rem)] font-thin text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 tabular-nums"
                      style={{
                        backgroundSize: '200% 100%',
                        animation: 'aurora 8s ease infinite',
                      }}
                    >
                      {rounded}
                    </motion.span>
                    <span className="text-2xl font-extralight text-purple-200/40">
                      Days
                    </span>
                  </motion.div>
                  
                  {/* Subtitle */}
                  <motion.p 
                    className="text-xs font-light text-purple-200/40 tracking-[0.3em] uppercase mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    And counting every moment
                  </motion.p>
                </div>
              </div>
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
            {/* Modern CTA button */}
            <motion.button
              onClick={onEnter}
              className="group relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative px-12 py-5">
                {/* Dynamic background */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 via-purple-400/10 to-purple-500/10 backdrop-blur-sm"
                  animate={{
                    backgroundPosition: isHovered ? '100% 50%' : '0% 50%',
                  }}
                  transition={{ duration: 2, ease: 'linear' }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Border with animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, transparent 30%, rgba(196, 181, 253, 0.3) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Inner border */}
                <div className="absolute inset-[1px] rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative px-8 py-3 flex items-center space-x-6">
                  <span className="text-sm font-light text-purple-100/80 tracking-[0.2em] uppercase">
                    Begin Our Story
                  </span>
                  <motion.div
                    animate={{
                      x: isHovered ? 5 : [0, 3, 0],
                    }}
                    transition={{
                      x: isHovered ? { duration: 0.2 } : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    <svg 
                      className="w-4 h-4 text-purple-300/60" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
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