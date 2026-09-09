"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody, Badge } from "@/components/ui";
import { experiences } from "@/data/portfolio";
import { ChevronDown, Check, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);
  const [expandedIds, setExpandedIds] = useState<string[]>(["1"]); // Default expand latest

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <Section id="experience" title="Career Changelog" ref={ref}>
      {/* Timeline Container */}
      <div className="relative overflow-hidden">
        {/* Center line - Desktop only */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent transform -translate-x-1/2" />

        <motion.div
          className="space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => {
            const isExpanded = expandedIds.includes(exp.id);
            const isLeftSide = index % 2 === 0;

            const cardVariants: Variants = {
              hidden: {
                opacity: 0,
                x: isLeftSide ? -70 : 70,
                scale: 0.95,
              },
              visible: {
                opacity: 1,
                x: 0,
                scale: 1,
                transition: {
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            };

            return (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className={`lg:flex ${
                  isLeftSide ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-4 lg:gap-8 items-center`}
              >
                {/* Date and Version Section */}
                <div
                  className={`hidden lg:flex lg:w-1/2 ${
                    isLeftSide
                      ? "lg:justify-end lg:pr-8"
                      : "lg:justify-start lg:pl-8"
                  }`}
                >
                  <div className="text-right lg:text-left bg-blue-500/5 dark:bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20 shadow-sm">
                    <p className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
                      {exp.duration}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                      📍 {exp.location}
                    </p>
                  </div>
                </div>

                {/* Card Section */}
                <div className="w-full lg:w-1/2">
                  <Card hover glassmorphism className="transition-all duration-300">
                    <CardBody className="space-y-0 !p-3 sm:!p-5">
                      {/* Clickable Header */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full flex flex-col gap-2 pb-3 sm:pb-4 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 px-2 sm:px-3 py-2 sm:py-3 -mx-2 sm:-mx-3 -my-2 sm:-my-3 rounded-lg transition-all duration-200 text-left cursor-pointer"
                      >
                        {/* Title with chevron */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="p-1 rounded-md bg-blue-500/10 text-blue-500">
                                <Briefcase className="w-3.5 h-3.5" />
                              </span>
                              <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-snug">
                                {exp.position}
                              </h3>
                            </div>
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-1">
                              {exp.company}
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Location and Duration (Mobile) */}
                        <div className="flex flex-col gap-1 lg:hidden">
                          <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500">
                            📍 {exp.location}
                          </p>
                          <p className="text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400">
                            {exp.duration}
                          </p>
                        </div>
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3 pt-3 border-t border-gray-100 dark:border-white/10"
                          >
                            {/* Client Info */}
                            {exp.client && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 bg-blue-500/5 dark:bg-blue-500/10 rounded px-2.5 py-1.5 border border-blue-500/15">
                                <strong className="text-gray-700 dark:text-gray-300">
                                  Client:
                                </strong>{" "}
                                {exp.client}
                              </div>
                            )}

                            {/* Features */}
                            <div className="space-y-2">
                              <p className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                ✨ Key Responsibilities &amp; Impact
                              </p>
                              <div className="space-y-1.5">
                                {exp.description.map((desc, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                                  >
                                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs leading-relaxed">{desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="pt-2 border-t border-gray-100 dark:border-white/10">
                              <p className="text-[10px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wider">
                                🛠️ Stack &amp; Tools
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.skills.map((skill, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardBody>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

