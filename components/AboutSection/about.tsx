import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("About");
  return (
    <section className="py-20 sm:py-24 px-6 bg-[var(--main-background)]">
      <div className="max-w-5xl mx-auto">
        {/* Judul */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="w-12 h-1 rounded-full bg-[var(--color-muted)]" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Image
              src="/image-about.png"
              alt="About Caruban Technology"
              width={360}
              height={280}
              className="w-full md:w-80 h-56 md:h-64 object-cover rounded-xl"
            />
          </div>

          {/* Teks */}
          <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--color-primary)] text-justify">
            <p>
              <span className="font-bold text-[var(--secondary-accent)]">
                {t("DescriptionHighlight")}
              </span>{" "}
              {t("Description")}
            </p>
            <p>{t("Description2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
