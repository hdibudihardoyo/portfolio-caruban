"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { socialMedia, contactConfig } from "@/constants";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 px-6 bg-white overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header  */}
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter">
            {t("Title")}
          </h2>
          <p className="text-xs sm:text-sm md:text-base opacity-60 font-medium max-w-md">
            {t("Description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left Form */}
          <div className="w-full md:w-3/5">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("FirstName")}
                  className="w-full px-5 py-3 rounded-2xl border border-[var(--border)] bg-zinc-50 text-sm focus:outline-none focus:border-[var(--primary)] transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("LastName")}
                  className="w-full px-5 py-3 rounded-2xl border border-[var(--border)] bg-zinc-50 text-sm focus:outline-none focus:border-[var(--primary)] transition-all font-medium"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  placeholder={t("Email")}
                  className="w-full px-5 py-3 rounded-2xl border border-[var(--border)] bg-zinc-50 text-sm focus:outline-none focus:border-[var(--primary)] transition-all font-medium"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  placeholder={t("Message")}
                  rows={5}
                  className="w-full px-5 py-4 rounded-[2rem] border border-[var(--border)] bg-zinc-50 text-sm focus:outline-none focus:border-[var(--primary)] transition-all font-medium resize-none"
                ></textarea>
              </div>

              {/* Buttons Group */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                <button className="flex-1 bg-[var(--brand-dark)] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/5">
                  <Mail className="w-4 h-4" />
                  {t("SendEmail")}
                </button>
                <button className="flex-1 bg-[var(--primary)] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#168a65] transition-all active:scale-95 shadow-lg shadow-[var(--primary)]/10">
                  <MessageCircle className="w-4 h-4" />
                  {t("WhatsAppChat")}
                </button>
              </div>
            </form>
          </div>

          {/* Right Visuals */}
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-zinc-100 rounded-full flex items-center justify-center border border-zinc-200 relative">
                <div className="w-[90%] h-[90%] bg-zinc-200 rounded-full overflow-hidden">
                  <Image
                    src="/icon-caruban.png"
                    alt="icon-caruban"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Bubble instagram Handle */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: [0, -8, 0],
                    y: [0, -10, 0],
                    opacity: [0, 1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 top-10"
                >
                  <Link
                    href={socialMedia[0].link}
                    target="_blank"
                    className="cursor-pointer block bg-white border border-[var(--border)] px-4 py-2 rounded-2xl shadow-lg text-[10px] font-black text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white transition-all"
                  >
                    {contactConfig.instagramHandle}
                  </Link>
                </motion.div>

                {/* Bubble - Follow */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: [0, 8, 0], y: [0, -10, 0], opacity: [0, 1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="absolute -right-8 bottom-16"
                >
                  <Link
                    href={socialMedia[0].link}
                    target="_blank"
                    className="cursor-pointer block bg-white border border-[var(--border)] px-4 py-2 rounded-2xl shadow-lg text-[10px] font-black text-[var(--brand-dark)] hover:bg-[var(--primary)] hover:text-white transition-all"
                  >
                    {t("FollowUs")}
                  </Link>
                </motion.div>
              </div>

              {/* Decorative Social Icons from Constants */}
              <div className="flex gap-4 mt-3 justify-center">
                {socialMedia.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className={`w-11 h-11 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-[var(--brand-dark)] shadow-sm transition-all duration-300 hover:text-white hover:border-transparent hover:-translate-y-1 ${social.color}`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
