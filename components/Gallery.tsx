'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
    title: '여의도 벗채운 피부과',
    category: 'HOSPITAL',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop',
    title: '논현 바디프랜드',
    category: 'SHOWROOM',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1631248054403-c249d3a58e4f?w=1200&h=800&fit=crop',
    title: '청담 피부과',
    category: 'CLINIC',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop',
    title: '역삼 웰니스 센터',
    category: 'WELLNESS',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1200&h=800&fit=crop',
    title: '신사 메디컬 센터',
    category: 'MEDICAL',
  },
];

function CarouselNavigation() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      {/* Left Arrow */}
      <button
        onClick={scrollPrev}
        className={`hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-10 transition-all ${
          !canScrollPrev ? 'opacity-20 cursor-not-allowed' : 'opacity-50 hover:opacity-100'
        }`}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-12 h-12" strokeWidth={1.5} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        className={`hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-10 transition-all ${
          !canScrollNext ? 'opacity-20 cursor-not-allowed' : 'opacity-50 hover:opacity-100'
        }`}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-12 h-12" strokeWidth={1.5} />
      </button>
    </>
  );
}

export default function Gallery() {
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
    <>
      {/* Title - Above the gray background */}
      <div className="px-[5%] py-8 bg-white">
        <h2 className="font-forum text-4xl md:text-5xl">Interior</h2>
      </div>

      {/* Gallery Section with gray background */}
      <section ref={containerRef} id="interior" className="relative py-12 bg-[#f8f8f8]">
        {/* CLICK & DRAG - Center */}
        <p className="text-xs tracking-[3px] text-black/40 text-center mb-12">CLICK & DRAG</p>

        {/* Carousel Container */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            dragFree: true,
          }}
          className="w-full"
        >
          <div className="relative px-[5%]">
            <CarouselNavigation />

            <CarouselContent className="-ml-6">
              {galleryItems.map((item) => (
                <CarouselItem key={item.id} className="pl-6 md:basis-[90%] lg:basis-[70%]">
                  <div className="w-full">
                    <div className="w-full h-[500px] md:h-[600px] overflow-hidden mb-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl mb-2 text-center">{item.title}</h3>
                    <p className="text-xs tracking-[2px] text-black/60 text-center">{item.category}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </section>
    </>
  );
}
