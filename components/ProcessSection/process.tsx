"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  MessageSquare,
  FileSearch,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    titleKey: "Step1Title",
    descKey: "Step1Desc",
    number: "01",
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    titleKey: "Step2Title",
    descKey: "Step2Desc",
    number: "02",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    titleKey: "Step3Title",
    descKey: "Step3Desc",
    number: "03",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    titleKey: "Step4Title",
    descKey: "Step4Desc",
    number: "04",
  },
  {
    icon: <TestTube2 className="w-6 h-6" />,
    titleKey: "Step5Title",
    descKey: "Step5Desc",
    number: "05",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    titleKey: "Step6Title",
    descKey: "Step6Desc",
    number: "06",
  },
];

export default function ProcessSection() {
  const t = useTranslations("Process");

  return (
    <section className="py-20 sm:py-24 px-6 bg-[var(--main-background)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)] max-w-lg mx-auto leading-relaxed">
            {t("Description")}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative bg-[var(--card-bg)] border border-[var(--color-muted)]/20 rounded-[2rem] p-6 group cursor-default overflow-hidden"
            >
              {/* Background number watermark */}
              <span className="absolute top-4 right-5 text-6xl font-black text-[var(--primary-accent)]/8 select-none leading-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[var(--primary-accent)] flex items-center justify-center text-[var(--button-text-color)] mb-5 shadow-md transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Step badge */}
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary-accent)] mb-1 block">
                {t("Step")} {step.number}
              </span>

              {/* Title */}
              <h3 className="text-sm md:text-base font-black tracking-tight text-[var(--color-tertiary)] mb-2">
                {t(step.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                {t(step.descKey)}
              </p>

              {/* Connector line (hidden on last column items) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-muted)]/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
