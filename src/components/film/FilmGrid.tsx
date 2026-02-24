import { FilmCategory } from "@/lib/types";
import { Play, Info, SquareDashed } from "lucide-react";

interface FilmGridProps {
  category: FilmCategory;
}

export function FilmGrid({ category }: FilmGridProps) {
  return (
    <div className="space-y-10 group/grid">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            <SquareDashed className="h-3 w-3" /> Technical Module
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter text-white">
            {category.title}
          </h2>
        </div>
        <p className="max-w-[400px] text-muted-foreground text-xs font-medium leading-relaxed italic">
          "{category.description}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.clips.map((clip, index) => (
          <div
            key={clip.id}
            className="group/card relative flex flex-col rounded-2xl bg-secondary/10 border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-secondary/20 hover:shadow-[0_0_30px_rgba(0,128,128,0.1)]"
          >
            {/* Visual Header Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

            <div className="aspect-video w-full relative overflow-hidden bg-black">
              <div className="absolute inset-0 z-10 pointer-events-none border-b border-white/5" />
              <iframe
                className="w-full h-full grayscale-[0.5] group-hover/card:grayscale-0 transition-all duration-700"
                src={clip.youtubeUrl.replace("watch?v=", "embed/")}
                title={clip.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <h3 className="text-lg font-display font-black uppercase tracking-tight text-white/90 group-hover/card:text-primary transition-colors line-clamp-1">
                  {clip.title}
                </h3>
                <div className="p-1.5 rounded bg-primary/10 border border-primary/20 text-primary">
                  <Play className="h-3 w-3 fill-current" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Info className="h-4 w-4 shrink-0 text-white/10 mt-0.5" />
                <p className="text-muted-foreground text-xs font-medium leading-relaxed line-clamp-2">
                  {clip.description}
                </p>
              </div>

              {/* Technical Footer Metadata */}
              <div className="flex justify-between items-center pt-4 mt-2 border-t border-white/5 text-[9px] font-bold text-white/10 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-primary" /> Analysis Active
                </span>
                <span>SEC_{index.toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
