"use client";

import React from "react";
import { cn } from "@/utils/helpers";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  glassmorphism?: boolean;
}

export function Card({
  children,
  hover = false,
  glassmorphism = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900/90 shadow-sm transition-all duration-200",
        hover &&
          "hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 sm:px-6 py-4 border-b border-neutral-100 dark:border-neutral-800", className)}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 sm:p-6", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-5 sm:px-6 py-4 border-t border-neutral-100 dark:border-neutral-800", className)}>
      {children}
    </div>
  );
}
