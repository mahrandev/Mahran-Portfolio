"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import SectionHeading from "./section-heading";
import ScrollReveal from "./scroll-reveal";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    icon: <FiMapPin size={24} className="text-accent-light" />,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: <FiMail size={24} className="text-accent-light" />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <FiPhone size={24} className="text-accent-light" />,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
];

const socialIcons = [
  {
    icon: <FaGithub size={20} />,
    href: socialLinks.github,
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    href: socialLinks.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FaWhatsapp size={20} />,
    href: socialLinks.whatsapp,
    label: "WhatsApp",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative bg-gradient-sec-7">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project in mind or want to discuss opportunities? I'm always open to talking about creative ideas and new projects."
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => {
            const presets: ("slide-left" | "scale-up" | "slide-right")[] = ["slide-left", "scale-up", "slide-right"];
            const preset = presets[index % presets.length];
            
            return (
              <ScrollReveal key={card.label} preset={preset} className="w-full">
                <motion.div
                  className="glass-card p-6 md:p-8 text-center group h-full"
                >
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-white font-semibold text-base mb-1">
                    {card.label}
                  </h3>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-muted text-sm hover:text-accent-light transition-colors"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-muted text-sm">{card.value}</p>
                  )}
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Social Icons */}
        <ScrollReveal preset="blur-in" className="w-full">
          <div className="flex justify-center gap-4 mb-10">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-card-border bg-card-bg/50 flex items-center justify-center text-muted hover:text-white hover:border-card-border-hover hover:bg-accent/10 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal preset="scale-up" className="w-full">
          <div className="text-center">
            <a
              href={socialLinks.email}
              className="btn-primary inline-flex text-base px-10 py-4"
            >
              Start a Conversation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
