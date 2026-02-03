'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="border-t border-black/10 py-24 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Text */}
        <div className="mb-32">
          <h2 className="font-forum text-4xl md:text-5xl leading-relaxed">
            Interior<br />
            Branding<br />
            Consulting.
          </h2>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* INQUIRIES */}
          <div>
            <h3 className="text-xs tracking-[2px] mb-6 text-black/60">INQUIRIES</h3>
            <div className="space-y-2">
              <p className="text-sm">avec641@naver.com</p>
              <p className="text-sm">1577.1649</p>
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <h3 className="text-xs tracking-[2px] mb-6 text-black/60">LOCATION</h3>
            <p className="text-sm">
              615, Seolleung-ro, Gangnam-gu, Seoul
            </p>
          </div>

          {/* FOLLOW */}
          <div>
            <h3 className="text-xs tracking-[2px] mb-6 text-black/60">FOLLOW</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-60 transition-opacity"
            >
              INSTAGRAM
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
