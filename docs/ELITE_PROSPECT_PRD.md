# PRD: Elite Prospect — Week 1 MVP

## 1. Overview & Goals
**Product:** Elite Prospect — a premium, link‑friendly digital scouting dossier for youth basketball athletes.

### Week‑1 Goal
A production‑ready application that:
- Hosts a single featured athlete profile at `/players/[slug]`.
- Has a marketing homepage explaining the value proposition.
- Provides a "Request a Profile" page with a simple form and a Stripe Payment Link for manual fulfillment.
- Uses file‑based data (JSON) but is structured to support scaling to multiple players.

### Non‑Goals (Week 1)
- No self‑serve onboarding wizard.
- No club dashboards or multi‑tenant admin.
- No automated Stripe webhooks or profile creation.

---

## 2. Users & Use Cases
### Primary Users
- **Athletes & Parents:** (12U–15U) Looking to professionalize their recruiting presence.
- **Coaches:** Clicking a link from text/email/social to quickly evaluate an athlete's film, strengths, and metrics in under 30 seconds.

---

## 3. MVP Scope (Week 1)
### Featured Athlete Profile (`/players/[slug]`)
- **Editorial Hero Header:** Number, name, class year, position, and technical bar.
- **Personal Profile:** Bio and journey/season history.
- **Technical Analysis:** Strengths using the `ScoutingAnalysis` component.
- **Film Room:** Main highlight reel (YouTube) + categorized technical clips (`FilmGrid`).

### Marketing Home Page (`/`)
- Short, high-impact sections explaining Elite Prospect.
- Featured athlete snapshot as a live example.
- Primary CTA: "Request Your Profile" -> `/request`.

### Request a Profile Page (`/request`)
- Product details (what’s included: sections, film, story).
- **Payment:** Stripe Payment Link button.
- **Data Collection:** Contact form (Parent/Athlete names, Age group, Position, Club team, Notes/Film links).

### Sharing & SEO
- Per-player `generateMetadata` for `/players/[slug]`.
- Responsive design optimized for mobile (coach's primary viewing device).

---

## 4. Architecture & Implementation
- **Framework:** Next.js App Router (TypeScript).
- **Styling:** Tailwind CSS (v4) with a custom "Scouting Dashboard" dark theme.
- **Data Layer:** File-based JSON stored in `src/data/`.
- **Email:** API route (`/api/request-profile`) for form submissions.

---

## 5. Implementation Phases
### Phase 1: Data & Types Refactoring
- Standardize `Player`, `FilmClip`, and `JourneySeason` types.
- Centralize data fetching in `src/lib/data.ts`.

### Phase 2: Dynamic Profile Engine
- Wire `/players/[slug]` to the JSON data.
- Implement specialized metadata (OG images) for social sharing.

### Phase 3: Marketing & Conversion
- Develop high-conversion homepage.
- Build the `/request` page with Stripe integration.

### Phase 4: Polish & QA
- Mobile layout stabilization.
- Success states for form submissions.
