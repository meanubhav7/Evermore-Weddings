"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    partnerName: "",
    eventDate: "",
    eventLocation: "",
    photoTypes: [] as string[],
    vision: "",
    budget: "",
    story: "",
    referral: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleArrayItem = (list: string[], item: string) => {
    return list.includes(item)
      ? list.filter((i) => i !== item)
      : [...list, item];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate luxury API dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="relative w-full bg-[#F7F5F0] pb-24 sm:pb-36 overflow-hidden">
      {/* Beige Header Card */}
      <section className="max-w-[1360px] mx-auto px-6 sm:px-10 pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#E6DEC9] py-10 px-8 sm:py-14 sm:px-14 shadow-xs"
          >
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#2C2A29] uppercase tracking-wide leading-tight font-light">
              GET IN
              <span className="block italic font-normal">TOUCH</span>
            </h1>
          </motion.div>

          {/* Small Inset Decorative Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-6 relative w-48 sm:w-64 aspect-[4/3] overflow-hidden shadow-md hidden sm:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=85&w=600"
              alt="Romantic floral altar detail"
              fill
              sizes="260px"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Form Container */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24">
        <div className="mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2C2A29] font-light">
            No place too far and no idea too big
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#736F69] mt-2 font-light">
            Fill out the details below and we&apos;ll be in touch within 24 to 48 hours.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#E6DEC9]/60 border border-[#D5CCB6] p-10 sm:p-14 text-center space-y-4"
          >
            <CheckCircle2 className="w-12 h-12 text-[#8C6249] mx-auto" />
            <h3 className="font-serif text-3xl text-[#2C2A29]">
              Thank You for Reaching Out
            </h3>
            <p className="font-sans text-sm text-[#5C5750] max-w-md mx-auto leading-relaxed font-light">
              We have received your celebration details and are thrilled to hear your
              story. Expect a personal note and investment guide in your inbox shortly!
            </p>
            <div className="pt-4">
              <button
                onClick={() => setSubmitted(false)}
                className="btn-luxury-outline text-xs"
              >
                SEND ANOTHER NOTE
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Names & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              <div className="space-y-1">
                <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                  First name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                  Last name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                  Partner Full Name
                </label>
                <input
                  type="text"
                  value={formData.partnerName}
                  onChange={(e) =>
                    setFormData({ ...formData, partnerName: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
                />
              </div>
            </div>

            {/* Service Checkboxes */}
            <div className="space-y-3">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                I would like photos of:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Wedding",
                  "Elopement",
                  "Engagement Session",
                  "Couple Session",
                  "Other",
                ].map((type) => {
                  const checked = formData.photoTypes.includes(type);
                  return (
                    <label
                      key={type}
                      className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm text-[#4A4744] hover:text-[#2C2A29]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            photoTypes: toggleArrayItem(
                              formData.photoTypes,
                              type
                            ),
                          })
                        }
                        className="w-4 h-4 accent-[#8C6249] border-[#2C2A29]/40 rounded-none cursor-pointer"
                      />
                      <span>{type}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* What did you have in mind? */}
            <div className="space-y-1">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                What did you have in mind?
              </label>
              <input
                type="text"
                placeholder="Date, ideal location, or overall vision..."
                value={formData.vision}
                onChange={(e) =>
                  setFormData({ ...formData, vision: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
              />
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                What&apos;s your ideal price range for wedding photos?
              </label>
              <input
                type="text"
                placeholder="$2,000 - $4,000 / $4,000 - $6,000 / Custom"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors"
              />
            </div>

            {/* Story */}
            <div className="space-y-1">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                Tell me about your story
              </label>
              <textarea
                rows={3}
                placeholder="How did you two meet? What are your favorite things to do together?"
                value={formData.story}
                onChange={(e) =>
                  setFormData({ ...formData, story: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#2C2A29]/30 focus:border-[#8C6249] py-2 text-sm text-[#2C2A29] focus:outline-hidden transition-colors resize-none"
              />
            </div>

            {/* How did you find me? */}
            <div className="space-y-3">
              <label className="block font-sans text-xs uppercase tracking-wider text-[#2C2A29] font-medium">
                How did you find me?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Instagram",
                  "Google Search",
                  "The Knot",
                  "Friend Referral",
                  "Planner",
                  "Other",
                ].map((item) => {
                  const checked = formData.referral.includes(item);
                  return (
                    <label
                      key={item}
                      className="flex items-center gap-3 cursor-pointer text-xs sm:text-sm text-[#4A4744] hover:text-[#2C2A29]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            referral: toggleArrayItem(formData.referral, item),
                          })
                        }
                        className="w-4 h-4 accent-[#8C6249] border-[#2C2A29]/40 rounded-none cursor-pointer"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-luxury-outline disabled:opacity-50"
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Warm Terracotta Band before Footer */}
      <div className="w-full h-32 sm:h-44 bg-[#8C6249] mt-24 sm:mt-32" />
    </div>
  );
}
