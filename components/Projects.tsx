"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

function Preview({
  hue,
  reduce,
  image,
  alt,
  host,
}: {
  hue: number;
  reduce: boolean;
  image: string;
  alt: string;
  host: string;
}) {
  return (
    <div
      className="relative h-60 overflow-hidden sm:h-72"
      style={{ background: `linear-gradient(135deg, hsl(${hue} 60% 14%), hsl(${hue + 40} 50% 8%))` }}
    >
      <div
        className="absolute -left-10 top-0 h-56 w-56 rounded-full blur-3xl"
        style={{
          background: `hsl(${hue} 90% 60% / 0.45)`,
          animation: reduce ? undefined : "drift 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-10 bottom-0 h-56 w-56 rounded-full blur-3xl"
        style={{
          background: `hsl(${hue + 60} 90% 60% / 0.35)`,
          animation: reduce ? undefined : "drift 16s ease-in-out infinite reverse",
        }}
      />
      {/* browser frame with the real screenshot */}
      <div className="absolute inset-x-6 bottom-0 top-6 flex flex-col overflow-hidden rounded-t-xl border border-white/20 bg-black/60 shadow-2xl sm:inset-x-8">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 bg-black/50 px-3 py-2">
          <span aria-hidden className="h-2 w-2 rounded-full bg-white/25" />
          <span aria-hidden className="h-2 w-2 rounded-full bg-white/25" />
          <span aria-hidden className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/45">
            {host}
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={alt}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const reduce = !!useReducedMotion();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">Featured Projects</p>
          <h2 id="projects-heading" className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">
            Two apps, <span className="text-gradient">both live.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {projects.map((p, i) => {
            const isOpen = open === p.name;
            return (
              <Reveal key={p.name} delay={i * 0.12}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-panel transition-colors hover:border-white/25"
                >
                  <Preview
                    hue={p.hue}
                    reduce={reduce}
                    image={p.image}
                    alt={p.imageAlt}
                    host={new URL(p.live).host}
                  />
                  <div className="p-7">
                    <h3 className="font-display text-3xl tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-white/65">{p.blurb}</p>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                      {p.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.4 }}
                          className="overflow-hidden pt-5 text-[15px] leading-relaxed text-white/70"
                        >
                          {p.details}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-accent hover:text-white"
                      >
                        Live demo ↗
                      </a>
                      <button
                        onClick={() => setOpen(isOpen ? null : p.name)}
                        aria-expanded={isOpen}
                        className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80 transition hover:border-accent"
                      >
                        {isOpen ? "Hide details" : "Read more"}
                      </button>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
