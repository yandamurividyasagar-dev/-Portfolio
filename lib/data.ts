export const profile = {
  name: "Vidya Sagar Yandamuri",
  role: "Full Stack Developer",
  tagline: ["Building useful software.", "Learning in public, shipping for real."],
  email: "yandamurividyasagar@gmail.com",
  linkedin: "https://linkedin.com/in/vidya-sagar-yandamuri",
  location: "Vizianagaram, Andhra Pradesh, India",
  summary:
    "Final-year B.Tech Computer Science student building backend services, REST APIs and full-stack AI applications with React, Node.js, Express and MongoDB.",
  intro: [
    "Hey, I'm Vidya Sagar Yandamuri.",
    "I build software that helps people learn and prepare.",
    "Full-stack apps, REST APIs and AI tools, from React to Node.js.",
    "Welcome to my digital space.",
  ],
};

export type Skill = { symbol: string; name: string; category: string; note: string };

export const skills: Skill[] = [
  { symbol: "Py", name: "Python", category: "Languages", note: "Used for backend services and REST APIs during my internship." },
  { symbol: "Js", name: "JavaScript", category: "Languages", note: "Core language for my full-stack web and AI applications." },
  { symbol: "Jv", name: "Java", category: "Languages", note: "Used for backend services and REST APIs during my internship." },
  { symbol: "Cp", name: "C++", category: "Languages", note: "Listed in my technical skills." },
  { symbol: "C", name: "C", category: "Languages", note: "Listed in my technical skills." },

  { symbol: "Nd", name: "Node.js", category: "Backend & APIs", note: "Runtime behind my Mock Interview Platform and Doubt Solver backends." },
  { symbol: "Ex", name: "Express.js", category: "Backend & APIs", note: "Web framework for the REST APIs in both live projects." },
  { symbol: "Re", name: "REST APIs", category: "Backend & APIs", note: "Built and integrated REST APIs in internship and project work." },
  { symbol: "Ai", name: "API Integration", category: "Backend & APIs", note: "Connected backend services with Salesforce and third-party AI services." },
  { symbol: "Jw", name: "JWT", category: "Backend & APIs", note: "Token-based authentication in both live projects." },
  { symbol: "Oa", name: "Google OAuth 2.0", category: "Backend & APIs", note: "Sign-in for the Mock Interview Platform." },
  { symbol: "Bc", name: "bcrypt", category: "Backend & APIs", note: "Password hashing in Doubt Solver." },

  { symbol: "Rc", name: "React.js", category: "Frontend", note: "UI library for my web and AI applications." },
  { symbol: "H5", name: "HTML5", category: "Frontend", note: "Semantic markup for responsive pages." },
  { symbol: "C3", name: "CSS3", category: "Frontend", note: "Styling and responsive design." },
  { symbol: "Rd", name: "Responsive Design", category: "Frontend", note: "Part of the work that reached Lighthouse scores above 95." },

  { symbol: "Mg", name: "MongoDB", category: "Databases", note: "Primary database in both live projects." },
  { symbol: "Sq", name: "SQL", category: "Databases", note: "Relational querying, supported by NPTEL database coursework." },

  { symbol: "Aw", name: "AWS", category: "Cloud", note: "Contributed to AWS-based application development during my internship." },
  { symbol: "Sf", name: "Salesforce", category: "Cloud", note: "Built maintainable integrations between backend services and Salesforce." },

  { symbol: "Gm", name: "Gemini AI", category: "AI Tools", note: "Generates interview scorecards in the Mock Interview Platform." },
  { symbol: "Gq", name: "Groq LLMs", category: "AI Tools", note: "Powers step-by-step answers in Doubt Solver." },
  { symbol: "As", name: "AssemblyAI", category: "AI Tools", note: "Transcribes spoken answers and voice questions." },
  { symbol: "Mo", name: "Monaco Editor", category: "AI Tools", note: "Code editor used in the coding round of the interview platform." },

  { symbol: "Db", name: "Debugging", category: "Practices", note: "Investigated production issues through logs and monitoring dashboards." },
  { symbol: "Lg", name: "Log Analysis", category: "Practices", note: "Application log and monitoring analysis." },
  { symbol: "Td", name: "Tech Docs", category: "Practices", note: "Wrote concise documentation that accelerated developer onboarding." },
  { symbol: "Ag", name: "Agile", category: "Practices", note: "Agile development practices." },
];

