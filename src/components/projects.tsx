"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const getAnim = (i: number) => {
  const m = i % 3;
  if (m === 0) return { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 } };
  if (m === 1) return { initial: { opacity: 0, x: 60 }, whileInView: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } };
  return { initial: { opacity: 0, scale: 0.9, y: 30 }, whileInView: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.9 } };
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll || projects.length <= 4 ? projects : projects.slice(0, 3);
  const hiddenCount = projects.length - 3;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[150px] pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionHeading title="Recent Projects" subtitle="Explore my latest work where creativity meets functionality through modern web technologies" />
        <div className="space-y-8 md:space-y-12">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => {
              const isEven = index % 2 === 1;
              const a = getAnim(index);
              return (
                <motion.div key={project.title} initial={a.initial} whileInView={a.whileInView} viewport={{ once: false, amount: 0.15 }} exit={a.exit} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="glass-card overflow-hidden group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={`relative h-[280px] sm:h-[320px] lg:h-auto lg:min-h-[400px] overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="absolute top-4 left-4 z-10 project-number">{project.number}</div>
                      <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className={`absolute inset-0 ${isEven ? "bg-gradient-to-l from-[#0d0d20] via-transparent to-transparent" : "bg-gradient-to-r from-[#0d0d20] via-transparent to-transparent"} opacity-40 lg:opacity-70`} />
                    </div>
                    <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <p className="text-[#0891b2] text-xs uppercase tracking-widest font-semibold mb-3">Featured Project</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-[#9ca3af] text-base leading-relaxed mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techs.map((tech) => (<span key={tech} className="px-3.5 py-1.5 rounded-full border border-[rgba(6,182,212,0.15)] bg-[rgba(13,13,32,0.5)] text-sm text-[#9ca3af]">{tech}</span>))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.liveUrl !== "#" && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm"><FiExternalLink size={15} />View Live</a>)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {projects.length > 4 && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.8, delay: 0.1 }} className="flex justify-center mt-12">
            <button onClick={() => setShowAll(!showAll)} className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[rgba(6,182,212,0.3)] bg-[rgba(8,145,178,0.08)] text-[#67e8f9] font-medium text-sm transition-all duration-300 hover:border-[rgba(6,182,212,0.6)] hover:bg-[rgba(8,145,178,0.15)] hover:shadow-[0_0_30px_rgba(8,145,178,0.15)]">
              {showAll ? (<><FiChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />Show Less</>) : (<><FiChevronDown size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" />Show {hiddenCount} More Projects</>)}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
