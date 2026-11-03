# Vidya Sagar Yandamuri — Portfolio

A dark, cinematic portfolio built with Next.js 14, TypeScript, Tailwind CSS and Framer Motion.
Highlights: animated loader, a waving miniature character with a typed introduction, a tilting and flipping
developer ID card, an interactive periodic table of skills, an expandable experience timeline, project
showcases with live links, animated counters and a contact section with copy-email.

All content comes from the resume and lives in one file: `lib/data.ts`.

## Run it on your computer

You need Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Edit your content

Open `lib/data.ts` and change the text. Save the file and the browser updates by itself.

## Deploy to Vercel (free)

1. Create a repository on github.com and upload this folder (do not upload `node_modules` or `.next`).
2. Sign in at vercel.com with GitHub.
3. Click **Add New → Project**, pick the repository, and click **Deploy**.
4. After 1–2 minutes Vercel gives you a public link such as `your-name.vercel.app`.

This project has not been deployed yet.

## Project structure

```
app/          layout, page, global styles
components/   Hero, Character, IdCard, About, Skills, Experience, Projects, Impact, Education, Contact
lib/data.ts   all portfolio content
public/       favicon and social preview image
```

Animations respect the `prefers-reduced-motion` setting.
