"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const focus = [
  { n: "01", title: "Backend & REST APIs", text: "Services in Python, Java, JavaScript and Node.js that support real customer workflows." },
  { n: "02", title: "Full-Stack Web Apps", text: "Responsive React front ends connected to Express and MongoDB back ends." },
  { n: "03", title: "AI-Powered Applications", text: "Gemini, Groq and AssemblyAI used for scoring, answers and voice transcription." },
  { n: "04", title: "Authentication", text: "JWT, Google OAuth 2.0 and bcrypt to keep user access secure." },
  { n: "05", title: "Debugging & Reliability", text: "Reading logs and monitoring dashboards to find why a live system failed." },
  { n: "06", title: "Documentation", text: "Concise technical writing that helps other developers get started faster." },
];

export default function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" aria-labelledby="about-heading" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-label">About</p>
            <h2 id="about-heading" className="mt-3 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-6xl">
              I build software that helps people <span className="text-gradient">learn and prepare.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-white/60">
              I&apos;m an entry-level software engineer and a final-year Computer Science student. I want to apply
              these skills to technology that supports health and care.
            </p>
          </div>
          <div className="relative shrink-0">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/40 blur-xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Vidya Sagar Yandamuri"
              width={720}
              height={857}
              className="relative h-44 w-44 rounded-[1.75rem] border border-white/20 object-cover object-[50%_20%] sm:h-56 sm:w-56"
            />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((f, i) => (
            <motion.div
              key={f.n}
              className="group relative bg-ink p-7"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ backgroundColor: "#0f1020" }}
            >
              <span className="font-mono text-xs text-accent">{f.n}</span>
              <h3 className="mt-4 text-xl font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent2 transition-all duration-500 group-hover:w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
