"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, FileDown, Mail, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui";
import { downloadResume, scrollToSection } from "@/utils/helpers";
import profileImage from "../../../public/profile.png";

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
      className="relative min-h-[85vh] flex items-center justify-center pt-12 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-x-clip max-w-full"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── LEFT: Content ── */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Availability status badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for full-time &amp; contract roles
              </span>
            </motion.div>

            {/* Title & Name */}
            <div className="space-y-2 mb-4">
              <motion.h1
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-2.5 sm:gap-x-3 gap-y-1"
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

              {/* Subtitle visible across all screens */}
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight"
              >
                Software Engineer
              </motion.p>
            </div>

            {/* Concise Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-5 sm:mb-6 px-2 sm:px-0"
            >
              Building scalable, high-performance web applications and accessibility-first digital experiences with React, Next.js, Node.js, and modern AI tooling.
            </motion.p>

            {/* Quick Meta Chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6 sm:mb-8 text-xs text-neutral-600 dark:text-neutral-400"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                Maharashtra, India (Open to Remote)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60">
                <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
                Full Stack Developer (MERN Stack)
              </span>
            </motion.div>

            {/* Clear CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-stretch sm:items-center mb-8 sm:mb-10 w-full"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto shadow-sm hover:shadow-md justify-center"
              >
                <span>View Projects</span>
                <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={downloadResume}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm justify-center"
              >
                <FileDown className="w-4 h-4 mr-2" />
                <span>Download Resume</span>
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto shadow-xs hover:shadow-sm justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Get in Touch</span>
              </Button>
            </motion.div>

            {/* Minimal Key Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                    {s.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Photo (Transparent Cutout with 3D Typography & White Smoke Atmosphere) ── */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 flex flex-col items-center justify-center w-full lg:w-auto relative my-4 sm:my-0 max-w-full"
          >
            {/* Ambient Radial Backlight Glow Matching Theme */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-indigo-500/20 dark:from-blue-600/30 dark:via-blue-500/20 dark:to-indigo-600/25 rounded-full blur-3xl pointer-events-none -z-20" />

            {/* Profile Cutout Image Container */}
            <div className="relative w-[270px] h-[360px] xs:w-[310px] xs:h-[420px] sm:w-[370px] sm:h-[490px] md:w-[430px] md:h-[570px] lg:w-[480px] lg:h-[640px] xl:w-[530px] xl:h-[700px] max-w-[92vw] flex items-center justify-center select-none">

              {/* 3D Sculpted Backdrop Typography: SOFTWARE ENGINEER (Wide-Canvas Vector 3D — Full Letters Visible & Never Clipped) */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-8 xs:-inset-x-12 sm:-inset-x-20 md:-inset-x-24 lg:-inset-x-28 inset-y-0 flex items-center justify-center pointer-events-none select-none z-[1] max-w-[96vw]"
              >
                <svg
                  viewBox="0 0 720 360"
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Light Mode Architectural Slate / Steel Gradients */}
                    <linearGradient id="grad3DLight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="60%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#334155" />
                    </linearGradient>

                    <linearGradient id="grad3DLightAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" />
                      <stop offset="60%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>

                    {/* Dark Mode Luminous Titanium / Specular Gradients */}
                    <linearGradient id="grad3DDark" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="45%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>

                    <linearGradient id="grad3DDarkAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="40%" stopColor="#93c5fd" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>

                    {/* Filter for Ambient 3D Depth Cast Shadow */}
                    <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#09090b" floodOpacity="0.65" />
                    </filter>
                  </defs>

                  {/* ════ LINE 1: SOFTWARE (3D Sculpted Extrusions — Wide & Ultra-Bold) ════ */}
                  {/* Cast Shadow */}
                  <text
                    x="50%"
                    y="34%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-900/10 dark:fill-black/95"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SOFTWARE
                  </text>

                  {/* 3D Extrusion Layer 3 (Deep bevel) */}
                  <text
                    x="50%"
                    y="33%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-300 dark:fill-slate-800"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SOFTWARE
                  </text>

                  {/* 3D Extrusion Layer 2 (Mid bevel) */}
                  <text
                    x="50%"
                    y="32%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-200 dark:fill-slate-700"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SOFTWARE
                  </text>

                  {/* 3D Extrusion Layer 1 (Top bevel) */}
                  <text
                    x="50%"
                    y="31%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-100 dark:fill-slate-600"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SOFTWARE
                  </text>

                  {/* Front Face (Crisp Luminous Face with Specular Stroke) */}
                  <text
                    x="50%"
                    y="30%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-[url(#grad3DLight)] dark:fill-[url(#grad3DDark)] stroke-slate-800/15 dark:stroke-white/90"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      strokeWidth: "1.5px",
                      letterSpacing: "0.06em",
                      filter: "drop-shadow(0 3px 12px rgba(0,0,0,0.25))",
                    }}
                  >
                    SOFTWARE
                  </text>

                  {/* ════ LINE 2: ENGINEER (3D Sculpted Extrusions — Wide & Ultra-Bold) ════ */}
                  {/* Cast Shadow */}
                  <text
                    x="50%"
                    y="64%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-900/10 dark:fill-black/95"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ENGINEER
                  </text>

                  {/* 3D Extrusion Layer 3 (Deep bevel) */}
                  <text
                    x="50%"
                    y="63%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-blue-200/50 dark:fill-slate-800"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ENGINEER
                  </text>

                  {/* 3D Extrusion Layer 2 (Mid bevel) */}
                  <text
                    x="50%"
                    y="62%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-blue-100/50 dark:fill-slate-700"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ENGINEER
                  </text>

                  {/* 3D Extrusion Layer 1 (Top bevel) */}
                  <text
                    x="50%"
                    y="61%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-slate-100 dark:fill-slate-600"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    ENGINEER
                  </text>

                  {/* Front Face (Crisp Luminous Face with Specular Stroke) */}
                  <text
                    x="50%"
                    y="60%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-black uppercase tracking-wider fill-[url(#grad3DLightAccent)] dark:fill-[url(#grad3DDarkAccent)] stroke-blue-700/25 dark:stroke-blue-300/80"
                    style={{
                      fontSize: "92px",
                      fontFamily: "var(--font-display), var(--font-geist-sans), sans-serif",
                      strokeWidth: "1.5px",
                      letterSpacing: "0.06em",
                      filter: "drop-shadow(0 3px 12px rgba(37,99,235,0.25))",
                    }}
                  >
                    ENGINEER
                  </text>
                </svg>
              </div>

              {/* Profile Image (Clean presentation without below-image dark shadows) */}
              <Image
                src={profileImage}
                alt="Mohammed Rizwan — Software Engineer"
                priority
                className="w-full h-full object-contain object-bottom relative z-10 transition-all duration-300"
                style={{
                  maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                }}
              />
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
