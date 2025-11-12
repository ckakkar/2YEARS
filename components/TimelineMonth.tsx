'use client';

import Image from 'next/image';
import { TimelineMonth as MonthType } from '@/types/timeline';
import TimelineCard from './TimelineCard';

interface TimelineMonthProps {
  month: MonthType;
  monthIndex: number;
  cardStartIndex: number;
}

export default function TimelineMonth({ month, monthIndex, cardStartIndex }: TimelineMonthProps) {
  return (
    <section className="relative w-full">
      {/* Constellation Background Overlay */}
      {month.hasConstellation && month.constellationImage && (
        <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
          <Image
            src={month.constellationImage}
            alt="Star constellation"
            fill
            className="object-cover"
            priority={monthIndex < 2}
          />
        </div>
      )}

      {/* Month Header */}
      <div className="sticky top-0 z-10 py-8 px-6 backdrop-blur-md bg-black/20 border-b border-purple-500/20">
        <h2 
          className="text-3xl md:text-4xl font-light text-center text-purple-200 tracking-wide"
          style={{ textShadow: '0 0 20px rgba(216, 180, 254, 0.3)' }}
        >
          {month.month}
        </h2>
        {month.hasConstellation && month.constellationDate && (
          <p className="text-center text-purple-300/60 text-sm mt-2">
            ✨ Special date: {month.constellationDate}
          </p>
        )}
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

