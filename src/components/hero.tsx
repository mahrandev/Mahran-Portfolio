"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { personalInfo, heroTechStack } from "@/data/portfolio-data";
import TypingEffect from "./typing-effect";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiReactquery,
} from "react-icons/si";
import { FiCode, FiSettings } from "react-icons/fi";

const techIcons: Record<string, React.ReactNode> = {
  typescript: <SiTypescript className="text-[#3178c6]" size={14} />,
  react: <SiReact className="text-[#61dafb]" size={14} />,
  nextjs: <SiNextdotjs className="text-white" size={14} />,
  tailwind: <SiTailwindcss className="text-[#06b6d4]" size={14} />,
  supabase: <SiSupabase className="text-[#3ecf8e]" size={14} />,
  reactquery: <SiReactquery className="text-[#ff4154]" size={14} />,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[rgba(8,145,178,0.06)] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(8,145,178,0.3)] bg-[rgba(8,145,178,0.08)] text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#67e8f9]">Available for Freelance Work</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-[#0891b2]">{personalInfo.firstName}</span>
              <br />
              <span className="text-[#0891b2]">{personalInfo.lastName}</span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              variants={fadeUp}
              className="mb-5 text-xl md:text-2xl font-semibold"
            >
              <span className="text-white">Specialized </span>
              <TypingEffect />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[#9ca3af] text-base md:text-lg leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0"
            >
              {personalInfo.heroDescription}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={fadeUp}>
              <p className="text-[#6b7280] text-sm mb-3">Tech I work with:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {heroTechStack.map((tech) => (
                  <span key={tech.name} className="tech-badge">
                    {techIcons[tech.icon]}
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative flex justify-center px-8 md:px-6 lg:px-0"
          >
            <div className="relative">
              {/* Purple glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[rgba(8,145,178,0.2)] via-[rgba(8,145,178,0.1)] to-transparent rounded-2xl blur-2xl" />

              {/* Portrait image */}
              <div className="relative w-[200px] h-[240px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[370px] lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-[rgba(6,182,212,0.15)]">
                <Image
                  src="/images/hero-portrait.webp"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating decorative icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-[rgba(8,145,178,0.15)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center animate-float backdrop-blur-sm">
                <FiSettings className="text-[#67e8f9]" size={18} />
              </div>
              <div className="absolute top-1/2 -left-5 w-10 h-10 rounded-lg bg-[rgba(8,145,178,0.12)] border border-[rgba(6,182,212,0.15)] flex items-center justify-center animate-float-slow backdrop-blur-sm">
                <SiReact className="text-[#61dafb]" size={16} />
              </div>
              <div className="absolute -bottom-2 right-8 w-11 h-11 rounded-xl bg-[rgba(8,145,178,0.12)] border border-[rgba(6,182,212,0.15)] flex items-center justify-center animate-float-delayed backdrop-blur-sm">
                <FiCode className="text-[#67e8f9]" size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
