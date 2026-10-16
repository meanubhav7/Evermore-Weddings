"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import StoriesSection from "@/components/home/StoriesSection";
import ClientLove from "@/components/home/ClientLove";
import MemoriesCta from "@/components/home/MemoriesCta";
import InstagramStrip from "@/components/home/InstagramStrip";
import LightboxModal from "@/components/ui/LightboxModal";

export default function HomePage() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
  });

  const handleOpenLightbox = (src: string, alt: string) => {
    setLightboxState({ isOpen: true, src, alt });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <HeroSection />
      <StoriesSection onOpenLightbox={handleOpenLightbox} />
      <ClientLove />
      <MemoriesCta />
      <InstagramStrip onOpenLightbox={handleOpenLightbox} />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={handleCloseLightbox}
        imageSrc={lightboxState.src}
        imageAlt={lightboxState.alt}
      />
    </>
  );
}
