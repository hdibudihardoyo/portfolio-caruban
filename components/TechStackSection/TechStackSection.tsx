"use client";

import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { techStacks } from "@/constants";
import { getScrollVariants, scrollViewport } from "@/hooks/useScrollAnimation";

export default function TechStackSection() {
  const t = useTranslations("TechStack");
  return (
    <section className="relative py-20 sm:py-24 px-6 overflow-hidden bg-[var(--main-background)]">
      {/* Header — slide from top */}
      <motion.div
        variants={getScrollVariants("down")}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
        className="max-w-5xl mx-auto px-6 text-center mb-8"
      >
        <div className="flex justify-center mb-4">
          <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-[var(--primary-accent)]">
          {t("TitlePrefix")}{" "}
          <span className="text-2xl md:text-3xl italic font-black text-[var(--color-primary)]">
            {t("TitleHighlight")}
          </span>
        </h2>
        <p className="text-[var(--color-primary)] mt-4 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          {t("Description")}
        </p>
      </motion.div>

      {/* Marquee Container — slide from bottom */}
      <motion.div
        variants={getScrollVariants("up")}
        initial="hidden"
        whileInView="visible"
        viewport={scrollViewport}
        className="relative flex items-center group overflow-hidden"
      >
        {/* Fade Effects Kiri dan kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-[var(--main-background)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-[var(--main-background)] to-transparent pointer-events-none" />

        <div className="flex gap-3 animate-marquee py-12">
          {/* Loop data dua kali */}
          {[...techStacks, ...techStacks].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-6 transition-all duration-300 whitespace-nowrap hover:-translate-y-1"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 group-hover/item:grayscale-0 transition-all duration-500">
                <StackIcon name={tech.icon} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Animation Engine */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
