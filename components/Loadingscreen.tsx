'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        {/* Modern loading animation */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-purple-400/10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-300/40 rounded-full" />
          </motion.div>

          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-4 rounded-full border border-purple-300/10"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400/60 rounded-full" />
          </motion.div>

          {/* Center heart with pulse */}
          <motion.div
            className="relative z-10"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-8 h-8 text-purple-300/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl">
              <svg
                className="w-8 h-8 text-purple-400/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 w-48">
          <div className="h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ ease: 'linear' }}
              style={{ width: '100%' }}
            />
          </div>
          
          {/* Progress text */}
          <motion.div className="mt-4 text-center">
            <p className="text-[10px] font-light text-purple-200/30 tracking-[0.4em] uppercase tabular-nums">
              {progress}%
            </p>
          </motion.div>
        </div>
        
        {/* Loading text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p
            className="text-xs font-extralight text-purple-200/40 tracking-[0.3em] uppercase"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading Memories
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}