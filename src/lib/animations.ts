import type { Variants } from "framer-motion";

// Smooth ease curve for all animations
const smoothEase = "easeOut";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const slideUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      ease: smoothEase,
    },
  },
};

export const blurFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const tapScale = {
  scale: 0.98,
};
