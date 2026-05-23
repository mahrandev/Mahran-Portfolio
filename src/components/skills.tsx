"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import ScrollReveal from "./scroll-reveal";
import {
  FiSettings,
  FiCode,
  FiLayers,
  FiDatabase,
  FiTool,
  FiGitBranch,
} from "react-icons/fi";

const categoryIcons: Record<string, React.ReactNode> = {
  settings: <FiSettings size={28} className="text-[#67e8f9]" />,
  code: <FiCode size={28} className="text-[#67e8f9]" />,
  layers: <FiLayers size={28} className="text-[#67e8f9]" />,
  database: <FiDatabase size={28} className="text-[#67e8f9]" />,
  wrench: <FiTool size={28} className="text-[#67e8f9]" />,
  gitBranch: <FiGitBranch size={28} className="text-[#67e8f9]" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-gradient-sec-3">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="Here are the key technologies and tools I work with to build modern, scalable, and polished front-end applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            // Alternate presets for varied reveal animations: left-column slides left, middle column fades up, right-column slides right
            const presets: ("slide-left" | "fade-up" | "slide-right")[] = ["slide-left", "fade-up", "slide-right"];
            const preset = presets[index % presets.length];
            
            return (
              <ScrollReveal key={category.title} preset={preset} className="w-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                  className="glass-card p-6 md:p-7 group h-full"
                >
                  <div className="mb-4">
                    {categoryIcons[category.icon] ?? (
                      <FiCode size={28} className="text-[#67e8f9]" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed mb-5">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
