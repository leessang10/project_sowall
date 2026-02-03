'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Character-by-character fade-in effect on scroll
      if (textRef.current) {
        const paragraphs = textRef.current.querySelectorAll('.animated-text');

        paragraphs.forEach((p) => {
          const text = p.textContent || '';
          p.innerHTML = '';

          // Split text into characters and wrap each in a span
          text.split('').forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0.15';
            span.style.display = 'inline-block';
            if (char === ' ') span.style.width = '0.25em';
            p.appendChild(span);
          });

          // Animate each character
          const chars = p.querySelectorAll('span');
          gsap.to(chars, {
            opacity: 1,
            stagger: 0.02,
            scrollTrigger: {
              trigger: p,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] py-32 px-[5%] bg-white"
    >
      <div className="w-full flex items-start justify-between gap-20">
        {/* Main Content */}
        <div ref={textRef} className="flex-1 flex flex-col items-end justify-between h-[120vh] pt-8">
          <p className="animated-text text-sm md:text-base leading-relaxed max-w-[600px]">
            AVEC specializes in interior architecture and brand consulting. It is a professional construction company with indoor construction business license and systematic process, and based on abundant experience and young and sensible designers, we aim to become a design company.
          </p>

          <p className="animated-text text-sm md:text-base leading-relaxed max-w-[600px]">
            In addition, brand consulting will help existing businesses and new start-ups plan and strategies through various partners so that they can move more safely and far, and will help them market more effectively through brand concepts and storytelling.
          </p>

          <p className="animated-text text-sm md:text-base leading-relaxed max-w-[600px]">
            We will be with you so that your business and design can meet and enjoy the best synergy effect.
          </p>
        </div>

        {/* Vertical Text */}
        <div className="hidden lg:flex flex-col items-center gap-32 pt-8">
          <h3 className="font-forum text-5xl tracking-[0.5em]" style={{ writingMode: 'vertical-rl' }}>Interior</h3>
          <h3 className="font-forum text-5xl tracking-[0.5em]" style={{ writingMode: 'vertical-rl' }}>Branding</h3>
          <h3 className="font-forum text-5xl tracking-[0.5em]" style={{ writingMode: 'vertical-rl' }}>Consulting</h3>
        </div>
      </div>
    </section>
  );
}
