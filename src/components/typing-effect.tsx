"use client";

import { useState, useEffect, useCallback } from "react";
import { specialties } from "@/data/portfolio-data";

export default function TypingEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const currentWord = specialties[currentIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % specialties.length);
        return;
      }
    }
  }, [currentIndex, displayText, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="inline-flex items-center">
      <span className="text-[#9ca3af]">{displayText}</span>
      <span className="typing-cursor text-[#0891b2] ml-0.5 text-2xl md:text-3xl font-light">
        |
      </span>
    </span>
  );
}
