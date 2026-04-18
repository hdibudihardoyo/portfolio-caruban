"use client";

import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageToggle } from "@/hooks/useLanguageToggle";

export default function LanguageToggle() {
  const { locale, open, setOpen, ref, languages, handleSwitch } =
    useLanguageToggle();

  return (
    <div className="relative" ref={ref}>
      {/* Globe Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
          open
            ? "bg-[var(--primary-accent)] text-[var(--color-primary)] shadow-lg shadow-[var(--primary-accent)]/20"
            : "bg-[var(--primary-accent)] text-[var(--color-primary)] backdrop-blur-sm"
        }`}
      >
        <Globe
          className={`w-4 h-4 transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 5, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-44 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)] backdrop-blur-xl shadow-2xl overflow-hidden p-1.5 z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.locale}
                onClick={() => handleSwitch(lang.locale)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs transition-all duration-200 group cursor-pointer ${
                  locale === lang.locale
                    ? "bg-[var(--primary-accent)] text-[var(--color-primary)]"
                    : "text-[var(--brand-dark)] hover:bg-[var(--primary)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base leading-none">{lang.flag}</span>
                  <span className="tracking-wide uppercase">{lang.label}</span>
                </div>

                {locale === lang.locale && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
