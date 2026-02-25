import { JourneySeason } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Star } from "lucide-react";

interface TimelineProps {
  items: JourneySeason[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-12 before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:-translate-x-px before:h-full before:w-px before:bg-linear-to-b before:from-primary/5 before:via-primary/20 before:to-transparent">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
          {/* Timeline Marker */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-black shadow-[0_0_15px_rgba(0,128,128,0.1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(0,128,128,0.3)]">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse group-hover:scale-125" />
          </div>

          {/* Content Card */}
          <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0">
            <div className="relative p-6 rounded-2xl bg-secondary/10 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-primary/20 hover:bg-secondary/20 group/card">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 p-2 opacity-5 group-hover/card:opacity-10 transition-opacity">
                <Trophy size={40} />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {item.seasonLabel}
                  </span>
                  <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-[10px] uppercase tracking-widest font-bold font-sans">
                    {item.role}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-display font-black uppercase tracking-tight text-white mb-1">
                    {item.team}
                  </h3>
                  <div className="h-1 w-8 bg-primary/40 rounded-full mb-4" />
                </div>

                <ul className="space-y-3">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm font-medium text-muted-foreground leading-relaxed">
                      <Star className="h-4 w-4 shrink-0 text-primary/40 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Timestamp Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-bold text-white/20 uppercase tracking-widest">
                <span>Verified by Scouts</span>
                <span>ENTRY_{index.toString().padStart(3, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
