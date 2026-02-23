import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-bold">Player or Page Not Found</h2>
      <p className="text-muted-foreground max-w-[500px]">
        We couldn't find the page you were looking for. It might have been moved, removed, or the
        player ID is incorrect.
      </p>
      <Button asChild size="lg">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
