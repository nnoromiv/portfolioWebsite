# Christian O. Nnorom — Portfolio Website

Personal portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live: [nnorom.vercel.app](https://nnorom.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS variables |
| Animation | Framer Motion |
| UI Components | shadcn/ui (Button, Badge, Carousel) |
| Dark Mode | next-themes |
| Font | Rubik via next/font |
| Icons | Lucide React |

---

## Sections

- **Hero** — Animated intro with typewriter role, floating tech tags, profile photo
- **Services** — Backend Engineering, Frontend Engineering, Cloud + AI/ML, Web Development, Mobile Development
- **Work Experience** — Alternating timeline (CitiSense, University of Essex, RedTech, Tony Elumelu Foundation)
- **Why Choose Me** — Stats, skill tags, CTA
- **Featured Work** — Carousel showcasing Voote, Vehicle Annotator, Merchant Platform, ADHD Pipeline
- **Latest Thoughts** — Blog card grid
- **Footer** — Contact, navigation, availability status

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

---

## Project Structure

```
portfolioWebsite/
├── app/
│   ├── layout.tsx        # Root layout (font, theme, metadata)
│   ├── page.tsx          # Main page
│   └── globals.css       # Tailwind + CSS variables + glass utilities
├── components/
│   ├── home/             # Section components (hero, services, etc.)
│   ├── ui/               # shadcn components (button, badge, carousel)
│   ├── navbar.tsx        # Fixed glass navbar
│   ├── preloader.tsx     # Animated page preloader
│   ├── scroll-reveal.tsx # Framer Motion scroll animation wrapper
│   ├── theme-toggle.tsx  # Dark / light mode toggle
│   └── type-writing.tsx  # Typewriter effect (dynamic import, SSR-off)
├── lib/
│   ├── nav-links.ts      # Navigation link definitions
│   └── utils.ts          # cn() helper
└── public/
    └── assets/
        ├── me.png / me_2.png
        ├── moon.svg / sun.svg
        └── projects/     # Portfolio & blog images
```

---

## About

**Christian O. Nnorom** — Backend-focused Software Engineer (3+ years) with experience in Node.js/Express, Python, AWS, Docker, and AI/ML (YOLOv8, PyTorch, TensorFlow). Currently a Full Stack & ML Engineer at CitiSense, London.

- **Email:** nnorom.prince44@gmail.com
- **Phone:** +44 7596 717786
- **LinkedIn:** [linkedin.com/in/nnorom](https://linkedin.com/in/nnorom)
- **GitHub:** [github.com/nnoromiv](https://github.com/nnoromiv)
- **Website:** [nnorom.vercel.app](https://nnorom.vercel.app)
