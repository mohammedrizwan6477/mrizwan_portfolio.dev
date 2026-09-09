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
      "rgba(56, 189, 248, 0.75)",   // sky-400
      "rgba(244, 114, 182, 0.75)",  // pink-400
      "rgba(74, 222, 128, 0.75)",   // green-400
      "rgba(250, 204, 21, 0.75)",   // yellow-400
      "rgba(248, 113, 113, 0.75)",  // red-400
      "rgba(192, 132, 252, 0.75)",  // purple-400
      "rgba(96, 165, 250, 0.75)",   // blue-400
      "rgba(129, 140, 248, 0.75)",  // indigo-400
      "rgba(167, 139, 250, 0.75)",  // violet-400
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
          className="w-20 h-10 border-l border-slate-300/35 dark:border-slate-800/50 relative flex-shrink-0"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                boxShadow: "0 0 24px rgba(56, 189, 248, 0.45)",
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 1.8 },
              }}
              key={`col` + j}
              className="w-20 h-10 border-r border-t border-slate-300/35 dark:border-slate-800/50 relative transition-colors duration-300 cursor-crosshair"
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
