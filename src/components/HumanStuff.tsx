"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import type { Interest } from "@/lib/content";

type HumanStuffProps = { interests: Interest[] };

export default function HumanStuff({ interests }: HumanStuffProps) {
  return (
    <Section id="human" eyebrow="Off the clock" heading="Human stuff">
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-foreground/70">
        The other half of the picture. Most ideas land somewhere between a court, a bike, and a
        pair of headphones.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {interests.map((i, idx) => (
          <motion.div
            key={i.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 rounded-[8px] border border-white/5 bg-card/60 px-4 py-3 transition-colors hover:border-accent/30"
          >
            <span className="text-2xl" aria-hidden>
              {i.icon}
            </span>
            <span className="text-sm text-foreground/90">{i.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
