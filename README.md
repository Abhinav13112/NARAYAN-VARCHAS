# Narayan-Varchas Foods Private Limited — Product Showcase Website

A production-quality product catalogue and showcase website for **Narayan-Varchas Foods Private Limited**, built using React, Tailwind CSS, and Supabase integration.

## Key Features

- **Official Brand Presentation:** Implemented with high fidelity to client design references, utilizing the authentic client-provided logo, premium warm color palette, serif typography, and traditional Indian food aesthetics.
- **7 Authentic Categories (75 Products):**
  1. Gravy Bases & Sauces (15 items)
  2. Indian Snack Marinates (7 items)
  3. Veg Pickles (7 items)
  4. Non-Veg Pickles (10 items)
  5. Karam Podi (6 items)
  6. Instant Foods & Premixes (16 items)
  7. Idli/Dosa Batter & Premix (14 items)
- **Product Showcase & Informational Detail Pages:** Category browsing, instant search, specifications, and direct WhatsApp enquiry CTA.
- **Direct WhatsApp & Phone Communication:** Seamless prefilled WhatsApp enquiry links targeting official client contact numbers: `9409409159` and `9993419595`.
- **Integrated Backend (Supabase):** Database migrations provided for categories, products, and enquiries in `supabase/migrations/20261121_init.sql`. Gracefully falls back to bundled catalog if offline.
- **Vercel Ready:** Pre-configured with `vercel.json` SPA routing rewrites for zero-config one-click deployment.

---

## Tech Stack

- **Frontend:** React 18, React Router DOM 6, Tailwind CSS 3
- **Icons:** Lucide React
- **Backend / Database:** Supabase (`@supabase/supabase-js`)
- **Deployment:** Vercel

---

## Project Structure

```
nv/
├── public/
│   └── logo.jpg              # Client-provided company logo
├── src/
│   ├── assets/
│   │   └── logo.jpg          # Client-provided company logo
│   ├── components/
│   │   ├── Header.jsx        # Navigation, search & branding header
│   │   ├── Footer.jsx        # Complete footer with contact details
│   │   ├── ProductCard.jsx   # Informational product card
│   │   └── WhatsAppButton.jsx# Reusable WhatsApp CTA generator
│   ├── data/
│   │   └── products.js       # Complete 75-product database across 7 categories
│   ├── layouts/
│   │   └── MainLayout.jsx    # Layout shell with header, footer & floating CTA
│   ├── lib/
│   │   └── supabase.js       # Supabase client & enquiry submission handler
│   ├── pages/
│   │   ├── HomePage.jsx      # Landing page with hero, categories & story
│   │   ├── CataloguePage.jsx # Full product catalogue with category filters & search
│   │   ├── ProductDetailPage.jsx # Individual product informational view
│   │   ├── StoryPage.jsx     # Company heritage & standards page
│   │   └── ContactPage.jsx   # Business enquiry form & contact details
│   ├── styles/
│   │   └── index.css         # Tailwind & custom typography styles
│   ├── App.jsx               # Application routes
│   └── main.jsx              # React DOM entry point
├── supabase/
│   └── migrations/
│       └── 20261121_init.sql # PostgreSQL schema & RLS policies
├── .env.example              # Environment variables template
├── package.json              # Project dependencies & scripts
├── tailwind.config.js        # Color palette & font styling
├── vercel.json               # SPA routing configuration for Vercel
└── vite.config.js            # Vite build configuration with chunk splitting
```

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Supabase Integration (Optional)

To connect Supabase for storing customer enquiries:

1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL migration script located at `supabase/migrations/20261121_init.sql` in the Supabase SQL Editor.
3. Copy your project URL and Anon key into a `.env` file:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
*Note: The website works 100% out-of-the-box even without Supabase credentials, logging inquiries and routing customers directly to WhatsApp.*

---

## Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, click **"Add New Project"** and select the repository.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. (Optional) Add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` under Environment Variables.
6. Click **Deploy**.
