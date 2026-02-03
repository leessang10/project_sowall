'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import projects from '../project';

interface ProjectItemProps {
  project: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}

function ProjectItem({ project, index, scrollYProgress, totalItems }: ProjectItemProps) {
  // Each item's initial position on the wheel (evenly distributed around 360 degrees)
  const baseAngle = (index / totalItems) * 360;

  // Total rotation based on scroll (full rotation + extra to show last items)
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 360 + 180]);

  // Calculate final angle: base position + scroll rotation
  const angle = useTransform(scrollRotation, (rotation) => {
    const totalAngle = baseAngle + rotation;
    // Normalize to -180 to 180 range (0 is center of viewport)
    return ((totalAngle + 180) % 360) - 180;
  });

  // Calculate opacity based on angle (items near center are fully visible)
  const opacity = useTransform(angle, [-180, -60, 0, 60, 180], [0, 0.2, 1, 0.2, 0]);

  // Calculate scale based on angle (items near center are larger)
  const scale = useTransform(angle, [-180, -60, 0, 60, 180], [0.5, 0.7, 1.3, 0.7, 0.5]);

  // Calculate y position (circular motion) - increased range for more spacing
  // Negative sign to reverse wheel direction (scroll down = items move down)
  const y = useTransform(angle, (a) => -Math.sin((a * Math.PI) / 180) * 300);

  // 3D rotation for wheel effect (reversed direction)
  const rotateX = useTransform(angle, [-180, -60, 0, 60, 180], [-75, -30, 0, 30, 75]);

  // Font weight (bolder near center)
  const fontWeight = useTransform(angle, [-180, -60, 0, 60, 180], [200, 300, 700, 300, 200]);

  return (
    <motion.div
      style={{
        opacity,
        y,
        scale,
        rotateX,
        transformPerspective: 500,
        transformStyle: 'preserve-3d',
      }}
      className="absolute w-full py-4"
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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white min-h-[1000vh]"
      style={{ perspective: '1200px' }}
    >
      {/* Sticky container that stays in center while scrolling through section */}
      <div className="sticky top-0 h-screen px-[5%] flex items-center justify-center">
        <div className="relative max-w-4xl mx-auto w-full h-[80vh] overflow-hidden">
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {projects.map((project, index) => (
              <ProjectItem
                key={index}
                project={project}
                index={index}
                scrollYProgress={scrollYProgress}
                totalItems={projects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
