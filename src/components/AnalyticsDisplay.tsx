"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPortfolioVisitorCount, getResumeDownloadCount } from "@/actions/feedback";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Eye, Download } from "lucide-react";

interface AnalyticsStats {
  visitors: number;
  downloads: number;
  isLoading: boolean;
}

export function useAnalytics() {
  const [stats, setStats] = useState<AnalyticsStats>({
    visitors: 0,
    downloads: 0,
    isLoading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [visitorRes, downloadRes] = await Promise.all([
          getPortfolioVisitorCount(),
          getResumeDownloadCount(),
        ]);

        setStats({
          visitors: visitorRes.success && typeof visitorRes.data === 'number' ? visitorRes.data : 0,
          downloads: downloadRes.success && typeof downloadRes.data === 'number' ? downloadRes.data : 0,
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
        setStats((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchStats();
  }, []);

  return stats;
}

interface AnalyticsDisplayProps {
  isInView: boolean;
}

export function AnalyticsDisplay({ isInView }: AnalyticsDisplayProps) {
  const { visitors, downloads, isLoading } = useAnalytics();

  return (
    <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start items-center flex-wrap">
      {/* Visitors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView && !isLoading ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
      >
        <Eye className="w-5 h-5 text-neutral-900 dark:text-white" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
            Portfolio Visitors
          </span>
          <span className="text-lg font-bold text-neutral-900 dark:text-white">
            {isLoading ? "..." : <AnimatedCounter target={visitors} isInView={isInView && !isLoading} />}
          </span>
        </div>
      </motion.div>

      {/* Downloads */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView && !isLoading ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
      >
        <Download className="w-5 h-5 text-neutral-900 dark:text-white" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
            Resume Downloads
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {isLoading ? "..." : <AnimatedCounter target={downloads} isInView={isInView && !isLoading} />}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
