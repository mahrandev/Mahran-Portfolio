"use client";

import ScrollReveal from "./scroll-reveal";
import { workExperience, education } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="py-24 md:py-32 relative bg-gradient-sec-6">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and educational background that have shaped my skills and expertise."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <ScrollReveal preset="slide-left" className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <FiBriefcase className="text-accent-light" size={22} />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="relative pl-7">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    {index < workExperience.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+32px)] bg-accent/20" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {job.title}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-1">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-3 text-muted-dark text-xs mb-3">
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
                          className="text-muted text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">
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
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal preset="slide-right" className="w-full">
            <div className="flex items-center gap-3 mb-8">
              <FiBookOpen className="text-accent-light" size={22} />
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-7">
                  {/* Timeline dot and line */}
                  <div className="absolute left-0 top-1.5">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    {index < education.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+32px)] bg-accent/20" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {edu.title}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 text-muted-dark text-xs mb-3">
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
                      <p className="text-muted text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                    {edu.points && (
                      <ul className="space-y-1.5 mt-2">
                        {edu.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-muted text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-accent mt-1.5 flex-shrink-0">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
