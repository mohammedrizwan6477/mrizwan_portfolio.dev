"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileDown, Mail, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui";
import { downloadResume, scrollToSection } from "@/utils/helpers";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "100%", label: "WCAG Compliance" },
];

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const nameWords = ["Mohammed", "Rizwan"];

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.25,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 110,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.95, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-12 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── LEFT: Content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability status badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for full-time &amp; contract roles
              </span>
            </motion.div>

            {/* Title & Name */}
            <div className="space-y-2 mb-4">
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1"
                variants={letterContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {nameWords.map((word, wordIdx) => (
                  <span key={wordIdx} className="inline-flex">
                    {Array.from(word).map((char, charIdx) => (
                      <motion.span
                        key={charIdx}
                        variants={letterVariants}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* Subtitle visible on desktop (on mobile, the 3D backdrop text already establishes this) */}
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="hidden lg:block text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400"
              >
                Software Engineer
              </motion.p>
            </div>

            {/* Concise Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6"
            >
              Building scalable, high-performance web applications and accessibility-first digital experiences with React, Next.js, Node.js, and modern AI tooling.
            </motion.p>

            {/* Quick Meta Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 text-xs text-neutral-600 dark:text-neutral-400"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                Maharashtra, India (Open to Remote)
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60">
                <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                Full Stack Developer (MERN Stack)
              </span>
            </motion.div>

            {/* Clear CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center mb-10 w-full"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={downloadResume}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm"
              >
                <FileDown className="w-4 h-4 mr-2" />
                <span>Download Resume</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Get in Touch</span>
              </Button>
            </motion.div>

            {/* Minimal Key Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo (Transparent PNG Cutout with Grounded Shadow & Backdrop Typography) ── */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-auto relative"
          >
            {/* Subtle Ambient Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-sky-400/25 via-blue-400/30 to-indigo-300/20 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Profile Cutout Image Container with Layered Typography */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] max-w-[90vw] flex items-center justify-center select-none">

              {/* Big Backdrop Typography: SOFTWARE ENGINEER behind the cutout image (Small / Mobile devices only) */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex lg:hidden flex-col justify-center items-center pointer-events-none select-none z-0 overflow-visible"
                style={{ fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif" }}
              >
                <div className="w-[175%] sm:w-[160%] flex flex-col items-center justify-center text-center">
                  <span
                    className="hero-backdrop-text block text-[72px] xs:text-[86px] sm:text-[104px] md:text-[124px] font-black uppercase tracking-tighter leading-[0.78] whitespace-nowrap text-center transition-all duration-300"
                  >
                    SOFTWARE
                  </span>
                  <span
                    className="hero-backdrop-text block text-[72px] xs:text-[86px] sm:text-[104px] md:text-[124px] font-black uppercase tracking-tighter leading-[0.78] mt-1 sm:mt-2 whitespace-nowrap text-center transition-all duration-300"
                  >
                    ENGINEER
                  </span>
                </div>
              </div>

              {/* Profile Image (Layered with subtle bottom gradient fade and adaptive brightness for Light mode) */}
              <img
                src="/profile.png"
                alt="Mohammed Rizwan — Software Engineer"
                className="w-full h-full object-contain relative z-10 transition-all duration-300 brightness-[1.12] contrast-[1.05] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)] dark:brightness-100 dark:contrast-100 dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 99%)",
                }}
              />

              {/* Natural Oval Floor Shadow directly under feet/base */}
              <div
                className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 w-4/5 sm:w-3/4 h-4 sm:h-6 rounded-[100%] bg-neutral-900/15 dark:bg-black/80 blur-md sm:blur-lg pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Secondary Soft Ambient Floor Reflection */}
              <div
                className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 w-3/5 sm:w-1/2 h-5 sm:h-7 rounded-[100%] bg-blue-500/10 dark:bg-blue-600/15 blur-xl pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Floating Glassmorphism Dock Anchoring the Bottom Cut */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-20 w-[102%] xs:w-[105%] sm:w-[108%] max-w-[98vw] pointer-events-auto"
              >
                <div className="w-full flex items-center justify-between gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl sm:rounded-full bg-white/92 dark:bg-neutral-900/92 backdrop-blur-md border border-neutral-200/90 dark:border-neutral-700/80 shadow-xl dark:shadow-2xl transition-all">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white truncate">
                      Full Stack Developer (MERN Stack)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="inline-block text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                      React · Next.js · Node.js · Express.js
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to About section"
          className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors cursor-pointer"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
