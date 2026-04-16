"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { reviews } from "@/constants";

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
      className="py-16 sm:py-20 px-6 bg-white text-[var(--foreground)] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-5">
          <div className="text-center sm:text-left flex-1">
            <div className="flex justify-center sm:justify-start mb-3">
              <div className="w-10 h-2 rounded-full bg-[var(--primary)]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter leading-tight">
              {t("Title")}
            </h2>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-dark)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--brand-dark)] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Review Carousel */}
        <div
          ref={carouselRef}
          className="relative overflow-x-auto overflow-y-hidden scrollbar-hide px-4"
        >
          <div className="flex gap-6 pb-4">
            {reviews.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="min-w-[240px] md:min-w-[280px] bg-white border border-[var(--border)] rounded-[2rem] p-5 transition-all duration-300 relative"
              >
                <Quote className="absolute top-5 right-6 w-8 h-8 text-[var(--primary)] opacity-10" />

                <p className="text-sm md:text-base italic opacity-70 mb-8 leading-relaxed relative z-10 font-medium">
                  “{t(item.text)}”
                </p>

                <div className="flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center text-sm font-black">
                    {item.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex flex-col text-left">
                    <p className="text-xs md:text-sm font-black uppercase tracking-wider text-[var(--brand-dark)]">
                      {item.name}
                    </p>
                    <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest">
                      Happy Client
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hint untuk user */}
        <p className="text-center mt-10 text-[10px] font-black uppercase tracking-[0.2em] opacity-30 animate-pulse">
          {t("Hint")}
        </p>
      </div>
    </section>
  );
}
