"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  preset?: "fade-up" | "fade-down" | "slide-left" | "slide-right" | "scale-up" | "blur-in";
}

export default function ScrollReveal({
  children,
  className = "",
  preset = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll position of the element relative to viewport
  // Animation triggers when top of element meets viewport bottom ("start end")
  // and completes when top of element is 80% from the top ("start 80%")
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 80%"],
  });

  // Set up values based on preset
  let initialX = 0;
  let initialY = 0;
  let initialScale = 1;
  let initialBlur = 0;

  switch (preset) {
    case "fade-up":
      initialY = 45;
      initialScale = 0.98;
      break;
    case "fade-down":
      initialY = -45;
      initialScale = 0.98;
      break;
    case "slide-left":
      initialX = -50;
      initialScale = 0.99;
      break;
    case "slide-right":
      initialX = 50;
      initialScale = 0.99;
      break;
    case "scale-up":
      initialScale = 0.92;
      initialY = 20;
      break;
    case "blur-in":
      initialBlur = 8;
      initialY = 20;
      break;
  }

  // Smooth spring physics to filter out scroll jitter and add premium inertia
  const springConfig = { stiffness: 130, damping: 26, mass: 0.8 };

  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rawX = useTransform(scrollYProgress, [0, 1], [initialX, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [initialY, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [initialScale, 1]);
  const rawBlur = useTransform(scrollYProgress, [0, 1], [initialBlur, 0]);

  const opacity = useSpring(rawOpacity, springConfig);
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const blurVal = useSpring(rawBlur, springConfig);

  const filter = useTransform(blurVal, (v) => (v > 0.1 ? `blur(${v}px)` : "none"));

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, y, scale, filter }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
