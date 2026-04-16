"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/toggle-languange/ToggleLanguange";
import { navLinks } from "@/constants";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (key: string) => {
    setActive(key);
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-transparent"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="
            w-full max-w-[1050px] 
            flex items-center justify-between 
            pointer-events-auto
            px-6 py-3
            bg-white/40 backdrop-blur-md 
            rounded-2xl 
            border border-white/20 
            shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
          "
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setActive("Beranda")}
            className="flex items-center gap-3 group cursor-pointer shrink-0"
          >
            <div className="relative">
              <Image
                src="/icon-caruban.png"
                alt="Logo"
                width={34}
                height={34}
                className="transition-transform duration-500 group-hover:rotate-12"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-tighter text-[var(--brand-dark)]">
                Caruban
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-[var(--primary)]">
                TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className="hidden lg:flex items-center space-x-7 text-[12px] font-black uppercase tracking-wider text-[var(--brand-dark)]">
            {navLinks.map((item) => (
              <li key={item.key} className="relative">
                <Link
                  href={item.id}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative py-2 transition-colors duration-300 hover:text-[var(--primary)] ${
                    active === item.key
                      ? "text-[var(--primary)]"
                      : "text-[var(--brand-dark)]"
                  }`}
                >
                  {t(item.key)}

                  {active === item.name && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/90 text-[var(--brand-dark)] shadow-sm transition-all hover:bg-white lg:hidden cursor-pointer"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              onClick={() => handleNavClick("Kontak")}
              className="hidden lg:inline-flex bg-[var(--brand-dark)] hover:bg-[var(--primary)] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {t("Button")}
            </Link>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
              >
                <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-dark)]">
                  {navLinks.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.id}
                        onClick={() => handleNavClick(item.key)}
                        className={`block rounded-2xl px-4 py-3 transition-colors duration-200 ${
                          active === item.key
                            ? "bg-[var(--primary)] text-white"
                            : "hover:bg-[var(--brand-dark)]/5"
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3 border-t border-[var(--border)] pt-4">
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("Kontak")}
                    className="inline-flex items-center justify-center rounded-2xl bg-[var(--brand-dark)] px-4 py-3 text-center text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[var(--primary)]"
                  >
                    {t("Button")}
                  </Link>
                  <div className="flex items-center justify-center">
                    <LanguageToggle />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
}
