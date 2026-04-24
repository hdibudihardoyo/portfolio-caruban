"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
              {reviews.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="min-w-[280px] md:min-w-[320px] bg-[var(--color-primary)]/10 border-[var(--color-primary)] rounded-[2rem] p-6 shadow-sm relative snap-center"
                >
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div>
                      <p className="text-xs md:text-sm italic opacity-70 mb-8 leading-relaxed relative z-10 font-medium text-[var(--color-tertiary)]">
                        “{t(item.text)}”
                      </p>
                    </div>

                    <div className="w-10 h-10 bg-[var(--color-primary)]/10 text-[var(--color-tertiary)] rounded-full flex items-center justify-center text-xs md:text-sm font-black">
                      <Image
                        src="/dama.png"
                        alt={item.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-tertiary)]">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
