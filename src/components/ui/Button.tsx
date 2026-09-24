"use client";

import React from "react";
import { cn } from "@/utils/helpers";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#09090b] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0";

  const variants = {
    primary:
      "bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-950 shadow-sm focus:ring-neutral-400 hover:shadow-md",
    accent:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-sm focus:ring-blue-500 hover:shadow-blue-500/25 hover:shadow-md",
    secondary:
      "bg-neutral-100 dark:bg-neutral-800/90 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700/80 focus:ring-neutral-500 shadow-xs",
    outline:
      "border border-neutral-300 dark:border-neutral-700/80 bg-white/80 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/90 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 focus:ring-neutral-500",
    ghost:
      "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60 focus:ring-neutral-500",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs min-h-[38px]",
    md: "px-5 py-2.5 text-sm sm:text-base min-h-[44px]",
    lg: "px-6 py-3.5 text-base sm:text-lg min-h-[48px]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
