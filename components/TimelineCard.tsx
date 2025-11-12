'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TimelineCard as CardType } from '@/types/timeline';

interface TimelineCardProps {
  card: CardType;
  index: number;
}

export default function TimelineCard({ card, index }: TimelineCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 md:py-32 snap-start snap-always"
      style={{
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      <div className="max-w-3xl w-full space-y-10 md:space-y-12">
        {/* Image with scale and fade effect */}
        <div 
          className={`relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.96] translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4b5fd]/5 via-transparent to-transparent z-10 pointer-events-none" />
          <Image
            src={card.photo}
            alt={card.caption}
            fill
            className="object-cover transition-transform duration-1000 ease-out"
            style={{
              transform: isVisible ? 'scale(1)' : 'scale(1.05)',
            }}
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
        
        {/* Text content with staggered reveal */}
        <div 
          className={`text-center space-y-4 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {card.date && (
            <p className="text-[#c4b5fd]/60 text-xs font-light tracking-wider">
              {card.date}
            </p>
          )}
          <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-xl mx-auto">
            {card.caption}
          </p>
        </div>
      </div>
    </div>
  );
}

