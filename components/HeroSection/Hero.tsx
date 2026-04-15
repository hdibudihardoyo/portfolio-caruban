"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {

  const words = ["Terintegrasi", "Inovatif", "Skalabel", "Profesional"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    // 1. Logika ketika kata selesai diketik
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    // 2. Logika ketika kata selesai dihapus
    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 200);
      return () => clearTimeout(timeout);
    }

    // 3. Logika proses mengetik dan menghapus
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 75 : 150,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white text-[var(--foreground)] pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center z-10 w-full max-w-5xl"
      >
        {/* Title & Desc */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl font-black tracking-tighter leading-[1.1]">
            Solusi Pengembangan Web <br />
            <span className="text-[var(--primary)]">
              {words[index].substring(0, subIndex)}
              <span className="animate-pulse font-light">|</span>
            </span>{" "}
            untuk Bisnis Anda
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base opacity-70 font-medium">
            Kami membantu transformasi digital bisnis Anda melalui pengembangan
            perangkat lunak yang skalabel, desain intuitif, dan teknologi
            terkini.
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
            {["Web design", "Branding", "Marketing", "SEO", "Consulting"].map(
              (item, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 bg-white border border-[var(--border)] rounded-full shadow-sm text-[10px] md:text-xs font-bold text-[var(--brand-dark)]"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <button className="bg-[var(--primary)] hover:bg-[#168a65] text-white p-4 px-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg shadow-[var(--primary)]/20 font-black text-xs uppercase ">
            Konsultasi Gratis
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
          href="https://wa.me/628XXXXXXXXXX"
          target="_blank"
          className="relative block group"
        >
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40"></span>
          <Image
            src="/icon-WhatsApp.png"
            alt="WhatsApp"
            width={60}
            height={60}
            className="relative drop-shadow-2xl "
          />
        </Link>
      </motion.div>
    </section>
  );
}
