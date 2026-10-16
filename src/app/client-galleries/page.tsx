"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Eye } from "lucide-react";
import { clientGalleriesData } from "@/lib/data";
import LightboxModal from "@/components/ui/LightboxModal";

export default function ClientGalleriesPage() {
  const [selectedGallery, setSelectedGallery] = useState<{
    isOpen: boolean;
    names: string;
    image: string;
  }>({
    isOpen: false,
    names: "",
    image: "",
  });

  const [passwordModal, setPasswordModal] = useState<{
    isOpen: boolean;
    galleryName: string;
  }>({
    isOpen: false,
    galleryName: "",
  });

  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passInput.trim().toLowerCase() === "love" || passInput.trim().length > 2) {
      setPasswordModal({ isOpen: false, galleryName: "" });
      setPassInput("");
      setPassError(false);
      // open gallery preview
    } else {
      setPassError(true);
    }
  };

  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-36 overflow-hidden">
      {/* Terracotta Header Card */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#8C6249] text-[#F7F5F0] w-full max-w-xl sm:max-w-2xl py-10 px-8 sm:py-14 sm:px-14 shadow-xs"
        >
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wide leading-tight font-light">
            CLIENT
            <span className="block italic font-normal">GALLERIES</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#F7F5F0]/80 mt-4 leading-relaxed font-light">
            Welcome to your private client portal. Access your full high-resolution digital
            archive, download print files, and share your celebration highlights.
          </p>
        </motion.div>
      </section>

      {/* Galleries Grid */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {clientGalleriesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="space-y-4 group"
            >
              {/* Photo Tile */}
              <div
                onClick={() =>
                  setSelectedGallery({
                    isOpen: true,
                    names: item.names,
                    image: item.image,
                  })
                }
                className="relative w-full aspect-square overflow-hidden cursor-pointer shadow-md bg-[#E6DEC9]"
              >
                <Image
                  src={item.image}
                  alt={`Wedding photography gallery for ${item.names}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-[#2C2A29]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-[#F7F5F0]">
                  <span className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase bg-black/40 px-4 py-2 backdrop-blur-xs">
                    <Eye className="w-4 h-4" /> Preview Highlights
                  </span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-[#2C2A29] group-hover:text-[#8C6249] transition-colors">
                    {item.names}
                  </h3>
                  <button
                    onClick={() =>
                      setPasswordModal({
                        isOpen: true,
                        galleryName: item.names,
                      })
                    }
                    className="text-[#736F69] hover:text-[#8C6249] transition-colors p-1"
                    title="Enter Private Client Password"
                  >
                    <Lock className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-sans text-xs text-[#736F69] font-light tracking-wide">
                  {item.date} • {item.location}
                </p>
                <p className="font-sans text-[11px] text-[#8C6249] tracking-wider uppercase font-medium">
                  {item.photoCount} High-Res Photographs
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Password Modal */}
      {passwordModal.isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setPasswordModal({ isOpen: false, galleryName: "" })}
        >
          <div
            className="bg-[#F7F5F0] p-8 sm:p-10 max-w-md w-full shadow-2xl border border-[#E6DEC9] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-2">
              <Lock className="w-8 h-8 text-[#8C6249] mx-auto" />
              <h3 className="font-serif text-2xl text-[#2C2A29]">
                {passwordModal.galleryName}
              </h3>
              <p className="font-sans text-xs text-[#736F69]">
                Please enter the 4-digit code provided on your delivery card.
              </p>
            </div>

            <form onSubmit={handleUnlock} className="space-y-4 pt-2">
              <input
                type="password"
                placeholder="Enter client password..."
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                autoFocus
                className="w-full bg-white border border-[#2C2A29]/20 px-4 py-2.5 text-sm text-[#2C2A29] focus:outline-hidden focus:border-[#8C6249]"
              />
              {passError && (
                <p className="text-xs text-red-700">
                  Password incorrect. (Demo hint: any word or &quot;love&quot;)
                </p>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setPasswordModal({ isOpen: false, galleryName: "" })
                  }
                  className="flex-1 py-2.5 border border-[#2C2A29]/30 text-xs tracking-wider uppercase text-[#2C2A29]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#8C6249] text-[#F7F5F0] text-xs tracking-wider uppercase font-medium hover:bg-[#7A543E]"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* High-res Lightbox */}
      <LightboxModal
        isOpen={selectedGallery.isOpen}
        onClose={() =>
          setSelectedGallery((prev) => ({ ...prev, isOpen: false }))
        }
        imageSrc={selectedGallery.image}
        imageAlt={`Highlight from ${selectedGallery.names}`}
      />
    </div>
  );
}
