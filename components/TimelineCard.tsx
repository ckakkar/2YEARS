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
  const isInView = useInView(cardRef, { 
    once: false, 
    margin: "-100px",
    amount: 0.3 
  });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30px", "-30px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 snap-start"
      style={{ opacity }}
    >
      {/* Background gradient that follows the card */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-400/5 via-transparent to-transparent"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.8
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative max-w-5xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <motion.div
            ref={imageRef}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.9
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Loading skeleton */}
            {!isLoaded && (
              <div className="absolute inset-0 skeleton rounded-2xl" />
            )}
            
            {/* Glass overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/10 via-transparent to-transparent z-10 mix-blend-overlay" />
            
            {/* Actual image with parallax */}
            <motion.div
              className="relative w-full h-full"
              style={{ y: imageY }}
            >
              <Image
                src={card.photo}
                alt={card.caption}
                fill
                className={`object-cover transition-all duration-700 ${
                  isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-md'
                }`}
                onLoad={() => setIsLoaded(true)}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />
            </motion.div>

            {/* Image border glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl ring-1 ring-purple-400/20 pointer-events-none"
              animate={{
                opacity: isInView ? [0.3, 0.6, 0.3] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            style={{ y: textY }}
          >
            {/* Card number indicator */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : -30
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-xs font-thin text-purple-300/40 tracking-widest uppercase">
                Moment {cardNumber} of {totalCards}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: totalCards }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 transition-all duration-500 ${
                      i < cardNumber 
                        ? 'w-4 bg-purple-400/60' 
                        : 'w-2 bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Date */}
            {card.date && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm font-light text-purple-200/50 tracking-wider"
              >
                {card.date}
              </motion.p>
            )}

            {/* Caption with word-by-word reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl font-extralight text-white/70 leading-relaxed">
                {card.caption.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-[0.25em]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 10
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + wordIndex * 0.03,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-px bg-gradient-to-r from-purple-400/60 to-transparent mx-auto lg:mx-0"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}