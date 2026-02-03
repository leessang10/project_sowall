'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import projects from '../project';

function ProjectItem({ project, index }: { project: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate opacity, y position, and scale based on scroll progress (lens effect)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.1, 0.3, 1, 0.3, 0.1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [150, 0, -150]
  );

  // Convex lens effect: scale up in center, scale down at edges
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.5, 0.7, 1.4, 0.7, 0.5]
  );

  // Font weight changes: bolder in center
  const fontWeight = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [200, 300, 700, 300, 200]
  );

  // 3D rotation effect: dramatic belt-like curve (convex lens direction)
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [-75, -30, 0, 30, 75]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
        rotateX,
        transformPerspective: 400,
        transformStyle: 'preserve-3d',
      }}
      className="py-3"
    >
      <motion.p
        style={{ fontWeight }}
        className="text-2xl md:text-4xl text-center"
      >
        {project}
      </motion.p>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <section className="py-32 px-[5%] bg-white min-h-[200vh]" style={{ perspective: '600px' }}>
      <div className="max-w-4xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
