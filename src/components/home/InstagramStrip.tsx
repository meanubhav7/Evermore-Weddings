"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { instagramPosts, siteConfig } from "@/lib/data";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface InstagramStripProps {
  onOpenLightbox?: (src: string, alt: string) => void;
}

export default function InstagramStrip({ onOpenLightbox }: InstagramStripProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#F7F5F0] pt-12 pb-24 sm:pb-32 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-1"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2A29] leading-[1.1] uppercase font-light tracking-wide">
            CONNECT WITH
            <span className="block">US</span>
            <span className="block italic font-normal">ON INSTAGRAM</span>
          </h2>
        </motion.div>

        {/* Instagram Account Handle & Controls */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-xs tracking-widest text-[#736F69] hover:text-[#2C2A29] transition-colors uppercase font-medium mr-2"
          >
            <InstagramIcon className="w-4 h-4 text-[#8C6249]" />
            {siteConfig.instagram}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Instagram photos left"
              className="w-10 h-10 rounded-full border border-[#2C2A29]/20 flex items-center justify-center text-[#2C2A29] hover:bg-[#2C2A29] hover:text-[#F7F5F0] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Instagram photos right"
              className="w-10 h-10 rounded-full border border-[#2C2A29]/20 flex items-center justify-center text-[#2C2A29] hover:bg-[#2C2A29] hover:text-[#F7F5F0] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Gallery Track */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-6 sm:px-10 py-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {instagramPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => onOpenLightbox?.(post.image, post.alt)}
              className="relative shrink-0 w-64 sm:w-72 lg:w-80 aspect-square overflow-hidden cursor-pointer shadow-sm group"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 260px, 320px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Overlay with subtle Instagram tag on hover */}
              <div className="absolute inset-0 bg-[#2C2A29]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#F7F5F0] p-4 text-center">
                <InstagramIcon className="w-6 h-6 mb-2 text-[#F7F5F0]" />
                <span className="font-serif text-sm tracking-wide capitalize italic">
                  {post.tag}
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase opacity-80 mt-1">
                  {post.likes} likes
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
