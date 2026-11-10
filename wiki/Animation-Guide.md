# 🎬 Animation Engineering Guide

This guide breaks down the mathematics and Framer Motion configurations used across the OCHI Animation project.

---

## 1. 👁️ 2-Axis Eye Tracking & Pupil Clamping

Located in [`Eyes.jsx`](../src/componets/Eyes.jsx).

### The Math:

For each eyeball, the center point $(C_x, C_y)$ is obtained using `getBoundingClientRect()`:

$$\Delta x = \text{mouseX} - C_x, \quad \Delta y = \text{mouseY} - C_y$$
$$\theta = \operatorname{atan2}(\Delta y, \Delta x)$$
$$D = \sqrt{\Delta x^2 + \Delta y^2}$$

To prevent the pupil from escaping the iris boundary, translation distance $r$ is clamped:

$$r = \min(D \times 0.1, r_{\max})$$

Where $r_{\max} = \min(W_{\text{eye}} \times 0.18, 28\text{px})$.

Final coordinates and rotation:
$$P_x = r \cos \theta, \quad P_y = r \sin \theta, \quad \text{rotation} = \left(\theta \times \frac{180}{\pi}\right) - 180^{\circ}$$

```javascript
setLeftEyePos({
  x: Math.cos(angle) * travel,
  y: Math.sin(angle) * travel,
  rotate: (angle * 180) / Math.PI - 180,
});
```

---

## 2. 📢 Mathematical Infinite Marquee Loop

Located in [`Marquee.jsx`](../src/componets/Marquee.jsx).

### Problem with Dual Transforms:
When multiple items animate with `initial={{ x: 0 }}` and `animate={{ x: "-100%" }}`, they offset relative to their sibling containers, leading to collisions and clipping.

### Solution (Single-Track 50% Wrap):
Using 4 identical phrases in a single flex track, translating from `0%` to `-50%` creates an uninterrupted, mathematically seamless loop:

```jsx
<motion.div
  className="flex whitespace-nowrap flex-shrink-0 items-center"
  animate={{ x: ["0%", "-50%"] }}
  transition={{
    repeat: Infinity,
    ease: "linear",
    duration: 16,
  }}
>
  {/* 4 identical phrases */}
</motion.div>
```

---

## 3. 🃏 Letter-by-Letter Staggered Masks

Located in [`featured.jsx`](../src/componets/featured.jsx).

Each letter of the project title (e.g. `FYDE`) is wrapped in an individual `overflow-hidden` mask container. The parent card has `overflow-visible` so the title is never cut off between cards:

```jsx
{project.title.split("").map((letter, idx) => (
  <div key={idx} className="overflow-hidden inline-block py-1">
    <motion.span
      initial={{ y: "100%" }}
      animate={isHovered ? { y: "0%" } : { y: "100%" }}
      transition={{
        ease: [0.22, 1, 0.36, 1],
        duration: 0.45,
        delay: idx * 0.03,
      }}
      className="inline-block"
    >
      {letter}
    </motion.span>
  </div>
))}
```

---

## 4. 🔘 Signature Magnetic Pill Hover

Located in [`Landingpage.jsx`](../src/componets/Landingpage.jsx):

1. **Expanding Liquid Bubble**: A rounded span with `-translate-y-full` translates to `translate-y-0` on hover using `duration-500 ease-out`.
2. **Infinite 45° Arrow Slide**:
   - Primary arrow slides from `(0, 0)` to `(+16px, -16px)`.
   - Secondary absolute arrow slides from `(-16px, +16px)` to `(0, 0)`.
