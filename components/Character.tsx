"use client";

import { useEffect, useState } from "react";
import "./character.css";

export default function Character({ talking, reduce }: { talking: boolean; reduce: boolean }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce]);

  const headStyle = {
    transform: `rotate(${tilt.x * 9}deg)`,
    transformOrigin: "120px 140px",
    transition: "transform 0.25s ease-out",
  };
  const eyeStyle = {
    transform: `translate(${tilt.x * 3}px, ${tilt.y * 2}px)`,
    transition: "transform 0.2s ease-out",
  };

  return (
    <svg
      viewBox="0 0 240 380"
      className={`h-full w-full ${talking ? "char-talking" : ""} ${reduce ? "" : "char-float"}`}
      role="img"
      aria-label="Illustration of a miniature developer waving hello"
    >
      <defs>
        <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d86ff" />
          <stop offset="1" stopColor="#3b4fc4" />
        </linearGradient>
        <radialGradient id="floor" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7c9cff" stopOpacity="0.35" />
          <stop offset="1" stopColor="#7c9cff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ground glow + shadow */}
      <ellipse cx="120" cy="360" rx="100" ry="14" fill="url(#floor)" />
      <ellipse cx="120" cy="358" rx="58" ry="8" fill="#000" opacity="0.5" />

      {/* legs and shoes */}
      <rect x="88" y="250" width="26" height="100" rx="11" fill="#1d2244" />
      <rect x="126" y="250" width="26" height="100" rx="11" fill="#1d2244" />
      <ellipse cx="97" cy="351" rx="20" ry="8" fill="#e8e8f0" />
      <ellipse cx="143" cy="351" rx="20" ry="8" fill="#e8e8f0" />

      {/* gesturing arm (left of screen) */}
      <g className={reduce ? "" : "char-gesture"}>
        <rect x="56" y="158" width="22" height="86" rx="11" fill="url(#shirt)" />
        <circle cx="67" cy="248" r="11" fill="#f1c9a5" />
      </g>

      {/* torso */}
      <g className={reduce ? "" : "char-breathe"}>
        <rect x="76" y="148" width="88" height="116" rx="30" fill="url(#shirt)" />
        <path d="M104 150 L120 192 L136 150" fill="none" stroke="#e8e8f0" strokeWidth="2" opacity="0.7" />
        <rect x="111" y="188" width="18" height="24" rx="3" fill="#e8e8f0" />
        <rect x="114" y="193" width="12" height="3" rx="1.5" fill="#3b4fc4" />
        <rect x="114" y="199" width="8" height="2" rx="1" fill="#9aa3c7" />
      </g>

      {/* waving arm (right of screen) */}
      <g className={reduce ? "" : "char-wave"}>
        <rect x="162" y="158" width="22" height="86" rx="11" fill="url(#shirt)" />
        <circle cx="173" cy="248" r="11" fill="#f1c9a5" />
      </g>

      {/* neck + head */}
      <rect x="108" y="130" width="24" height="26" rx="8" fill="#e3b58f" />
      <g style={headStyle}>
        <circle cx="80" cy="102" r="7" fill="#f1c9a5" />
        <circle cx="160" cy="102" r="7" fill="#f1c9a5" />
        <circle cx="120" cy="100" r="41" fill="#f1c9a5" />
        <path
          d="M78 98 C74 50 166 50 162 98 C152 76 132 70 120 72 C106 72 88 78 78 98 Z"
          fill="#1a1420"
        />
        <g style={eyeStyle}>
          <ellipse className={reduce ? "" : "char-blink"} cx="106" cy="104" rx="4.2" ry="5" fill="#1a1420" />
          <ellipse className={reduce ? "" : "char-blink"} cx="134" cy="104" rx="4.2" ry="5" fill="#1a1420" />
        </g>
        <path d="M98 94 Q106 89 114 93" stroke="#1a1420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M126 93 Q134 89 142 94" stroke="#1a1420" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse className="char-mouth" cx="120" cy="124" rx="8" ry="2" fill="#7a3b3b" />
        <circle cx="99" cy="118" r="6" fill="#e8907f" opacity="0.25" />
        <circle cx="141" cy="118" r="6" fill="#e8907f" opacity="0.25" />
      </g>
    </svg>
  );
}
