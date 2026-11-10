# 🎨 OCHI Animation

[![Live Demo](https://img.shields.io/badge/Demo-ochi--animation.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://ochi-animation.vercel.app)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.12-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.8.0-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

An award-winning, high-performance animated website inspired by [ochi.design](https://ochi.design). Built with modern frontend engineering principles featuring buttery smooth momentum scrolling, interactive 2-axis eye tracking, mask-reveal typography, rotating vector badges, and a balanced dark editorial aesthetic.

---

## 🌐 Live Demo

Experience the live deployment on Vercel:  
👉 **[https://ochi-animation.vercel.app](https://ochi-animation.vercel.app)**

---

## ✨ Highlights & Key Features

- 🏎️ **Unified Lenis Smooth Scrolling** — Centralized [Lenis](https://github.com/darkroomengineering/lenis) momentum scrolling at 60/120fps with zero layout stutter or coordinate tearing.
- 👁️ **Realistic 2-Axis Eye Tracking** — Clamped $(x, y)$ pupil translation within the iris boundary, rotating glints targeting the pointer, and interactive **click-to-blink** physics.
- 🔤 **Authentic Modern Typography** — Direct woff2 embedding of Grotesque condensed display (`Bebas Neue`, `Oswald`) and Swiss Neo-Grotesque (`Plus Jakarta Sans`) eliminating any fallback font issues.
- 🔘 **Signature Ochi Pill Buttons** — Fluid background hover bubble fills with animated 45° arrow transitions that exit top-right and re-enter from bottom-left.
- 📢 **Seamless Infinite Marquee** — Mathematical `0%` to `-50%` single-track loop with refined 1px borders and relaxed letter tracking to completely eliminate word collisions.
- 🎡 **Rotating Agency Stamp** — Circular typography badge (`• STRATEGY • DESIGN • IMPACT • OCHI`) rotating infinitely with center arrow hover springs in the About section.
- 🃏 **Expanded Showcase Projects** — 4 full featured projects (**FYDE**, **VISE**, **TRAWA**, **PREMIUM BLEND**) with category tags, smooth image zoom, and unclipped letter-by-letter reveal masks.
- 📋 **Structured & Meaningful Footer** — 3-column navigation layout (`M: Menu`, `S: Socials`, `L: Locations`, `E: Inquiries`) featuring an interactive **1-click Copy-to-Clipboard** email pill and mini interactive eye widgets.
- 📱 **100% Responsive Design** — Fluid typography scaling, clean spacing, and an animated mobile navigation drawer.

---

## 📚 Documentation & Wiki

Detailed technical guides and architectural breakdowns are available in the [Wiki](wiki/Home.md):

- [📖 Wiki Home](wiki/Home.md)
- [🏗️ Architecture & Lifecycle](wiki/Architecture.md)
- [🎬 Animation Engineering Guide](wiki/Animation-Guide.md)
- [🧩 Components Reference](wiki/Components.md)
- [🎨 Typography & Design Tokens](wiki/Typography-and-Styling.md)

---

## 🏗️ Project Architecture

```
OCHI-ANIMATION/
├── public/
├── src/
│   ├── assets/              # Showcase artwork & imagery
│   ├── componets/           # UI Components
│   │   ├── Navbar.jsx       # Glassmorphism header & mobile navigation drawer
│   │   ├── Landingpage.jsx  # Hero section with animated image pill & magnetic CTA
│   │   ├── Marquee.jsx      # Gap-free infinite marquee banner with refined borders
│   │   ├── About.jsx        # Agency philosophy, rotating stamp & metrics strip
│   │   ├── Eyes.jsx         # 2-axis interactive eyeball tracking with blink effect
│   │   ├── featured.jsx     # 4 project showcases with letter-stagger animations
│   │   ├── Cards.jsx        # Clutch 5.0 rating & bootcamp alumni showcase cards
│   │   └── Footer.jsx       # 3-column footer with copy-email pill & mini eyes
│   ├── App.jsx              # Root application & Lenis scroll provider
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global typography, @font-face & Lenis styles
├── tailwind.config.js       # Custom colors (ochi-lime, ochi-darkGreen) & fonts
├── vite.config.js           # Vite build configuration
└── package.json             # Dependencies & build scripts
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Component architecture and state management |
| **Vite** | Fast modern build tooling and bundling |
| **Lenis** | Lightweight smooth momentum scroll |
| **Framer Motion** | Complex UI transitions, reveals, and gesture springs |
| **GSAP** | Motion utilities and performance animation hooks |
| **Tailwind CSS** | Utility-first styling with custom design tokens |
| **React Icons** | Clean SVG iconography (FontAwesome & HeroIcons) |

---

## ⚙️ Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Jashan-randhawa/OCHI-ANIMATION.git
cd OCHI-ANIMATION
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

Configured for continuous deployment with **Vercel**. Every push to the `main` branch triggers an automatic production build.

---

## 👤 Author

Developed by **Jashan Randhawa**  
GitHub: [@Jashan-randhawa](https://github.com/Jashan-randhawa)
