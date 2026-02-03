'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import projects from '../project';

function HorizontalScrollingText() {
  // Create a string of all projects separated by spacing
  const projectText = projects.join('    ');
  // Duplicate for seamless loop
  const duplicatedText = `${projectText}    ${projectText}    ${projectText}`;

  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-screen overflow-hidden whitespace-nowrap pointer-events-none">
      <motion.div
        animate={{
          x: [0, '-33.33%'],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="inline-block"
      >
        <span className="text-3xl md:text-5xl font-light text-black">
          {duplicatedText}
        </span>
      </motion.div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="relative py-32 bg-white">
      <div className="relative flex items-center justify-center min-h-[80vh]">
        {/* Horizontal scrolling text - crosses entire screen */}
        <HorizontalScrollingText />

        {/* Center video/image */}
        <div className="relative w-full max-w-5xl aspect-[16/10] bg-gray-100 z-10">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
            alt="Showcase video"
            fill
            className="object-cover"
          />
          {/* Video placeholder - replace with actual video when ready */}
          {/* <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/path-to-video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
    </section>
  );
}
