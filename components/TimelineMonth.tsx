'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TimelineMonth as MonthType } from '@/types/timeline';
import TimelineCard from './TimelineCard';

interface TimelineMonthProps {
  month: MonthType;
  monthIndex: number;
  cardStartIndex: number;
}

export default function TimelineMonth({ month, monthIndex, cardStartIndex }: TimelineMonthProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* Constellation Background Overlay */}
      {month.hasConstellation && month.constellationImage && (
        <div className="fixed inset-0 z-0 opacity-[0.015] pointer-events-none">
          <Image
            src={month.constellationImage}
            alt="Star constellation"
            fill
            className="object-cover"
            priority={monthIndex < 2}
          />
        </div>
      )}

      {/* Enhanced Month Header with fade-in */}
      <div 
        ref={headerRef}
        className="sticky top-0 z-10 py-6 md:py-8 px-4 backdrop-blur-md bg-black/50 border-b border-[#c4b5fd]/10 transition-all duration-700"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className={`text-2xl md:text-3xl font-extralight text-[#c4b5fd]/70 transition-all duration-1000 ${
              isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {month.month}
          </h2>
          {month.hasConstellation && month.constellationDate && (
            <p 
              className={`mt-1 text-xs text-[#c4b5fd]/40 font-light transition-all duration-1000 delay-200 ${
                isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {month.constellationDate}
            </p>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10">
        {month.cards.map((card, cardIndex) => (
          <TimelineCard
            key={card.id}
            card={card}
            index={cardStartIndex + cardIndex}
          />
        ))}
      </div>
    </section>
  );
}

