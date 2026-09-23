"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { experiences } from "@/data/portfolio";
import { ChevronDown, Check, Briefcase, MapPin } from "lucide-react";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);
  const [expandedIds, setExpandedIds] = useState<string[]>(["1"]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <Section id="experience" title="Work Experience" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative max-w-4xl mx-auto"
      >
        {/* Left timeline line */}
        <div className="absolute left-4 sm:left-6 top-4 bottom-4 w-[2px] bg-neutral-200 dark:bg-neutral-800" />

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div key={exp.id} className="relative pl-10 sm:pl-14">
                {/* Timeline node dot */}
                <div className="absolute left-[11px] sm:left-[19px] top-6 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-neutral-950" />

                <Card hover className="transition-all duration-200">
                  <CardBody className="p-5 sm:p-6">
                    {/* Header summary button */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                    >
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                          {exp.company}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </p>
                      </div>

                      <div className="p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                        <ChevronDown
                          className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-4 pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800"
                        >
                          {/* Client tag if available */}
                          {exp.client && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                              <strong className="text-neutral-900 dark:text-white">Client:</strong>
                              <span>{exp.client}</span>
                            </div>
                          )}

                          {/* Impact Bullet Points */}
                          <div className="space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                              Key Contributions &amp; Impact
                            </p>
                            <div className="space-y-1.5">
                              {exp.description.map((desc, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                                >
                                  <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span>{desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}

