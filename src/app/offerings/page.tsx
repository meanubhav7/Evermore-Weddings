"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { packagesData, siteConfig } from "@/lib/data";

export default function OfferingsPage() {
  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-36 overflow-hidden">
      {/* Beige Header Card */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#E6DEC9] w-full max-w-xl sm:max-w-2xl py-10 px-8 sm:py-14 sm:px-14 shadow-xs"
        >
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2A29] uppercase tracking-wide leading-tight font-light">
            WEDDING
            <span className="block font-normal">PORTFOLIO &amp;</span>
            <span className="block italic">OFFERINGS</span>
          </h1>
        </motion.div>
      </section>

      {/* Intro Philosophy Statement */}
      <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-xl sm:text-2xl text-[#2C2A29] leading-relaxed font-light italic"
        >
          “At {siteConfig.name}, we believe every couple has a unique story to tell.
          Our goal is to showcase your love through stunning visuals that reflect your
          personality and style, ensuring that your memories are preserved beautifully
          for generations to come.”
        </motion.p>
      </section>

      {/* Rich Terracotta Brown Services & Packages Section */}
      <section className="w-full bg-[#8C6249] text-[#F7F5F0] py-20 sm:py-28 my-8">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest font-light">
              OUR SERVICES
            </h2>
            <p className="font-sans text-xs sm:text-sm tracking-widest uppercase text-[#F7F5F0]/80 font-light">
              Explore our tailored offerings to suit every couple&apos;s needs
            </p>
          </div>

          {/* 3 Packages Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packagesData.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`flex flex-col justify-between p-8 sm:p-10 transition-all ${
                  pkg.recommended
                    ? "bg-[#7A543E] border-2 border-[#F7F5F0]/40 shadow-2xl relative"
                    : "bg-[#805841] border border-[#F7F5F0]/20"
                }`}
              >
                {pkg.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F7F5F0] text-[#8C6249] text-[10px] tracking-widest uppercase font-semibold px-4 py-1 rounded-full shadow-xs">
                    Most Cherished
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl tracking-wide uppercase text-[#F7F5F0]">
                      {pkg.title}
                    </h3>
                    <p className="font-sans text-xs text-[#F7F5F0]/70 mt-2 font-light leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F7F5F0]/20">
                    <span className="font-sans text-xs uppercase tracking-wider text-[#F7F5F0]/70">
                      Investment Starting At
                    </span>
                    <p className="font-serif text-3xl sm:text-4xl font-light text-[#F7F5F0] mt-1">
                      {pkg.price}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-[#F7F5F0]/20">
                    {pkg.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F5F0]/85 font-light"
                      >
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#F7F5F0]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6">
                  <Link
                    href={`/contact?package=${pkg.id}`}
                    className="w-full text-center block py-3 border border-[#F7F5F0] text-[#F7F5F0] text-xs tracking-widest uppercase font-medium hover:bg-[#F7F5F0] hover:text-[#8C6249] transition-colors"
                  >
                    SELECT PACKAGE
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature Grassland Panorama Banner */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 my-16 sm:my-20">
        <div className="relative w-full h-64 sm:h-80 overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=1600"
            alt="Scenic expansive wedding landscape"
            fill
            sizes="(max-width: 1400px) 100vw, 1360px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Custom Idea Beige Callout Section */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="bg-[#E6DEC9] max-w-xl p-8 sm:p-14 shadow-lg space-y-6"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] uppercase tracking-wide leading-tight font-light">
            HAVE A UNIQUE
            <span className="block italic">IDEA?</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#5C5750] leading-relaxed font-light">
            Let&apos;s collaborate to bring your vision to life. Share your thoughts,
            custom destination plans, or elopement sketches, and we&apos;ll create a
            tailored itinerary for your unforgettable celebration.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-luxury-outline">
              CONTACT US
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
