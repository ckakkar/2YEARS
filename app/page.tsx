'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from '@/components/LandingPage';
import Timeline from '@/components/Timeline';
import MusicPlayer from '@/components/MusicPlayer';
import LoadingScreen from '@/components/Loadingscreen';
import { generateAllMonths } from '@/data/timeline';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineData = generateAllMonths();

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setShowTimeline(true);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : !showTimeline ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.div
            key="timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Timeline data={timelineData} />
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}