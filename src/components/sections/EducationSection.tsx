"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink, MapPin, Calendar } from "lucide-react";

export function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <Section id="education" title="Education & Credentials" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-12 max-w-5xl mx-auto"
      >
        {/* Education Block */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Formal Education
          </h3>
          <div className="space-y-3">
            {education.map((edu) => (
              <Card key={edu.id} hover>
                <CardBody className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </p>
                  {edu.description && (
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Certifications &amp; Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.id} hover className="h-full">
                <CardBody className="p-5 space-y-2.5 h-full flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </p>
                    {cert.description && (
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 pt-2 transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
