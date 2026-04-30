"use client";

import { CheckCircle2 as CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePriceSection } from "@/hooks/usePriceSection";
import {
  getScrollVariants,
  getStaggerVariants,
  scrollViewport,
} from "@/hooks/useScrollAnimation";



export default function PriceSection() {
  const t = useTranslations("Price");
  const { active, setActive, plans } = usePriceSection();

  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 px-6 bg-[var(--main-background)]"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Header — slide dari atas */}
        <motion.div
          variants={getScrollVariants("down")}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
        >
          <div className="flex justify-center mb-4">
            <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-2 text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
          <p className="text-[var(--color-primary)] mb-4 max-w-lg mx-auto text-xs md:text-sm">
            {t("Description")}
          </p>
        </motion.div>

        {/* Toggle — slide dari bawah */}
        <motion.div
          variants={getScrollVariants("up")}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="flex justify-center mb-5"
        >
          <div className="bg-[var(--primary-accent)] p-1 rounded-xl flex shadow-2xl border border-white/5">
            <button
              onClick={() => setActive("gratis")}
              className={`px-4 py-3 rounded-lg text-[9px] font-black transition-all duration-300 cursor-pointer ${
                active === "gratis"
                  ? "bg-[var(--button-text-color)] text-[var(--primary-accent)]"
                  : "text-[var(--button-text-color)]"
              }`}
            >
              {t("FreePlan")}
            </button>
            <button
              onClick={() => setActive("berbayar")}
              className={`px-4 py-3 rounded-lg text-[9px] font-black transition-all duration-300 cursor-pointer ${
                active === "berbayar"
                  ? "bg-[var(--button-text-color)] text-[var(--primary-accent)]"
                  : "text-[var(--button-text-color)]"
              }`}
            >
              {t("PaidPlan")}
            </button>
          </div>
        </motion.div>

        {/* Cards — parent stagger container */}
        <motion.div
          variants={getStaggerVariants(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={getScrollVariants("up", 45)}
              className="relative flex flex-col rounded-2xl bg-[var(--card-bg)] p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="text-xs md:text-sm uppercase font-black text-[var(--primary-accent)] mb-3">
                {t(plan.title)}
              </span>

              <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tighter text-[var(--color-tertiary)]">
                {plan.price}
              </h3>

              <p className="text-xs md:text-sm mb-5 min-h-[40px] leading-relaxed text-[var(--color-tertiary)] opacity-70">
                {t(plan.desc)}
              </p>

              <button className="w-full rounded-xl py-3 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 text-[var(--button-text-color)] bg-[var(--primary-accent)] cursor-pointer">
                {t(plan.button)}
              </button>

              <ul className="mt-6 space-y-3 text-xs md:text-sm text-left text-[var(--color-tertiary)]">
                {plan.features.map((item: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 opacity-70 font-medium"
                  >
                    <CheckIcon className="w-4 h-4 text-[var(--color-tertiary)] shrink-0 mt-0.5" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
