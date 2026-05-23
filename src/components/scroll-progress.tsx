"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [hasNativeSupport, setHasNativeSupport] = useState(false);

  useEffect(() => {
    // Check if the browser supports animation-timeline
    const supportsScrollTimeline =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      (CSS.supports("animation-timeline: scroll()") ||
        CSS.supports("animation-timeline: scroll(root)"));
    setHasNativeSupport(supportsScrollTimeline);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (hasNativeSupport) {
    // Render native CSS Scroll-Driven element (no JS execution during scroll)
    return <div className="scroll-progress" />;
  }

  // Fallback to Framer Motion physics-based scroll progress
  return (
    <motion.div
      className="js-scroll-progress"
      style={{ scaleX }}
    />
  );
}
