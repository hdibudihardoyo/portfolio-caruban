"use client";

import StackIcon from "tech-stack-icons";
import { useTranslations } from "next-intl";
import { techStacks } from "@/constants";

export default function TechStackSection() {
  const t = useTranslations("TechStack");
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-[var(--brand-dark)]">
          {t("TitlePrefix")}{" "}
          <span className="text-[var(--primary)] italic">
            {t("TitleHighlight")}
          </span>
        </h2>
        <p className="mt-4 text-xs md:text-sm opacity-60 font-medium max-w-lg mx-auto leading-relaxed">
          {t("Description")}
        </p>
      </div>

      {/* Marquee Row */}
      <div className="relative flex items-center group">
        {/* Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-3 animate-marquee py-3">
          {/* Loop data dua kali untuk efek infinite yang mulus */}
          {[...techStacks, ...techStacks].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-[var(--border)] bg-zinc-50/50 hover:bg-white transition-all duration-300 cursor-default whitespace-nowrap group/item hover:shadow-xl hover:shadow-[var(--primary)]/5 hover:-translate-y-1"
            >
              <div className="w-5 h-5 grayscale group-hover/item:grayscale-0 transition-all duration-500">
                <StackIcon name={tech.icon} />
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[var(--brand-dark)] opacity-70 group-hover/item:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

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
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
