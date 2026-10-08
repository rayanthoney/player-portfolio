import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/player/PlayerCard";
import { getAllPlayers } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Video, Target, History, Star, ShieldCheck, Mail } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default async function Home() {
  // Load the first player as the "featured athlete"
  const allPlayers = await getAllPlayers();
  const featuredPlayer = allPlayers[0];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero featuredPlayer={featuredPlayer} />

      {/* "What coaches see" Section */}
      <SectionReveal>
        <section className="py-24 bg-background relative border-b border-white/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <div className="text-primary text-sm font-black uppercase tracking-widest">Efficiency Matters</div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                  Built for how coaches <br /> actually evaluate players
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6 p-8 rounded-2xl bg-secondary/10 border border-white/5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Video className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-tight italic">Clean film, not noise.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  One main reel plus labeled technical clips so coaches can jump straight to what they care about—whether it's perimeter defense or catch-and-shoot consistency.
                </p>
              </div>

              <div className="space-y-6 p-8 rounded-2xl bg-secondary/10 border border-white/5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Target className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-tight italic">Context behind the stats.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Position, role, team level, and summary of how your athlete impacts games. We provide the editorial perspective that raw stats miss.
                </p>
              </div>

              <div className="space-y-6 p-8 rounded-2xl bg-secondary/10 border border-white/5">
                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Star className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-display font-black uppercase tracking-tight italic">Clear story, fast read.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A one-page dossier that tells a coach who your athlete is and where they're headed in under 30 seconds. Elite evaluation in a premium digital format.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Example profile preview */}
      <SectionReveal>
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="text-primary text-sm font-black uppercase tracking-widest">The Scouting Link</div>
                <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
                  See a real <br /> Elite Prospect profile
                </h2>
                <p className="text-lg text-muted-foreground font-medium max-w-md">
                  This is what a live scouting dossier looks like when you send your link to a coach.
                  Optimized for mobile viewing, where evaluation happens.
                </p>
                {featuredPlayer && (
                  <Button asChild size="lg" variant="outline" className="font-bold border-white/10 hover:bg-white/5 uppercase tracking-widest px-8">
                    <Link href={`/players/${featuredPlayer.slug}`}>
                      View Example Profile
                    </Link>
                  </Button>
                )}
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50" />
                <div className="relative flex justify-center">
                  {featuredPlayer ? (
                    <div className="scale-105 md:scale-110">
                      <PlayerCard player={featuredPlayer} />
                    </div>
                  ) : (
                    <div className="w-full aspect-4/5 bg-secondary/20 rounded-3xl border border-white/5 flex items-center justify-center">
                      <p className="text-muted-foreground font-display uppercase tracking-widest">Preview Mode</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* "What's included" Section */}
      <SectionReveal>
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="text-primary text-sm font-black uppercase tracking-widest">Full Portfolio Specs</div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none">
                  What your athlete’s <br /> profile includes
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Custom scouting page at a shareable link with your athlete’s name, class year, team, and number.",
                  "Main highlight reel embedded directly on the page.",
                  "Technical clip gallery grouped by skills like handles, shooting, and defense.",
                  "Journey timeline with teams, roles, and key highlights for each season.",
                  "Written strengths summary focused on how your athlete actually plays."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-xl bg-secondary/5 border border-white/5 text-sm font-medium leading-relaxed transition-colors hover:border-primary/20">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 text-center">
                <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                  Note: Profiles can be updated as your athlete’s game and film improve.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* Final Call to Action */}
      <section className="py-24 bg-primary relative overflow-hidden text-black">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 p-24">
            <Target size={400} />
          </div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85]">
                Ready to give your athlete <br /> a serious scouting link?
              </h2>
              <p className="text-lg md:text-xl font-bold opacity-80 max-w-2xl mx-auto uppercase tracking-tight">
                Start with one profile. We’ll build it with you, using your existing film and information.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <Button asChild size="xl" variant="secondary" className="bg-black text-white hover:bg-black/90 font-bold uppercase tracking-tight h-20 px-16 text-xl shadow-2xl">
                <Link href="/request">
                  Request Your Athlete’s Profile <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>

              <Link href="mailto:scout@eliteprospect.hoops" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:underline">
                <Mail className="h-4 w-4" /> Questions before you start? Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
