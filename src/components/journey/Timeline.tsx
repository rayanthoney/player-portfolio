import { JourneyItem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineProps {
  items: JourneyItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <div className="w-3 h-3 bg-primary rounded-full transition-all group-hover:scale-125" />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{item.seasonLabel}</CardTitle>
                  <Badge variant="outline">{item.role}</Badge>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{item.team}</div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
