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
      className="relative py-16 sm:py-20 px-6 bg-[var(--main-background)] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        {/* Header  */}
        <div className="flex flex-col items-center text-center mb-10 gap-4">
          <div className="w-15 h-1 rounded-full bg-[var(--color-muted)]" />

          <h2 className="text-2xl md:text-3xl font-black tracking-tighter bg-gradient-to-r from-[#1B9D77] to-[#F9CD19] bg-clip-text text-transparent">
            {t("Title")}
          </h2>
          <p className="text-sm md:text-base max-w-md text-[var(--color-primary)]">
            {t("Description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-6">
          {/* Left Form */}
          <div className="w-full md:w-3/5">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("FirstName")}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder={t("LastName")}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  placeholder={t("Email")}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  placeholder={t("Message")}
                  rows={5}
                  className="text-[var(--color-primary)] w-full px-5 py-4 rounded-[2rem] border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all resize-none placeholder:text-[var(--primary-accent)]"
                ></textarea>
              </div>

              {/* Buttons Group */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                <button className="flex-1 bg-[var(--primary-accent)] text-[var(--color-primary)] py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-black/5 cursor-pointer">
                  <Mail className="w-4 h-4" />
                  {t("SendEmail")}
                </button>
                <button className="flex-1 bg-[var(--color-primary)]/10 text-[var(--primary-accent)] border border-var[--color-primary] py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg cursor-pointer">
                  <MessageCircle className="w-4 h-4" />
                  {t("WhatsAppChat")}
                </button>
              </div>
            </form>
          </div>

          {/* Right Visuals */}
          <div className="w-full md:w-2/5 flex flex-col items-center">
            <div className="relative">
              <div className="w-44 h-44 md:w-60 md:h-60 rounded-full flex items-center justify-center relative">
                <div className="w-[90%] h-[90%] rounded-full overflow-hidden">
                  <Image
                    src="/image-contact.png"
                    alt="image-contact"
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
                  className="absolute left-0 top-10 hidden sm:block sm:-left-4"
                >
                  <Link
                    href={socialMedia[0].link}
                    target="_blank"
                    className="cursor-pointer block bg-[var(--color-primary)] border border-[var(--color-muted-2)] px-4 py-2 rounded-l-full rounded-tr-full shadow-lg text-[10px] font-bold text-[var(--color-muted-2)]"
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
                  className="absolute right-0 bottom-16 hidden sm:block sm:-right-8"
                >
                  <Link
                    href={socialMedia[0].link}
                    target="_blank"
                    className="cursor-pointer block bg-[var(--color-primary)] border border-[var(--color-muted-2)] px-4 py-2 rounded-l-full rounded-tr-full shadow-lg text-[10px] font-bold text-[var(--color-muted-2)]"
                  >
                    {t("FollowUs")}
                  </Link>
                </motion.div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-2 justify-center">
                {socialMedia.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.link}
                    target="_blank"
                    className={`w-8 h-8 bg-[var(--color-secondary)]/60 border border-[var(--color-primary)] rounded-full flex items-center justify-center hover:border-transparent transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-3.5 h-3.5 text-[var(--color-primary)]"
                    />
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
