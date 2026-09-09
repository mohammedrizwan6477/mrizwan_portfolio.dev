"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Section, Card, CardBody, ScrollRevealImage } from "@/components/ui";
import { Code2, Zap, Target, Users, Bot, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description:
      "3+ years building scalable applications with MERN stack and modern web technologies",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "Optimizing applications for speed, efficiency, and seamless user experiences",
  },
  {
    icon: Target,
    title: "Accessibility First",
    description:
      "Building inclusive web applications compliant with WCAG and ADA standards",
  },
  {
    icon: Users,
    title: "Team Collaborator",
    description:
      "Working effectively with cross-functional teams using Agile methodologies",
  },
  {
    icon: Bot,
    title: "AI-Assisted Development",
    description:
      "Leveraging ChatGPT, Claude, and GitHub Copilot to boost productivity, accelerate problem-solving, and optimize engineering workflows",
  },
];

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress as the section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 45%"],
  });

  // Spring smoothing for responsive, physics-driven reaction to scroll speed
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });

  // Left Column scroll-bound transforms
  const leftX = useTransform(smoothProgress, [0, 1], [-100, 0]);
  const leftOpacity = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const leftScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

  // Individual card staggered transforms mapped to scroll
  const card0X = useTransform(smoothProgress, [0.0, 0.75], [120, 0]);
  const card0Opacity = useTransform(smoothProgress, [0.0, 0.5], [0, 1]);
  const card0Scale = useTransform(smoothProgress, [0.0, 0.75], [0.9, 1]);

  const card1X = useTransform(smoothProgress, [0.08, 0.82], [130, 0]);
  const card1Opacity = useTransform(smoothProgress, [0.08, 0.58], [0, 1]);
  const card1Scale = useTransform(smoothProgress, [0.08, 0.82], [0.9, 1]);

  const card2X = useTransform(smoothProgress, [0.15, 0.88], [135, 0]);
  const card2Opacity = useTransform(smoothProgress, [0.15, 0.65], [0, 1]);
  const card2Scale = useTransform(smoothProgress, [0.15, 0.88], [0.9, 1]);

  const card3X = useTransform(smoothProgress, [0.22, 0.94], [140, 0]);
  const card3Opacity = useTransform(smoothProgress, [0.22, 0.72], [0, 1]);
  const card3Scale = useTransform(smoothProgress, [0.22, 0.94], [0.9, 1]);

  const card4X = useTransform(smoothProgress, [0.28, 1.0], [145, 0]);
  const card4Opacity = useTransform(smoothProgress, [0.28, 0.8], [0, 1]);
  const card4Scale = useTransform(smoothProgress, [0.28, 1.0], [0.9, 1]);

  const cardTransforms = [
    { x: card0X, opacity: card0Opacity, scale: card0Scale },
    { x: card1X, opacity: card1Opacity, scale: card1Scale },
    { x: card2X, opacity: card2Opacity, scale: card2Scale },
    { x: card3X, opacity: card3Opacity, scale: card3Scale },
    { x: card4X, opacity: card4Opacity, scale: card4Scale },
  ];

  return (
    <Section id="about" title="About Me" ref={containerRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center overflow-hidden">
        {/* Left Column: Text Content — dynamically moves with scroll speed */}
        <motion.div
          style={{
            x: leftX,
            opacity: leftOpacity,
            scale: leftScale,
          }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4 sm:gap-5 pb-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-lg shadow-blue-500/10 flex-shrink-0 bg-gray-950">
              <ScrollRevealImage
                src="/profile.jpeg"
                alt="Mohammed Rizwan"
                revealDirection="horizontal"
                className="w-full h-full"
                imageClassName="object-cover object-[center_20%] scale-105"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Problem Solver &amp; Builder</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Senior Software Engineer
              </h3>
            </div>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg">
              I'm a passionate developer with a proven track record of building
              scalable, accessible, and user-centric web applications. With 3+
              years of professional experience, I've successfully delivered
              enterprise-grade solutions that impact millions of users.
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
              What I'm Passionate About
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              {[
                "Creating modern, interactive applications with exceptional UX",
                "Ensuring web accessibility and compliance with WCAG standards",
                "Optimizing performance and building robust backends",
                "Collaborating with teams and mentoring fellow developers",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 sm:pt-6 flex gap-3 sm:gap-4 flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-500/10 dark:bg-blue-500/5 border border-blue-500/20"
            >
              <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                3+ Years
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                of Experience
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-purple-500/10 dark:bg-purple-500/5 border border-purple-500/20"
            >
              <p className="font-semibold text-purple-600 dark:text-purple-400 text-sm sm:text-base">
                10+
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Projects Delivered
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/5 border border-cyan-500/20"
            >
              <p className="font-semibold text-cyan-600 dark:text-cyan-400 text-sm sm:text-base">
                15+
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Technologies
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Highlights Cards Grid — each card dynamically slides with scroll velocity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            const transform = cardTransforms[index] || cardTransforms[0];
            return (
              <motion.div
                key={index}
                style={{
                  x: transform.x,
                  opacity: transform.opacity,
                  scale: transform.scale,
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <Card hover glassmorphism className="h-full">
                  <CardBody className="space-y-2 sm:space-y-3 !p-4 sm:!p-6 h-full flex flex-col">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/20">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

