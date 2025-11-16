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

      {/* Modern, Centered Month Header */}
      <motion.div
        ref={headerRef}
        className="sticky top-0 z-20 w-full pointer-events-none" // Full width container, allows content to be centered
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center items-start pt-6">
          <motion.div
            className="pointer-events-auto"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-thin text-white tracking-wide [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
                {(() => {
                  const parts = month.month.split(' ');
                  const monthName = parts.slice(0, -1).join(' ');
                  const year = parts[parts.length - 1];
                  return (
                    <>
                      {monthName}{' '}
                      <span className="text-purple-400">{year}</span>
                    </>
                  );
                })()}
              </h2>
            </div>
          </motion.div>
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