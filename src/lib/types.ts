export interface FilmClip {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  category: "Handles & Creation" | "Perimeter Shooting" | "On-Ball Defense" | "Other";
}

export interface Player {
  slug: string;
  displayName: string; // First name + initial
  position: string;
  classYear: number;
  clubTeam: string; // No school name
  number: string;
  bio: string;
  strengths: string[];
  highlightReelUrl: string; // YouTube URL
  photos?: string[]; // Array of image paths/URLs
  filmClips?: FilmClip[];
  contactEmail?: string; // Optional override
}

export interface JourneyItem {
  id: string;
  seasonLabel: string; // e.g. "2025-26 14U"
  team: string;
  role: string;
  highlights: string[];
}

export interface FilmCategory {
  id: string;
  title: string;
  description: string;
  clips: FilmClip[];
}
