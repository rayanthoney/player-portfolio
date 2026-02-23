import { FilmCategory } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FilmGridProps {
  category: FilmCategory;
}

export function FilmGrid({ category }: FilmGridProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{category.title}</h2>
        <p className="text-muted-foreground">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.clips.map((clip) => (
          <Card key={clip.id} className="overflow-hidden">
            <div className="aspect-video w-full">
              {/* Responsive Iframe for YouTube */}
              <iframe
                className="w-full h-full"
                src={clip.youtubeUrl.replace("watch?v=", "embed/")}
                title={clip.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-base line-clamp-1">{clip.title}</CardTitle>
              <CardDescription className="line-clamp-2 text-xs">{clip.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
