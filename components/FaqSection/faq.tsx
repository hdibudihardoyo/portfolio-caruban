"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { faqs } from "@/constants";

export default function FaqSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-20 px-6 overflow-hidden bg-white text-[var(--foreground)]">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="md:w-[35%] md:sticky md:top-24 md:h-fit shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight">
                {t("Title")} <br />
                <span className="text-[var(--primary)] italic">
                  {t("Subtitle")}
                </span>
              </h2>
              <p className="text-sm md:text-base opacity-65 font-medium leading-relaxed">
                {t("Description")}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-48 rounded-[1.5rem] overflow-hidden border border-[var(--border)] bg-zinc-50 shadow-sm"
            >
              <Image
                src="/image-contoh.jpg"
                alt="FAQ Caruban Technology"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-[var(--border)] transition-all duration-300 ${isOpen ? "py-6" : "py-4"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 text-left group"
                  >
                    <span
                      className={`text-sm md:text-sm tracking-tight leading-snug transition-colors duration-300 flex-1 ${
                        isOpen
                          ? "text-[var(--primary)]"
                          : "text-[var(--brand-dark)] group-hover:text-[var(--primary)]"
                      }`}
                    >
                      {t(faq.question)}
                    </span>

                    <div
                      className={`mt-1 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--primary)] text-white border-[var(--primary)] rotate-90"
                          : "bg-zinc-50 border-[var(--border)] text-[var(--brand-dark)] group-hover:border-[var(--primary)]/30 group-hover:bg-[var(--primary)]/5"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs md:text-sm opacity-70 leading-relaxed font-medium pt-4 max-w-2xl">
                          {t(faq.answer)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
