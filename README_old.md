# Youth Athlete Showcase

A privacy-focused, professional showcase platform for youth basketball athletes. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Managing Data

The site uses a simple filesystem-based data approach. All data is located in `src/data/`.

### Adding a New Player
1. Create a new JSON file in `src/data/players/` (e.g., `jordan-doe.json`).
2. Use the following structure (see `example-player.json` for reference):
   ```json
   {
     "slug": "jordan-doe",
     "displayName": "Jordan D",
     "position": "Forward",
     "classYear": 2030,
     ...
   }
   ```
3. The new player will be automatically available at `/players/jordan-doe`.

### Updating Journey
Edit `src/data/journey.json` to add new seasons or milestones. The timeline on the `/journey` page will update automatically.

### Updating Film Clips
Edit `src/data/film.json` to manage categories and clips for the main Film Room page. Player-specific highlights are managed within the player's JSON file.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Language**: TypeScript

## Project Structure
- `src/app`: Pages and routes.
- `src/components`: Reusable UI components.
- `src/data`: JSON data files.
- `src/lib`: Data fetching and type definitions.
