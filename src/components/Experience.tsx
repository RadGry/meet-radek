"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import type { ExperienceEntry } from "@/lib/content";

type ExperienceProps = { entries: ExperienceEntry[] };

export default function Experience({ entries }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="experience" eyebrow="Track record" heading="Experience">
      <div ref={containerRef} className="relative pl-10 sm:pl-14">
        <div className="absolute left-3 top-0 h-full w-px bg-white/10 sm:left-4" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-3 top-0 w-px bg-gradient-to-b from-accent via-accent/70 to-accent/10 sm:left-4"
        />

        <ul className="space-y-12">
          {entries.map((e, i) => (
            <motion.li
              key={`${e.company}-${e.dates}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span className="absolute -left-[30px] top-2 h-3 w-3 rounded-full border border-accent bg-background sm:-left-[42px]" />
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">{e.role}</h3>
                  <span className="text-accent">·</span>
                  <span className="text-sm font-medium uppercase tracking-[0.16em] text-accent">
                    {e.company}
                  </span>
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted">
                  {e.dates}
                  {e.location && <> · {e.location}</>}
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-foreground/80">
                  {e.summary}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
