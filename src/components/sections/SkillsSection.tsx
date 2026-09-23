"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiPostman,
  SiDocker,
  SiJira,
} from "react-icons/si";
import * as Icons from "lucide-react";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  // Frontend
  React: SiReact,
  Next: SiNextdotjs,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  Redux: SiRedux,
  FramerMotion: SiFramer,
  Palette: Icons.Palette,
  Code: Icons.Code,
  Smartphone: Icons.Smartphone,
  Lightbulb: Icons.Lightbulb,

  // Backend
  Node: SiNodedotjs,
  Express: SiExpress,
  Layers: SiNestjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  GraphQL: SiGraphql,
  Database: SiPrisma,
  Share2: Icons.Share2,
  Lock: Icons.Lock,

  // Tools & Workflow
  GitBranch: SiGit,
  Send: Icons.Send,
  Container: SiDocker,
  CheckSquare: SiJira,
  FileCode: Icons.FileCode,
  Eye: Icons.Eye,
  Wand2: Icons.Wand2,
  Brain: Icons.Brain,
  Users: Icons.Users,
  CheckCircle: Icons.CheckCircle,
  Sparkles: Icons.Sparkles,
  Zap: Icons.Zap,
};

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  const skillsByCategory = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
    other: skills.filter((s) => s.category === "other"),
  };

  const SkillCategoryGroup = ({
    title,
    skillsData,
  }: {
    title: string;
    skillsData: (typeof skills)[0][];
  }) => {
    return (
      <div className="space-y-3.5">
        <div className="flex items-center justify-between pb-1 border-b border-neutral-100 dark:border-neutral-800">
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
            {title}
          </h3>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            {skillsData.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon ? iconMap[skill.icon] : Icons.Code;

            return (
              <div
                key={index}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-xs transition-all duration-150"
              >
                <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0">
                  <IconComponent size={18} />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 truncate">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <Section id="skills" title="Technical Skills" ref={ref}>
      <div className="space-y-8 sm:space-y-10">
        <SkillCategoryGroup
          title="Frontend & UI Architecture"
          skillsData={skillsByCategory.frontend}
        />

        <SkillCategoryGroup
          title="Backend & Cloud Infrastructure"
          skillsData={skillsByCategory.backend}
        />

        <SkillCategoryGroup
          title="Tools & Development Loop"
          skillsData={skillsByCategory.tools}
        />

        <SkillCategoryGroup
          title="Engineering & Soft Skills"
          skillsData={skillsByCategory.other}
        />
      </div>
    </Section>
  );
}
