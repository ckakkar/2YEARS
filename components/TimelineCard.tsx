'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { TimelineCard as CardType } from '@/types/timeline';

interface TimelineCardProps {
  card: CardType;
  index: number;
  cardNumber: number;
  totalCards: number;
}

export default function TimelineCard({ 
  card, 
  index, 
  cardNumber,
  totalCards 
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(cardRef, { 
    once: false, 
    margin: "-50px",
    amount: 0.4 
  });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div 
      ref={cardRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 snap-start"
      style={{ opacity, scale }}
    >
      {/* Subtle background gradient that follows the card */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/[0.03] via-transparent to-transparent" />
      </motion.div>

      <div className="relative max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Container - Premium presentation */}
          <motion.div
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.9
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image wrapper with premium effects */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl group">
              {/* Loading skeleton */}
              {!isLoaded && (
                <div className="absolute inset-0 skeleton rounded-2xl" />
              )}
              
              {/* Glass overlay with gradient - more subtle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/[0.05] via-transparent to-transparent z-10 mix-blend-overlay opacity-60" />
              
              {/* Actual image with parallax */}
              <motion.div
                className="relative w-full h-full"
                style={{ y: imageY }}
              >
                <Image
                  src={card.photo}
                  alt={card.caption}
                  fill
                  className={`object-cover transition-all duration-1000 ${
                    isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                  } ${isHovered ? 'scale-105' : 'scale-100'}`}
                  onLoad={() => setIsLoaded(true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </motion.div>

              {/* Premium border with glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-400/10 pointer-events-none" />
              
              {/* Hover effect - subtle glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 ring-1 ring-purple-300/20 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-2xl" />
              </motion.div>

              {/* Date overlay - if present */}
              {card.date && (
                <motion.div
                  className="absolute top-4 left-4 z-20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-light text-white/80 tracking-wider">
                      {card.date}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400/[0.03] rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Text Content - Enhanced typography */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            style={{ y: textY }}
          >
            {/* Card number with progress indicator */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : -30
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {/* Moment indicator */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-xs font-thin text-purple-300/30 tracking-[0.3em] uppercase">
                  Moment
                </span>
                <span className="text-sm font-light text-purple-200/50">
                  {cardNumber} / {totalCards}
                </span>
              </div>
              
              {/* Visual progress bar */}
              <div className="flex gap-1.5 justify-center lg:justify-start">
                {Array.from({ length: totalCards }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-[2px] transition-all duration-500 rounded-full ${
                      i < cardNumber 
                        ? 'w-6 bg-gradient-to-r from-purple-400/60 to-purple-300/40' 
                        : 'w-3 bg-white/5'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Caption with elegant word-by-word reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Background glow for text */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/[0.02] via-transparent to-transparent blur-3xl -z-10" />
              
              <p className="text-lg md:text-xl lg:text-2xl font-extralight text-white/70 leading-relaxed">
                {card.caption.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ 
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 20,
                      filter: isInView ? 'blur(0px)' : 'blur(10px)'
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + wordIndex * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: isInView ? 1 : 0,
                opacity: isInView ? 1 : 0
              }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="w-12 h-px bg-gradient-to-r from-purple-400/40 via-purple-300/20 to-transparent" />
              <div className="w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-purple-300/30 rounded-full animate-pulse delay-75" />
              <div className="w-1 h-1 bg-purple-200/20 rounded-full animate-pulse delay-150" />
            </motion.div>

            {/* Special tag if it's a special date */}
            {card.isSpecial && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8
                }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/5 border border-purple-400/20"
              >
                <svg className="w-3 h-3 text-purple-300/60" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-light text-purple-300/60 tracking-wider">Special Memory</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}