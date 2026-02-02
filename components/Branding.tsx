'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const brandingItems = [
  {
    id: 1,
    title: 'Brand Identity',
    description: '로고, 심볼, 브랜드 가이드',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="35" stroke="#191919" strokeWidth="2"/>
        <path d="M40 20L40 60M20 40L60 40" stroke="#191919" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Marketing Design',
    description: '브로슈어, 리플렛, 포스터',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="20" width="50" height="40" stroke="#191919" strokeWidth="2"/>
        <path d="M25 30L55 30M25 40L55 40M25 50L45 50" stroke="#191919" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Digital Presence',
    description: '웹사이트, SNS, 디지털 마케팅',
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="40" height="50" stroke="#191919" strokeWidth="2"/>
        <circle cx="40" cy="35" r="8" stroke="#191919" strokeWidth="2"/>
        <path d="M30 55L50 55" stroke="#191919" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function Branding() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.branding-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="branding" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-forum text-4xl md:text-6xl mb-5 tracking-[2px]">BRANDING</h2>
        <p className="text-base text-black/60 tracking-wider">Visual Identity & Brand Strategy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-20">
        {brandingItems.map((item) => (
          <div
            key={item.id}
            className="branding-item text-center p-10 transition-transform duration-300 hover:-translate-y-2.5"
          >
            <div className="mb-8 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl md:text-2xl mb-4">{item.title}</h3>
            <p className="text-sm text-black/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
