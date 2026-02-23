import { Button } from "@/components/ui/button";
import { PlayerCard } from "@/components/player/PlayerCard";
import { getPlayerBySlug } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, PlayCircle, Trophy, Video } from "lucide-react";

export default async function Home() {
  // Load the example player for the home page snapshot
  const player = await getPlayerBySlug("example-player");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Next Gen <span className="text-primary">Playmaker</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Showcasing the journey, skills, and potential of a dedicated student-athlete.
                  Focused on leadership, defense, and creating opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/journey">
                    View Journey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/film-room">
                    Watch Film <PlayCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              {/* Embedded Highlight Reel */}
              {player && (
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
                  <iframe
                    className="w-full h-full"
                    src={player.highlightReelUrl.replace("watch?v=", "embed/")}
                    title="Highlight Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Player Profile
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet the Athlete</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A snapshot of the stats, role, and current standing.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            {player ? <PlayerCard player={player} /> : <p>Player data not found.</p>}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
              <Trophy className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">The Journey</h3>
              <p className="text-muted-foreground">
                Trace the development path through seasons and milestones.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/journey">Explore History</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
              <Video className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">Film Room</h3>
              <p className="text-muted-foreground">
                Break down game tape, skills training, and highlights.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/film-room">Watch Clips</Link>
              </Button>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
              <ArrowRight className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground">
                Contact coaches or guardians for recruitment inquiries.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/contact">Contact Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
