'use client';

import { motion, MotionValue } from 'framer-motion';

interface ScrollProgressProps {
  progress: MotionValue<number>;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-400 to-purple-300 origin-left"
        style={{
          scaleX: progress,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-300/20 blur-md" />
    </div>
  );
}