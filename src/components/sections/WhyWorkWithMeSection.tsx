"use client";

import React, { useRef } from "react";
import { useInView } from "@/hooks";
import { Section, Card, CardBody, Button } from "@/components/ui";
import { CheckCircle2, Rocket, Heart, Users, Zap, Shield, Code2, Lightbulb } from "lucide-react";
import { scrollToSection } from "@/utils/helpers";

const reasons = [
  {
    icon: Code2,
    title: "Clean, Scalable Architecture",
    description:
      "Maintainable component design, separation of concerns, and robust TypeScript code that teams can extend with confidence.",
  },
  {
    icon: Shield,
    title: "Accessibility-First (WCAG 2.1)",
    description:
      "Every component meets ADA/WCAG accessibility standards with semantic HTML, ARIA patterns, and automated ARC testing.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Core Web Vitals tuning, bundle optimization, and latency reduction to deliver fast, responsive user experiences.",
  },
  {
    icon: Users,
    title: "Cross-Functional Collaboration",
    description:
      "Experienced working across Agile squads, code reviews, and collaborating seamlessly with PMs, designers, and engineers.",
  },
  {
    icon: Rocket,
    title: "Production Reliability",
    description:
      "Enterprise experience building software that scales to thousands of active users with robust error handling.",
  },
  {
    icon: Lightbulb,
    title: "AI-Augmented Engineering",
    description:
      "Leveraging modern AI tooling to accelerate feature development, testing, and debugging without compromising quality.",
  },
  {
    icon: Heart,
    title: "Product & User Mindset",
    description:
      "Focusing on user journeys, conversion, and business impact rather than just technical implementation.",
  },
  {
    icon: CheckCircle2,
    title: "Fast Ramp-Up & Versatility",
    description:
      "Quick to learn new stacks and domain problems across fintech, edtech, SaaS, and accessibility platforms.",
  },
];

export function WhyWorkWithMeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <Section id="why-work-with-me" title="Why Work With Me?" ref={ref}>
      <div className="space-y-10 max-w-5xl mx-auto">
        <p className="text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          I don&apos;t just write code—I design with product ownership in mind, communicate transparently, and build for reliability and scale.
        </p>

        {/* Reasons 4-Col Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} hover className="h-full">
                <CardBody className="p-5 space-y-3 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-sm leading-snug">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {reason.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {/* Recruiter / Hiring CTA Banner */}
        <Card className="bg-neutral-900 text-white dark:bg-neutral-900 dark:border-neutral-800">
          <CardBody className="p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Looking for a Dedicated Software Engineer?
            </h3>
            <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
              I am open to full-time engineering roles, technical consulting, and high-impact freelance projects.
            </p>
            <div className="pt-2">
              <Button
                variant="accent"
                size="md"
                onClick={() => scrollToSection("contact")}
              >
                Let&apos;s Discuss Your Project
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
