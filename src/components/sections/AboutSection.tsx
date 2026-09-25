"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { Code2, Zap, Target, Users, Bot, Sparkles, CheckCircle2 } from "lucide-react";
import profileImage from "../../../public/profile.png";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Engineering",
    description:
      "3+ years building scalable, production-ready applications with React, Next.js, Node.js, and TypeScript.",
  },
  {
    icon: Zap,
    title: "Performance & Scalability",
    description:
      "Optimizing Core Web Vitals, API latency, and render pipelines for seamless user experience.",
  },
  {
    icon: Target,
    title: "Accessibility (WCAG 2.1)",
    description:
      "Specialized in ADA/WCAG compliance, ARIA implementation, and semantic UI architectures.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Development",
    description:
      "Integrating LLM APIs and modern AI tooling into dev loops to accelerate problem-solving and delivery.",
  },
];

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, 0.15);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Section id="about" title="About Me" ref={containerRef}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start"
      >
        {/* Left Column: Narrative & Focus */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="flex items-center gap-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 relative">
              <Image
                src={profileImage}
                alt="Mohammed Rizwan"
                width={56}
                height={56}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Full Stack Developer</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Mohammed Rizwan
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Software Engineer with a passion for architecting clean, accessible, and high-performance digital products. With over 3+ years of hands-on experience, I have contributed to enterprise platforms that serve real users daily.
            </p>
            <p>
              My expertise spans the modern React/Next.js ecosystem, backend microservices with Node.js and TypeScript, and enterprise web accessibility adhering strictly to WCAG 2.1 standards.
            </p>
          </div>

          {/* Key Principles */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Core Principles
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {[
                "Write clean, maintainable, and type-safe code",
                "Ensure accessible and inclusive UI for all users",
                "Design for high performance, low latency, and reliability",
                "Collaborate effectively in cross-functional Agile teams",
              ].map((principle, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column: Highlights 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover className="h-full">
                  <CardBody className="space-y-3 p-5 h-full flex flex-col">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-base">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
}

