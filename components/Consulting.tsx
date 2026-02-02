'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const consultingItems = [
  {
    id: 1,
    title: 'Space Planning',
    description: '최적의 공간 활용과 동선 설계를 통해 효율적이고 아름다운 공간을 만듭니다.',
  },
  {
    id: 2,
    title: 'Brand Strategy',
    description: '차별화된 브랜드 아이덴티티 구축으로 고객의 가치를 극대화합니다.',
  },
  {
    id: 3,
    title: 'Construction Management',
    description: '설계부터 시공, 준공까지 전 과정을 체계적으로 관리합니다.',
  },
];

export default function Consulting() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.consulting-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-forum text-4xl md:text-6xl mb-5 tracking-[2px]">CONSULTING</h2>
        <p className="text-base text-black/60 tracking-wider">Strategic Design Solutions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-20">
        {consultingItems.map((item) => (
          <div key={item.id} className="consulting-item">
            <h3 className="text-2xl md:text-3xl mb-5">{item.title}</h3>
            <p className="text-base leading-relaxed text-black/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
