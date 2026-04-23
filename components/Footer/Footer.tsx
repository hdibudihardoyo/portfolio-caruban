"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, MapPin } from "lucide-react";
import {
  navLinks,
  footerSocials,
  footerServices,
  footerContact,
} from "@/constants";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");

  return (
    <footer className="bg-[var(--primary-accent)] pt-20 pb-10 px-6 text-[var(--button-text-color)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          {/* Brand Identity */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.jpeg"
                alt="Logo Caruban Tech"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tighter text-[var(--button-text-color)]">
                  Caruban
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[var(--button-text-color)] uppercase">
                  TECHNOLOGY
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{t("BrandDescription")}</p>
            <div className="flex gap-4">
              {footerSocials.map((social, i) => (
                <Link
                  key={i}
                  href={social.link}
                  className="w-8 h-8 rounded-full border border-[var(--button-text-color)] flex items-center justify-center text-[var(--button-text-color)]"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xs" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--button-text-color)]">
              {t("Navigation")}
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-[var(--button-text-color)]">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.id}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--button-text-color)]">
              {t("Services")}
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[var(--button-text-color)]">
              {footerServices.map((service) => (
                <li key={service}>{t(service)}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--button-text-color)]">
              {t("Contact")}
            </h4>
            <ul className="flex flex-col gap-4 text-[var(--button-text-color)]">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--button-text-color)] shrink-0" />
                <span className="text-sm">{footerContact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--button-text-color)] shrink-0" />
                <span className="text-sm">{footerContact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--button-text-color)]">
          <p className="text-[10px] text-center font-bold uppercase tracking-widest text-[var(--button-text-color)]">
            {t("Copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
