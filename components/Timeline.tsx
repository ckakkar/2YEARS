'use client';

import { useEffect, useRef, useState } from 'react';
import { TimelineData } from '@/types/timeline';
import TimelineMonth from './TimelineMonth';

interface TimelineProps {
  data: TimelineData;
}

export default function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe || isDownSwipe) {
      // Smooth scroll to next/previous section
      if (containerRef.current) {
        const scrollAmount = window.innerHeight;
        const currentScroll = containerRef.current.scrollTop;
        const targetScroll = isUpSwipe 
          ? currentScroll + scrollAmount 
          : currentScroll - scrollAmount;
        
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (containerRef.current && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        e.preventDefault();
        const scrollAmount = window.innerHeight;
        const currentScroll = containerRef.current.scrollTop;
        const targetScroll = e.key === 'ArrowDown'
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;
        
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position for smooth animations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 150);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, []);

  let cardIndex = 0;

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{
        scrollBehavior: 'smooth',
        WebkitOverflowScrolling: 'touch',
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {data.months.map((month, monthIndex) => {
        const currentCardStartIndex = cardIndex;
        cardIndex += month.cards.length;
        
        return (
          <TimelineMonth
            key={`${month.year}-${month.monthNumber}`}
            month={month}
            monthIndex={monthIndex}
            cardStartIndex={currentCardStartIndex}
          />
        );
      })}
    </div>
  );
}

