import type { Metadata, Viewport } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header, Footer } from "@/components";
import ToasterWrapper from "@/components/ui/Toaster";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: "Mohammed Rizwan | Software Engineer",
  description:
    "Software Engineer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Building scalable, accessible, and high-performance applications. Available for full-time roles and freelance projects.",
  keywords: [
    "Mohammed Rizwan",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "MERN Stack",
    "TypeScript",
    "Web Accessibility",
    "WCAG",
    "Frontend Engineer",
    "Node.js Developer",
    "Hyderabad",
    "India",
    "Remote Developer",
  ],
  authors: [{ name: "Mohammed Rizwan", url: "https://github.com/mohammedrizwan6477" }],
  creator: "Mohammed Rizwan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohammed Rizwan | Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable, accessible applications.",
    siteName: "Mohammed Rizwan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Rizwan | Software Engineer",
    description: "Software Engineer | React · Next.js · Node.js · TypeScript · WCAG Accessibility",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} dark h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col transition-colors duration-300 bg-slate-50 dark:bg-[#09090b] text-neutral-900 dark:text-[#f8fafc] relative selection:bg-blue-500/20" style={{ backgroundColor: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        {/* Ambient Grid Pattern Background (Global) */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]"
          style={{
            maskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 100%)",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10">
          <ThemeProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ToasterWrapper />
            <ScrollToTop />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
