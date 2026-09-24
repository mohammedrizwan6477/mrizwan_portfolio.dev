"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiPrisma,
  SiDocker,
  SiJira,
  SiJavascript,
  SiHtml5,
  SiRedis,
  SiMongoose,
  SiPython,
  SiMui,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiGithubcopilot,
  SiOpenai,
} from "react-icons/si";
import * as Icons from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
> = {
  // Frontend
  React: SiReact,
  Next: SiNextdotjs,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Redux: SiRedux,
  FramerMotion: SiFramer,
  MUI: SiMui,
  HTML5: SiHtml5,
  Responsive: Icons.Smartphone,
  JavaScript: SiJavascript,

  // Backend
  Node: SiNodedotjs,
  Python: SiPython,
  Express: SiExpress,
  GraphQL: SiGraphql,
  REST: Icons.Share2,
  Auth: Icons.Lock,

  // Database
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  Redis: SiRedis,
  Mongoose: SiMongoose,
  Database: Icons.Database,

  // Tools & DevOps
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Postman: SiPostman,
  Docker: SiDocker,
  Jira: SiJira,
  VSCode: Icons.FileCode,
  Accessibility: Icons.Eye,
  Copilot: SiGithubcopilot,
  AI: SiOpenai,

  // Workflow & AI
  Agile: Icons.Zap,
  ProblemSolving: Icons.Lightbulb,
  Team: Icons.Users,
  CodeReview: Icons.CheckCircle,
  AIAssisted: Icons.Sparkles,
};

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools & DevOps" },
  { id: "other", label: "Workflow & AI" },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-3 border-b border-neutral-200/80 dark:border-neutral-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5">
              <Icons.Cpu className="w-3 h-3" />
              <span>Stack &amp; Capabilities</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Skills &amp; Technologies
            </h2>
          </div>

          {/* Category Tabs (Without All Skills tab) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = skills.filter((s) => s.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs"
                      : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white dark:bg-neutral-900/20 dark:text-neutral-900 font-bold"
                        : "bg-neutral-200 dark:bg-neutral-700/80 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filtered Skills Compact Pills */}
        <motion.div
          layout
          className="flex flex-wrap gap-2 sm:gap-2.5 items-center justify-start min-h-[52px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon ? iconMap[skill.icon] : Icons.Code;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.18 }}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 hover:shadow-xs transition-all duration-150"
                >
                  <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0">
                    <IconComponent size={15} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
