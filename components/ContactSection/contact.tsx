"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { socialMedia, contactConfig } from "@/constants";
import { useContact } from "@/hooks/useContact";

export default function Contact() {
  const t = useTranslations("Contact");
  const {
    formData,
    loading,
    status,
    errorMessage,
    handleInputChange,
    handleSendEmail,
    handleWhatsAppChat,
  } = useContact();
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

          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-[var(--primary-accent)]">
            {t("Title")}
          </h2>
          <p className="text-sm md:text-base max-w-md text-[var(--color-primary)]">
            {t("Description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-6">
          {/* Left Form */}
          <div className="w-full md:w-3/5">
            <form
              onSubmit={handleSendEmail}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder={t("FirstName")}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder={t("LastName")}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  name="email"
                  placeholder={t("Email")}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-[var(--color-primary)] w-full px-5 py-3 rounded-2xl border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all placeholder:text-[var(--primary-accent)]"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  placeholder={t("Message")}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="text-[var(--color-primary)] w-full px-5 py-4 rounded-[2rem] border border-[var(--primary-accent)] bg-[var(--color-primary)]/10 text-sm focus:outline-none focus:border-[var(--primary-accent)] transition-all resize-none placeholder:text-[var(--primary-accent)]"
                ></textarea>
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="sm:col-span-2 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-700 text-sm">
                  ✓ Pesan terkirim! Kami akan segera menghubungi Anda.
                </div>
              )}
              {status === "error" && (
                <div className="sm:col-span-2 p-3 bg-red-500/20 border border-red-500 rounded-xl text-red-700 text-sm">
                  ✕ {errorMessage}
                </div>
              )}

              {/* Buttons Group */}
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-[var(--primary-accent)] text-[var(--button-text-color)] py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-black/5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Mail className="w-4 h-4" />
                  {loading ? "Mengirim..." : t("SendEmail")}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  disabled={loading}
                  className="flex-1 bg-[var(--primary-accent)] text-[var(--button-text-color)] py-4 rounded-full font-bold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
                    className={`w-8 h-8 bg-[var(--primary-accent)] border border-[var(--button-text-color)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group`}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-3.5 h-3.5 text-[var(--button-text-color)]"
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
