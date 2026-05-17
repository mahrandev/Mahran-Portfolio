"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { skillCategories } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
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
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="My Skills"
          subtitle="Here are the key technologies and tools I work with to build modern, scalable, and polished front-end applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="glass-card p-6 md:p-7 group"
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
          ))}
        </div>
      </div>
    </section>
  );
}
