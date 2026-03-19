export interface FilmClip {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  category: string;
}

export interface JourneySeason {
  id: string;
  seasonLabel: string;
  team: string;
  role: string;
  highlights: string[];
}

export interface Player {
  slug: string;
  displayName: string;
  position: string;
  classYear: number;
  clubTeam: string;
  number: string;
  photos: string[];
  bio: string;
  strengths: string[];
  height: string;
  weight: string;
  highlightReelUrl: string;
  filmClips: FilmClip[];
  journey: JourneySeason[];
}

export interface FilmCategory {
  id: string;
  title: string;
  description: string;
  clips: FilmClip[];
}
