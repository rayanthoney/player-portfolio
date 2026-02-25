import { FilmGrid } from "@/components/film/FilmGrid";
import { getPlayerBySlug } from "@/lib/data";
import { Video, Search, ShieldAlert } from "lucide-react";
import { FilmCategory } from "@/lib/types";

export default async function FilmRoomPage() {
  const player = await getPlayerBySlug("example-player");

  // Group clips into categories for the UI
  const filmCategories: FilmCategory[] = [];

  if (player?.filmClips) {
    const categories = Array.from(new Set(player.filmClips.map(clip => clip.category)));

    categories.forEach(categoryName => {
      filmCategories.push({
        id: `cat-${categoryName.toLowerCase().replace(/\s+/g, '-')}`,
        title: categoryName,
        description: `Analysis of ${categoryName.toLowerCase()} performance and technical execution.`,
        clips: player.filmClips.filter(clip => clip.category === categoryName)
      });
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative w-full py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[25vw] font-display font-black leading-none uppercase tracking-tighter">
            Vision
          </h1>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Video className="h-3 w-3" /> Live Intelligence Feed
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.85] mb-6">
              Film <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/40">Room</span>
            </h1>
            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
              Deconstructed game footage, technical skill analysis, and performance breakdowns.
              Visual evidence of tactical execution and high-IQ decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-24 bg-background relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-white/5 pb-8">
            <div className="space-y-2">
              <div className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Search className="h-3 w-3" /> Filter Analysis
              </div>
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                Categorized by Technical Discipline
              </p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <ShieldAlert className="h-3 w-3" /> Restricted Content Access
            </div>
          </div>

          <div className="space-y-24">
            {filmCategories.length > 0 ? (
              filmCategories.map((category) => <FilmGrid key={category.id} category={category} />)
            ) : (
              <div className="p-20 rounded-3xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                <Video className="h-12 w-12 text-white/5 mb-4" />
                <p className="text-muted-foreground font-display font-medium uppercase tracking-widest text-xs">Video Archive Synchronizing...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
