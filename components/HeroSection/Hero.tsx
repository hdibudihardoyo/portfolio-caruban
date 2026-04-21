"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function HeroSection() {
  const t = useTranslations("Hero");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center py-20 sm:py-28 px-6 overflow-hidden bg-[var(--main-background)]"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[var(--primary-accent)] opacity-[0.07] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--primary-accent)] opacity-[0.05] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--primary)] opacity-[0.03] blur-3xl" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text content  */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start z-10 gap-6"
        >
          {/* Badge / eyebrow */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--color-primary)] bg-[var(--primary-accent)] text-[var(--color-primary)] text-[10px] font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Digital Agency
            </span>
          </motion.div>

          {/* Title & Desc */}
          <motion.div variants={itemVariants} className="space-y-4 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.08] font-black text-[var(--primary-accent)]">
              {t("Title")}
            </h1>
            <p className="max-w-md text-xs md:text-sm leading-relaxed text-[var(--color-primary)] opacity-80">
              {t("Description")}
            </p>
          </motion.div>

          {/* Tags & Button Container */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-3 w-full"
          >
            <button className="group cursor-pointer relative overflow-hidden bg-[var(--primary-accent)] hover:bg-[#168a65] text-[var(--color-primary)] py-3.5 px-7 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[var(--primary-accent)]/30 shadow-lg font-semibold text-xs uppercase tracking-wider flex items-center gap-2">
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative">{t("Button")}</span>
              <FontAwesomeIcon icon={faWhatsapp} className="relative text-lg" />
            </button>

            {/* Trust nudge */}
            <p className="text-[10px] text-[var(--color-primary)] opacity-50 flex items-center gap-1">
              <span>✓</span> Respon cepat · Konsultasi gratis
            </p>
          </motion.div>
        </motion.div>

        {/* Illustration  */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.7, ease: "easeOut" },
            x: { duration: 0.7, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
          }}
          className="relative w-full max-w-[480px] md:max-w-full mx-auto md:mx-0"
        >
          {/* Glow ring behind image */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[var(--primary-accent)]/20 to-transparent blur-2xl scale-95 -z-10" />
          {/* Subtle card frame */}
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-[var(--primary-accent)]/10 shadow-2xl shadow-[var(--primary-accent)]/10 bg-[var(--primary-accent)]/5 backdrop-blur-sm p-2">
            <Image
              src="/hero5.svg"
              alt="Hero Illustration"
              width={300}
              height={300}
              priority
              className="relative w-full h-auto drop-shadow-xl rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          scale: { delay: 1, type: "spring" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="fixed bottom-8 right-4 z-50"
      >
        <Link
          href="https://wa.me/62882001771113"
          target="_blank"
          className="relative block group cursor-pointer"
        >
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></span>
          <Image
            src="/icon-catie-ai.png"
            alt="WhatsApp"
            width={100}
            height={100}
            className="relative drop-shadow-2xl shadow-[var(--primary-accent)] group-hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </motion.div>
    </section>
  );
}
