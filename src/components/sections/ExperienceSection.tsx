"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
              <Briefcase className="w-3 h-3" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60 self-start sm:self-auto">
            3+ Years Enterprise Experience
          </span>
        </div>

        {/* Compact Timeline */}
        <div className="relative pl-6 sm:pl-8 space-y-4 sm:space-y-5">
          {/* Subtle Timeline Rail */}
          <div className="absolute left-[9px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-blue-500/40 via-neutral-200 dark:via-neutral-800 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[20px] sm:-left-[26px] top-4 w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-neutral-950 shadow-xs" />

              {/* Compact Experience Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xs transition-all duration-200">
                {/* Header: Title, Duration & Company */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4 mb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-neutral-400" />
                        {exp.company}
                      </span>
                      {exp.client && (
                        <span className="px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-[10px] border border-blue-200/60 dark:border-blue-800/60">
                          Client: {exp.client}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                      <Calendar className="w-2.5 h-2.5 text-neutral-400" />
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                      <MapPin className="w-2.5 h-2.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Bullet Highlights (Max 2-3 high impact bullets) */}
                <ul className="space-y-1 my-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {exp.description.slice(0, 3).map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Tags */}
                {exp.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/70">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-neutral-100/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

