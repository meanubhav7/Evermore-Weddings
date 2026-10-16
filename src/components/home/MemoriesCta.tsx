"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MemoriesCta() {
  return (
    <section className="relative w-full bg-[#F7F5F0] py-20 sm:py-32 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Column: Bridal Gown & Eucalyptus Bouquet Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden shadow-lg z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&q=85&w=1200"
              alt="Bridal wedding gown details and silver-dollar eucalyptus greenery"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
          </motion.div>

          {/* Right Column: Overlapping Sand/Beige Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:-ml-24 mt-8 lg:mt-0 z-20 bg-[#E6DEC9] p-8 sm:p-14 lg:p-16 shadow-xl space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2A29] uppercase tracking-wide leading-tight font-light">
              DESIGNING MEMORIES
              <span className="block font-normal">THAT LAST A</span>
              <span className="block italic">LIFETIME</span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#5C5750] leading-relaxed font-light max-w-md">
              Let us help you create everlasting memories of your wedding day. Reach out
              to check availability, discuss your dream vision, and begin curating an
              unforgettable collection of imagery.
            </p>

            <div className="pt-2">
              <Link href="/contact" className="btn-luxury-outline">
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
