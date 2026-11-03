"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-10 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
          style={{ animation: reduce ? undefined : "drift 15s ease-in-out infinite" }}
        />
        <div
          className="absolute right-1/4 top-40 h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px]"
          style={{ animation: reduce ? undefined : "drift 19s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 id="contact-heading" className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Looking for an <span className="text-gradient">entry-level engineer?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Let&apos;s build something meaningful. I&apos;m happy to go deeper into any project.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-ink transition hover:scale-[1.03] hover:bg-accent hover:text-white"
            >
              Email me
            </a>
            <button
              onClick={copy}
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm text-white/90 transition hover:scale-[1.03] hover:border-accent"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm text-white/90 transition hover:scale-[1.03] hover:border-accent"
            >
              LinkedIn ↗
            </a>
          </div>
          <p className="mt-5 font-mono text-sm text-white/45" role="status">
            {profile.email}
          </p>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
