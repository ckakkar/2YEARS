'use client';

import { useEffect, useState } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const petNames = ['Rose', 'angel', 'kutty baby', 'puu', 'puttu', 'puchu', 'love', 'dummy baby'];
  const [currentName, setCurrentName] = useState(petNames[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(prev => {
        const currentIndex = petNames.indexOf(prev);
        const nextIndex = (currentIndex + 1) % petNames.length;
        return petNames[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1a0a2e] via-[#16213e] to-[#0a0a0a] text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-center px-6 space-y-8">
        <h1 
          className={`text-6xl md:text-8xl font-light tracking-wider transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ 
            color: '#d8b4fe',
            textShadow: '0 0 20px rgba(216, 180, 254, 0.5)'
          }}
        >
          Happy Anniversary
        </h1>
        
        <div className="h-24 flex items-center justify-center">
          <h2 
            key={currentName}
            className={`text-4xl md:text-6xl font-light transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-5 opacity-0 scale-95'
            }`}
            style={{ 
              color: '#e9d5ff',
              textShadow: '0 0 15px rgba(233, 213, 255, 0.4)'
            }}
          >
            {currentName}
          </h2>
        </div>

        <p 
          className={`text-xl md:text-2xl text-purple-200/80 font-light transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Our journey together
        </p>

        <button
          onClick={onEnter}
          className={`mt-12 px-8 py-4 rounded-full border-2 border-purple-400/50 bg-purple-500/10 backdrop-blur-sm text-purple-200 text-lg font-light hover:bg-purple-500/20 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          Begin Our Story
        </button>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <svg 
          className="w-6 h-6 text-purple-300/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

