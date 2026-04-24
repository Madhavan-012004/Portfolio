# 🚀 Madhavan M — Developer Portfolio

A stunning, modern, and highly interactive personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

![Portfolio Preview](https://placehold.co/1200x630/050816/6c63ff?text=Madhavan+M+Portfolio)

---

## ✨ Features

- 🌑 **Dark Theme** with glassmorphism UI
- 🎆 **Animated particle background** (canvas-based, no library)
- ⌨️ **Typing effect** cycling through roles in Hero
- 🖱️ **3D tilt avatar card** with mouse parallax
- 📊 **Animated skill progress bars** with scroll reveal
- 🗂️ **Project filtering** (All / AI / Web / Tools)
- 🗓️ **Alternating timeline** for Journey section
- 📬 **Contact form** with loading + success states
- 🔗 **Social links** with hover micro-interactions
- 📱 **Fully responsive** — mobile, tablet, desktop
- ⚡ **Performance optimized** — Vite + code splitting
- 🔍 **SEO ready** — meta tags, semantic HTML

---

## 🗂️ Folder Structure

```
Portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx          # About Me + stats
│   │   ├── Contact.jsx        # Contact form + social links
│   │   ├── CursorGlow.jsx     # Mouse cursor radial glow
│   │   ├── Footer.jsx         # Footer with back-to-top
│   │   ├── Hero.jsx           # Typing hero + 3D avatar card
│   │   ├── Journey.jsx        # Alternating timeline
│   │   ├── Navbar.jsx         # Sticky glass navbar
│   │   ├── ParticleBackground.jsx  # Canvas particle animation
│   │   ├── Projects.jsx       # Filtered project cards
│   │   ├── SectionDivider.jsx # Decorative section divider
│   │   └── Skills.jsx         # Progress bars + badge cloud
│   ├── App.jsx                # Root component — assembles all sections
│   ├── index.css              # Design tokens, utilities, base styles
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell with SEO meta tags
├── vite.config.js             # Vite + Tailwind config
└── package.json
```

---

## 🛠️ Installation

### Prerequisites
- Node.js v18+
- npm v9+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy.

To preview the production build locally:
```bash
npm run preview
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag & drop the `dist/` folder at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 🎨 Customization

| What to change | File |
|---|---|
| Name, role, bio | `src/components/Hero.jsx`, `About.jsx` |
| Skills & levels | `src/components/Skills.jsx` |
| Projects list | `src/components/Projects.jsx` |
| Timeline events | `src/components/Journey.jsx` |
| Social links | `src/components/Contact.jsx`, `Footer.jsx` |
| Colors & fonts | `src/index.css` (CSS variables in `:root`) |
| Resume PDF | Replace `/public/resume.pdf` |

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 6** | Build tool (ultra-fast HMR) |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |

---

## 📄 License

MIT © Madhavan M
