"use client";

import React from "react";
import { cn } from "@/utils/helpers";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section({ children, title, subtitle, className, id, ...props }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        className={cn("relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8", className)}
        {...props}
      >
        <div className="max-w-6xl mx-auto">
          {(title || subtitle) && (
            <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
              {title && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
);

export function Container({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </div>
  );
}
