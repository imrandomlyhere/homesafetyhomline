import { createFileRoute } from "@tanstack/react-router";
import { Game } from "@/game/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Safety Hotline — Y2K Pest Operator Game" },
      { name: "description", content: "It's the year 2000. Clock in at Home Safety Hotline, take calls and identify pests." },
      { property: "og:title", content: "Home Safety Hotline" },
      { property: "og:description", content: "Clock in, answer calls and identify pests in the year 2000." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Game,
});

