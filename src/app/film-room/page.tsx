import { FilmGrid } from "@/components/film/FilmGrid";
import { getFilmCategories } from "@/lib/data";

export default async function FilmRoomPage() {
  const filmCategories = await getFilmCategories();

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Film Room</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Game tape, training sessions, and highlight clips categorized by skill.
        </p>
      </div>

      <div className="space-y-16">
        {filmCategories.length > 0 ? (
          filmCategories.map((category) => <FilmGrid key={category.id} category={category} />)
        ) : (
          <p className="text-center text-muted-foreground">Film content coming soon.</p>
        )}
      </div>
    </div>
  );
}
