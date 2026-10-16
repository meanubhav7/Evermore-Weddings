"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-32 overflow-hidden">
      {/* Top Header Card */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#E6DEC9] w-full max-w-xl sm:max-w-2xl py-10 px-8 sm:py-14 sm:px-14 shadow-xs"
        >
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2C2A29] uppercase tracking-wide leading-tight font-light">
            YOUR DREAM
            <span className="block font-normal">WEDDING,</span>
            <span className="block italic">YOUR UNIQUE</span>
            <span className="block font-light">STYLE</span>
          </h1>
        </motion.div>
      </section>

      {/* Main Bio & Portrait Section */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Bio Story on Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="font-sans text-sm sm:text-base text-[#4A4744] leading-relaxed font-light">
              At {siteConfig.name} Photography, we believe that every couple has a unique
              story to tell. Our goal is to bring your wedding vision to life, whether
              it&apos;s a grand estate celebration, a salt-sprayed coastal elopement, or an
              intimate backyard dinner with your closest kindred spirits.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#4A4744] leading-relaxed font-light">
              We are here to help you curate a timeless collection of photographs that
              reflect your genuine love and effortless individuality. By blending
              documentary photojournalism with delicate editorial composition, we capture
              the unscripted glances, tears, and joy that make your day singularly yours.
            </p>

            <div className="pt-4 space-y-2 border-l-2 border-[#8C6249] pl-6 my-6">
              <p className="font-serif text-xl sm:text-2xl text-[#2C2A29] italic font-normal">
                “My mission is simple: to make you feel completely present in your day,
                knowing that every fleeting feeling is preserved with love.”
              </p>
              <p className="font-sans text-xs tracking-widest uppercase text-[#736F69]">
                — Aurelia Vance
              </p>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-luxury-outline">
                GET IN TOUCH
              </Link>
            </div>
          </motion.div>

          {/* Photographer Portrait on Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full aspect-[4/5] overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1200"
              alt="Aurelia Vance, wedding photographer holding camera outdoors"
              fill
              sizes="(max-width: 1024px) 100vw, 650px"
              className="object-cover grayscale contrast-105"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section in Earthy Terracotta */}
      <section className="w-full bg-[#8C6249] text-[#F7F5F0] py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest font-light">
              THE PHILOSOPHY
            </h2>
            <p className="font-sans text-xs sm:text-sm tracking-widest uppercase text-[#F7F5F0]/75">
              Three pillars guiding every frame we capture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 p-8 bg-[#F7F5F0]/5 border border-[#F7F5F0]/15">
              <span className="font-serif text-3xl text-[#F7F5F0]/60 italic">01</span>
              <h3 className="font-serif text-2xl tracking-wide">Candid Presence</h3>
              <p className="font-sans text-xs sm:text-sm text-[#F7F5F0]/85 leading-relaxed font-light">
                We believe the most profound wedding photographs happen between the posed
                moments. We remain quietly observant, allowing you to live fully in each
                emotion.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-[#F7F5F0]/5 border border-[#F7F5F0]/15">
              <span className="font-serif text-3xl text-[#F7F5F0]/60 italic">02</span>
              <h3 className="font-serif text-2xl tracking-wide">Artful Direction</h3>
              <p className="font-sans text-xs sm:text-sm text-[#F7F5F0]/85 leading-relaxed font-light">
                No awkward stiff smiles. We offer gentle, natural prompts that evoke genuine
                intimacy and effortless romance, making portrait sessions relaxed and fun.
              </p>
            </div>

            <div className="space-y-4 p-8 bg-[#F7F5F0]/5 border border-[#F7F5F0]/15">
              <span className="font-serif text-3xl text-[#F7F5F0]/60 italic">03</span>
              <h3 className="font-serif text-2xl tracking-wide">Timeless Color</h3>
              <p className="font-sans text-xs sm:text-sm text-[#F7F5F0]/85 leading-relaxed font-light">
                We eschew fleeting filters in favor of natural golden light, faithful skin
                tones, and rich film-inspired grain that looks as stunning in 50 years as
                it does today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
