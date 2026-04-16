"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { services } from "@/constants";

export default function ServiceSection() {
  const t = useTranslations("Service");

  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 px-6 overflow-hidden bg-white text-[var(--foreground)]"
    >
      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Left Side */}
          <div className="md:w-[35%] md:sticky md:top-24 md:h-fit shrink-0 flex flex-col gap-5">
            <div className="w-10 h-2 rounded-full bg-[var(--primary)]" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight">
              {t("Title")} <br />
              <span className="text-[var(--primary)] italic">
                {t("Subtitle")}
              </span>
            </h2>
            <p className="text-sm md:text-base opacity-65 font-medium leading-relaxed">
              {t("Description")}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="surface group relative overflow-hidden p-4 flex flex-col gap-3 hover:border-[var(--primary)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Card image */}
                <div className="relative h-36 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={t(service.title)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Card body */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-sm md:text-base font-black tracking-tight leading-snug">
                      {t(service.title)}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm opacity-65 leading-relaxed font-medium">
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
