"use client";

import { useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function IdCard() {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 140, damping: 16 });
  const springY = useSpring(ry, { stiffness: 140, damping: 16 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 18);
    rx.set(-py * 18);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };
  const toggle = () => setFlipped((f) => !f);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <section aria-labelledby="id-heading" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="section-label">Identity</p>
          <h2 id="id-heading" className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            My developer ID.
          </h2>
          <p className="mt-5 max-w-md text-white/60">
            Move your cursor over the card to tilt it. Click it, or press Enter, to flip it over and
            read the short version of who I am.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <div className="perspective" style={{ animation: reduce ? undefined : "float 6s ease-in-out infinite" }}>
            <motion.div
              role="button"
              tabIndex={0}
              aria-pressed={flipped}
              aria-label="Developer ID card. Press to flip."
              onClick={toggle}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle();
                }
              }}
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
              className="relative h-[430px] w-[275px] cursor-pointer select-none sm:h-[480px] sm:w-[310px]"
            >
              <motion.div
                className="preserve-3d absolute inset-0"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: reduce ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* front */}
                <div className="backface-hidden absolute inset-0 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1b2150] via-[#101326] to-[#0a0b14] p-7 shadow-[0_30px_80px_-20px_rgba(124,156,255,0.45)]">
                  <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
                  <div className="relative flex h-full flex-col">
                    <div className="mx-auto h-2 w-16 rounded-full bg-black/60 ring-1 ring-white/10" />
                    <div className="relative mt-5 h-[210px] w-full overflow-hidden rounded-2xl border border-white/15 shadow-lg sm:h-[240px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/profile.jpg"
                        alt={`Portrait of ${profile.name}`}
                        width={720}
                        height={857}
                        draggable={false}
                        className="h-full w-full object-cover object-[50%_20%]"
                      />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#101326]/60 via-transparent to-transparent" />
                    </div>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Developer ID</p>
                    <h3 className="mt-1 font-display text-2xl leading-tight sm:text-[1.7rem]">{profile.name}</h3>
                    <p className="mt-1 text-sm text-white/60">{profile.role}</p>
                    <div className="mt-auto flex items-end justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                        B.Tech CSE · 2027
                      </p>
                      <div aria-hidden className="grid grid-cols-6 gap-[3px]">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <span key={i} className={`h-1.5 w-1.5 rounded-[1px] ${i % 3 === 0 ? "bg-white/70" : "bg-white/20"}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* back */}
                <div
                  className="backface-hidden absolute inset-0 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#241a4d] via-[#12101f] to-[#0a0b14] p-7 shadow-[0_30px_80px_-20px_rgba(199,125,255,0.45)]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div aria-hidden className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-accent2/30 blur-3xl" />
                  <div className="relative flex h-full flex-col">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent2">Profile</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/80">{profile.summary}</p>
                    <dl className="mt-auto space-y-3 text-sm">
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">Based in</dt>
                        <dd className="text-white/80">{profile.location}</dd>
                      </div>
                      <div>
                        <dt className="font-mono text-[10px] uppercase tracking-widest text-white/40">Languages</dt>
                        <dd className="text-white/80">English, Hindi</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
