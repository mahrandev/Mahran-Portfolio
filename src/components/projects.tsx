"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import ScrollReveal from "./scroll-reveal";
import { FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll || projects.length <= 4 ? projects : projects.slice(0, 3);
  const hiddenCount = projects.length - 3;

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-gradient-sec-4">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px] pointer-events-none" />
      <div className="section-container relative z-10">
        <SectionHeading title="Recent Projects" subtitle="Explore my latest work where creativity meets functionality through modern web technologies" />
        <div className="space-y-8 md:space-y-12">
          <AnimatePresence initial={false}>
            {visibleProjects.map((project, index) => {
              const isEven = index % 2 === 1;
              const preset = isEven ? "slide-right" : "slide-left";
              return (
                <ScrollReveal key={project.title} preset={preset} className="w-full">
                  <div className="glass-card overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className={`relative h-[280px] sm:h-[320px] lg:h-auto lg:min-h-[400px] overflow-hidden ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                        <div className="absolute top-4 left-4 z-10 project-number">{project.number}</div>
                        <Image src={project.image} alt={project.title} fill className="object-cover object-top scale-100 transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className={`absolute inset-0 ${isEven ? "bg-gradient-to-l from-card-bg via-transparent to-transparent" : "bg-gradient-to-r from-card-bg via-transparent to-transparent"} opacity-40 lg:opacity-70`} />
                      </div>
                      <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                        <p className="text-accent text-xs uppercase tracking-widest font-semibold mb-3">Featured Project</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
                        <p className="text-muted text-base leading-relaxed mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.techs.map((tech) => (<span key={tech} className="px-3.5 py-1.5 rounded-full border border-card-border bg-card-bg/50 text-sm text-muted">{tech}</span>))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.liveUrl !== "#" && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm"><FiExternalLink size={15} className="external-link-icon" />View Live</a>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </AnimatePresence>
        </div>
        {projects.length > 4 && (
          <ScrollReveal preset="scale-up" className="w-full">
            <div className="flex justify-center mt-12">
              <button onClick={() => setShowAll(!showAll)} className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full border border-card-border-hover bg-accent/8 text-accent-light font-medium text-sm transition-all duration-300 hover:border-accent/60 hover:bg-accent/15 hover:shadow-[0_0_30px_rgba(201,92,71,0.15)]">
                {showAll ? (<><FiChevronUp size={18} className="transition-transform duration-300" />Show Less</>) : (<><FiChevronDown size={18} className="transition-transform duration-300" />Show {hiddenCount} More Projects</>)}
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
