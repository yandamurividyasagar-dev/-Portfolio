"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" aria-labelledby="exp-heading" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 id="exp-heading" className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">
            Where I&apos;ve <span className="text-gradient">built and learned.</span>
          </h2>
        </Reveal>

        <ol className="relative mt-14 border-l border-white/10 pl-8 sm:pl-12">
          {experience.map((e, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={e.title}
                className="relative pb-14 last:pb-0"
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                <span
                  aria-hidden
                  className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-ink sm:-left-[57px]"
                  style={{ boxShadow: isOpen ? "0 0 18px rgba(124,156,255,0.9)" : "none" }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{e.period}</p>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group mt-2 flex w-full items-start justify-between gap-4 text-left"
                >
                  <span>
                    <span className="block text-2xl font-medium text-white sm:text-3xl">{e.title}</span>
                    <span className="mt-1 block text-white/50">{e.org}</span>
                    <span className="mt-3 block text-white/65">{e.summary}</span>
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg transition group-hover:border-accent ${
                      isOpen ? "rotate-45 bg-accent/20" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      key="points"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      {e.points.map((p) => (
                        <li key={p} className="mt-3 flex gap-3 text-[15px] leading-relaxed text-white/70">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
