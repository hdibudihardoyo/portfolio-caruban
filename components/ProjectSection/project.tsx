"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { featuredProjects } from "@/constants";

export default function ProjectSection() {
  const t = useTranslations("Project");

  return (
    <section
      id="project"
      className="relative py-20 sm:py-24 px-6 overflow-hidden bg-[var(--main-background)]"
    >
      {/* Header  */}
      <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-15 h-1 rounded-full bg-[var(--color-muted)] mb-4" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
        </motion.div>
      </div>

      {/* Project List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-14 md:gap-20">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col ${
              project.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-center gap-8 md:gap-12`}
          >
            {/* Image Container */}
            <div className="w-full flex-1 group">
              <div className="relative w-full h-60 md:h-[300px] rounded-[2rem] overflow-hidden border border-[var(--border)] bg-zinc-50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[var(--primary)]/10">
                <Image
                  src={project.image}
                  alt={t(project.title)}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--brand-dark)]/0 group-hover:bg-[var(--brand-dark)]/5 transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-[var(--color-primary)] font-bold text-base md:text-lg">
                  {project.id}
                </span>
                <div className="h-[1px] w-6 bg-[var(--color-primary)]" />
              </div>

              <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight text-[var(--primary-accent)]">
                {t(project.title)}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed text-[var(--color-primary)]">
                {t(project.description)}
              </p>

              <div>
                <Link
                  target="_blank"
                  href={project.slug}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--primary-accent)] text-[var(--color-primary)] text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg uppercase tracking-wider"
                >
                  {t("Details")}
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--secondary-accent)]">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto flex justify-center mt-8"
      >
        <Link
          href="/projects"
          className="group flex flex-col items-center gap-3 mt-4"
        >
          <div className="w-8 h-8 rounded-full bg-[var(--primary-accent)] border-2 border-[var(--color-primary)] flex items-center justify-center">
            <ArrowRight className="w-4 h-4 -rotate-45 transition-all duration-500 text-[var(--color-primary)] group-hover:rotate-0" />
          </div>
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {t("Explore")}
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
