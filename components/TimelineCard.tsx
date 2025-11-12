'use client';

import Image from 'next/image';
import { TimelineCard as CardType } from '@/types/timeline';

interface TimelineCardProps {
  card: CardType;
  index: number;
}

export default function TimelineCard({ card, index }: TimelineCardProps) {
  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-16 snap-start"
      style={{
        scrollSnapAlign: 'start',
      }}
    >
      <div className="max-w-2xl w-full space-y-6">
        <div 
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
          style={{
            boxShadow: '0 20px 60px rgba(216, 180, 254, 0.2)',
          }}
        >
          <Image
            src={card.photo}
            alt={card.caption}
            fill
            className="object-cover"
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        
        <div className="text-center space-y-4">
          {card.date && (
            <p className="text-purple-300/70 text-sm font-light tracking-wide">
              {card.date}
            </p>
          )}
          <p 
            className="text-purple-100 text-lg md:text-xl leading-relaxed font-light px-4"
            style={{ lineHeight: '1.8' }}
          >
            {card.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

