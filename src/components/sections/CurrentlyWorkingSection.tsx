"use client";

import React, { useRef } from "react";
import { useInView } from "@/hooks";
import { Section, Card, CardBody } from "@/components/ui";
import { Sparkles, TrendingUp } from "lucide-react";

const explorations = [
  {
    title: "AI-Assisted Development Loops",
    description: "Integrating LLM tooling, custom agents, and Copilot into development pipelines",
    progress: 85,
    icon: "🤖",
  },
  {
    title: "Advanced Next.js App Architecture",
    description: "Server Components, dynamic streaming, caching strategies, and edge functions",
    progress: 90,
    icon: "⚡",
  },
  {
    title: "Accessibility-First Design Systems",
    description: "Building component libraries with WCAG 2.1 AA compliance baked in from day one",
    progress: 92,
    icon: "♿",
  },
  {
    title: "Frontend Performance Engineering",
    description: "Core Web Vitals optimization, bundle tree shaking, and code splitting",
    progress: 88,
    icon: "🚀",
  },
  {
    title: "Real-Time & Event-Driven Systems",
    description: "Building resilient real-time features using WebSockets and async microservices",
    progress: 78,
    icon: "🔌",
  },
  {
    title: "Full-Stack AI Integrations",
    description: "Connecting OpenAI and Anthropic APIs into production-grade web applications",
    progress: 82,
    icon: "🧠",
  },
];

export function CurrentlyWorkingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <Section id="currently-working" title="Active Focus &amp; Growth" ref={ref}>
      <div className="space-y-8 max-w-5xl mx-auto">
        <p className="text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Technologies and technical specializations I am actively leveling up and integrating into current engineering projects.
        </p>

        {/* Exploration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {explorations.map((item, index) => (
            <Card key={index} hover className="h-full">
              <CardBody className="p-5 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                      {item.icon}
                    </span>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                      Proficiency
                    </span>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
                      style={{ width: isInView ? `${item.progress}%` : '0%' }}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
