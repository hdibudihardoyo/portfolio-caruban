"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { locale: "en", label: "English", flag: "🇺🇸" },
  { locale: "id", label: "Indonesia", flag: "🇮🇩" },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = (newLocale: string) => {
    setOpen(false);
    if (newLocale === locale) return;

    document.cookie = `locale=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Globe Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 cursor-pointer ${
          open
            ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20"
            : "text-[var(--brand-dark)] hover:bg-white/50 backdrop-blur-sm border border-transparent hover:border-[var(--border)]"
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
            className="absolute right-0 mt-2 w-44 rounded-2xl border border-[var(--border)] bg-white/90 backdrop-blur-xl shadow-2xl overflow-hidden p-1.5 z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.locale}
                onClick={() => handleSwitch(lang.locale)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs transition-all duration-200 group cursor-pointer ${
                  locale === lang.locale
                    ? "bg-[var(--primary)]/10 text-[var(--primary)] font-bold"
                    : "text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white"
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
