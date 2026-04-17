"use client";

import { motion } from "framer-motion";

type HeroProps = {
  name: string;
  tagline: string;
  roleTags: string[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ name, tagline, roleTags }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-content flex-col items-start gap-8"
      >
        <motion.h1
          variants={item}
          className="font-display text-6xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          {name}
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-3xl text-xl leading-relaxed text-foreground/80 sm:text-2xl"
        >
          {tagline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
          {roleTags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3 text-sm text-muted">
              {i > 0 && <span className="text-accent/60">·</span>}
              <span className="uppercase tracking-[0.18em]">{tag}</span>
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted"
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
