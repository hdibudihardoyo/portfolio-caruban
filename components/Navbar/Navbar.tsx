"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageToggle from "@/components/toggle-languange/ToggleLanguange";
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
            w-full max-w-[1050px] 
            flex items-center justify-between 
            pointer-events-auto
            px-4 py-2 
            bg-[var(--color-secondary)]/40 backdrop-blur-md 
            rounded-full 
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
                width={28}
                height={28}
                className="transition-transform duration-500 group-hover:rotate-12"
                priority
              />
            </div>
            <div className="flex flex-col leading-none text-[var(--primary-accent)]">
              <span className="text-xs font-black tracking-tighter">
                Caruban
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em]">
                TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className="hidden lg:flex items-center gap-4 text-[11px] font-black uppercase tracking-wider">
            {navLinks.map((item) => (
              <li key={item.key} className="relative">
                <Link
                  href={item.id}
                  onClick={() => handleNavClick(item.key)}
                  className={`relative py-2 transition-colors duration-300 hover:text-[var(--primary-accent)] ${
                    active === item.key
                      ? "text-[var(--color-muted)]"
                      : "text-[var(--color-muted)]"
                  }`}
                >
                  {t(item.key)}

                  {active === item.key && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--secondary-accent)] rounded-full"
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
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--color-primary)] bg-[var(--primary-accent)] text-[var(--color-primary)] shadow-sm transition-all lg:hidden cursor-pointer"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>
            <Link
              href="/contact"
              onClick={() => handleNavClick("Kontak")}
              className="hidden lg:inline-flex bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] text-[var(--color-primary)] text-[10px] font-bold uppercase tracking-widest p-3 rounded-full transition-all shadow-md active:scale-95 whitespace-nowrap cursor-pointer"
            >
              {t("Button")}
            </Link>
          </div>

          {/* Nav Links - Mobile */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-x-0 top-full mt-3 rounded-3xl border border-[var(--primary-accent)] bg-[var(--color-secondary)] p-5 shadow-2xl backdrop-blur-xl lg:hidden"
              >
                <ul className="flex flex-col gap-3 text-sm font-bold uppercase tracking-wider text-[var(--color-tertiary)]">
                  {navLinks.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.id}
                        onClick={() => handleNavClick(item.key)}
                        className={`block rounded-2xl px-4 py-3 transition-colors duration-200 ${
                          active === item.key
                            ? "bg-[var(--primary-accent)] text-[var(--color-primary)]"
                            : "hover:bg-[var(--primary-accent)] hover:text-[var(--color-primary)]"
                        }`}
                      >
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-col gap-3 border-t pt-4">
                  <Link
                    href="/contact"
                    onClick={() => handleNavClick("Kontak")}
                    className="inline-flex items-center justify-center rounded-2xl text-[var(--color-primary)] bg-gradient-to-r from-[#1B9D77] to-[#F9CD19]  py-3 px-4 text-center text-xs font-black uppercase tracking-widest transition-all"
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
