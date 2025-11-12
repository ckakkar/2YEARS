'use client';

import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import Timeline from '@/components/Timeline';
import MusicPlayer from '@/components/MusicPlayer';
import { generateAllMonths } from '@/data/timeline';

export default function Home() {
  const [showTimeline, setShowTimeline] = useState(false);
  const timelineData = generateAllMonths();

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a]">
      {!showTimeline ? (
        <LandingPage onEnter={() => setShowTimeline(true)} />
      ) : (
        <>
          <Timeline data={timelineData} />
          <MusicPlayer />
        </>
      )}
    </main>
  );
}
