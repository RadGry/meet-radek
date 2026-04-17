"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"section">, "children">;

export default function Section({
  id,
  eyebrow,
  heading,
  children,
  className = "",
  ...rest
}: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-full max-w-content px-6 py-24 sm:py-32 ${className}`}
      {...rest}
    >
      {eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="mb-12 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {heading}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
