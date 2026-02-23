import { notFound } from "next/navigation";
import { getPlayerBySlug, getAllPlayers } from "@/lib/data";
import { PlayerCard } from "@/components/player/PlayerCard";
import { FilmGrid } from "@/components/film/FilmGrid";
import { Badge } from "@/components/ui/badge";
import { FilmCategory } from "@/lib/types";

export async function generateStaticParams() {
  const players = await getAllPlayers();
  return players.map((player) => ({
    slug: player.slug,
  }));
}

interface PlayerPageProps {
  params: {
    slug: string;
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const player = await getPlayerBySlug(params.slug);

  if (!player) {
    notFound();
  }

  // Transform player clips into a generic category for the FilmGrid
  const playerFilmCategory: FilmCategory | null =
    player.filmClips && player.filmClips.length > 0
      ? {
          id: "player-highlights",
          title: "Player Highlights",
          description: `Curated clips for ${player.displayName}`,
          clips: player.filmClips,
        }
      : null;

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
        {/* Left Column: Player Card/Snapshot */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <PlayerCard player={player} />

          <div className="w-full space-y-4 pt-6">
            <h3 className="text-xl font-bold">Bio</h3>
            <p className="text-muted-foreground">{player.bio}</p>
          </div>

          <div className="w-full space-y-4">
            <h3 className="text-xl font-bold">Key Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {player.strengths.map((str) => (
                <Badge key={str} variant="secondary" className="text-sm px-3 py-1">
                  {str}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Highlight Reel & Film */}
        <div className="lg:col-span-2 space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Main Highlight Reel</h2>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
              <iframe
                className="w-full h-full"
                src={player.highlightReelUrl.replace("watch?v=", "embed/")}
                title={`${player.displayName} Highlights`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {playerFilmCategory && (
            <div className="space-y-4">
              <FilmGrid category={playerFilmCategory} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
