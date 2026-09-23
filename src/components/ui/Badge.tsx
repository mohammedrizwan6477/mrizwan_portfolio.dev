"use client";

import React from "react";
import { cn } from "@/utils/helpers";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline" | "success" | "warning";
  children: React.ReactNode;
}

export function Badge({ variant = "primary", className, children }: BadgeProps) {
  const variants = {
    primary: "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700",
    secondary:
      "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700",
    outline:
      "border text-[var(--text-muted)]",
    success:
      "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700",
    warning:
      "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium",
        variants[variant],
        className
      )}
      style={variant === 'outline' ? { borderColor: 'var(--border-base)' } : undefined}
    >
      {children}
    </div>
  );
}
