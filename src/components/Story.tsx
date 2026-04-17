"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import Section from "./Section";
import type { Stat } from "@/lib/content";

type StoryProps = {
  heading: string;
  body: string;
  stats: Stat[];
};

function CountStat({ value, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : value;

  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(motionVal, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [inView, motionVal, target, match]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="font-display text-5xl font-semibold leading-none text-accent sm:text-6xl">
        {match ? (
          <>
            <span>{prefix}</span>
            <motion.span>{rounded}</motion.span>
            <span>{suffix}</span>
          </>
        ) : (
          value
        )}
      </div>
      <div className="text-sm uppercase tracking-[0.18em] text-muted">{label}</div>
    </div>
  );
}

export default function Story({ heading, body, stats }: StoryProps) {
  return (
    <Section id="story" eyebrow="The story">
      <div className="grid gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="mb-8 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {heading}
          </h2>
          <p className="text-lg leading-relaxed text-foreground/80">{body}</p>
        </div>
        <div className="flex flex-col justify-center gap-12">
          {stats.map((s) => (
            <CountStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </Section>
  );
}
