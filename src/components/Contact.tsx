"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type ContactProps = {
  heading: string;
  body: string;
  email: string;
  linkedin: string;
};

export default function Contact({ heading, body, email, linkedin }: ContactProps) {
  return (
    <Section id="contact" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-2xl flex-col items-center gap-6"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {heading}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-foreground/80">{body}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-[8px] bg-accent px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-accent/90"
          >
            {email}
          </motion.a>
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-[8px] border border-accent px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent/10"
          >
            LinkedIn
          </motion.a>
        </div>
        <p className="mt-12 text-xs uppercase tracking-[0.3em] text-muted">
          © {new Date().getFullYear()} Radek Gryc
        </p>
      </motion.div>
    </Section>
  );
}
