# 📖 OCHI Animation Wiki

Welcome to the official documentation and technical wiki for the **OCHI Animation** project.

This project is an award-winning recreation and modern frontend engineering demonstration of the design and interaction patterns seen on [ochi.design](https://ochi.design).

---

## 📑 Wiki Table of Contents

| Page | Description |
|---|---|
| [🏗️ Architecture](Architecture.md) | Component tree, Lenis scroll loop, and lifecycle management |
| [🎬 Animation Guide](Animation-Guide.md) | Mathematical breakdowns of 2-axis eye tracking, marquee loops, and masks |
| [🧩 Components Reference](Components.md) | Deep dive into each component's implementation and markup |
| [🎨 Typography & Styling](Typography-and-Styling.md) | Font stacks, woff2 embedding, Tailwind config, and design tokens |

---

## 🌟 Quick Overview

- **Framework**: React 18 (Vite 5)
- **Styling**: Tailwind CSS 3
- **Motion Engine**: Framer Motion 11 & GSAP 3
- **Scroll Engine**: Lenis Smooth Momentum Scroll
- **Deployment**: Vercel (Continuous Deployment from `main`)
- **Live Demo**: [https://ochi-animation.vercel.app](https://ochi-animation.vercel.app)

---

## 🎯 Core Engineering Principles

1. **Buttery Performance**: Zero layout thrashing, 60/120fps smooth momentum scroll, and unchained CPU performance.
2. **True Geometric Tracking**: Clamped mathematical trigonometric vector calculations for interactive pupils.
3. **Typography Integrity**: Embedded grotesque woff2 web fonts guaranteeing consistent display across all browsers without serif fallback glitches.
4. **Resilient Responsive Layout**: Fluid typography scaling (`clamp()`), mobile drawer navigation, and clean cross-device layout boundaries.
