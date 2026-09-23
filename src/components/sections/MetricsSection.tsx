"use client";

import React, { useRef } from "react";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Trophy, Rocket, Star, Zap, CheckCircle2 } from "lucide-react";

const metrics = [
  {
    icon: Rocket,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Professional software engineering",
  },
  {
    icon: Trophy,
    value: 10,
    suffix: "+",
    label: "Projects Delivered",
    sublabel: "Enterprise & production applications",
  },
  {
    icon: Zap,
    value: 4,
    suffix: "+",
    label: "Production Deployments",
    sublabel: "Live platforms serving users",
  },
  {
    icon: Star,
    value: 100,
    suffix: "%",
    label: "WCAG Compliance",
    sublabel: "Accessibility-first architecture",
  },
];

const achievements = [
  "Led 100% WCAG 2.1 AA accessibility implementation across enterprise platform using ARC Toolkit and ARIA standards",
  "Engineered real-time transcript request & delivery module serving over 50,000+ university users",
  "Developed mission-critical endorsement template engine adhering to complex confidential business rules",
  "Optimized frontend bundle and Core Web Vitals, achieving 95+ performance scores and 40% load time reduction",
  "Designed role-based access control (RBAC) and JWT authentication workflows securing sensitive data",
];

export function MetricsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <Section id="metrics" title="Impact &amp; Key Metrics" ref={ref}>
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Metrics 4-Col Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} hover className="text-center">
                <CardBody className="p-5 space-y-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center mb-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                    <AnimatedCounter
                      target={metric.value}
                      suffix={metric.suffix}
                      isInView={isInView}
                      delay={index * 0.1}
                    />
                  </p>
                  <p className="font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm">
                    {metric.label}
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {metric.sublabel}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Key Achievements Card */}
        <Card>
          <CardBody className="p-6 sm:p-7 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Key Engineering Milestones
            </h3>
            <div className="space-y-2.5">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/60 dark:border-neutral-800/80 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
