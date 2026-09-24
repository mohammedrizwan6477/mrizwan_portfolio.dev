"use client";

import { lazy, Suspense, useState } from "react";
import { LazySection } from "@/components/LazySection";
import {
  HeroSection,
  TerminalButton,
  TerminalWidget,
} from "@/components";
import { useTrackVisit } from "@/hooks";

// Lazy load sections for better performance
const AboutSection = lazy(() =>
  import("@/components/sections/AboutSection").then((mod) => ({
    default: mod.AboutSection,
  }))
);
const SkillsSection = lazy(() =>
  import("@/components/sections/SkillsSection").then((mod) => ({
    default: mod.SkillsSection,
  }))
);
const ExperienceSection = lazy(() =>
  import("@/components/sections/ExperienceSection").then((mod) => ({
    default: mod.ExperienceSection,
  }))
);
const ProjectsSection = lazy(() =>
  import("@/components/sections/ProjectsSection").then((mod) => ({
    default: mod.ProjectsSection,
  }))
);
const GitHubActivitySection = lazy(() =>
  import("@/components/sections/GitHubActivitySection").then((mod) => ({
    default: mod.GitHubActivitySection,
  }))
);
const EducationSection = lazy(() =>
  import("@/components/sections/EducationSection").then((mod) => ({
    default: mod.EducationSection,
  }))
);
const CertificationsSection = lazy(() =>
  import("@/components/sections/CertificationsSection").then((mod) => ({
    default: mod.CertificationsSection,
  }))
);
const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then((mod) => ({
    default: mod.ContactSection,
  }))
);

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  
  // Track portfolio visit on component mount
  useTrackVisit();

  return (
    <>
      {/* Main Sections */}
      <HeroSection />
      
      <LazySection>
        <AboutSection />
      </LazySection>

      <LazySection>
        <SkillsSection />
      </LazySection>

      <LazySection>
        <ExperienceSection />
      </LazySection>

      <LazySection>
        <ProjectsSection />
      </LazySection>

      <LazySection>
        <GitHubActivitySection />
      </LazySection>

      <LazySection>
        <EducationSection />
      </LazySection>

      <LazySection>
        <CertificationsSection />
      </LazySection>

      <LazySection>
        <ContactSection />
      </LazySection>

      {/* Floating Terminal Button */}
      <TerminalButton onClick={() => setTerminalOpen(true)} />

      {/* Terminal Modal */}
      <TerminalWidget isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

