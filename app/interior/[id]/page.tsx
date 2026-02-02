'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 프로젝트 상세 데이터 (실제로는 API나 데이터베이스에서 가져옴)
const projectDetails: Record<string, any> = {
  '1': {
    title: '신사 더힐 피부과',
    location: '서울 강남구 신사동',
    date: '2025, January',
    category: 'Hospital / Medical',
    area: '150㎡',
    description: '현대적이고 세련된 디자인의 피부과 클리닉입니다. 환자들에게 편안하고 고급스러운 경험을 제공하기 위해 밝고 깨끗한 색상 팔레트와 최신 의료 시설을 결합했습니다.',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&h=800&fit=crop',
    ],
    features: [
      '대기실: 편안한 좌석과 자연광을 활용한 밝은 공간',
      '진료실: 최신 의료 장비와 청결한 환경',
      '상담실: 프라이버시를 보장하는 독립 공간',
      '수납/접수: 효율적인 동선 설계',
    ],
  },
  '2': {
    title: '강남 클리닉',
    location: '서울 강남구 역삼동',
    date: '2024, December',
    category: 'Hospital / Medical',
    area: '200㎡',
    description: '미니멀하고 모던한 디자인의 종합 클리닉입니다. 환자의 편의성과 의료진의 효율성을 동시에 고려한 공간 설계가 특징입니다.',
    images: [
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop',
    ],
    features: [
      '오픈형 대기 공간',
      '다목적 진료실',
      '최신 의료 장비 배치',
      '친환경 마감재 사용',
    ],
  },
};

export default function InteriorDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectDetails[id] || projectDetails['1'];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-black/60">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/interior" className="hover:text-black transition-colors">
              Interior
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{project.title}</span>
          </div>

          {/* Project Title */}
          <div className="mb-12">
            <h1 className="font-forum text-4xl md:text-5xl mb-6">{project.title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-black/40 mb-1">Location</p>
                <p>{project.location}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Date</p>
                <p>{project.date}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Category</p>
                <p>{project.category}</p>
              </div>
              <div>
                <p className="text-black/40 mb-1">Area</p>
                <p>{project.area}</p>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[16/10] mb-8">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-forum mb-4">Project Overview</h2>
            <p className="text-base leading-relaxed text-black/80">{project.description}</p>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {project.images.slice(1).map((image: string, index: number) => (
              <div key={index} className="relative aspect-[4/3]">
                <Image src={image} alt={`${project.title} ${index + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-12">
            <h2 className="text-2xl font-forum mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base text-black/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back Button */}
          <div className="text-center pt-12 border-t border-black/10">
            <Link
              href="/interior"
              className="inline-block px-12 py-4 border border-black text-sm tracking-[2px] transition-all hover:bg-black hover:text-white"
            >
              Back to List
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
