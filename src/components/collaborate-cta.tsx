"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { FiArrowRight } from "react-icons/fi";

export default function CollaborateCta() {
  return (
    <section className="py-20 md:py-28 relative bg-gradient-sec-5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[rgba(8,145,178,0.06)] rounded-full blur-[120px]" />
      </div>

      {/* Glowing Separator Line */}
      <div className="relative w-full flex items-center justify-center mb-16 mt-4">
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#06b6d4]/25 to-transparent" />
        <div className="relative z-10 flex items-center justify-center">
          <div 
            className="absolute w-[42px] h-[42px] rounded-full bg-[#06b6d4]/5 border border-[#06b6d4]/10 animate-pulse" 
          />
          <div className="absolute w-[26px] h-[26px] rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/20" />
          <div 
            className="w-[12px] h-[12px] rounded-full bg-[#67e8f9]" 
            style={{ boxShadow: "0 0 14px rgba(6, 182, 212, 0.85), 0 0 4px rgba(6, 182, 212, 0.4)" }}
          />
        </div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to{" "}
            <span className="text-[#0891b2]">Collaborate</span>?
          </h2>
          <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed mb-8">
            Let&apos;s join forces to create something extraordinary with clean,
            scalable, and modern solutions
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex text-base px-8 py-3.5"
          >
            Start a Project
            <FiArrowRight size={18} className="arrow-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
