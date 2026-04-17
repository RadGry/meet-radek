"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type SkillsProps = { skills: string[] };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" eyebrow="What I bring" heading="Skills & strengths">
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((s) => (
          <motion.li
            key={s}
            variants={chip}
            className="rounded-[8px] border border-accent/50 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
