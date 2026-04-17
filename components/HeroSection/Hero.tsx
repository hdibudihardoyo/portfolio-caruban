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
      className="min-h-screen flex flex-col items-center justify-center text-center py-16 sm:py-24 overflow-hidden bg-[var(--main-background)]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full max-w-3xl mx-auto"
      >
        {/* Title & Desc */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl max-w-2xl font-black tracking-tighter leading-[1.1] bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent mx-auto">
            {t("Title")}
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-medium text-[var(--color-primary)]">
            {t("Description")}
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative my-6 w-full max-w-[560px] md:max-w-[680px] mx-auto"
        >
          <div className="absolute inset-0 bg-[var(--primary)] opacity-5 blur-3xl rounded-full scale-90"></div>
          <Image
            src="/image-hero.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            priority
            className="relative w-full h-auto drop-shadow-xl rounded-2xl"
          />
        </motion.div>

        {/* Tags & Button Container */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6 w-full"
        >
          {/* Tags  */}
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            {["WebDesign", "Branding", "Marketing", "SEO", "Consulting"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)] rounded-full shadow-sm text-[10px] text-[var(--color-primary)] text-center"
                >
                  {t(`Tags.${item}`)}
                </span>
              ),
            )}
          </div>

          <button className="cursor-pointer bg-[var(--primary)] hover:bg-[#168a65] text-[var(--color-primary)] py-3 px-4  rounded-full transition-all transform hover:scale-105 shadow-lg font-bold text-xs uppercase flex items-center gap-1">
            {t("Button")}
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
          </button>
        </motion.div>
      </motion.div>

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
        className="fixed bottom-8 right-10 z-50"
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
            width={120}
            height={120}
            className="relative drop-shadow-2xl shadow-[var(--primary-accent)] "
          />
        </Link>
      </motion.div>
    </section>
  );
}
