"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import LanguageToggle from "@/components/toggle-languange/ToggleLanguange";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [active, setActive] = useState("Beranda");

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
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
            <span className="text-base font-black tracking-tighter text-[var(--brand-dark)]">
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
            <li key={item.name} className="relative">
              <Link
                href={item.id}
                onClick={() => setActive(item.name)}
                className={`relative py-2 transition-colors duration-300 hover:text-[var(--primary)] ${
                  active === item.name
                    ? "text-[var(--primary)]"
                    : "text-[var(--brand-dark)]"
                }`}
              >
                {item.name}

                {active === item.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block scale-90">
            <LanguageToggle />
          </div>
          <Link
            href="/contact"
            onClick={() => setActive("Kontak")}
            className="bg-[var(--brand-dark)] hover:bg-[var(--primary)] text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-xl transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            Hubungi Kami
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
