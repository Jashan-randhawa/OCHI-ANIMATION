# 🎨 Typography & Design Tokens

This document details the typography strategy, custom fonts, color palette, and Tailwind CSS configuration.

---

## 🔤 Font Hierarchy

| Role | Font Family | Fallback | Sourced From |
|---|---|---|---|
| **Headings & Display** | `Founders_Grotesk_X-Condensed` | `Bebas Neue`, `Oswald` | Google Fonts & woff2 |
| **Body & UI Text** | `Neue_Montreal` | `Plus Jakarta Sans`, `Inter` | Google Fonts & woff2 |

### Embedding Strategy (`index.css`):

To guarantee consistent rendering on all client machines (regardless of locally installed fonts), direct woff2 endpoints are registered in `@font-face`:

```css
@font-face {
  font-family: 'Founders_Grotesk_X-Condensed';
  src: url('https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2') format('woff2');
  font-weight: 400 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Neue_Montreal';
  src: url('https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsDxUFnMVehmWPdX-CnUpQP7Dm2XMLNDZJRi2Sk-vK.woff2') format('woff2');
  font-weight: 300 800;
  font-style: normal;
  font-display: swap;
}
```

---

## 🎨 Color Palette

| Token Name | Hex Code | Purpose / Usage |
|---|---|---|
| **`zinc-900`** | `#18181b` | Main canvas background |
| **`zinc-950`** | `#09090b` | Card & footer base background |
| **`ochi-lime`** | `#CDEA68` | Accent highlight, selection, About background |
| **`ochi-darkGreen`** | `#004D43` | Marquee & primary brand card |
| **`ochi-olive`** | `#718721` | Image backing & secondary accents |
| **`ochi-cardBg`** | `#192826` | Bento review & bootcamp cards |

---

## 📐 Responsive Breakpoints

| Breakpoint | Min-Width | Usage in Layout |
|---|---|---|
| **`sm`** | `640px` | Tablet padding, fluid text sizing |
| **`md`** | `768px` | Desktop navigation bar appears |
| **`lg`** | `1024px` | 2-column project grids, side-by-side cards |
| **`xl`** | `1280px` | Large screen typography scaling |
