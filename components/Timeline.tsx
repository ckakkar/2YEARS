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
  const [touchStartTime, setTouchStartTime] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const isScrollingRef = useRef(false);

  // Minimum swipe distance (in pixels) - reduced for better responsiveness
  const minSwipeDistance = 30;
  const maxSwipeTime = 300; // Maximum time for a swipe (ms)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
    setTouchStartTime(Date.now());
    setIsSwiping(true);
    isScrollingRef.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
    
    // Prevent default scrolling during swipe
    if (touchStart !== null && Math.abs((touchStart - e.targetTouches[0].clientY)) > 10) {
      isScrollingRef.current = true;
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartTime) {
      setIsSwiping(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const time = Date.now() - touchStartTime;
    const velocity = Math.abs(distance) / time;
    
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;
    const isFastSwipe = velocity > 0.3; // Fast swipe threshold

    if ((isUpSwipe || isDownSwipe) && (time < maxSwipeTime || isFastSwipe)) {
      if (containerRef.current) {
        // Find all snap points (each card)
        const container = containerRef.current;
        const snapPoints: number[] = [];
        const children = container.children;
        
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const cards = child.querySelectorAll('[class*="snap-start"]');
          cards.forEach((card) => {
            const cardElement = card as HTMLElement;
            snapPoints.push(cardElement.offsetTop);
          });
        }
        
        // Find the closest snap point
        const currentScroll = container.scrollTop;
        let targetScroll: number;
        
        if (isUpSwipe) {
          // Find next snap point
          targetScroll = snapPoints.find(point => point > currentScroll + 50) || 
                       snapPoints[snapPoints.length - 1];
        } else {
          // Find previous snap point
          const reversedPoints = [...snapPoints].reverse();
          targetScroll = reversedPoints.find(point => point < currentScroll - 50) || 
                       snapPoints[0];
        }
        
        // Smooth scroll to the snap point
        container.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
    
    setIsSwiping(false);
    setTouchStart(null);
    setTouchEnd(null);
    setTouchStartTime(null);
  };

  // Keyboard navigation - snap to cards
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (containerRef.current && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp')) {
        e.preventDefault();
        const container = containerRef.current;
        const snapPoints: number[] = [];
        const children = container.children;
        
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const cards = child.querySelectorAll('[class*="snap-start"]');
          cards.forEach((card) => {
            const cardElement = card as HTMLElement;
            snapPoints.push(cardElement.offsetTop);
          });
        }
        
        const currentScroll = container.scrollTop;
        let targetScroll: number;
        
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          targetScroll = snapPoints.find(point => point > currentScroll + 50) || 
                       snapPoints[snapPoints.length - 1];
        } else {
          const reversedPoints = [...snapPoints].reverse();
          targetScroll = reversedPoints.find(point => point < currentScroll - 50) || 
                       snapPoints[0];
        }
        
        container.scrollTo({
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
    <div className="relative bg-black">
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth touch-pan-y"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
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
    </div>
  );
}

