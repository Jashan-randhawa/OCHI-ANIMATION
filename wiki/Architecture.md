# 🏗️ Architecture & Lifecycle Management

This page documents the component hierarchy, rendering pipeline, and scroll synchronization across the OCHI Animation application.

---

## 🌳 Component Tree

```mermaid
graph TD
    App[App.jsx - Root & Lenis Provider]
    App --> Navbar[Navbar.jsx - Header & Mobile Drawer]
    App --> Landingpage[Landingpage.jsx - Hero Section]
    App --> Marquee[Marquee.jsx - Continuous Banner]
    App --> About[About.jsx - Philosophy & Rotating Stamp]
    App --> Eyes[Eyes.jsx - 2-Axis Interactive Eyeballs]
    App --> Featured[Featured.jsx - Project Showcase Grid]
    App --> Cards[Cards.jsx - Review & Alumni Bento Grid]
    App --> Footer[Footer.jsx - 3-Column Navigation & Mini Eyes]
    App --> Analytics[Analytics - Vercel Web Analytics]
```

---

## 🏎️ Lenis Smooth Scroll Pipeline

Smooth scrolling is powered by **[Lenis](https://github.com/darkroomengineering/lenis)**, initialized at the root level in [`App.jsx`](../src/App.jsx).

### Lifecycle & Cleanup

```javascript
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  });

  let animationFrameId;
  function raf(time) {
    lenis.raf(time);
    animationFrameId = requestAnimationFrame(raf);
  }

  animationFrameId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(animationFrameId);
    lenis.destroy();
  };
}, []);
```

### Why Lenis Over Locomotive Scroll?

1. **Native Document Flow**: Lenis manipulates the native `window.scrollY` rather than intercepting the DOM with transformed wrapper `<div>` elements.
2. **Fixed Element Compatibility**: Position `fixed` elements (such as [`Navbar.jsx`](../src/componets/Navbar.jsx) and interactive dialogs) work without coordinate offset hacks.
3. **Memory Safety**: Clean disposal on component unmount with `cancelAnimationFrame` and `lenis.destroy()`.
