"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, fadeIn, scaleIn, staggerContainer } from "@/lib/animations";
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
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-gradient-sec-1"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px]" />
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/8 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-accent-light">Available for Freelance Work</span>
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.1] tracking-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="text-accent">{personalInfo.firstName}</span>
              <br />
              <span className="text-accent">{personalInfo.lastName}</span>
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
              className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-8 mx-auto lg:mx-0"
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
              <p className="text-muted-dark text-sm mb-3">Tech I work with:</p>
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
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative flex justify-center px-8 md:px-6 lg:px-0 will-change-transform"
          >
            <div className="relative">
              {/* Subtle and narrow terracotta glow for soft edge definition */}
              <div className="absolute -inset-3 bg-accent/12 rounded-2xl blur-xl pointer-events-none" />

              {/* Portrait image */}
              <div className="relative w-[200px] h-[240px] sm:w-[260px] sm:h-[320px] md:w-[300px] md:h-[370px] lg:w-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-accent/15">
                <Image
                  src="/images/hero-portrait.webp"
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating decorative icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center animate-float backdrop-blur-sm">
                <FiSettings className="text-accent-light" size={18} />
              </div>
              <div className="absolute top-1/2 -left-5 w-10 h-10 rounded-lg bg-accent/12 border border-accent/15 flex items-center justify-center animate-float-slow backdrop-blur-sm">
                <SiReact className="text-[#61dafb]" size={16} />
              </div>
              <div className="absolute -bottom-2 right-8 w-11 h-11 rounded-xl bg-accent/12 border border-accent/15 flex items-center justify-center animate-float-delayed backdrop-blur-sm">
                <FiCode className="text-accent-light" size={16} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
