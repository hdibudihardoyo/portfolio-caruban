"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { allProjects } from "@/constants";

export default function AllProjects() {
  const t = useTranslations("AllProjects");

  return (
    <section className="py-16 sm:py-20 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header  */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="flex flex-col gap-3 text-left">
            <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-[var(--brand-dark)]">
              {t("TitlePrefix")} <br />
              <span className="text-[var(--primary)] italic">
                {t("TitleHighlight")}
              </span>
            </h1>
            <p className="text-sm md:text-base opacity-60 font-medium max-w-md leading-relaxed">
              {t("Description")}
            </p>
          </div>

          <div className="hidden md:flex">
            <span className="px-3 py-2 bg-zinc-50 border border-[var(--border)] rounded-full text-[10px] font-black uppercase tracking-widest text-[var(--brand-dark)]">
              {t("TotalProjects", { count: allProjects.length })}
            </span>
          </div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white border border-[var(--border)] rounded-[2.5rem] overflow-hidden hover:border-[var(--primary)] transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5"
            >
              {/* Image Preview */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(project.title)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--brand-dark)]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <Link
                    href={project.link}
                    className="p-3 bg-white rounded-xl text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-xl"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--primary)]">
                  {t(project.category)}
                </span>
                <h3 className="text-lg md:text-xl font-black tracking-tight text-[var(--brand-dark)] leading-tight">
                  {t(project.title)}
                </h3>
                <p className="text-xs md:text-sm opacity-65 font-medium leading-relaxed">
                  {t(project.desc)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
