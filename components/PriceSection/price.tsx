"use client";

import { useState } from "react";
import { CheckCircle2 as CheckIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { gratisPlans, berbayarPlans, type PricingPlan } from "@/constants";

export default function PriceSection() {
  const t = useTranslations("Price");
  const [active, setActive] = useState<"gratis" | "berbayar">("gratis");

  const plans = active === "gratis" ? gratisPlans : berbayarPlans;

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-6 bg-[var(--main-background)]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="w-15 h-1 rounded-full bg-[var(--muted)]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-2 bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent">
          {t("Title")}
        </h2>
        <p className="text-[var(--color-primary)] mb-4 max-w-lg mx-auto text-xs md:text-sm">
          {t("Description")}
        </p>

        {/* Toggle */}
        <div className="flex justify-center mb-5">
          <div className="bg-[var(--brand-dark)] p-1 rounded-xl flex shadow-2xl border border-white/5">
            <button
              onClick={() => setActive("gratis")}
              className={`px-4 py-3 rounded-lg text-[9px] font-black transition-all duration-300 ${
                active === "gratis"
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "text-white hover:text-white"
              }`}
            >
              {t("FreePlan")}
            </button>

            <button
              onClick={() => setActive("berbayar")}
              className={`px-4 py-3 rounded-lg text-[9px] font-black transition-all duration-300 ${
                active === "berbayar"
                  ? "bg-[var(--primary)] text-white shadow-md"
                  : "text-white hover:text-white"
              }`}
            >
              {t("PaidPlan")}
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative flex flex-col surface border border-[var(--border)] p-6 transition-all duration-500 hover:-translate-y-1"
            >
              <span className="text-xs md:text-sm uppercase font-black text-[var(--primary)] mb-3">
                {t(plan.title)}
              </span>

              <h3 className="text-xl sm:text-2xl font-black mb-2 tracking-tight">
                {plan.price}
              </h3>

              <p className="text-xs md:text-sm mb-5 min-h-[40px] leading-relaxed">
                {t(plan.desc)}
              </p>

              <button className="w-full rounded-xl py-3 text-[11px] font-black uppercase tracking-wider transition-all duration-300 border-2 border-[var(--brand-dark)] text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white">
                {t(plan.button)}
              </button>

              <ul className="mt-6 space-y-3 text-xs md:text-sm text-left">
                {plan.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 opacity-70 font-medium"
                  >
                    <CheckIcon className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
