import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelia Vance | Wedding & Elopement Photographer",
  description:
    "Editorial wedding and elopement photographer capturing candid, cinematic, and timeless moments worldwide.",
  keywords: [
    "wedding photographer",
    "elopement photographer",
    "editorial wedding photography",
    "destination wedding",
  ],
  openGraph: {
    title: "Aurelia Vance | Wedding & Elopement Photographer",
    description: "Honest, timeless wedding stories captured with cinematic flair.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#2C2A29] antialiased selection:bg-[#8C6249] selection:text-[#F7F5F0]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
