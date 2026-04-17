"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import type { Project } from "@/lib/content";

type ProjectsProps = { projects: Project[] };

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" eyebrow="Selected work" heading="Projects">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              boxShadow: "0 0 0 1px rgba(200, 146, 42, 0.5), 0 18px 50px -12px rgba(200, 146, 42, 0.35)",
            }}
            className="group flex h-full flex-col gap-5 rounded-[8px] border border-white/5 bg-card p-7 transition-colors duration-300 hover:border-accent/40"
          >
            <h3 className="font-display text-2xl font-semibold leading-tight text-foreground">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">{p.scope}</p>
            {(p.timeline || p.pnl || p.highlights) && (
              <dl className="space-y-1.5 text-xs text-muted">
                {p.timeline && (
                  <div className="flex gap-2">
                    <dt className="uppercase tracking-[0.18em] text-accent/80">Timeline</dt>
                    <dd>{p.timeline}</dd>
                  </div>
                )}
                {p.pnl && (
                  <div className="flex gap-2">
                    <dt className="uppercase tracking-[0.18em] text-accent/80">P&amp;L</dt>
                    <dd>{p.pnl}</dd>
                  </div>
                )}
                {p.highlights && (
                  <div className="flex gap-2">
                    <dt className="uppercase tracking-[0.18em] text-accent/80">Highlights</dt>
                    <dd>{p.highlights}</dd>
                  </div>
                )}
              </dl>
            )}
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-[8px] border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
