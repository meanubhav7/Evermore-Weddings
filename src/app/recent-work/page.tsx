"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LightboxModal from "@/components/ui/LightboxModal";

const portfolioGalleries = [
  {
    id: "garden",
    title: "Charming Garden Ceremony",
    couple: "Naomi & Eddie",
    location: "Sonoma Valley Estate",
    description:
      "Explore the beauty of love captured on the shores and vineyard groves. This ceremony radiates romance and elegance, showcasing the union of two hearts against a stunning golden hour backdrop.",
    heroImage:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=85&w=1200",
    detailImages: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=85&w=900",
    ],
  },
  {
    id: "beach",
    title: "Elegant Beach Reception",
    couple: "Irin & Nick",
    location: "Big Sur Coastal Bluffs",
    description:
      "Moody ocean winds and dramatic clifftop views set the stage for an unforgettable celebration. Silk fabrics blowing in the sea breeze and a quiet portrait session among free-roaming horses.",
    heroImage:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=85&w=1200",
    detailImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=85&w=900",
    ],
  },
  {
    id: "barn",
    title: "Rustic Barn Wedding",
    couple: "Rita & Guy",
    location: "Hudson Valley, New York",
    description:
      "Nestled among towering cedar trees, a charming handcrafted wooden barn came alive with acoustic music, laughter, and an intimate stroll through twilight forest glades.",
    heroImage:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=85&w=1400",
    detailImages: [
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&q=85&w=900",
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=85&w=900",
    ],
  },
];

export default function RecentWorkPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", alt: "" });

  const openLightbox = (src: string, alt: string) => {
    setLightbox({ isOpen: true, src, alt });
  };

  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-36 overflow-hidden">
      {/* Olive Green Header Card */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#5D6353] text-[#F7F5F0] w-full max-w-xl sm:max-w-2xl py-10 px-8 sm:py-14 sm:px-14 shadow-xs"
        >
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl uppercase tracking-wide leading-tight font-light">
            WEDDING
            <span className="block italic font-normal">PORTFOLIO &</span>
            <span className="block font-light">MEMORIES</span>
          </h1>
        </motion.div>
      </section>

      {/* Stories List */}
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 mt-16 sm:mt-24 space-y-32">
        {portfolioGalleries.map((gallery, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={gallery.id}
              id={gallery.id}
              className="scroll-mt-28 space-y-12"
            >
              {/* Main Feature Row */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-5 space-y-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="font-sans text-xs tracking-widest uppercase text-[#8C6249] font-medium">
                    {gallery.location} • {gallery.couple}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2A29] leading-tight">
                    {gallery.title}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#736F69] leading-relaxed font-light">
                    {gallery.description}
                  </p>
                  <div className="pt-2">
                    <Link href="/contact" className="btn-luxury-outline">
                      INQUIRE ABOUT YOUR DATE
                    </Link>
                  </div>
                </motion.div>

                {/* Hero Showcase Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  onClick={() => openLightbox(gallery.heroImage, gallery.title)}
                  className={`lg:col-span-7 relative w-full aspect-[4/5] sm:aspect-[16/11] overflow-hidden cursor-pointer shadow-lg group ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={gallery.heroImage}
                    alt={gallery.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              {/* Supporting Detail Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4">
                {gallery.detailImages.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    onClick={() =>
                      openLightbox(img, `${gallery.title} - Detail ${i + 1}`)
                    }
                    className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer shadow-md group"
                  >
                    <Image
                      src={img}
                      alt={`${gallery.title} detail`}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <LightboxModal
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        imageSrc={lightbox.src}
        imageAlt={lightbox.alt}
      />
    </div>
  );
}
