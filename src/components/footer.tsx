"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="border-t border-[rgba(6,182,212,0.08)] py-8"
    >
      <div className="section-container">
        <p className="text-center text-[#6b7280] text-sm">
          © {new Date().getFullYear()} Amr Mahran. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
