'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TimelineData } from '@/types/timeline';
import TimelineMonth from './TimelineMonth';
import ScrollProgress from './Scrollprogress';

interface TimelineProps {
  data: TimelineData;
}

export default function Timeline({ data }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const sections = container.querySelectorAll('.timeline-section');
      const currentScrollTop = container.scrollTop;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        const nextSection = Array.from(sections).find(section => {
          const element = section as HTMLElement;
          return element.offsetTop > currentScrollTop + 10;
        }) as HTMLElement;
        
        if (nextSection) {
          container.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
          });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        const prevSection = Array.from(sections).reverse().find(section => {
          const element = section as HTMLElement;
          return element.offsetTop < currentScrollTop - 10;
        }) as HTMLElement;
        
        if (prevSection) {
          container.scrollTo({
            top: prevSection.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track current section for navigation dots
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const totalHeight = container.scrollHeight - container.clientHeight;
      const scrollPercentage = scrollPosition / totalHeight;
      
      const sectionIndex = Math.floor(scrollPercentage * data.months.length);
      setCurrentSection(Math.min(sectionIndex, data.months.length - 1));
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [data.months.length]);

  // Quick navigation to month
  const scrollToMonth = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const sections = container.querySelectorAll('.timeline-section');
    const targetSection = sections[index] as HTMLElement;
    
    if (targetSection) {
      container.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  let cardIndex = 0;

  return (
    <>
      {/* Progress bar */}
      <ScrollProgress progress={scaleX} />
      
      {/* Navigation dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {data.months.map((month, index) => (
          <motion.button
            key={`${month.year}-${month.monthNumber}`}
            onClick={() => scrollToMonth(index)}
            className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index 
                ? 'bg-purple-400 scale-150' 
                : 'bg-white/20 hover:bg-white/40 hover:scale-125'
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-light text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {month.month}
            </span>
          </motion.button>
        ))}
      </div>
      
      {/* Timeline content */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-thin scrollbar-thumb-purple-400/20 scrollbar-track-transparent"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
        }}
      >
        {data.months.map((month, monthIndex) => {
          const currentCardStartIndex = cardIndex;
          cardIndex += month.cards.length;
          
          return (
            <div
              key={`${month.year}-${month.monthNumber}`}
              className="timeline-section"
            >
              <TimelineMonth
                month={month}
                monthIndex={monthIndex}
                cardStartIndex={currentCardStartIndex}
                totalMonths={data.months.length}
              />
            </div>
          );
        })}
        
        {/* Ending screen */}
        <motion.div 
          className="h-screen flex items-center justify-center snap-start relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-6 px-6">
            <motion.h2 
              className="text-6xl font-thin text-white/80"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hopefully We Find Each Other Again.
            </motion.h2>
            <motion.p 
              className="text-xl font-extralight text-purple-200/60"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              I love you always, Kanmini 💜
            </motion.p>
          </div>
        </motion.div>
      </div>
    </>
  );
}