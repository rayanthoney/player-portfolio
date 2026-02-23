import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">Mireya</span> Portfolio
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/journey" className="hover:text-primary transition-colors">
            Journey
          </Link>
          <Link href="/film-room" className="hover:text-primary transition-colors">
            Film Room
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" size="sm">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
