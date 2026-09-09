"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody, Badge } from "@/components/ui";
import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.12);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const leftItemVariants: Variants = {
    hidden: { opacity: 0, x: -60, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rightItemVariants: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Section id="education" title="Education & Certifications" ref={ref}>
      <motion.div
        className="space-y-12 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Education (Slides in from Left) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            Education
          </h3>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={leftItemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card hover glassmorphism>
                  <CardBody className="space-y-2">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 whitespace-nowrap">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      📍 {edu.location}
                    </p>
                    {edu.description && (
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications (Slides in from Right) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-500" />
            Certifications &amp; Learning
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={rightItemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card hover glassmorphism className="h-full">
                  <CardBody className="space-y-2 h-full flex flex-col">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      🗓️ {cert.date}
                    </p>
                    {cert.description && (
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed flex-1">
                        {cert.description}
                      </p>
                    )}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-600 mt-2 inline-block font-semibold"
                      >
                        View Certificate →
                      </a>
                    )}
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
