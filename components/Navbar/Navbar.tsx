"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import ToogleTheme from "@/components/ToogleTheme/ToogleTheme";
import LanguageToggle from "@/components/ToggleLanguange/ToggleLanguange";
import { navLinks } from "@/constants";
import { useNavbar } from "@/hooks/useNavbar";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { active, setActive, menuOpen, setMenuOpen, handleNavClick } =
    useNavbar();

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-transparent"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="
            relative w-full max-w-[1050px]
            flex items-center justify-between
            pointer-events-auto
            px-5 py-2.5
            bg-[var(--surface-bg)]/80 backdrop-blur-xl
            rounded-full
            border border-[var(--primary-accent)]/10
            shadow-lg shadow-[var(--color-tertiary)]/10
            transition-colors duration-300
          "
        >
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setActive("Beranda")}
            className="flex items-center gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8">
              <Image
                src="/icon.jpeg"
                alt="Logo"
                width={25}
                height={25}
                className="transition-transform duration-500 group-hover:rotate-12"
                priority
              />
            </div>
            <div className="flex flex-col leading-none text-[var(--primary-accent)]">
              <span className="text-xs font-black">CARUBAN</span>
              <span className="text-xs font-black">TECHNOLOGY</span>
            </div>
          </Link>
          {/* Nav Links - Desktop */}
          <ul className="hidden lg:flex items-center gap-1 text-[11px] font-black uppercase tracking-wider">
            {navLinks.map((item) => (
              <li key={item.key} className="relative">
                <Link
                  href={item.id}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative flex items-center px-3 py-1.5 rounded-full transition-all duration-200 hover:text-[var(--primary-accent)] hover:bg-[var(--primary-accent)]/8 ${active === item.key
                    ? "text-[var(--primary-accent)] "
                    : "text-[var(--color-muted)]"
                    }`}
                >
                  {t(item.key)}

                  {active === item.key && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-[var(--primary-accent)] rounded-full"
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
          <div className="flex items-center gap-2.5">
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--primary-accent)] text-[var(--button-text-color)] shadow-sm shadow-[var(--primary-accent)]/30 transition-all hover:scale-105 active:scale-95 lg:hidden cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            <div className="hidden md:block">
              <div className="flex items-center justify-center gap-3">
                <ToogleTheme />
                <LanguageToggle />
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => handleNavClick("Kontak")}
              className="hidden lg:inline-flex items-center bg-[var(--primary-accent)] text-[var(--button-text-color)] text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-[#1B9D77]/25 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {t("Button")}
            </Link>
          </div>
          {/* Nav Links - Mobile */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-[var(--color-primary)] bg-[var(--primary-accent)] p-4 shadow-2xl shadow-[var(--color-tertiary)]/20 backdrop-blur-xl lg:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-1 text-sm font-bold uppercase tracking-wider text-white">
                  {navLinks.map((item, i) => (
                    <motion.li
                      key={item.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.id}
                        onClick={() => handleNavClick(item.key)}
                        className={`flex items-center gap-2 rounded-2xl px-4 py-3 transition-all duration-200 ${active === item.key
                          ? "text-[var(--primary-accent)] bg-white"
                          : "text-white hover:bg-white/10"
                          }`}
                      >
                        {active === item.key && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-accent)] shrink-0" />
                        )}
                        {t(item.key)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-col gap-3 border-t border-white/20 pt-4">
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("Kontak")}
                    className="inline-flex items-center justify-center rounded-2xl text-[var(--primary-accent)] bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    {t("Button")}
                  </Link>
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <div className="border border-white/40 rounded-full flex items-center justify-center overflow-hidden">
                      <LanguageToggle />
                    </div>
                    <div className="border border-white/40 rounded-full flex items-center justify-center overflow-hidden">
                      <ToogleTheme />
                    </div>
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
