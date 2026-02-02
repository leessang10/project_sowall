export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16 px-[5%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="text-xs text-black/60">&copy; 2026 Project SoWall. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider transition-colors hover:text-black/60"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider transition-colors hover:text-black/60"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-wider transition-colors hover:text-black/60"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
