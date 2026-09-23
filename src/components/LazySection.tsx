"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  minHeight?: string;
  rootMargin?: string;
}

export function LazySection({
  children,
  fallback,
  minHeight = "min-h-[300px]",
  rootMargin = "250px 0px",
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, render immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={containerRef} className={minHeight}>
      {shouldRender ? (
        <Suspense fallback={fallback || <SectionSkeleton />}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </Suspense>
      ) : (
        fallback || <SectionSkeleton />
      )}
    </div>
  );
}

function SectionSkeleton() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <div className="space-y-6 animate-pulse">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-48 sm:w-64 bg-neutral-800/60 rounded-xl" />
          <div className="h-4 w-64 sm:w-96 bg-neutral-800/40 rounded-lg" />
        </div>
        {/* Content Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="h-44 bg-neutral-900/60 border border-neutral-800/60 rounded-2xl" />
          <div className="h-44 bg-neutral-900/60 border border-neutral-800/60 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
