import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#5D6353] text-[#F7F5F0] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#F7F5F0]/20">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-[#F7F5F0]">
              {siteConfig.name}
            </h3>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#F7F5F0]/80 font-light">
              {siteConfig.title}
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-[#F7F5F0]/80 hover:text-white underline underline-offset-4 tracking-wider transition-colors"
              >
                {siteConfig.instagram}
              </a>
            </div>
          </div>

          {/* Bio / World Travel Statement */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#F7F5F0]/90 max-w-xl font-light">
              {siteConfig.bio}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#F7F5F0]/70 font-light">
          <p className="tracking-wide text-center md:text-left">
            {siteConfig.copyright}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 tracking-[0.16em] uppercase text-[11px]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
