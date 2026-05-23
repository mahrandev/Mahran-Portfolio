"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./scroll-reveal";
import {
  personalInfo,
  designPhilosophy,
  technicalArsenal,
  socialLinks,
} from "@/data/portfolio-data";
import {
  FiMail,
  FiMapPin,
  FiSearch,
  FiZap,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";

const philosophyIcons: Record<string, React.ReactNode> = {
  zap: <FiZap size={22} />,
  accessibility: <FiUsers size={22} />,
  code: <FiCode size={22} />,
  sparkles: <HiOutlineSparkles size={22} />,
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-gradient-sec-2">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 gap-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            {/* Main Bio Card */}
            <ScrollReveal preset="slide-left" className="w-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                className="glass-card p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start h-full"
              >
                <div className="w-[140px] h-[180px] sm:w-[160px] sm:h-[200px] rounded-xl overflow-hidden flex-shrink-0 border border-[rgba(6,182,212,0.2)] mx-auto sm:mx-0">
                  <Image
                    src="/images/about-portrait.webp"
                    alt={personalInfo.name}
                    width={160}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    I&apos;m {personalInfo.name}
                  </h3>
                  <p className="text-[#9ca3af] leading-relaxed text-base">
                    A{" "}
                    <span className="text-white font-semibold">
                      Full-Stack Developer
                    </span>{" "}
                    specializing in building fast, beautiful, and scalable
                    front-end applications powered by modern tools like Next.js,
                    TypeScript, Shadcn UI, and Supabase.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Info Cards Column */}
            <ScrollReveal preset="slide-right" className="w-full">
              <div className="flex flex-col gap-4 h-full">
                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(8,145,178,0.15)] flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-[#67e8f9]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b7280] uppercase tracking-wider font-medium">
                      Email
                    </p>
                    <a
                      href={socialLinks.email}
                      className="text-sm text-white hover:text-[#67e8f9] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(8,145,178,0.15)] flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-[#67e8f9]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b7280] uppercase tracking-wider font-medium">
                      Location
                    </p>
                    <p className="text-sm text-white">{personalInfo.location}</p>
                  </div>
                </motion.div>

                {/* Status Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  className="glass-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(8,145,178,0.15)] flex items-center justify-center flex-shrink-0">
                    <FiSearch className="text-[#67e8f9]" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-[#6b7280] uppercase tracking-wider font-medium">
                      Status
                    </p>
                    <p className="text-sm text-white">{personalInfo.status}</p>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Design Philosophy Card */}
            <ScrollReveal preset="fade-up" className="w-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                className="purple-gradient-card p-6 md:p-8 h-full"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  Design Philosophy
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {designPhilosophy.map((item) => (
                    <div key={item.title}>
                      <div className="text-white/80 mb-2">
                        {philosophyIcons[item.icon]}
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-xs">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Technical Arsenal Card */}
            <ScrollReveal preset="blur-in" className="w-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                className="glass-card p-6 md:p-8 h-full"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FiCode className="text-[#67e8f9]" size={20} />
                  Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {technicalArsenal.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[rgba(6,182,212,0.15)] bg-[rgba(13,13,32,0.5)] text-sm text-[#9ca3af]"
                    >
                      <FaCheckCircle className="text-green-400" size={12} />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-[rgba(6,182,212,0.1)] pt-5">
                  <p className="text-[#6b7280] text-sm italic leading-relaxed">
                    {personalInfo.quote}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
