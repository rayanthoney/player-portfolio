import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background py-8">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-primary font-display font-black text-[10px]">M</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Athlete Showcase
          </p>
        </div>

        <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">HQ</Link>
          <Link href="/journey" className="hover:text-primary transition-colors">Dossier</Link>
          <Link href="/film-room" className="hover:text-primary transition-colors">Intel</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Protocol</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
            Built by Meroitic Media. Youth privacy protected.
          </p>
          <p className="text-[10px] text-white/10 font-bold uppercase tracking-widest">
            Top Prospects Database
          </p>
        </div>
      </div>
    </footer>
  );
}
