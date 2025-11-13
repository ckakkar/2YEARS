'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { TimelineMonth as MonthType } from '@/types/timeline';
import TimelineCard from './TimelineCard';

interface TimelineMonthProps {
  month: MonthType;
  monthIndex: number;
  cardStartIndex: number;
  totalMonths: number;
}

export default function TimelineMonth({ 
  month, 
  monthIndex, 
  cardStartIndex,
  totalMonths 
}: TimelineMonthProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: false, margin: "-200px" });
  
  return (
    <section className="relative w-full">
      {/* Constellation Background - FIXED: Much more subtle opacity */}
      {month.hasConstellation && month.constellationImage && (
        <motion.div 
          className="fixed inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.03 : 0 }} // FIXED: Increased from 0.02 to 0.03 for slight visibility
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={month.constellationImage}
            alt="Star constellation"
            fill
            className="object-cover"
            priority={monthIndex < 2}
          />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0a0a]/50" />
        </motion.div>
      )}

      {/* Month Header - FIXED: Better contrast and reduced overlay */}
      <motion.div 
        ref={headerRef}
        className="sticky top-0 z-20 glass-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden py-8 px-6">
          {/* Background shimmer effect - more subtle */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/3 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <motion.h2 
                  className="text-3xl md:text-4xl font-thin text-white/90 tracking-wide" // FIXED: Better opacity
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: isInView ? 1 : 0.5 }} // FIXED: Better visibility when not in view
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {month.month}
                </motion.h2>
                
                {month.hasConstellation && month.constellationDate && (
                  <motion.p 
                    className="text-xs font-light text-purple-300/60 tracking-widest uppercase" // FIXED: Better contrast
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" />
                      {month.constellationDate}
                    </span>
                  </motion.p>
                )}
              </div>
              
              {/* Month progress indicator - FIXED: Better contrast */}
              <motion.div 
                className="text-sm font-thin text-white/40" // FIXED: Increased opacity
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white/60">{monthIndex + 1}</span>
                <span className="mx-2 text-white/40">/</span>
                <span className="text-white/40">{totalMonths}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cards Container */}
      <div className="relative z-10">
        {month.cards.length > 0 ? (
          month.cards.map((card, cardIndex) => (
            <TimelineCard
              key={card.id}
              card={card}
              index={cardStartIndex + cardIndex}
              cardNumber={cardIndex + 1}
              totalCards={month.cards.length}
            />
          ))
        ) : (
          /* Empty month placeholder */
          <motion.div 
            className="min-h-screen flex items-center justify-center px-6 snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center space-y-4 max-w-lg">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-purple-400/15 flex items-center justify-center">
                  <span className="text-2xl">💜</span>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-lg font-light text-white/50" // FIXED: Better visibility
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Memories from {month.month} coming soon...
              </motion.p>
              
              <motion.p 
                className="text-sm font-extralight text-white/30" // FIXED: Better visibility
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Add your beautiful moments to this timeline
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}