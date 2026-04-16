"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { teams } from "@/constants";

export default function TeamSection() {
  const t = useTranslations("Team");
  return (
    <section className="py-16 sm:py-20 px-6 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-2 rounded-full bg-[var(--primary)]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 sm:mb-16 tracking-tight">
          {t("Title")}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Avatar Container */}
              <div className="relative z-10">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-105">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src={item.image}
                      alt={item.name}
                      sizes="160px"
                      className="object-contain"
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-[var(--brand-dark)] text-white px-5 py-4 rounded-tr-[80px] rounded-bl-[80px] -mt-8 relative z-20 w-full shadow-lg transform transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl">
                <p className="text-[10px] uppercase tracking-widest text-[var(--primary)] font-bold">
                  {t(item.role)}
                </p>
                <p className="text-sm font-black mt-1 tracking-tight uppercase">
                  {item.name}
                </p>
              </div>

              {/* Social Icons  */}
              <div className="flex gap-4 mt-6">
                {item.socials.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-sm" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
