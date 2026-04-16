"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white text-[var(--foreground)] pt-16 sm:pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full max-w-5xl"
      >
        {/* Title & Desc */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl max-w-3xl font-black tracking-tighter leading-[1.1]">
            {t("Title")}
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 font-medium">
            {t("Description")}
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative my-6 w-full max-w-[450px] md:max-w-[500px]"
        >
          <div className="absolute inset-0 bg-[var(--primary)] opacity-5 blur-3xl rounded-full scale-90"></div>
          <Image
            src="/logo-hero.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            priority
            className="relative w-full h-auto drop-shadow-xl"
          />
        </motion.div>

        {/* Tags & Button Container */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap justify-center items-center gap-2">
            {["WebDesign", "Branding", "Marketing", "SEO", "Consulting"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-white border border-[var(--border)] rounded-full shadow-sm text-[10px] md:text-xs font-bold text-[var(--brand-dark)]"
                >
                  {t(`Tags.${item}`)}
                </span>
              ),
            )}
          </div>

          <button className="cursor-pointer bg-[var(--primary)] hover:bg-[#168a65] text-white p-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-[var(--primary)]/20 font-black text-xs uppercase">
            {t("Button")}
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
            src="/icon-WhatsApp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="relative drop-shadow-2xl "
          />
        </Link>
      </motion.div>
    </section>
  );
}
