'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
    title: '신사 메디컬 센터',
    subtitle: 'Modern Medical Interior',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
    title: '강남 클리닉',
    subtitle: 'Minimal Design Clinic',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1631248054403-c249d3a58e4f?w=800&h=600&fit=crop',
    title: '압구정 뷰티 센터',
    subtitle: 'Luxury Beauty Clinic',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
    title: '역삼 웰니스 센터',
    subtitle: 'Wellness & Spa Design',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
    title: '청담 피부과',
    subtitle: 'Premium Dermatology',
  },
];

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      scrollElement.style.cursor = 'grabbing';
      startX = e.pageX - scrollElement.offsetLeft;
      scrollLeft = scrollElement.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollElement.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollElement.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollElement.offsetLeft;
      const walk = (x - startX) * 2;
      scrollElement.scrollLeft = scrollLeft - walk;
    };

    scrollElement.addEventListener('mousedown', handleMouseDown);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);
    scrollElement.addEventListener('mouseup', handleMouseUp);
    scrollElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollElement.removeEventListener('mousedown', handleMouseDown);
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
      scrollElement.removeEventListener('mouseup', handleMouseUp);
      scrollElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    <section ref={containerRef} id="interior" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-forum text-4xl md:text-6xl mb-5 tracking-[2px]">INTERIOR</h2>
        <p className="text-base text-black/60 tracking-wider">Hospital & Commercial Design</p>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden cursor-grab py-5 mx-[-5%] px-[5%] scrollbar-hide"
      >
        <div className="flex gap-10 w-max">
          {galleryItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[500px] md:w-[600px]">
              <div className="w-full h-[300px] md:h-[450px] overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl md:text-2xl mb-2.5">{item.title}</h3>
              <p className="text-sm text-black/60">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-black/60 tracking-[2px]">
        ← Drag to browse →
      </div>
    </section>
  );
}
