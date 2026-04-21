"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="py-20 sm:py-24 px-6 bg-[var(--main-background)]">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="w-14 h-1 rounded-full bg-[var(--color-muted)]" />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="relative w-full md:w-[380px] h-64 md:h-72 flex-shrink-0">
            <Image
              src="/images5.png"
              alt="About Caruban Technology"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="flex flex-col gap-5 text-[var(--color-primary)] text-justify leading-relaxed">
            <p>
              <span className="font-semibold text-[var(--secondary-accent)]">
                {t("DescriptionHighlight")}
              </span>{" "}
              {t("Description")}
            </p>
            <p>{t("Description2")}</p>
          </div>
        </div>

        {/* VISION & MISSION  */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Vision */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[var(--color-muted)]" />
              <h3 className="text-xl font-bold text-[var(--secondary-accent)] uppercase tracking-wide">
                {t("VisionTitle")}
              </h3>
            </div>

            <p className="text-base leading-relaxed text-[var(--color-primary)]">
              {t("Vision")}
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[var(--color-muted)]" />
              <h3 className="text-xl font-bold text-[var(--secondary-accent)] uppercase tracking-wide">
                {t("MissionTitle")}
              </h3>
            </div>

            <ul className="flex flex-col gap-3 text-[var(--color-primary)]">
              <li className="flex gap-3">
                <span className="text-[var(--secondary-accent)] font-bold">
                  01
                </span>
                <span>{t("Mission1")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--secondary-accent)] font-bold">
                  02
                </span>
                <span>{t("Mission2")}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--secondary-accent)] font-bold">
                  03
                </span>
                <span>{t("Mission3")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
