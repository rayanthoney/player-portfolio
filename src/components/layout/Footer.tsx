import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Athlete Showcase. Built by Meroitic Media.All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-center md:text-right">
          <p className="text-xs text-muted-foreground">
            Online Safety: This site is managed by parents/guardians.{" "}
            <br className="hidden md:inline" />
            Player information is limited to protect youth privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
