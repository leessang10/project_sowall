'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-black/10">
      <div className="mx-auto px-[5%] py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <h1 className="font-forum text-2xl tracking-wider">Project SoWall</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-10 items-center">
              <li
                className="relative group"
              >
                <Link
                  href="/interior"
                  className="text-sm tracking-wider relative py-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  INTERIOR
                </Link>
              </li>
              <li>
                <Link
                  href="#branding"
                  className="text-sm tracking-wider relative py-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  BRANDING
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm tracking-wider relative py-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-wider relative py-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                >
                  FOLLOW
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-5 pb-5">
            <ul className="flex flex-col gap-5">
              <li>
                <Link href="/interior" className="text-sm tracking-wider" onClick={() => setIsOpen(false)}>
                  INTERIOR
                </Link>
              </li>
              <li>
                <Link href="#branding" className="text-sm tracking-wider" onClick={() => setIsOpen(false)}>
                  BRANDING
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm tracking-wider" onClick={() => setIsOpen(false)}>
                  CONTACT
                </Link>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm tracking-wider">
                  FOLLOW
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
