"use client";

import { motion } from "framer-motion";
import { staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { workExperience, education } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[rgba(8,145,178,0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and educational background that have shaped my skills and expertise."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Work Experience */}
          <motion.div variants={slideInLeft}>
            <div className="flex items-center gap-3 mb-8">
              <FiBriefcase className="text-[#67e8f9]" size={22} />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-7">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#0891b2]" />
                    {index < workExperience.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+32px)] bg-[rgba(8,145,178,0.2)]" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {job.title}
                    </h4>
                    <p className="text-[#0891b2] text-sm font-medium mb-1">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-3 text-[#6b7280] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar size={12} />
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {job.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-[#9ca3af] text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#0891b2] mt-1.5 flex-shrink-0">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={slideInRight}>
            <div className="flex items-center gap-3 mb-8">
              <FiBookOpen className="text-[#67e8f9]" size={22} />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-7">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#0891b2]" />
                    {index < education.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+32px)] bg-[rgba(8,145,178,0.2)]" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {edu.title}
                    </h4>
                    <p className="text-[#0891b2] text-sm font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 text-[#6b7280] text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <FiMapPin size={12} />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiCalendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-[#9ca3af] text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    {edu.points && (
                      <ul className="space-y-1.5 mt-2">
                        {edu.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-[#9ca3af] text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-[#0891b2] mt-1.5 flex-shrink-0">
                              •
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
