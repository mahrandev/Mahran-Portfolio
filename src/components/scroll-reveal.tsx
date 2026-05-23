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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Set up values based on preset
  let initialX = 0;
  let exitX = 0;
  let initialY = 0;
  let exitY = 0;
  let initialScale = 1;
  let exitScale = 1;
  let initialBlur = 0;
  let exitBlur = 0;

  switch (preset) {
    case "fade-up":
      initialY = 45;
      exitY = -45;
      initialScale = 0.98;
      exitScale = 0.98;
      break;
    case "fade-down":
      initialY = -45;
      exitY = 45;
      initialScale = 0.98;
      exitScale = 0.98;
      break;
    case "slide-left":
      initialX = -50;
      exitX = -50;
      initialScale = 0.99;
      exitScale = 0.99;
      break;
    case "slide-right":
      initialX = 50;
      exitX = 50;
      initialScale = 0.99;
      exitScale = 0.99;
      break;
    case "scale-up":
      initialScale = 0.92;
      exitScale = 0.92;
      initialY = 20;
      exitY = -20;
      break;
    case "blur-in":
      initialBlur = 8;
      exitBlur = 8;
      initialY = 20;
      exitY = -20;
      break;
  }

  // Smooth spring physics to filter out scroll jitter and add premium inertia
  const springConfig = { stiffness: 130, damping: 26, mass: 0.8 };

  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.65, 0.9], [0, 1, 1, 0]);
  const rawX = useTransform(scrollYProgress, [0, 0.15, 0.65, 0.9], [initialX, 0, 0, exitX]);
  const rawY = useTransform(scrollYProgress, [0, 0.15, 0.65, 0.9], [initialY, 0, 0, exitY]);
  const rawScale = useTransform(scrollYProgress, [0, 0.15, 0.65, 0.9], [initialScale, 1, 1, exitScale]);
  const rawBlur = useTransform(scrollYProgress, [0, 0.15, 0.65, 0.9], [initialBlur, 0, 0, exitBlur]);

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
