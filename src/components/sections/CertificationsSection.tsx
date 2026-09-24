"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-5 pb-3 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">
              <Award className="w-3 h-3" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Certifications &amp; Accreditations
            </h2>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Validated industry competencies in Accessibility, React architecture, and TypeScript.
          </p>
        </div>

        {/* Compact Grid (Takes minimal vertical space) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.07 }}
              className="group p-3.5 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                  {cert.title}
                </h3>

                <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                )}
              </div>

              {cert.link && (
                <div className="pt-2 mt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
