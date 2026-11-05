export type ShiftRecord = { day: number; score: number; total: number };

export function parseHistory(raw: string | null): ShiftRecord[] {
  try {
    const v = JSON.parse(raw ?? "[]");
    if (!Array.isArray(v)) return [];
    return v.filter((r) => r && typeof r.day === "number" && typeof r.score === "number" && typeof r.total === "number" && r.total > 0);
  } catch { return []; }
}

export const percent = (r: ShiftRecord) => Math.round((r.score / r.total) * 100);

/** Change in accuracy from the previous shift: positive = improved. */
export function trend(history: ShiftRecord[]): number | null {
  const last = history.at(-1), prev = history.at(-2);
  return last && prev ? percent(last) - percent(prev) : null;
}
