"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { allProjects } from "@/constants";

export default function AllProjects() {
  const t = useTranslations("AllProjects");

  return (
    <section className="py-20 sm:py-24 px-6 bg-[var(--main-background)]">
      <div className="max-w-5xl mx-auto">
        {/* Header  */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div className="flex flex-col gap-3 text-left">
            <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-[var(--primary-accent)]">
              {t("TitlePrefix")} <br />
              <span className="text-[var(--color-primary)] font-black">
                {t("TitleHighlight")}
              </span>
            </h1>
            <p className="text-xs md:text-sm max-w-md leading-relaxed text-[var(--color-primary)]">
              {t("Description")}
            </p>
          </div>

          <div className="hidden md:flex">
            <span className="px-3 py-2 bg-[var(--primary-accent)] border border-[var(--button-text-color)] rounded-full text-xs font-bold uppercase tracking-widest text-[var(--button-text-color)]">
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
              className="group flex flex-col border border-[var(--color-primary)] rounded-2xl overflow-hidden hover:border-[var(--color-secondary)] transition-all duration-500 hover:shadow-2xl"
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
                    className="p-3 bg-[var(--button-text-color)] rounded-xl hover:bg-[var(--primary-accent)] hover:text-[var(--button-text-color)] transition-all shadow-xl"
                  >
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                  {t(project.category)}
                </span>
                <h3 className="text-sm font-black tracking-tight text-[var(--primary-accent)] leading-tight">
                  {t(project.title)}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-[var(--color-primary)]">
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
