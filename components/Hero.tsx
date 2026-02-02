'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-[5%] mt-20 relative">
      <h1
        ref={titleRef}
        className="font-forum text-5xl md:text-7xl mb-5 opacity-0 translate-y-8"
      >
        Project SoWall
      </h1>
      <p
        ref={subtitleRef}
        className="text-base font-light tracking-[2px] text-black/60 opacity-0 translate-y-8"
      >
        Interior Design & Branding Excellence
      </p>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[2px] animate-bounce">
        <span>Scroll</span>
      </div>
    </section>
  );
}
