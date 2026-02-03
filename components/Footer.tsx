'use client';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/10 py-12 px-[5%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-xs text-black/60">Copyright © 2026 AVEC | Powered by AVEC</p>
        </div>
        <button
          onClick={scrollToTop}
          className="text-xs tracking-[2px] hover:opacity-60 transition-opacity underline underline-offset-4"
        >
          BACK TO TOP
        </button>
      </div>
    </footer>
  );
}
