'use client';

import { useEffect, useRef, FormEvent } from 'react';
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('메시지가 전송되었습니다!');
  };

  return (
    <section ref={containerRef} id="contact" className="py-24 px-[5%] max-w-[1400px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-forum text-4xl md:text-6xl mb-5 tracking-[2px]">CONTACT</h2>
        <p className="text-base text-black/60 tracking-wider">Let's Create Together</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h4 className="text-xs tracking-[2px] mb-2.5 text-black/60">Email</h4>
            <p className="text-base">info@projectsowall.com</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[2px] mb-2.5 text-black/60">Phone</h4>
            <p className="text-base">+82 2 1234 5678</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[2px] mb-2.5 text-black/60">Address</h4>
            <p className="text-base">
              서울특별시 강남구<br />
              테헤란로 123
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 flex flex-col gap-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-4 border border-black/20 bg-transparent text-sm transition-colors focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 border border-black/20 bg-transparent text-sm transition-colors focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full p-4 border border-black/20 bg-transparent text-sm transition-colors focus:outline-none focus:border-black"
            />
          </div>
          <div>
            <textarea
              rows={6}
              placeholder="Message"
              required
              className="w-full p-4 border border-black/20 bg-transparent text-sm transition-colors focus:outline-none focus:border-black resize-none"
            />
          </div>
          <button
            type="submit"
            className="self-start px-10 py-4 bg-black text-white text-sm tracking-[2px] transition-colors hover:bg-black/80"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
