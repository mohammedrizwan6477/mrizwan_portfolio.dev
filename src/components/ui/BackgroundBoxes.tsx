"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/helpers";

export const BoxesCore = ({
  className,
  ...rest
}: {
  className?: string;
  [key: string]: any;
}) => {
  const rows = useMemo(() => new Array(36).fill(1), []);
  const cols = useMemo(() => new Array(24).fill(1), []);

  const colors = useMemo(
    () => [
      "rgba(255, 255, 255, 0.25)",
      "rgba(220, 220, 220, 0.20)",
      "rgba(180, 180, 180, 0.18)",
      "rgba(140, 140, 140, 0.15)",
      "rgba(100, 100, 100, 0.12)",
      "rgba(60, 60, 60, 0.10)",
      "rgba(20, 20, 20, 0.08)",
    ],
    []
  );

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-55%) skewX(-48deg) skewY(14deg) scale(0.85) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-auto",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <div
          key={`row` + i}
          className="w-20 h-10 border-l border-neutral-300/30 dark:border-neutral-800/60 relative flex-shrink-0"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                boxShadow: "0 0 20px rgba(160, 160, 160, 0.25)",
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 1.8 },
              }}
              key={`col` + j}
              className="w-20 h-10 border-r border-t border-neutral-300/30 dark:border-neutral-800/60 relative transition-colors duration-300 cursor-crosshair"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-400/40 dark:text-slate-600/40 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
