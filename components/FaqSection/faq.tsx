"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { faqs } from "@/constants";

export default function FaqSection() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-20 px-6 overflow-hidden bg-[var(--main-background)]">
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="md:w-[35%] md:sticky md:top-24 md:h-fit shrink-0 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-15 h-1 rounded-full bg-[var(--muted)]" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent">
                {t("Title")} <br />
                <span className="bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent italic">
                  {t("Subtitle")}
                </span>
              </h2>
              <p className="text-xs md:text-sm max-w-sm leading-relaxed text-[var(--color-primary)]">
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

          <div className="flex-1 flex flex-col gap-2">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="rounded-2xl overflow-hidden">
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-[var(--primary-accent)]"
                  >
                    <span className="text-xs md:text-sm tracking-tight leading-snug text-[var(--color-primary)] flex-1">
                      {t(faq.question)}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-white/20 text-[var(--color-primary)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Answer */}
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
                        className="overflow-hidden bg-[var(--secondary-accent)]"
                      >
                        <p className="text-xs md:text-sm text-[var(--color-tertiary)] leading-relaxed px-5 py-4 max-w-2xl">
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
