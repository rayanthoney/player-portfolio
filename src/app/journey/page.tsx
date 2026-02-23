import { Timeline } from "@/components/journey/Timeline";
import { getJourney } from "@/lib/data";

export default async function JourneyPage() {
  const journeyItems = await getJourney();

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Basketball Journey
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          A timeline of development, teams, and key milestones along the path.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {journeyItems.length > 0 ? (
          <Timeline items={journeyItems} />
        ) : (
          <p className="text-center text-muted-foreground">Journey data coming soon.</p>
        )}
      </div>
    </div>
  );
}
