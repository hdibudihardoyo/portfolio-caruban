"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { services } from "@/constants";

export default function ServiceSection() {
  const t = useTranslations("Service");

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 px-6 sm:px-8 overflow-hidden bg-[var(--main-background)]"
    >
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="grid gap-8">
          <div className="w-full flex flex-col gap-5 items-center text-center">
            <div className="w-15 h-1 rounded-full bg-[var(--color-muted)] mx-auto" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent">
              {t("Title")} <br />
              <span className="italic bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent">
                {t("Subtitle")}
              </span>
            </h2>
            <p className="text-xs md:text-sm leading-relaxed max-w-2xl mx-auto text-[var(--color-primary)]">
              {t("Description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="surface group relative overflow-hidden p-4 flex flex-col gap-4 h-full hover:-translate-y-1 bg-[var(--color-primary)]/10 border-[var(--color-primary)] transition-all duration-300 rounded-2xl"
              >
                {/* Card image */}
                <div className="relative h-44 sm:h-40 md:h-36 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={t(service.title)}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Card body */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r from-[#1B9D77]/20 to-[#F9CD19]/20 text-sm font-bold text-[var(--color-primary)]">
                      {service.number}
                    </div>
                    <h3 className="text-sm font-black tracking-tight leading-snug bg-gradient-to-r from-[#1B9D77] to-[#F5F6FA] bg-clip-text text-transparent">
                      {t(service.title)}
                    </h3>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--color-primary)]">
                    {t(service.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
