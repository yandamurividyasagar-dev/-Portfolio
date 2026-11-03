"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Character from "./Character";
import { profile } from "@/lib/data";

function useTypewriter(lines: string[], start: boolean, reduce: boolean) {
  const [shown, setShown] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setShown(lines);
      return;
    }
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let li = 0;
    let ci = 0;
    setTyping(true);

    const tick = () => {
      if (cancelled) return;
      if (li >= lines.length) {
        setTyping(false);
        return;
      }
      ci += 1;
      const line = lines[li];
      const current = ci;
      const index = li;
      setShown((prev) => {
        const next = prev.slice(0, index);
        next[index] = line.slice(0, current);
        return next;
      });
      if (ci >= line.length) {
        li += 1;
        ci = 0;
        timers.push(setTimeout(tick, 520));
      } else {
        timers.push(setTimeout(tick, 30));
      }
    };
    timers.push(setTimeout(tick, 500));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [start, reduce, lines]);

  return { shown, typing };
}

export default function Hero({ ready }: { ready: boolean }) {
  const reduce = !!useReducedMotion();
  const { shown, typing } = useTypewriter(profile.intro, ready, reduce);
  const { scrollY } = useScroll();
  const charY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 70]);
  const textY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -40]);

  const nameParts = profile.name.split(" ");

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8">
      {/* ambient lighting */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]"
          style={{ animation: reduce ? undefined : "drift 14s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-accent2/20 blur-[130px]"
          style={{ animation: reduce ? undefined : "drift 18s ease-in-out infinite reverse" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y: textY }} className="order-2 lg:order-1">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {profile.role}
          </motion.p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {nameParts.map((word, i) => (
              <span key={word} className="block overflow-hidden pb-1">
                <motion.span
                  className="block text-gradient"
                  initial={{ y: "110%" }}
                  animate={ready ? { y: "0%" } : {}}
                  transition={{ duration: 0.95, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="mt-6 space-y-1 text-lg text-white/60 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {profile.tagline.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </motion.div>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.95, duration: 0.7 }}
          >
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:scale-[1.03] hover:bg-accent hover:text-white"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:scale-[1.03] hover:border-accent hover:bg-white/5"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: charY }} className="relative order-1 mx-auto w-full max-w-md lg:order-2">
          {/* speech bubble */}
          <motion.div
            className="relative z-10 mx-auto mb-2 max-w-sm rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl lg:ml-0"
            initial={{ opacity: 0, scale: 0.92, y: 14 }}
            animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-live="polite"
          >
            <div className="min-h-[104px] space-y-1.5 text-[15px] leading-snug text-white/85">
              {shown.map((line, i) => (
                <p key={i} className={i === 0 ? "font-medium text-white" : undefined}>
                  {line}
                  {typing && i === shown.length - 1 && (
                    <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 animate-pulse bg-accent" />
                  )}
                </p>
              ))}
            </div>
            <span className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 border-b border-r border-white/10 bg-[#14141d]" />
          </motion.div>
          <div className="mx-auto h-[320px] w-[210px] sm:h-[400px] sm:w-[260px]">
            <Character talking={typing} reduce={reduce} />
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-8 w-5 rounded-full border border-white/25">
          <span
            className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white/70"
            style={{ animation: reduce ? undefined : "scrollcue 1.8s ease-in-out infinite" }}
          />
        </span>
      </a>
    </section>
  );
}
