'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  '강남 세브란스 병원',
  '신사 피부과',
  '청담 성형외과',
  '압구정 웰니스 센터',
  '역삼 치과',
  '서초 한의원',
  '논현 뷰티 클리닉',
  '도곡 메디컬 센터',
  '삼성 정형외과',
  '대치 재활의학과',
  '역삼 안과',
  '강남 이비인후과',
];

export default function Clients() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.client-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-forum text-4xl md:text-6xl mb-5 tracking-[2px]">CLIENTS</h2>
        <p className="text-base text-black/60 tracking-wider">Trusted Partners</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="client-item p-8 text-center border border-black/10 text-sm tracking-wider transition-all duration-300 hover:border-black hover:-translate-y-1"
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
