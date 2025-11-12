'use client';

import { useEffect, useState } from 'react';

interface LandingPageProps {
  onEnter: () => void;
}

export default function LandingPage({ onEnter }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const petNames = ['Rose', 'Angel', 'Kutty Baby', 'Puu', 'Puttu', 'Puchu', 'Love', 'Dummy Baby', 'Lovey', 'GAY', 'KGB', 'Mushu Pork'];
  const [currentName, setCurrentName] = useState(petNames[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentName(prev => {
          const currentIndex = petNames.indexOf(prev);
          const nextIndex = (currentIndex + 1) % petNames.length;
          return petNames[nextIndex];
        });
        setIsTransitioning(false);
      }, 400);
    }, 3500);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(196, 181, 253, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(196, 181, 253, 0.05) 0%, transparent 50%)',
            animation: 'pulse 12s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {/* Main title with letter stagger effect and glitch on hover */}
          <div className={`transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-white leading-none group cursor-default">
              <span className="inline-block hover:animate-[glitch-text_0.3s_ease-in-out] transition-all duration-300" style={{ animationDelay: '0ms' }}>Happy</span>
              <span className="inline-block ml-3 md:ml-4 hover:animate-[glitch-text_0.3s_ease-in-out] transition-all duration-300" style={{ animationDelay: '100ms' }}>Anniversary</span>
            </h1>
          </div>
          
          {/* Name with smooth scale transition and glitch on hover */}
          <div className="h-20 md:h-28 flex items-center justify-center">
            <h2 
              key={currentName}
              className={`text-3xl md:text-5xl lg:text-6xl font-extralight text-[#c4b5fd] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:animate-[glitch-text_0.3s_ease-in-out] cursor-default ${
                isTransitioning ? 'opacity-0 scale-95 translate-y-2' : 'opacity-100 scale-100 translate-y-0'
              }`}
            >
              {currentName}
            </h2>
          </div>

          {/* Subtitle with fade */}
          <div className={`transition-all duration-[1200ms] ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}>
            <p className="text-sm text-white/30 font-light tracking-wide">
              Our journey together
            </p>
          </div>
        </div>

        {/* Enhanced CTA Button with glitch */}
        <div className={`mt-20 transition-all duration-[1200ms] ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}>
          <button
            onClick={onEnter}
            className="group relative text-sm text-white/50 font-light hover:text-[#c4b5fd] transition-all duration-500"
          >
            <span className="relative z-10 inline-block group-hover:animate-[glitch-text_0.3s_ease-in-out]">Begin our story</span>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c4b5fd] group-hover:w-full transition-all duration-700 ease-out" />
            <span className="absolute -bottom-1 left-0 w-full h-px bg-[#c4b5fd]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator with animation */}
      <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-[1500ms] delay-700 ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-[#c4b5fd]/40 via-[#c4b5fd]/20 to-transparent" />
          <div 
            className="w-1 h-1 rounded-full bg-[#c4b5fd]/40"
            style={{ 
              animation: 'pulse 2s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
        </div>
      </div>
    </div>
  );
}

