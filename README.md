# Carolina Excavation Specialties 🚜⚡
### High-Authority Septic Installation & Precision Earthmoving Website

An authoritative, mobile-first, high-converting 4-page authority website and custom vector brand identity suite built for **Carolina Excavation Specialties** (Raleigh & Wake County, North Carolina).

---

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS + PostCSS
- **Icons:** Lucide React
- **Typography:** Barlow Condensed & Plus Jakarta Sans
- **Deployment:** Vercel Ready (`vercel.json` SPA configuration included)
- **SEO:** LocalBusiness Geo-Schema (JSON-LD) for Wake County local SEO dominance

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev

# 3. Production build
npm run build
```

The app will run locally at **`http://localhost:5173/`**.

---

## 📤 How to Push to GitHub

1. Create a new repository on your GitHub account (e.g., `carolina-excavation-specialties`). Leave it empty (without initializing README or license).
2. Open your terminal in this project directory and run:

```bash
# Verify git status
git status

# If you haven't set your git user details:
# git config --global user.name "Your Name"
# git config --global user.email "your-email@example.com"

# Link your new remote GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/carolina-excavation-specialties.git

# Set main branch and push
git branch -M main
git push -u origin main
```

---

## 🔺 How to Deploy to Vercel

### Option 1: One-Click via Vercel Dashboard (Recommended)
1. Go to [https://vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Import your **`carolina-excavation-specialties`** GitHub repository.
4. Vercel automatically detects the **Vite** framework from `vercel.json`:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your site will be live on a fast, global CDN in under 60 seconds with SSL enabled!

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## 🎨 Official Brand Logo Suite Included
Vector SVG assets are stored in the `/public` directory:
- `/public/logo.svg` — Primary horizontal master lockup
- `/public/logo-icon.svg` — Heavy hexagonal excavator emblem mark
- `/public/logo-badge.svg` — Certified contractor stamp seal

Inspect the logos and download high-res files directly through the **"Logo & Brand Kit"** button on the website.
