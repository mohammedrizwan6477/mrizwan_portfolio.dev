"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollRevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  revealDirection?: "horizontal" | "vertical" | "circle" | "corner";
  scaleZoom?: boolean;
  children?: React.ReactNode;
}

export function ScrollRevealImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  revealDirection = "horizontal",
  scaleZoom = true,
  children,
}: ScrollRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  // Different clip-path reveal styles
  const horizontalClip = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  const verticalClip = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(50% 0% 50% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const circleClip = useTransform(
    smoothProgress,
    [0, 1],
    ["circle(0% at 50% 50%)", "circle(75% at 50% 50%)"]
  );

  const cornerClip = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  const clipPathMap = {
    horizontal: horizontalClip,
    vertical: verticalClip,
    circle: circleClip,
    corner: cornerClip,
  };

  const selectedClip = clipPathMap[revealDirection] || horizontalClip;
  const imageScale = useTransform(smoothProgress, [0, 1], [1.18, 1.0]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3], [0.4, 1.0]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ clipPath: selectedClip }}
        className="w-full h-full relative"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{
            scale: scaleZoom ? imageScale : 1,
            opacity: imageOpacity,
          }}
          className={`w-full h-full object-cover ${imageClassName}`}
        />
        {children}
      </motion.div>
    </div>
  );
}
