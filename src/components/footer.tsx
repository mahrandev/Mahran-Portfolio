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
      className="border-t border-card-border py-8"
    >
      <div className="section-container">
        <p className="text-center text-muted-dark text-sm">
          © {new Date().getFullYear()} Amr Mahran. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
