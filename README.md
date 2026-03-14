# Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion-style animations (`motion`).

## Live Site

GitHub Pages URL:

- https://thunder-shies.github.io/portfolio/

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Router
- GSAP

## Project Features

- Selected works and full archive views
- Dynamic project detail pages
- Gallery support for:
  - Images
  - MP4/WebM/Ogg videos
  - YouTube embeds
  - Figma embeds
- Publish control (`published: true/false`) to hide unfinished projects from viewers
- Custom target cursor interactions

## Run Locally

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

The app runs on:

- http://localhost:3000

### 3) Build for production

```bash
npm run build
```

## Content Editing

Project content is stored in:

- `src/data/projects.json`

Useful fields:

- `selected`: show in homepage selected works
- `published`: control public visibility
- `gallery`: supports `photo`, `image`, `video`, `figma`
- `processShots`: supports image and video URLs

## Credits

- Target Cursor animation inspiration: https://www.reactbits.dev/animations/target-cursor
- Built and iterated with support from Google AI Studio: https://ai.studio
