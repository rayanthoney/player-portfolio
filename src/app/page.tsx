import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/player/PlayerCard";
import { getPlayerBySlug } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, PlayCircle, Trophy, Video, TrendingUp } from "lucide-react";
import { ScoutingAnalysis } from "@/components/player/ScoutingAnalysis";

export default async function Home() {
  // Load the example player for the home page snapshot
  const player = await getPlayerBySlug("example-player");

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Hero Section: Editorial & Technical */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden border-b border-white/5">
        {/* Background Large Typography */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[20vw] font-display font-black leading-none uppercase tracking-tighter">
            Elite Prospect
          </h1>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20 pb-32 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest animate-in fade-in slide-in-from-left-4 duration-700">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Scouting Intelligence Active
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] uppercase tracking-tighter">
                  Next Gen <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                    Playmaker
                  </span>
                </h1>
                <p className="max-w-[540px] text-muted-foreground md:text-lg lg:text-xl font-medium leading-relaxed">
                  Deep intelligence on the journey, skills, and potential of a dedicated student-athlete.
                  Focused on leadership, strategic defense, and high-impact playmaking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="xl" className="font-bold uppercase tracking-tight h-14 px-8">
                  <Link href="/journey">
                    Access Dossier <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="font-bold uppercase tracking-tight h-14 px-8 border-white/10 hover:bg-white/5 bg-transparent backdrop-blur-sm">
                  <Link href="/film-room">
                    Analyze Film <PlayCircle className="ml-2 h-5 w-5 text-primary" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Dashboard Element */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                {player ? (
                  <img
                    src={(player.photos && player.photos[0]) || "/placeholder-athlete.jpg"}
                    alt={player.displayName}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                    <Trophy className="h-20 w-20 text-white/10" />
                  </div>
                )}

                {/* Visual HUD overlays */}
                <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-lg flex flex-col items-end">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Class</span>
                    <span className="text-xl font-display font-black text-primary">{player?.classYear || "2030"}</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="h-1 w-8 bg-primary rounded-full" />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Verified Metrics</span>
                    </div>
                    <h3 className="text-lg font-display font-black uppercase tracking-tight">Active Recruitment</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Stats Bar */}
        <div className="absolute bottom-0 w-full bg-secondary/30 backdrop-blur-2xl border-t border-white/5 py-4 z-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-between items-center gap-6 md:gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Position</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">{player?.position || "Forward"}</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">HT / WT</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">5'2" / 105 LBS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Status</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">Seventh Grade</span>
                </div>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Region</span>
                <span className="text-sm md:text-base font-display font-black uppercase tracking-wider">Southwest</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mb-1">Intel Score</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`h-1.5 w-4 rounded-full ${i <= 4 ? "bg-primary" : "bg-white/10"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Scouting Breakdown Section */}
      < section className="w-full py-24 bg-background relative overflow-hidden text-foreground" >
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-8">
            <div className="space-y-4">
              <div className="text-primary text-sm font-black uppercase tracking-widest animate-pulse">01 / Technical Intelligence</div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">Scouting Report</h2>
            </div>
            <p className="max-w-[400px] text-muted-foreground text-sm font-medium leading-relaxed bg-white/5 p-4 rounded-lg border border-white/10">
              Validated on-court impact data focusing on technical execution, basketball IQ, and performance trends.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {player && <ScoutingAnalysis strengths={player.strengths} />}
            </div>
            <div className="lg:col-span-4 space-y-4">
              <div className="sticky top-24">
                {player ? <PlayerCard player={player} /> : <p>Player data not found.</p>}

                <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm">
                  <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <TrendingUp className="h-3 w-3" /> Projected Trajectory
                  </h4>
                  <p className="text-sm font-medium text-foreground leading-relaxed mb-6 italic">
                    "Consistent high-IQ playmaking paired with elite defensive lateral quickness. Projecting as a top-tier facilitator in high-tempo systems."
                  </p>
                  <div className="h-px w-full bg-white/10 mb-4" />
                  <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase">
                    <span>Recruitment Grade</span>
                    <span className="text-primary font-black">A+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Recruitment CTA Section */}
      < section className="w-full py-24 bg-[#0a0a0a] border-t border-white/5 relative group text-foreground" >
        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-16 border border-white/10 bg-linear-to-br from-secondary/40 to-black backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ArrowRight className="h-64 w-64 -rotate-45" />
            </div>
            <div className="relative z-10 text-center space-y-8">
              <div className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-primary">
                Secure Channel Open
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
                Initiate <br /> Recruitment
              </h2>
              <p className="max-w-[600px] mx-auto text-muted-foreground md:text-lg font-medium">
                Access secure channels to request full transcripts, game schedules, or direct coach communication.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="xl" className="font-bold uppercase tracking-tight h-16 px-12 text-lg">
                  <Link href="/contact">
                    Contact Scouting <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <div className="flex items-center justify-center p-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                    End of Report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  );
}
