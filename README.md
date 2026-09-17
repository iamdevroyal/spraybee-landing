# SprayBee — Landing & Partner Platform

> **Spray the moment. Gift the memory.**  
> The digital way to spray cash and send gifts at Nigerian celebrations — no mutilated notes, no bags of physical cash, 100% legal, and pure celebration vibe.

Built with **Vite + React 18 + TypeScript + Vanilla CSS Modules**.

---

## Features

- **Continuous 3D Naira Spray Engine**: Signature Hero component (`SprayCardFan`) featuring an active continuous celebratory shower of realistic Naira notes with 3D rotation, flutter physics, and golden sparkle trails.
- **Interactive Per-Note Spraying**: Tapping any specific note in the resting deck (₦20, ₦50, ₦100, ₦200, ₦1,000) launches that exact note into the air and increments the live celebration tally by that denomination.
- **Strict Mobile Responsiveness**: Zero horizontal overflow across all mobile viewports (320px to 1440px), fluid typography, and touch-optimized form layouts.
- **"How SprayBee Works"**: 3-step modern owambe journey with benefit tags, icons, and 60-second direct bank payout highlights.
- **"Two Modes. One Wallet"**: Interactive dual showcase comparing:
  - **The Spray Floor (Owambe Mode)**: Big-screen projection sync, DJ audio-visual alerts, and Chief Sprayer honors.
  - **The Gift Vault (Curated Registry)**: Wishlists from top Nigerian retail stores with 1-click cash conversion freedom.
- **Live Owambe Arena Leaderboard**: Real-time event screen preview with status pulse, total sprayed counter, Owambe royal titles, and live spray feed ticker.
- **"Built for the Whole Party" & Onboarding Modal**:
  - Venue partnerships for Event Centers, Halls, and DJs.
  - Retail network for Stores, Luxury Brands, and Gift Vendors.
  - Interactive onboarding modal with dual tracks and instant application submission.
- **Dedicated Legal Pages**:
  - **Privacy Policy (`/privacy`)**: 11-section comprehensive policy compliant with the Nigeria Data Protection Act (NDPA) 2023 and NDPR.
  - **Terms of Service (`/terms`)**: 12-section legally binding terms covering Central Bank of Nigeria (CBN) clean-note policy compliance, irrevocability of live sprays, and cash-out SLAs.
  - Sticky Table of Contents sidebar and "In Plain English" summary callouts.
- **Dedicated Contact Us Page (`/contact`)**:
  - Direct WhatsApp chat integration with **`07035148792`** (`https://wa.me/2347035148792`).
  - Direct telephone support (`+234 703 514 8792`), email, Lagos office details, and interactive message inquiry form.
- **Lightweight Client Router**: URL and hash-synchronized router (`/`, `/privacy`, `/terms`, `/contact`) supporting direct links, browser history, and back/forward navigation.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally in development mode

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Production Build & Quality Check

```bash
npm run build
npm run lint
```

---

## Project Structure

```
src/
  assets/              Naira note graphics (₦20, ₦50, ₦100, ₦200, ₦1,000) & mockups
  components/          Modular UI components with co-located CSS Modules
    Hero.tsx           Hero section with fluid typography and waitlist form
    SprayCardFan.tsx   Continuous 3D Naira spray engine & per-note tap spray
    HowItWorks.tsx     3-step celebratory workflow with badges
    ModesSplit.tsx     Spray Floor vs. Gift Vault interactive showcase
    AppShowcase.tsx    Product mobile application preview
    LeaderboardTeaser.tsx Live Owambe Arena screen & live spray feed
    WhatWereBuilding.tsx Platform pillars and value proposition
    PartnersSection.tsx  Event Centers & Retail Stores partnership section
    PartnerOnboardModal.tsx Interactive modal for venue/retail onboarding
    ClosingCta.tsx     Final waitlist conversion panel
    Nav.tsx            Floating pill navigation bar
    Footer.tsx         Dark footer with legal links, sitemap, and copyright
    WaitlistForm.tsx   Waitlist registration input
  pages/
    PrivacyPolicy.tsx  Comprehensive NDPA/NDPR-compliant privacy policy
    TermsOfService.tsx Comprehensive CBN-aligned terms of service
    ContactUs.tsx      Contact page with WhatsApp direct chat (07035148792)
    LegalPage.module.css Shared styling for legal pages with sticky TOC
  styles/
    tokens.css         Color, typography, radius, and spacing tokens
    global.css         Resets, responsive wrap constraints, and animations
  router.ts            Universal client-side route manager (/privacy, /terms, /contact)
  types.ts             Shared TypeScript types
  App.tsx              Route renderer and page manager
  main.tsx             Application entrypoint
```

---

## Technology Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Bundler**: Vite 5
- **Styling**: Pure CSS Modules with CSS custom properties (`tokens.css`)
- **Fonts**: Fraunces (Display serif) & Manrope (Body sans-serif)

---

## License

© 2026 SprayBee Technologies Limited. All rights reserved. Made for the culture.
