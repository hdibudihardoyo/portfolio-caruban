"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { teams } from "@/constants";

export default function TeamSection() {
  const t = useTranslations("Team");
  return (
    <section className="py-20 sm:py-24 px-6 bg-[var(--main-background)]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <div className="flex justify-center mb-4">
          <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black mb-10 sm:mb-16 tracking-tight text-[var(--primary-accent)]">
          {t("Title")}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teams.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Avatar Container */}
              <div className="relative z-10">
                <div className=" w-32 h-32 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      src={item.image}
                      alt={item.name}
                      sizes="300px"
                      className="object-contain"
                      priority={true}
                    />
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="flex flex-col gap-1 bg-[var(--primary-accent)] border border-[var(--color-primary)] px-4 py-3 sm:px-6 sm:py-4 rounded-tr-[2rem] rounded-bl-[2rem] -mt-6 relative z-20 w-full shadow-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl">
                <p className="text-left text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
                  {t(item.role)}
                </p>
                <p className="text-xs  tracking-tight uppercase text-[var(--color-primary)]">
                  {item.name}
                </p>
              </div>

              {/* Social Icons  */}
              <div className="flex gap-2 mt-4">
                {item.socials.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className="w-8 h-8 bg-[var(--color-secondary)]/60 border border-[var(--color-primary)] rounded-full flex items-center justify-center hover:bg-[var(--primary-accent)] hover:border-transparent transition-all duration-300 hover:scale-110"
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-3.5 h-3.5 text-[var(--color-primary)]"
                    />
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
