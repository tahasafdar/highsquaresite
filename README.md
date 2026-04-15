# High Square Aluminium - Premium Website

A premium, ultra-modern static showcase website for **High Square Aluminium by Monalisa Aluminium** — crafting premium aluminium solutions since 1998.

## Tech Stack

- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Form Service**: Formspree (direct email delivery, no backend needed)
- **Hosting**: GitHub Pages (static)

---

## Quick Setup

### 1. Install Dependencies

```bash
cd frontend
yarn install
```

### 2. Configure Formspree (Contact Form → Email)

The contact form sends enquiries directly to your email via [Formspree](https://formspree.io).

**Steps:**
1. Go to [https://formspree.io](https://formspree.io) and sign up (free plan supports 50 submissions/month)
2. Click **New Form** → enter your email → create
3. Copy the **Form ID** (e.g. `xyzabcde`)
4. Open `frontend/src/components/ContactSection.jsx`
5. Replace the placeholder on **line 13**:

```js
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID"; // <-- Replace with your ID
```

Example:
```js
const FORMSPREE_FORM_ID = "xyzabcde";
```

That's it — form submissions will now arrive in your email inbox.

### 3. Configure GitHub Pages URL

Open `frontend/package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

Example:
```json
"homepage": "https://monalisa-aluminium.github.io/high-square-website"
```

### 4. Run Locally

```bash
cd frontend
yarn start
```

### 5. Deploy to GitHub Pages

```bash
cd frontend
yarn deploy
```

This builds the project and pushes to the `gh-pages` branch automatically.

Then in your GitHub repo:
1. Go to **Settings** → **Pages**
2. Set Source to **Deploy from a branch**
3. Select branch: `gh-pages` / `/ (root)`
4. Save — your site will be live at the homepage URL

---

## Alternative Deployment Options

### Deploy to Vercel

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Set **Root Directory** to `frontend`
4. Deploy (no env variables needed)

### Deploy to Netlify

1. Push repo to GitHub
2. Go to [netlify.com](https://netlify.com) → Import from Git
3. Set **Base directory**: `frontend`
4. **Build command**: `yarn build`
5. **Publish directory**: `frontend/build`
6. Deploy

---

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js                    # Router (HashRouter for GH Pages compat)
│   ├── App.css                   # Custom animations
│   ├── index.css                 # Global styles + CSS variables
│   ├── pages/
│   │   └── HomePage.jsx          # Main page (all sections)
│   └── components/
│       ├── Navbar.jsx            # Navigation + scroll progress
│       ├── HeroSection.jsx       # Fullscreen hero + parallax
│       ├── BrandStatement.jsx    # Bold typography + marquee
│       ├── AboutSection.jsx      # Company story + counters
│       ├── ServicesSection.jsx   # 6 service cards + 3D tilt
│       ├── ProductShowcase.jsx   # Product carousel
│       ├── WhyChooseUs.jsx       # 5 differentiators
│       ├── OurProcess.jsx        # 8-step zigzag timeline
│       ├── ProjectsGallery.jsx   # Masonry gallery + lightbox
│       ├── CustomSolutions.jsx   # 3 solution cards
│       ├── ContactSection.jsx    # Form → Formspree → Email
│       ├── WhatsAppButton.jsx    # Floating WhatsApp CTA
│       ├── Graphics.jsx          # Decorative SVG animations
│       └── Footer.jsx
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Credentials Checklist

| What | Where | How to Get |
|------|-------|-----------|
| Formspree Form ID | `src/components/ContactSection.jsx` line 13 | [formspree.io](https://formspree.io) → New Form |
| GitHub Pages URL | `package.json` → `homepage` | Your GitHub repo URL |

## Contact

- **Phone**: +91 98273 33552
- **WhatsApp**: [Chat Now](https://wa.me/919827333552)
- **Head Office**: Indore, MP
- **Branch**: Dewas, MP