export const categories = ["All", "Languages", "Backend & APIs", "Frontend", "Databases", "Cloud", "AI Tools", "Practices"];

export const experience = [
  {
    title: "Software Developer Intern",
    org: "Travelmate AI",
    period: "Jun 2026 – Oct 2026",
    summary: "Backend services, integrations and production debugging.",
    points: [
      "Developed backend services and REST APIs in Python, Java and JavaScript to support customer workflows.",
      "Built maintainable integrations between backend services and Salesforce systems.",
      "Investigated production issues through monitoring dashboards, application logs and structured debugging, and resolved application issues to support uninterrupted live service.",
      "Contributed to AWS-based application development and API integration; documented technical work.",
    ],
  },
  {
    title: "Full Stack Development Trainee & Independent Project Developer",
    org: "NxtWave",
    period: "Aug 2024 – Present",
    summary: "Responsive web and AI applications, performance and documentation.",
    points: [
      "Built responsive web and AI applications with JavaScript, React.js, Node.js, Express.js, MongoDB, SQL, HTML5 and CSS3.",
      "Integrated REST APIs and implemented JWT authentication, Google OAuth 2.0, Markdown rendering, voice interfaces and application state management.",
      "Improved frontend performance to Lighthouse scores above 95 through focused optimization and responsive design.",
      "Reduced API latency by 300ms and wrote concise technical documentation that accelerated developer onboarding.",
    ],
  },
];

export const projects = [
  {
    name: "Mock Interview Platform",
    blurb:
      "An AI interview simulator for software engineering candidates.",
    details:
      "Analyzes PDF resumes, generates questions, transcribes voice answers and evaluates coding exercises. Gemini AI produces the scorecards, and access is secured with Google OAuth 2.0 and JWT.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "AssemblyAI", "Monaco Editor", "Google OAuth 2.0", "JWT"],
    live: "https://ai-powered-interview-frotend.onrender.com/",
    image: "/projects/mock-interview.jpg",
    imageAlt: "Mock Interview Platform sign-in screen with Voice Interviews, Resume Analysis, Live Coding and AI Scoring features",
    hue: 225,
  },
  {
    name: "Doubt Solver",
    blurb: "An education app that answers doubts asked by text, photo or voice.",
    details:
      "Supports text, photo and voice questions with step-by-step answers and subject detection. Includes chat history, Markdown rendering of answers, and secure authentication with JWT and bcrypt.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq LLMs", "AssemblyAI", "JWT", "bcrypt"],
    live: "https://doubt-solver-platform-front.onrender.com/",
    image: "/projects/doubt-solver.jpg",
    imageAlt: "AI Doubt Solver landing page with a sample GATE mathematics question and step-by-step answer",
    hue: 280,
  },
];

export const education = {
  degree: "Bachelor of Technology, Computer Science and Engineering",
  school: "Gurukula Kangri (Deemed to be University), Haridwar, Uttarakhand",
  period: "Aug 2023 – May 2027 (Expected)",
  certifications: [
    { name: "Google AI Workflow and Automations", by: "NxtWave via Google", year: "2025" },
    { name: "Introduction To Database Systems", by: "NPTEL", year: "2025" },
    { name: "Industry Ready Certification 4.0, Full Stack Development", by: "NxtWave", year: "2024 – Present" },
  ],
  languages: ["English", "Hindi"],
};

export const stats = [
  { value: 95, prefix: "> ", suffix: "", label: "Lighthouse score on frontend work" },
  { value: 300, prefix: "", suffix: "ms", label: "API latency reduced" },
  { value: 2, prefix: "", suffix: "", label: "Full-stack apps deployed live" },
  { value: 5, prefix: "", suffix: "", label: "Programming languages" },
];
