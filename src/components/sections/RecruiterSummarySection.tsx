"use client";

import React, { useRef } from "react";
import { useInView } from "@/hooks";
import { Section, Card, CardBody, Button } from "@/components/ui";
import { downloadResume } from "@/utils/helpers";
import { socialLinks } from "@/data/portfolio";
import {
  Check,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";

const summary = [
  "Senior Software Engineer (3+ Years)",
  "React & Next.js Architecture Expert",
  "Full Stack MERN & TypeScript Stack",
  "WCAG 2.1 AA Accessibility Specialist",
  "AI-Augmented Engineering Workflows",
  "Production & Enterprise Experience",
  "Open to Full-Time & Remote Roles",
  "Fast Ramp-Up & Strong Communication",
];

const quickFacts = [
  { label: "Experience", value: "3+ Years Professional" },
  { label: "Location", value: "Maharashtra, India" },
  { label: "Availability", value: "Immediate / Notice Period" },
  { label: "Work Preference", value: "Remote / Hybrid / Full-Time" },
  { label: "Primary Stack", value: "React, Next.js, Node.js, TS" },
];

export function RecruiterSummarySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, 0.1);

  return (
    <Section id="recruiter-summary" title="Recruiter Summary" ref={ref}>
      <div className="space-y-6 max-w-5xl mx-auto">
        <p className="text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Key highlights and hiring facts at a glance for recruiters and hiring managers.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* ── Candidate Overview Card ────────────────────────────────────────── */}
          <Card className="h-full">
            <CardBody className="p-6 sm:p-7 space-y-6 flex flex-col justify-between h-full">
              <div>
                {/* Header with avatar & role */}
                <div className="flex items-center gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold text-base flex items-center justify-center flex-shrink-0 shadow-xs">
                    MR
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      Mohammed Rizwan
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                      Senior Software Engineer
                    </p>
                  </div>
                </div>

                {/* Key Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
                  {summary.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <div className="p-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={downloadResume}
                  className="flex-1 sm:flex-initial"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV / Resume
                </Button>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex-1 sm:flex-initial"
                >
                  <Button variant="secondary" size="sm" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Directly
                  </Button>
                </a>
              </div>
            </CardBody>
          </Card>

          {/* ── Quick Facts Card ───────────────────────────────────────────────── */}
          <Card className="h-full">
            <CardBody className="p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-bold text-base text-neutral-900 dark:text-white pb-3 border-b border-neutral-100 dark:border-neutral-800">
                  Quick Details
                </h4>

                <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {quickFacts.map((fact, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 text-xs sm:text-sm">
                      <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                        {fact.label}
                      </span>
                      <span className="font-semibold text-neutral-900 dark:text-white text-right">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Profiles Row */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2.5">
                  Verified Profiles
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { href: socialLinks.linkedin, label: "LinkedIn" },
                    { href: socialLinks.github, label: "GitHub" },
                    { href: socialLinks.whatsapp, label: "WhatsApp" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-colors border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Section>
  );
}
