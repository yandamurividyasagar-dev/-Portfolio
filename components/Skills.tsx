"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { categories, skills, type Skill } from "@/lib/data";
import Reveal from "./Reveal";

const hues: Record<string, number> = {
  Languages: 215,
  "Backend & APIs": 160,
  Frontend: 190,
  Databases: 35,
  Cloud: 265,
  "AI Tools": 320,
  Practices: 100,
};

const color = (cat: string, l = 65, a = 1) => `hsla(${hues[cat] ?? 220}, 85%, ${l}%, ${a})`;

export default function Skills() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Skill | null>(null);

  const visible = skills
    .map((s, i) => ({ s, number: i + 1 }))
    .filter(({ s }) => filter === "All" || s.category === filter);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-label">Technical Skills</p>
          <h2 id="skills-heading" className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">
            The periodic table of <span className="text-gradient">my stack.</span>
          </h2>
          <p className="mt-5 max-w-xl text-white/60">
            Every element is a tool I have used in my projects, training or internship. Click one to see where it
            fits.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter skills by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                setSelected(null);
              }}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "border-accent bg-accent/15 text-white"
                  : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.ul
          layout={!reduce}
          className="mt-8 grid grid-cols-3 gap-2.5 sm:grid-cols-5 sm:gap-3 md:grid-cols-6 lg:grid-cols-8"
        >
          {visible.map(({ s, number }, i) => {
            const active = selected?.name === s.name;
            return (
              <motion.li
                key={s.name}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.4) }}
              >
                <motion.button
                  onClick={() => setSelected(active ? null : s)}
                  aria-pressed={active}
                  aria-label={`${s.name}, ${s.category}`}
                  whileHover={reduce ? undefined : { y: -6, scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex aspect-square w-full flex-col justify-between rounded-xl border bg-white/[0.03] p-2 text-left transition-shadow"
                  style={{
                    borderColor: color(s.category, 60, active ? 1 : 0.35),
                    boxShadow: active
                      ? `0 0 0 1px ${color(s.category)}, 0 0 28px ${color(s.category, 60, 0.55)}`
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.boxShadow = `0 0 22px ${color(s.category, 60, 0.45)}`;
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span className="font-mono text-[9px] text-white/40">{number}</span>
                  <span className="text-center font-display text-2xl font-bold sm:text-3xl" style={{ color: color(s.category) }}>
                    {s.symbol}
                  </span>
                  <span className="truncate text-center text-[9px] leading-tight text-white/70 sm:text-[10px]">
                    {s.name}
                  </span>
                </motion.button>
              </motion.li>
            );
          })}
        </motion.ul>

        <div aria-live="polite" className="mt-6 min-h-[92px]">
          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
                style={{ boxShadow: `0 0 40px -12px ${color(selected.category, 60, 0.5)}` }}
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border font-display text-3xl font-bold"
                  style={{ borderColor: color(selected.category), color: color(selected.category) }}
                >
                  {selected.symbol}
                </div>
                <div>
                  <p className="text-lg font-medium text-white">{selected.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: color(selected.category) }}>
                    {selected.category}
                  </p>
                  <p className="mt-1 text-sm text-white/65">{selected.note}</p>
                </div>
              </motion.div>
            ) : (
              <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-white/40">
                Select an element to see details.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
