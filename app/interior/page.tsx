'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: '신사 더힐 피부과',
    location: '서울 강남구 신사동',
    date: '2025, January',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: '강남 클리닉',
    location: '서울 강남구 역삼동',
    date: '2024, December',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: '압구정 뷰티 센터',
    location: '서울 강남구 압구정동',
    date: '2024, November',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: '역삼 웰니스 센터',
    location: '서울 강남구 역삼동',
    date: '2024, October',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: '청담 피부과',
    location: '서울 강남구 청담동',
    date: '2024, September',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: '반포 메디컬 센터',
    location: '서울 서초구 반포동',
    date: '2024, August',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: '논현 성형외과',
    location: '서울 강남구 논현동',
    date: '2024, July',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: '도곡 치과',
    location: '서울 강남구 도곡동',
    date: '2024, June',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&h=600&fit=crop',
  },
  {
    id: 9,
    title: '서초 한의원',
    location: '서울 서초구 서초동',
    date: '2024, May',
    category: 'hospital',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
  },
];

const ITEMS_PER_PAGE = 6;

export default function InteriorPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 카테고리 필터링
  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  // 페이지네이션
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // 카테고리 변경 시 첫 페이지로
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // GSAP 애니메이션
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, [currentProjects]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="font-forum text-5xl md:text-6xl mb-5 tracking-[2px]">INTERIOR</h1>
            <p className="text-base text-black/60 tracking-wider">Our Design Portfolio</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-8 mb-16">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-sm tracking-[2px] pb-2 transition-all relative ${
                selectedCategory === 'all'
                  ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black'
                  : 'text-black/40 hover:text-black'
              }`}
            >
              ALL WORK
            </button>
            <button
              onClick={() => setSelectedCategory('hospital')}
              className={`text-sm tracking-[2px] pb-2 transition-all relative ${
                selectedCategory === 'hospital'
                  ? 'text-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-black'
                  : 'text-black/40 hover:text-black'
              }`}
            >
              HOSPITAL
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
            {currentProjects.map((project) => (
              <Link
                key={project.id}
                href={`/interior/${project.id}`}
                className="project-card group"
              >
                <div className="relative overflow-hidden mb-5">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl mb-2 transition-opacity group-hover:opacity-60">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/60 mb-1">{project.location}</p>
                  <p className="text-xs text-black/40 tracking-wider">{project.date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="text-sm tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-60 transition-opacity"
              >
                Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 text-sm transition-all ${
                      currentPage === page
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-black/10'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="text-sm tracking-wider disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-60 transition-opacity"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
