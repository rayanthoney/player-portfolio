import { Timeline } from "@/components/journey/Timeline";
import { getJourney } from "@/lib/data";
import { ListChecks, Clock, ShieldCheck } from "lucide-react";

export default async function JourneyPage() {
  const journeyItems = await getJourney();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative w-full py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[25vw] font-display font-black leading-none uppercase tracking-tighter">
            Archive
          </h1>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Clock className="h-3 w-3" /> Historical Data Tracking
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40">Dossier</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
              Complete chronological tracking of milestones, team transitions, and performance archives.
              Verified data on developmental progression through elite basketball levels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Sidebar Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="p-6 rounded-2xl bg-secondary/20 border border-white/5 backdrop-blur-sm">
                  <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
                    <ShieldCheck className="h-3 w-3" /> Data Integrity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider pb-4 border-b border-white/5">
                      <span className="text-muted-foreground">Encryption Status</span>
                      <span className="text-primary">E2EE Active</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider pb-4 border-b border-white/5">
                      <span className="text-muted-foreground">Source Verification</span>
                      <span className="text-primary">Authenticated</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-muted-foreground">Last Entry Update</span>
                      <span className="text-white">FEB 2026</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-white/20 select-none">
                  <div className="h-px flex-1 bg-white/5" />
                  <ListChecks className="h-4 w-4" />
                  <div className="h-px flex-1 bg-white/5" />
                </div>
              </div>
            </div>

            {/* Timeline Column */}
            <div className="lg:col-span-8">
              {journeyItems.length > 0 ? (
                <Timeline items={journeyItems} />
              ) : (
                <div className="p-12 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                  <Clock className="h-10 w-10 text-white/5 mb-4" />
                  <p className="text-muted-foreground font-display font-medium uppercase tracking-widest text-xs">Awaiting Records Deployment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
