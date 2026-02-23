You are an expert full‑stack engineer using Next.js, TypeScript, Tailwind CSS, and shadcn/ui to build a production‑ready web app.

Build a youth basketball athlete showcase site with these requirements:

    Purpose and audience

    Purpose: Central hub to showcase a 13–14 year old 14U basketball guard with photos, videos, and a written journey, and make it repeatable for teammates.

    Audience: Coaches, trainers, and family. Safety and privacy for minors is a hard requirement (no home address, no school name, no exact locations).

    Tech stack and project setup

    Use: Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, and a modern file layout.

    Generate all config and boilerplate needed to run with npm install and npm run dev.

    Include ESLint and Prettier configured for TypeScript and React.

    Use a simple “filesystem data” approach for now: JSON files in a data/players folder that define each athlete.

    Pages and routes
    Use the App Router /app structure with these routes:

    / (Home)

        Hero section with: action photo, short intro, and one embedded highlight reel video.

        Snapshot card showing: name (first name + initial), position (Guard), jersey number, club team, and class year (e.g., “Class of 2030”).

        Quick links to “Journey,” “Film Room,” and “Contact”.

    /journey

        A vertical timeline component of seasons and milestones.

        Each item should show season (e.g., “2025–26 14U”), team/club, role (e.g., “Starting Guard, primary ball‑handler”), and 1–2 bullet highlights.

        Data should be read from a data/journey.json file so it can be edited without touching React code.

    /film-room

        Sections for: “Handles & Creation”, “Perimeter Shooting”, “On‑Ball Defense”.

        Each section displays a responsive grid of video cards, each card embedding a YouTube URL from configuration and showing a title and short description.

        All film metadata comes from a JSON file, e.g. data/film.json.

    /contact

        Simple, secure contact form for “Coaches and trainers only”.

        Fields: name, organization, email, message.

        On the UI side, just implement client‑side validation and a submit handler stub that logs the payload to the console; I will wire up email delivery later.

        Prominent note: “All inquiries go to a parent/guardian or coach; the athlete does not manage this inbox.”

    Dynamic player pages: /players/[slug]

        Read from JSON files in data/players.

        For each player, render:

            Basic snapshot (photo, name, position, club team, class year, jersey).

            Strengths tags (e.g., “Ball handling”, “Perimeter defense”, “Playmaking”).

            One main highlight reel video.

            Optional film clips grid similar to /film-room.

        If a player slug is missing, render a friendly 404 page.

    Data model (JSON shape)
    Design a reusable TypeScript interface and JSON structure like this:

    data/players/example-guard.json

        slug

        displayName (first name + initial only)

        position

        classYear (number)

        clubTeam (no school name)

        number (jersey)

        bio (short paragraph)

        strengths (string array)

        highlightReelUrl (YouTube)

        filmClips (array with label, url, category)

    data/film.json

        Grouped by category: Creation, Shooting, Defense.

        Each item: id, title, description, youtubeUrl, category.

    data/journey.json

        Array of seasons with: seasonLabel, team, role, highlights (string array).

Create example data for one 14U guard so I can see the full flow working.

    UI and components

    Use Tailwind and shadcn/ui to create a clean, mobile‑first, card‑based design.

    Define reusable components:

        PlayerCard – used on the home page and player pages.

        Timeline – used on /journey.

        FilmGrid and FilmCard – used on /film-room and dynamic player pages.

    Include a main layout with a top navigation (logo/title + links: Home, Journey, Film Room, Contact) and a simple footer.

    Safety and privacy constraints (bake into content and UI)

    Do NOT include: home address, exact school name, or detailed location markers.

    Assume images and videos have had geolocation stripped externally, so no extra work is needed in code beyond text/content.

    Add a short “Online Safety” note in the footer:

        Example: “This site is managed by parents/guardians. Player information is limited to protect youth privacy.”

    Developer ergonomics

    Use TypeScript types for all data models and props; fail fast if JSON is missing required fields.

    Provide helper functions under something like lib/data.ts to load players, film, and journey data.

    Add basic error states and loading skeletons for dynamic routes.

Deliverables:

    A complete Next.js app folder structure with all pages, components, JSON examples, and styling.

    Clear instructions in the README.md for:

        How to run the dev server.

        How to add a new player by creating a JSON file in data/players.

        How to update film clips and journey items.
