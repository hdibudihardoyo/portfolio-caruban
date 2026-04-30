"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { reviews } from "@/constants";

// Warna avatar berbeda untuk setiap huruf inisial
const avatarColors = [
  "bg-violet-500",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-indigo-500",
];

export default function SectionReview() {
  const t = useTranslations("Review");
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === "right" ? width : -width,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonial"
      className="py-20 sm:py-24 px-6 bg-[var(--main-background)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-3">
            <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Tombol Kiri */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-accent)] border border-[var(--button-text-color)] text-[var(--button-text-color)] shadow-lg cursor-pointer transition-all active:scale-95"
            aria-label="Previous review"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Review Scrollable Area */}
          <div
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide px-4 snap-x snap-mandatory"
          >
            <div className="flex gap-6 pb-6">
              {reviews.map((item, i) => {
                const initial = item.name.charAt(0).toUpperCase();
                const colorClass = avatarColors[i % avatarColors.length];
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="min-w-[280px] md:min-w-[320px] bg-[var(--card-bg)] rounded-[2rem] p-6 shadow-sm relative snap-center flex flex-col gap-4 border border-[var(--color-muted)]/20"
                  >
                    {/* Stars — filled + empty untuk yang tidak penuh */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <Star
                          key={si}
                          className={`w-4 h-4 ${
                            si < item.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-transparent text-[var(--color-muted)]/40"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-xs md:text-sm italic opacity-80 leading-relaxed font-medium text-[var(--color-tertiary)] flex-1">
                      &ldquo;{t(item.text)}&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-[var(--color-muted)]/20 w-full" />

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar Inisial */}
                      <div
                        className={`w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center ${colorClass} ring-2 ring-white/10`}
                      >
                        <span className="text-white text-base font-black leading-none">
                          {initial}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-tertiary)]">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[var(--color-muted)] font-medium tracking-wide">
                          {t(item.role)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Tombol Kanan */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-accent)] border border-[var(--button-text-color)] text-[var(--button-text-color)] shadow-lg cursor-pointer transition-all active:scale-95"
            aria-label="Next review"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pesan untuk user */}
        <p className="text-xs text-[var(--color-primary)] text-center mt-10 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
          {t("Hint")}
        </p>
      </div>
    </section>
  );
}
