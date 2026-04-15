"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { featuredProjects } from "@/constants";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="relative py-24 px-6 overflow-hidden bg-white text-[var(--foreground)]"
    >
      {/* Dekorasi Background */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      {/* Header  */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-10 h-1.5 rounded-full bg-[var(--primary)] mb-4" />
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter">
            Portofolio Proyek
          </h2>
        </motion.div>
      </div>

      {/* Project List */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col ${
              project.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-center gap-10 md:gap-16`}
          >
            {/* Image Container */}
            <div className="w-full md:w-[38%] shrink-0 group">
              <div className="relative w-full h-60 md:h-[300px] rounded-[2rem] overflow-hidden border border-[var(--border)] bg-zinc-50 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-[var(--primary)]/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--brand-dark)]/0 group-hover:bg-[var(--brand-dark)]/5 transition-colors duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-[45%] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                <span className="text-[var(--primary)] font-black text-lg md:text-xl opacity-25">
                  {project.id}
                </span>
                <div className="h-[1px] w-6 bg-[var(--border)]" />
              </div>

              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight text-[var(--brand-dark)]">
                {project.title}
              </h3>

              <p className="text-sm md:text-base opacity-65 leading-relaxed font-medium max-w-xl">
                {project.description}
              </p>

              <div className="pt-2">
                <Link
                  target="_blank"
                  href={project.slug}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--brand-dark)] text-white text-xs font-bold hover:bg-[var(--primary)] transition-all duration-300 transform hover:scale-105 shadow-lg group uppercase tracking-wider"
                >
                  Detail Proyek
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
        className="max-w-5xl mx-auto flex justify-center mt-20"
      >
        <Link
          href="/projects"
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full border-2 border-[var(--border)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] transition-all duration-500">
            <ArrowRight className="w-4 h-4 text-[var(--brand-dark)] group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--brand-dark)] opacity-60">
            Eksplor Semua Proyek
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
