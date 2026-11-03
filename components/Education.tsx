"use client";

import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" aria-labelledby="edu-heading" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">Education</p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal delay={0.05}>
            <h2 id="edu-heading" className="font-display text-4xl leading-tight tracking-tight sm:text-6xl">
              {education.degree}
            </h2>
            <p className="mt-6 text-xl text-white/70">{education.school}</p>
            <p className="mt-2 font-mono text-sm uppercase tracking-widest text-accent">{education.period}</p>
            <p className="mt-8 text-sm text-white/45">
              Languages: {education.languages.join(" · ")}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">Certifications</h3>
            <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
              {education.certifications.map((c) => (
                <li key={c.name} className="group flex items-start justify-between gap-6 py-5 transition hover:pl-2">
                  <div>
                    <p className="text-white/90">{c.name}</p>
                    <p className="mt-1 text-sm text-white/45">{c.by}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-accent">{c.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
