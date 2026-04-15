"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/constants";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 overflow-hidden bg-white text-[var(--foreground)]"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary)] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* Left Side */}
          <div className="md:w-[35%] md:sticky md:top-32 md:h-fit shrink-0 flex flex-col gap-6">
            <div className="w-10 h-1.5 rounded-full bg-[var(--primary)]" />
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight">
              Mengapa Memilih <br />
              <span className="text-[var(--primary)] italic">
                Layanan Kami?
              </span>
            </h2>
            <p className="text-sm md:text-base opacity-65 font-medium leading-relaxed">
              Kami menciptakan solusi digital yang dirancang khusus untuk
              mempercepat pertumbuhan bisnis Anda dengan standar kualitas
              tinggi.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-[2rem] overflow-hidden border border-[var(--border)] bg-white p-5 flex flex-col gap-4 hover:border-[var(--primary)] transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Card image */}
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
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
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm opacity-65 leading-relaxed font-medium">
                    {service.description}
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
