<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Game content (catalog entries, calls) lives in src/game/data.ts; shared game UI lives in src/game/ui.tsx and routes render it — keep content data-driven so new days are just data.
- Desktop and caller screens use separate routes with shared game UI; clock-in navigates to /calls so calls are a genuine page.
- Use crisp pixel-art SVG icons from src/game/retro-icon.tsx rather than platform emoji to keep the computer's icons consistent.
- Symptom replies are data-driven in src/game/data.ts; question state resets between calls so caller details cannot leak into the next call.
- Retro sounds use browser-only Web Audio created by an explicit sound-toggle click, default off; close the audio context on unmount.
- Shared loading durations and ASCII progression live in src/game/loading.ts so every waiting screen uses the same timing rules.
