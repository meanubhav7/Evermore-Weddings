"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredStories } from "@/lib/data";

interface StoriesSectionProps {
  onOpenLightbox?: (imageSrc: string, alt: string) => void;
}

export default function StoriesSection({ onOpenLightbox }: StoriesSectionProps) {
  const story1 = featuredStories[0]; // Charming Garden Ceremony
  const story2 = featuredStories[1]; // Elegant Beach Reception
  const story3 = featuredStories[2]; // Rustic Barn Wedding

  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-32 overflow-hidden">
      {/* ============================================================== */}
      {/* STORY 1: OUR GALLERY & CHARMING GARDEN CEREMONY                */}
      {/* ============================================================== */}
      <section className="relative max-w-[1360px] mx-auto px-6 sm:px-10 pt-4 sm:pt-8 pb-20">
        {/* Overlapping "OUR GALLERY" Sand/Beige Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#E6DEC9] w-full max-w-md sm:max-w-lg lg:max-w-xl py-8 px-8 sm:py-12 sm:px-12 mb-12 sm:mb-20 shadow-xs"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-widest text-[#2C2A29] uppercase font-light">
            OUR GALLERY
          </h2>
        </motion.div>

        {/* Story 1 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & Button + Floating Ring Photo */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 sm:space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] leading-tight">
                Charming Garden
                <span className="block italic">Ceremony</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#736F69] max-w-sm leading-relaxed font-light">
                {story1.description}
              </p>
              <div className="pt-2">
                <Link
                  href="/recent-work#garden"
                  className="btn-luxury-outline group"
                >
                  VIEW GALLERY
                </Link>
              </div>
            </motion.div>

            {/* Inset Ring Detail Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              onClick={() =>
                onOpenLightbox?.(story1.secondaryImage.src, story1.secondaryImage.alt)
              }
              className="relative w-full max-w-sm aspect-[3/2] overflow-hidden cursor-pointer shadow-md group"
            >
              <Image
                src={story1.secondaryImage.src}
                alt={story1.secondaryImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* Right Column: Main Joyful Couple Portrait */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() =>
                onOpenLightbox?.(story1.mainImage.src, story1.mainImage.alt)
              }
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer shadow-lg group"
            >
              <Image
                src={story1.mainImage.src}
                alt={story1.mainImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STORY 2: ELEGANT BEACH RECEPTION                               */}
      {/* ============================================================== */}
      <section className="relative max-w-[1360px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Landscape photo + Text & View Gallery */}
          <div className="lg:col-span-6 flex flex-col space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9 }}
              onClick={() =>
                onOpenLightbox?.(story2.secondaryImage.src, story2.secondaryImage.alt)
              }
              className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer shadow-md group"
            >
              <Image
                src={story2.secondaryImage.src}
                alt={story2.secondaryImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] leading-tight">
                Elegant Beach
                <span className="block italic">Reception</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#736F69] max-w-sm leading-relaxed font-light">
                {story2.description}
              </p>
              <div className="pt-2">
                <Link
                  href="/recent-work#beach"
                  className="btn-luxury-outline"
                >
                  VIEW GALLERY
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait with Horses */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() =>
                onOpenLightbox?.(story2.mainImage.src, story2.mainImage.alt)
              }
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden cursor-pointer shadow-lg group"
            >
              <Image
                src={story2.mainImage.src}
                alt={story2.mainImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* STORY 3: RUSTIC BARN WEDDING & EXPLORE ALL                     */}
      {/* ============================================================== */}
      <section className="relative max-w-[1360px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & View Gallery button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-4"
          >
            <h3 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] leading-tight">
              Rustic Barn
              <span className="block italic">Wedding</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#736F69] max-w-sm leading-relaxed font-light">
              {story3.description}
            </p>
            <div className="pt-2">
              <Link
                href="/recent-work#barn"
                className="btn-luxury-outline"
              >
                VIEW GALLERY
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Layered Forest Path Photo + Offset Intimate Photo */}
          <div className="lg:col-span-8 relative">
            {/* Small Overlapping Inset Photo */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              onClick={() =>
                onOpenLightbox?.(story3.secondaryImage.src, story3.secondaryImage.alt)
              }
              className="absolute -top-10 sm:-top-16 right-4 sm:right-10 w-44 sm:w-56 lg:w-64 aspect-square z-20 overflow-hidden shadow-2xl cursor-pointer border-4 border-[#F7F5F0] group"
            >
              <Image
                src={story3.secondaryImage.src}
                alt={story3.secondaryImage.alt}
                fill
                sizes="300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Large Forest Walking Photo */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              onClick={() =>
                onOpenLightbox?.(story3.mainImage.src, story3.mainImage.alt)
              }
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden cursor-pointer shadow-lg group"
            >
              <Image
                src={story3.mainImage.src}
                alt={story3.mainImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Centered "EXPLORE ALL" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-20 sm:mt-28"
        >
          <Link
            href="/recent-work"
            className="btn-luxury-solid shadow-sm hover:shadow-md"
          >
            EXPLORE ALL
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
