"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Card, CardBody } from "@/components/ui";
import { useInView } from "@/hooks";
import { Activity, Star, GitFork, Code2, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";

const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), {
  ssr: false,
});

// GitHub stats displayed via github-readme-stats style
const languages = [
  { name: "TypeScript", percentage: 42, color: "#3178c6" },
  { name: "JavaScript", percentage: 28, color: "#f7df1e" },
  { name: "CSS", percentage: 16, color: "#1572b6" },
  { name: "HTML", percentage: 10, color: "#e34f26" },
  { name: "Other", percentage: 4, color: "#6b7280" },
];

// const githubStats = [
//   { label: "Public Repos", value: "15+", icon: "📦" },
//   { label: "Total Stars", value: "40+", icon: "⭐" },
//   { label: "Contributions (2025)", value: "500+", icon: "🔥" },
//   { label: "Pull Requests", value: "120+", icon: "🔀" },
// ];

const recentRepos = [
  {
    name: "portfolio",
    description: "Personal developer portfolio built with Next.js, TypeScript & Framer Motion",
    stars: 5,
    forks: 2,
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/mohammedrizwan6477",
  },
  {
    name: "jd-store",
    description: "Full-featured MERN e-commerce platform with Stripe payments & Redux state management",
    stars: 8,
    forks: 3,
    language: "JavaScript",
    langColor: "#f7df1e",
    url: "https://github.com/mohammedrizwan6477",
  },
  {
    name: "mern-auth-system",
    description: "Production-ready authentication system with JWT, refresh tokens & role-based access",
    stars: 12,
    forks: 6,
    language: "TypeScript",
    langColor: "#3178c6",
    url: "https://github.com/mohammedrizwan6477",
  },
];


export function GitHubActivitySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<number | "last">(currentYear);

  const years = Array.from({ length: 4 }, (_, i) => currentYear - i);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section id="github-activity" title="GitHub Activity" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <Activity className="w-5 h-5 text-emerald-500" />
          <p className="text-neutral-500 dark:text-neutral-400 text-center text-sm">
            Actively coding, building open-source tools, and committing daily
          </p>
        </motion.div>

        {/* Contribution heatmap */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardBody className="p-6">
              <div className="flex items-center justify-between gap-2 mb-5 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm">Contribution Heatmap</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Live activity from @mohammedrizwan6477</p>
                  </div>
                </div>

                {/* Contribution Legend Pill */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="text-[11px]">Less</span>
                  <div className="w-3 h-3 rounded-xs bg-[#ebedf0] dark:bg-[#161b22]" />
                  <div className="w-3 h-3 rounded-xs bg-[#9be9a8] dark:bg-[#0e4429]" />
                  <div className="w-3 h-3 rounded-xs bg-[#40c463] dark:bg-[#006d32]" />
                  <div className="w-3 h-3 rounded-xs bg-[#30a14e] dark:bg-[#26a641]" />
                  <div className="w-3 h-3 rounded-xs bg-[#216e39] dark:bg-[#39d353]" />
                  <span className="text-[11px]">More</span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="overflow-x-auto pb-2 flex-grow w-full">
                  <div className="min-w-max">
                    {mounted ? (
                      <GitHubCalendar
                        username="mohammedrizwan6477"
                        year={selectedYear}
                        colorScheme={theme === "dark" ? "dark" : "light"}
                        theme={{
                          light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                          dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        }}
                        blockSize={11}
                        blockMargin={3}
                        blockRadius={2}
                        fontSize={12}
                        showWeekdayLabels={true}
                      />
                    ) : (
                      <div className="animate-pulse flex gap-1 h-[120px] w-[800px] bg-neutral-100 dark:bg-neutral-800/50 rounded-lg" />
                    )}
                  </div>
                </div>

                {/* Year Selector */}
                <div className="flex md:flex-col gap-1.5 overflow-x-auto md:w-28 shrink-0 pb-2 md:pb-0">
                  <button
                    onClick={() => setSelectedYear("last")}
                    className={`px-3 py-1.5 text-xs rounded-xl whitespace-nowrap transition-all text-left font-semibold cursor-pointer ${
                      selectedYear === "last"
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    }`}
                  >
                    Last Year
                  </button>
                  {years.map((y) => (
                    <button
                      key={y}
                      onClick={() => setSelectedYear(y)}
                      className={`px-3 py-1.5 text-xs rounded-xl transition-all text-left font-semibold cursor-pointer ${
                        selectedYear === y
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Distribution Bar */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  <span>Most Used Languages</span>
                  <span className="text-neutral-400 font-normal text-[11px]">Top Repositories</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-neutral-100 dark:bg-neutral-800">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percentage}%`}
                      className="h-full transition-all"
                    />
                  ))}
                </div>

                {/* Legend Chips */}
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{lang.name}</span>
                      <span className="text-neutral-400 text-[11px]">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Pinned Repos */}
        <motion.div variants={itemVariants}>
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Pinned Repositories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentRepos.map((repo, i) => (
              <motion.a
                key={i}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                whileHover={{ y: -4 }}
              >
                <Card hover className="h-full border-t-2" style={{ borderTopColor: repo.langColor }}>
                  <CardBody className="p-5 space-y-3 flex flex-col h-full">
                    <div className="flex items-start justify-between">
                      <h5 className="font-mono font-bold text-neutral-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {repo.name}
                      </h5>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0 mt-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                        <span className="font-medium text-neutral-700 dark:text-neutral-300">{repo.language}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {repo.stars}
                      </div>
                      <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                        <GitFork className="w-3 h-3" /> {repo.forks}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* GitHub Profile CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <a
            href="https://github.com/mohammedrizwan6477"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all font-semibold text-sm sm:text-base hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>View Full GitHub Profile</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}
