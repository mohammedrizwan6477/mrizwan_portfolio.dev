"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks";
import { Section, Card, CardBody, Badge, Button } from "@/components/ui";
import { projects } from "@/data/portfolio";
import {
  ExternalLink,
  Globe,
  Briefcase,
  Rocket,
  Sparkles,
  Building2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

type ProjectTypeTab = "all" | "self_work" | "experience";

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);
  const [selectedType, setSelectedType] = useState<ProjectTypeTab>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const handleTypeChange = (type: ProjectTypeTab) => {
    setSelectedType(type);
    setSelectedCategory("all");
    setShowAll(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  const typeFilteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.projectType === selectedType);

  const availableCategories = [
    "all",
    ...new Set(typeFilteredProjects.map((p) => p.category)),
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? typeFilteredProjects
      : typeFilteredProjects.filter((p) => p.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);
  const remainingCount = filteredProjects.length - 4;

  const selfWorkCount = projects.filter((p) => p.projectType === "self_work").length;
  const experienceCount = projects.filter((p) => p.projectType === "experience").length;

  const typeTabs = [
    {
      id: "all" as ProjectTypeTab,
      label: "All Projects",
      count: projects.length,
      icon: Sparkles,
    },
    {
      id: "self_work" as ProjectTypeTab,
      label: "Live & Personal Work",
      count: selfWorkCount,
      icon: Rocket,
    },
    {
      id: "experience" as ProjectTypeTab,
      label: "Enterprise Experience",
      count: experienceCount,
      icon: Briefcase,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <Section id="projects" title="Featured Projects" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        {/* Primary Type Tabs (Center-aligned on all devices) */}
        <div className="flex items-center justify-center w-full">
          <div className="p-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-1 w-full max-w-md sm:max-w-none sm:w-auto">
            {typeTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedType === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTypeChange(tab.id)}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-150 cursor-pointer text-center w-full sm:w-auto ${
                    isActive
                      ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 sm:w-3.5 sm:h-3.5 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-500"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                        : "bg-neutral-200/80 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Domain Category Filter Pills (Center-aligned) */}
        {availableCategories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
            {availableCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 capitalize cursor-pointer text-center ${
                  selectedCategory === category
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-semibold shadow-xs"
                    : "bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-neutral-800/80 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <Card key={project.id} hover className="flex flex-col h-full">
              <CardBody className="space-y-4 flex-1 flex flex-col p-5 sm:p-6">
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 flex-wrap pb-1">
                  {project.projectType === "self_work" ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40">
                      <Rocket className="w-3 h-3" />
                      Live Project
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/80">
                      <Building2 className="w-3 h-3" />
                      Enterprise Experience
                    </span>
                  )}

                  {project.website_link && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Production
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.company && (
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {project.company}
                    </p>
                  )}
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 py-3 border-y border-neutral-100 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}



                {/* Action Links */}
                <div className="flex flex-col gap-2.5 mt-auto pt-4">
                  {project.website_link && (
                    <a
                      href={project.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl font-semibold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-500 shadow-sm hover:shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      Visit Live Website
                      <ExternalLink className="w-4 h-4 opacity-80" />
                    </a>
                  )}

                  <div className="flex flex-col sm:flex-row gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold border border-neutral-700/80 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <GithubIcon className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl text-sm font-semibold border border-neutral-700/80 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 hover:text-white transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {filteredProjects.length > 4 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl font-semibold text-sm sm:text-base text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/80 shadow-xs active:scale-[0.98] transition-all cursor-pointer"
            >
              {showAll ? (
                <>
                  <span>Show Less Projects</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All Projects ({filteredProjects.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </motion.div>
    </Section>
  );
}

