"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import {
  navLinks,
  footerSocials,
  footerServices,
  footerContact,
} from "@/constants";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--background)] border-t border-white pt-20 pb-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/icon-caruban.png"
                alt="Logo Caruban Tech"
                width={32}
                height={32}
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-tighter text-[var(--brand-dark)]">
                  Caruban
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[var(--primary)]">
                  TECHNOLOGY
                </span>
              </div>
            </div>
            <p className="text-sm opacity-60 font-medium leading-relaxed">
              {t("BrandDescription")}
            </p>
            <div className="flex gap-4">
              {footerSocials.map((social, i) => (
                <Link
                  key={i}
                  href={social.link}
                  className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xs" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links  */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              {t("Navigation")}
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium opacity-60">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.id}
                    className="hover:text-[var(--primary)] transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              {t("Services")}
            </h4>
            <ul className="flex flex-col gap-3 text-sm font-medium opacity-60">
              {footerServices.map((service) => (
                <li key={service}>{t(service)}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info  */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[var(--brand-dark)]">
              {t("Contact")}
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span className="text-sm opacity-60 font-medium">
                  {footerContact.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--primary)] shrink-0" />
                <span className="text-sm opacity-60 font-medium">
                  {footerContact.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest">
            {t("Copyright")}
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[var(--brand-dark)] hover:text-[var(--primary)] transition-colors"
          >
            {t("BackToTop")}
            <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
