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

// lucide-react doesn't ship a Github icon in this version
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
  const isInView = useInView(ref);
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

  // Filter first by Project Type (Self Work vs Experience vs All)
  const typeFilteredProjects =
    selectedType === "all"
      ? projects
      : projects.filter((p) => p.projectType === selectedType);

  // Available domain categories for the current type
  const availableCategories = [
    "all",
    ...new Set(typeFilteredProjects.map((p) => p.category)),
  ];

  // Final filtered list by both Type and Domain Category
  const filteredProjects =
    selectedCategory === "all"
      ? typeFilteredProjects
      : typeFilteredProjects.filter((p) => p.category === selectedCategory);

  // Slice to 2 projects initially unless expanded
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 2);
  const remainingCount = filteredProjects.length - 2;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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
      label: "Live Deployed & Self-Work",
      count: selfWorkCount,
      icon: Rocket,
    },
    {
      id: "experience" as ProjectTypeTab,
      label: "Real-Time Work Experience",
      count: experienceCount,
      icon: Briefcase,
    },
  ];

  return (
    <Section id="projects" title="Featured Projects" ref={ref}>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Primary Type Tabs */}
        <motion.div
          className="flex flex-wrap gap-2.5 sm:gap-3 justify-center"
          variants={containerVariants}
        >
          <div className="p-1.5 rounded-2xl bg-gray-100 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 flex flex-wrap gap-1.5 shadow-inner">
            {typeTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = selectedType === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTypeChange(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-800/60"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-500"}`} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Domain Category Filter Pills */}
        {availableCategories.length > 2 && (
          <motion.div
            className="flex flex-wrap gap-2 justify-center pt-1"
            variants={containerVariants}
          >
            {availableCategories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize cursor-pointer ${
                  selectedCategory === category
                    ? "bg-blue-600/15 text-blue-600 dark:text-blue-400 border border-blue-500/40 font-bold shadow-sm"
                    : "bg-gray-100 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 hover:text-gray-900 dark:hover:text-gray-200"
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${selectedType}-${selectedCategory}`}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                layout
              >
                <Card hover glassmorphism className="h-full flex flex-col">
                  <CardBody className="space-y-4 flex-1 flex flex-col">
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between gap-2 flex-wrap pb-1">
                      {project.projectType === "self_work" ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25">
                          <Rocket className="w-3 h-3 text-blue-500" />
                          Self-Work &amp; Deployed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/25">
                          <Building2 className="w-3 h-3 text-purple-500" />
                          Work Experience
                        </span>
                      )}

                      {project.website_link && (
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>

                    {/* Header */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.company && (
                        <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                          {project.company}
                        </p>
                      )}
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="space-y-2 py-3 border-y border-gray-100 dark:border-white/10">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="primary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-3 mt-auto pt-4">
                      {/* Visit Live Site — prominent gradient button */}
                      {project.website_link && (
                        <a
                          href={project.website_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.button
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow duration-300 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Globe className="w-4 h-4" />
                            Visit Live Site
                            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                          </motion.button>
                        </a>
                      )}

                      {/* GitHub / Demo row */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="outline" size="sm" className="w-full cursor-pointer">
                              <GithubIcon className="w-4 h-4 mr-2" />
                              GitHub
                            </Button>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="primary" size="sm" className="w-full cursor-pointer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All / Show Less Button */}
        {filteredProjects.length > 2 && (
          <motion.div
            className="flex justify-center pt-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2.5">
                {showAll ? (
                  <>
                    <span>Show Less Projects</span>
                    <span className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>View All Remaining Projects</span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs bg-blue-500/15 text-blue-600 dark:text-blue-400 font-extrabold border border-blue-500/25">
                      +{remainingCount} more
                    </span>
                    <span className="w-7 h-7 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </span>
                  </>
                )}
              </span>
            </motion.button>
          </motion.div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </motion.div>
    </Section>
  );
}

