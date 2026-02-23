import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Player } from "@/lib/types";

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-[4/5] w-full bg-muted">
        {/* Placeholder for player image if none provided */}
        {player.photos && player.photos.length > 0 ? (
          <img
            src={player.photos[0]}
            alt={player.displayName}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
            <span className="text-4xl font-bold">{player.number}</span>
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <Badge variant="default" className="text-lg">
            #{player.number}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-2xl">{player.displayName}</CardTitle>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>{player.position}</span>
          <span>•</span>
          <span>Class of {player.classYear}</span>
        </div>
        <p className="text-sm font-medium">{player.clubTeam}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {player.strengths.slice(0, 3).map((strength) => (
            <Badge key={strength} variant="secondary">
              {strength}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/players/${player.slug}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
