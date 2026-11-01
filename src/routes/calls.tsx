import { createFileRoute } from "@tanstack/react-router";
import { Game } from "@/game/ui";
import { CALLS } from "@/game/data";

export const Route = createFileRoute("/calls")({
  validateSearch: (search: Record<string, unknown>) => ({
    day: CALLS[Number(search.day)] ? Number(search.day) : 1,
    employee: typeof search.employee === "string" ? search.employee : "0451",
  }),
  head: () => ({ meta: [
    { title: "Call Center — Home Safety Hotline" },
    { name: "description", content: "Answer household pest calls at the Home Safety Hotline call center in 2000." },
    { property: "og:title", content: "Call Center — Home Safety Hotline" },
    { property: "og:description", content: "Identify pests and advise callers during your hotline shift." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CallerPage,
});

function CallerPage() {
  const { day, employee } = Route.useSearch();
  return <Game key={`${day}-${employee}`} callerPage initialDay={day} employee={employee} />;
}