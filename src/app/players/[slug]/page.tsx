import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPlayerBySlug, getAllPlayers } from "@/lib/data";
import { PlayerCard } from "@/components/player/PlayerCard";
import { FilmGrid } from "@/components/film/FilmGrid";
import { Badge } from "@/components/ui/badge";
import { FilmCategory, Player } from "@/lib/types";
import { ScoutingAnalysis } from "@/components/player/ScoutingAnalysis";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShieldCheck, Target, TrendingUp, UserRound } from "lucide-react";

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
      {/* Editorial Header */}
      <section className="relative w-full py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none text-[20vw] font-display font-black leading-none uppercase tracking-tighter">
          {player.number}
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20 pb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                <ShieldCheck className="h-3 w-3" /> Individual Intel Report
              </div>
              <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter leading-[0.8] mb-4">
                {player.displayName.split(" ")[0]} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">
                  {player.displayName.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 pt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" /> {player.position}
                </span>
                <span>•</span>
                <span>Class of {player.classYear}</span>
                <span>•</span>
                <span>#{player.number}</span>
                <span>•</span>
                <span>{player.clubTeam}</span>
              </div>

              <div className="pt-6">
                <Button asChild size="lg" className="font-black uppercase tracking-[0.2em] text-[10px] h-12 px-8 rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-black transition-all group">
                  <Link href="#film-room">
                    Analyze Film <Target className="ml-2 h-3.5 w-3.5 group-hover:animate-pulse" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block pb-4">
              <div className="flex flex-col items-end gap-2 p-6 rounded-2xl border border-white/5 bg-secondary/20 backdrop-blur-md">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Recruitment Status</span>
                <span className="text-2xl font-display font-black uppercase tracking-tighter">Active Prospect</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stats Bar - Synced with Dashboard */}
        <div className="absolute bottom-0 w-full bg-secondary/30 backdrop-blur-2xl border-t border-white/5 py-4 z-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Position</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">{player.position}</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">HT / WT</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">
                  {player.height} / {player.weight}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Status</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">Verified</span>
                </div>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Dossier ID</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">#{player.number}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Intel Grade</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-1.5 w-4 rounded-full ${i <= 4 ? "bg-primary" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sidebar Data */}
            <div className="lg:col-span-4 space-y-12">
              <div className="sticky top-24 space-y-12">
                <PlayerCard player={player} />

                <div className="space-y-6">
                  <h3 className="text-xs font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2">
                    <UserRound className="h-4 w-4" /> Personal Profile
                  </h3>
                  <div className="text-muted-foreground text-sm font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6 py-2 whitespace-pre-wrap">
                    {player.bio}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" /> Growth Projection
                  </h4>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed">
                    Continuous monitoring indicates a significant uptick in on-ball defensive efficiency
                    and perimeter creation consistency.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Insight Column */}
            <div className="lg:col-span-8 space-y-24">
              {/* Strengths Analysis */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight">Technical strengths</h2>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <ScoutingAnalysis strengths={player.strengths} />
              </div>

              {/* Film Room Section */}
              <div id="film-room" className="space-y-24 scroll-mt-32">
                {/* Main Reel */}
                {player.highlightReelUrl && (
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
                )}

                {/* Film Clips */}
                {player.filmClips && player.filmClips.length > 0 && playerFilmCategory && (
                  <div className="space-y-10">
                    <FilmGrid category={playerFilmCategory} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
