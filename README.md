# 🎨 OCHI Animation

A stunning animated landing page inspired by [ochi.design](https://ochi.design), built with React, Framer Motion, GSAP, and Lenis. Features buttery smooth scroll animations, realistic 2-axis interactive eye tracking, custom magnetic cursor, marquee effects, and a modern dark UI.

---

## 🌐 Live Demo

👉 [https://ochi-animation.vercel.app](https://ochi-animation.vercel.app)

---

## ✨ Features

- 🖱️ **Buttery Smooth Scrolling** — Lenis integration for fluid momentum scrolling
- 👁️ **Realistic 2-Axis Eye Tracking** — Clamped 2D pupil translation with rotating glints and click-to-blink interaction
- 🎯 **Custom Magnetic Cursor** — Reactive cursor with spring physics and contextual badges ("VIEW", "PLAY")
- 🔤 **Authentic Modern Typography** — Grotesque condensed display & neo-grotesque typography stacks
- 🔘 **Signature Ochi Magnetic Buttons** — Liquid pill fills and animated 45° arrow transitions
- 🎞️ **Framer Motion & GSAP** — High-performance letter-staggered reveals and mask entrances
- 📢 **Seamless Infinite Marquee** — Gap-free looped ticker banner
- 🃏 **Enhanced Featured Projects** — 4 showcase projects (Fyde, Vise, Trawa, Premium Blend) with tags & hover states
- 📱 **Fully Responsive** — Fluid typography and mobile slide-in navigation drawer
- 🌑 **Dark UI** — Sleek zinc-900 background theme

---

## 🏗️ Project Structure

```
OCHI-ANIMATION/
├── public/
├── src/
│   ├── assets/              # Images and media
│   ├── componets/           # UI Components
│   │   ├── Navbar.jsx       # Top navigation & mobile drawer
│   │   ├── Landingpage.jsx  # Hero section with animated pill
│   │   ├── Marquee.jsx      # Infinite scrolling text banner
│   │   ├── About.jsx        # About & approach section
│   │   ├── Eyes.jsx         # 2-axis interactive eye tracking
│   │   ├── featured.jsx     # Featured projects & letter stagger
│   │   ├── Cards.jsx        # Project & rating cards
│   │   ├── Footer.jsx       # Footer section
│   │   └── CustomCursor.jsx # Spring magnetic cursor
│   ├── App.jsx              # Root component & Lenis scroll provider
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & fonts
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Local Setup

### 1. Clone the repo

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

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Lenis | Smooth scrolling |
| Framer Motion | Component animations & transitions |
| GSAP | Animation utilities |
| Tailwind CSS | Utility-first styling |
| React Icons | Icon library |

---

## ☁️ Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch.
