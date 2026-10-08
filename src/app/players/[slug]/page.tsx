import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPlayerBySlug, getAllPlayers } from "@/lib/data";
import { PlayerCard } from "@/components/player/PlayerCard";
import { FilmGrid } from "@/components/film/FilmGrid";
import { FilmCategory, Player } from "@/lib/types";
import { ScoutingAnalysis } from "@/components/player/ScoutingAnalysis";
import { PlayerHero } from "@/components/player/PlayerHero";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Target, TrendingUp, UserRound } from "lucide-react";

export async function generateStaticParams() {
  const players = await getAllPlayers();
  return players.map((player) => ({
    slug: player.slug,
  }));
}

interface PlayerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PlayerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const player = await getPlayerBySlug(slug);

  if (!player) {
    return {
      title: "Player Not Found",
    };
  }

  const title = `${player.displayName} — Intel Dossier`;
  const description = `${player.displayName} • ${player.position} • Class of ${player.classYear} • ${player.clubTeam} — Elite Prospect scouting profile.`;
  const image = player.photos && player.photos.length > 0 ? player.photos[0] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { slug } = await params;
  const player: Player | undefined = await getPlayerBySlug(slug);

  if (!player) {
    notFound();
  }

  // Transform player clips into a generic category for the FilmGrid
  const playerFilmCategory: FilmCategory | null =
    player.filmClips && player.filmClips.length > 0
      ? {
        id: "player-highlights",
        title: "Technical Clips",
        description: `Specific skill execution captured for ${player.displayName}`,
        clips: player.filmClips,
      }
      : null;

  // Safe derive embedUrl for the main highlight reel
  const highlightUrl = player.highlightReelUrl;
  const embedUrl = highlightUrl && highlightUrl.includes("watch?v=")
    ? highlightUrl.replace("watch?v=", "embed/")
    : highlightUrl;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <PlayerHero player={player} />

      {/* Main Analysis Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar Data */}
            <div className="lg:col-span-4 space-y-12">
              <div className="sticky top-24 space-y-12">
                <SectionReveal direction="left">
                  <PlayerCard player={player} />
                </SectionReveal>

                <SectionReveal delay={0.2} direction="left">
                  <div className="space-y-6">
                    <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                      <UserRound className="h-4 w-4" /> Personal Profile
                    </h3>
                    <div className="text-muted-foreground text-sm font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6 py-2 whitespace-pre-wrap">
                      {player.bio}
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.3} direction="left">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <TrendingUp className="h-3 w-3" /> Growth Projection
                    </h4>
                    <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                      Continuous monitoring indicates a significant uptick in on-ball defensive efficiency
                      and perimeter creation consistency.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>

            {/* Core Insight Column */}
            <div className="lg:col-span-8 space-y-24">
              {/* Strengths Analysis */}
              <SectionReveal>
                <div className="space-y-10">
                  <div className="flex items-center gap-4">
                    <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">Technical strengths</h2>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <ScoutingAnalysis strengths={player.strengths} />
                </div>
              </SectionReveal>

              {/* Film Room Section */}
              <div id="film-room" className="space-y-24 scroll-mt-32">
                {/* Main Reel */}
                {player.highlightReelUrl && (
                  <SectionReveal>
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">Main Highlight Reel</h2>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <div className="group relative w-full aspect-video rounded-3xl overflow-hidden border border-white/5 bg-black shadow-2xl transition-all duration-700 hover:border-primary/20">
                        <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-background/40 to-transparent" />
                        <iframe
                          className="w-full h-full"
                          src={embedUrl}
                          title={`${player.displayName} Highlights`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        {/* Technical Overlay */}
                        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 px-4 py-2 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-primary">
                          <Target className="h-3 w-3 animate-pulse" /> Live Analysis Layer
                        </div>
                      </div>
                    </div>
                  </SectionReveal>
                )}

                {/* Film Clips */}
                {player.filmClips && player.filmClips.length > 0 && playerFilmCategory && (
                  <SectionReveal>
                    <div className="space-y-10">
                      <FilmGrid category={playerFilmCategory} />
                    </div>
                  </SectionReveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
