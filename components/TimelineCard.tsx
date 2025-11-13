'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { TimelineCard as CardType } from '@/types/timeline';

interface TimelineCardProps {
  card: CardType;
  index: number;
  cardNumber: number;
  totalCards: number;
}

export default function TimelineCard({ 
  card, 
  index, 
  cardNumber,
  totalCards 
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 1, height: 1 });
  const [imageError, setImageError] = useState(false);
  
  // Check if the file is a video
  const isVideo = card.photo.toLowerCase().endsWith('.mov') || 
                  card.photo.toLowerCase().endsWith('.mp4') || 
                  card.photo.toLowerCase().endsWith('.webm') ||
                  card.photo.toLowerCase().endsWith('.avi');
  const isInView = useInView(cardRef, { 
    once: false, 
    margin: "-50px",
    amount: 0.3 
  });

  // Autoplay/pause video based on viewport visibility
  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          // Autoplay might be blocked by browser, that's okay
          console.log('Video autoplay prevented:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, isVideo]);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  // FIXED: Changed opacity range to maintain better visibility
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  // Determine if image is portrait or landscape
  const aspectRatio = imageDimensions.width / imageDimensions.height;
  const isPortrait = aspectRatio < 1;
  const isSquare = Math.abs(aspectRatio - 1) < 0.2;

  // FIXED: Format caption with proper spacing and line break support
  const formatCaption = (text: string) => {
    // Split by \n for line breaks
    const lines = text.split('\\n').map(line => line.trim()).filter(line => line.length > 0);
    
    return lines.map((line, lineIndex) => (
      <span key={lineIndex} className="block mb-2">
        {line.split(' ').filter(word => word.length > 0).map((word, wordIndex, words) => (
          <motion.span
            key={`${lineIndex}-${wordIndex}`}
            className="inline-block"
            style={{ marginRight: wordIndex < words.length - 1 ? '0.4em' : '0' }}
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
              filter: isInView ? 'blur(0px)' : 'blur(10px)'
            }}
            transition={{
              duration: 0.5,
              delay: 0.4 + (lineIndex * 0.1) + (wordIndex * 0.03),
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    ));
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 snap-start"
      style={{ opacity, scale }}
    >
      {/* REMOVED: Heavy background gradient overlay */}
      
      <div className="relative max-w-7xl w-full">
        <div className={`grid gap-8 lg:gap-12 items-center ${
          isPortrait ? 'lg:grid-cols-[1fr,1.5fr]' : 'lg:grid-cols-2'
        }`}>
          {/* Image Container - Adaptive sizing */}
          <motion.div
            ref={imageRef}
            className="relative flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.9
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Adaptive container based on image orientation */}
            <div className={`relative overflow-hidden rounded-2xl group ${
              isPortrait 
                ? 'max-w-[400px] w-full' 
                : isSquare 
                  ? 'max-w-[500px] w-full'
                  : 'w-full'
            }`}>
              {/* Aspect ratio wrapper */}
              <div className={`relative ${
                isPortrait 
                  ? 'aspect-[3/4]' 
                  : isSquare 
                    ? 'aspect-square'
                    : 'aspect-[4/3]'
              } overflow-hidden rounded-2xl`}>
                {/* Loading skeleton */}
                {!isLoaded && !imageError && (
                  <div className="absolute inset-0 skeleton rounded-2xl" />
                )}

                {/* Error state */}
                {imageError && (
                  <div className="absolute inset-0 bg-purple-400/5 rounded-2xl flex flex-col items-center justify-center">
                    <div className="text-purple-300/40 mb-3">
                      {isVideo ? (
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      ) : (
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-xs text-purple-300/30 text-center px-4">
                      Add {isVideo ? 'video' : 'photo'} to<br />public/photos/<br />{card.photo.split('/').pop()}
                    </p>
                  </div>
                )}
                
                {/* REMOVED: Heavy glass overlay - keeping it minimal */}
                
                {/* Actual image or video with parallax */}
                <motion.div
                  className="relative w-full h-full"
                  style={{ y: imageY }}
                >
                  {isVideo ? (
                    <video
                      ref={videoRef}
                      src={card.photo}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                      } ${isHovered ? 'scale-105' : 'scale-100'}`}
                      onLoadedMetadata={(e) => {
                        const video = e.target as HTMLVideoElement;
                        setImageDimensions({ 
                          width: video.videoWidth, 
                          height: video.videoHeight 
                        });
                        setIsLoaded(true);
                        // If video is in view when it loads, start playing
                        if (isInView) {
                          video.play().catch((error) => {
                            console.log('Video autoplay prevented:', error);
                          });
                        }
                      }}
                      onError={() => setImageError(true)}
                      controls
                      playsInline
                      loop
                      muted
                      preload="metadata"
                    />
                  ) : (
                    <Image
                      src={card.photo}
                      alt={card.caption}
                      fill
                      className={`object-cover transition-all duration-1000 ${
                        isLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                      } ${isHovered ? 'scale-105' : 'scale-100'}`}
                      onLoad={(e: any) => {
                        const img = e.target as HTMLImageElement;
                        setImageDimensions({ 
                          width: img.naturalWidth, 
                          height: img.naturalHeight 
                        });
                        setIsLoaded(true);
                      }}
                      onError={() => setImageError(true)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority={index < 2}
                    />
                  )}
                </motion.div>

                {/* Subtle border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-purple-400/20 pointer-events-none" />
                
                {/* Hover effect - more subtle */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 ring-1 ring-purple-300/30 rounded-2xl" />
                </motion.div>

                {/* Date overlay */}
                {card.date && (
                  <motion.div
                    className="absolute top-4 left-4 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                      <p className="text-xs font-light text-white tracking-wider">
                        {card.date}
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Subtle floating decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400/[0.02] rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Text Content - Enhanced visibility and spacing */}
          <motion.div
            className={`space-y-6 text-center lg:text-left ${
              isPortrait ? 'lg:pl-4' : ''
            }`}
            style={{ y: textY }}
          >
            {/* Card number with progress */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : -30
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {/* Moment indicator - FIXED: Better contrast */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-xs font-thin text-purple-300/50 tracking-[0.3em] uppercase">
                  Moment
                </span>
                <span className="text-sm font-light text-purple-200/70">
                  {cardNumber} / {totalCards}
                </span>
              </div>
              
              {/* Visual progress */}
              <div className="flex gap-1.5 justify-center lg:justify-start">
                {Array.from({ length: Math.min(totalCards, 10) }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-[2px] transition-all duration-500 rounded-full ${
                      i < cardNumber 
                        ? 'w-6 bg-gradient-to-r from-purple-400/80 to-purple-300/60' 
                        : 'w-3 bg-white/10'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Caption with FIXED formatting and visibility */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >              
              {/* FIXED: Better text visibility and spacing */}
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white/90 leading-relaxed">
                {formatCaption(card.caption)}
              </div>
            </motion.div>

            {/* Decorative elements - more subtle */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: isInView ? 1 : 0,
                opacity: isInView ? 1 : 0
              }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="w-12 h-px bg-gradient-to-r from-purple-400/60 via-purple-300/30 to-transparent" />
              <div className="flex gap-1.5">
                <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-75" />
                <div className="w-1 h-1 bg-purple-200/30 rounded-full animate-pulse delay-150" />
              </div>
            </motion.div>

            {/* Special memory badge */}
            {card.isSpecial && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0.8
                }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/30"
              >
                <svg className="w-3 h-3 text-purple-300/70" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-light text-purple-300/70 tracking-wider">Special Memory</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}