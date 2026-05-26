"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";

import { socialLinks } from "@/data/portfolio-data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver for tracking active sections
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? "bg-card-bg/80 backdrop-blur-xl border border-card-border shadow-lg shadow-black/20"
            : "bg-card-bg/50 backdrop-blur-md border border-transparent"
        } rounded-full px-4 md:px-6 py-3`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="text-lg font-bold text-white tracking-tight whitespace-nowrap cursor-pointer"
          >
            Amr<span className="text-accent">.</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "text-accent-light"
                    : "text-muted hover:text-white"
                }`}
              >
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-accent/12 border border-accent/20 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-2 ml-2 border-l border-card-border pl-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-1.5"
              aria-label="GitHub"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors p-1.5"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href={socialLinks.email}
              className="text-muted hover:text-white transition-colors p-1.5"
              aria-label="Email"
            >
              <FiMail size={17} />
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-muted hover:text-white transition-colors p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 bg-card-bg/95 backdrop-blur-xl border border-card-border rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === link.href.slice(1)
                      ? "text-accent bg-accent/10"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-card-border">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-white transition-colors"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href={socialLinks.email}
                  className="text-muted hover:text-white transition-colors"
                >
                  <FiMail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
