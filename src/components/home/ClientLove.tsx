"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function ClientLove() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#8C6249] text-[#F7F5F0] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-widest text-[#F7F5F0] uppercase font-light">
            CLIENT LOVE
          </h2>
        </motion.div>

        {/* Carousel Content Container */}
        <div className="relative min-h-[460px] sm:min-h-[400px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center"
            >
              {/* Couple Photograph */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl">
                  <Image
                    src={current.image}
                    alt={`Wedding testimonial from ${current.author}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

              {/* Testimonial Quote & Author */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-center md:text-left">
                <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-[#F7F5F0] max-w-xl">
                  {current.quote}
                </blockquote>
                <div className="space-y-1">
                  <p className="font-serif text-lg tracking-wide text-[#F7F5F0]">
                    {current.author}
                  </p>
                  <p className="font-sans text-xs tracking-widest uppercase text-[#F7F5F0]/70 font-light">
                    {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Pagination Controls */}
        <div className="flex justify-center items-center gap-3 mt-12 sm:mt-16">
          {testimonials.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-3 h-3 bg-[#F7F5F0]"
                    : "w-2.5 h-2.5 bg-[#F7F5F0]/40 hover:bg-[#F7F5F0]/70"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
