# 🧩 Components Reference

This document provides a breakdown of each component in `src/componets/`.

---

## 1. `Navbar.jsx`
- **Location**: `src/componets/Navbar.jsx`
- **Purpose**: Top navigation header.
- **Features**:
  - Scroll listener dynamically toggles glassmorphic backdrop: `bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/60 shadow-xl` when scrolled > 40px.
  - Hover underline indicator in `#CDEA68`.
  - Mobile hamburger toggle with full-screen slide-down drawer powered by Framer Motion's `AnimatePresence`.

---

## 2. `Landingpage.jsx`
- **Location**: `src/componets/Landingpage.jsx`
- **Purpose**: Hero landing section.
- **Features**:
  - Masked line entrance animations using cubic bezier `ease: [0.22, 1, 0.36, 1]`.
  - Dynamic expanding card pill on line 2 (`Eye Opening`) animating width smoothly from `0` to `clamp(4.5rem, 8.5vw, 9rem)`.
  - IPO Subtitle Bar with magnetic liquid fill button.

---

## 3. `Marquee.jsx`
- **Location**: `src/componets/Marquee.jsx`
- **Purpose**: Continuous ticker banner.
- **Features**:
  - Authentic Ochi deep emerald container: `#004D43`.
  - Crisp 1px border lines: `border-t border-b border-zinc-400/40`.
  - Single-track `0%` to `-50%` linear infinite transform.
  - Generous padding and `tracking-normal` preventing word collisions.

---

## 4. `About.jsx`
- **Location**: `src/componets/About.jsx`
- **Purpose**: Agency mission statement, metrics, and approach.
- **Features**:
  - Accent lime background: `#CDEA68` with rich dark typography.
  - Infinitely spinning SVG circular stamp badge (`• STRATEGY • DESIGN • IMPACT • OCHI`).
  - 3-column metrics strip: `100+ Pitches Delivered`, `$500M+ Capital Raised`, `98% Client Win Rate`.
  - Hoverable approach card with image zoom on hover.

---

## 5. `Eyes.jsx`
- **Location**: `src/componets/Eyes.jsx`
- **Purpose**: Centerpiece interactive eyeball section.
- **Features**:
  - Dual independent eyeball tracking.
  - 2-Axis clamped pupil translation with rotating light glints.
  - Click-to-blink spring response (`scaleY: 0.05 -> 1`).

---

## 6. `featured.jsx`
- **Location**: `src/componets/featured.jsx`
- **Purpose**: Showcase project grid.
- **Features**:
  - 4 showcase projects: **FYDE**, **VISE**, **TRAWA**, **PREMIUM BLEND**.
  - Letter-by-letter staggered upward slide.
  - `overflow-visible` card container ensuring floating center title is never clipped.
  - Category pill tags for each project.

---

## 7. `Cards.jsx`
- **Location**: `src/componets/Cards.jsx`
- **Purpose**: Social proof and achievements bento grid.
- **Features**:
  - Card 1: Ochi Brand Card (`#004D43`) with `© 2019-2026` badge.
  - Card 2: Clutch 5.0 Rating (`#192826`).
  - Card 3: Business Bootcamp Alumni (`#192826`).

---

## 8. `Footer.jsx`
- **Location**: `src/componets/Footer.jsx`
- **Purpose**: Site footer and contact portal.
- **Features**:
  - Staggered scroll mask reveal for `EYE-`, `OPENING`, and `PRESENTATIONS`.
  - Interactive mini eyes easter egg tracking cursor movement.
  - 3-Column structured layout:
    - `M: Menu` — Quick navigation.
    - `S: Socials` — Working social channels with 45° arrow transitions.
    - `L: Locations` — Vancouver & Lviv offices.
    - `E: Inquiries` — Interactive **1-click Copy-to-Clipboard** email pill.
