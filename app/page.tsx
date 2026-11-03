"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import IdCard from "@/components/IdCard";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader visible={!ready} />
      <Nav />
      <main>
        <Hero ready={ready} />
        <IdCard />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Impact />
        <Education />
        <Contact />
      </main>
    </>
  );
}
