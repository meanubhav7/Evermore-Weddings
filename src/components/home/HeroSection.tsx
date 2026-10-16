"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F5F0] pt-2 pb-12 sm:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="relative w-full h-[620px] sm:h-[720px] lg:h-[820px] overflow-hidden">
          {/* Main Hero Background Image */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=85&w=2000"
              alt="Bride and groom close-up under romantic wedding veil"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Subtle soft gradient overlay on left for luxury readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/60 via-[#F7F5F0]/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Editorial Display Typography Overlay */}
          <div className="absolute inset-y-0 left-0 flex items-center p-6 sm:p-12 lg:p-20 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1 sm:space-y-2 select-none"
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#2C2A29] leading-[1.05]">
                <span className="block font-light">WEDDING</span>
                <span className="block font-normal italic">PORTFOLIO</span>
                <span className="block font-light">FOR YOUR</span>
                <span className="block font-normal italic">SPECIAL DAY</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
