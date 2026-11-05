import { describe, expect, it } from "vitest";
import { CALLS, CALL_VARIANTS, ENTRIES, getCatalog } from "./data";
import { getMail } from "./mail";
import { parseHistory, trend } from "./performance";
import { RADIO_NEWS, RADIO_UNLOCK_DAY } from "./radio";

describe("Day 5", () => {
  it("adds ten entities and fills the 30-file catalog", () => {
    expect(ENTRIES.filter((e) => e.day === 5)).toHaveLength(10);
    expect(getCatalog(5).filter((s) => s.entry)).toHaveLength(30);
  });
  it("schedules ten calls with three variants each", () => {
    expect(CALLS[5]).toHaveLength(10);
    for (const c of CALLS[5] ?? []) expect(CALL_VARIANTS[c.answer]).toHaveLength(3);
  });
  it("has Casey mail on Day 5", () => {
    expect(getMail(5).some((m) => m.id === "casey-5")).toBe(true);
    expect(getMail(4).some((m) => m.id === "casey-5")).toBe(false);
  });
  it("radio only appears after Day 4 and mostly covers fae", () => {
    expect(RADIO_UNLOCK_DAY).toBe(5);
    expect(RADIO_NEWS.length).toBeGreaterThan(3);
  });
  it("reports improvement or decline between shifts", () => {
    expect(trend([{ day: 1, score: 2, total: 5 }, { day: 2, score: 6, total: 6 }])).toBe(60);
    expect(trend([{ day: 1, score: 5, total: 5 }, { day: 1, score: 4, total: 5 }])).toBe(-20);
    expect(parseHistory("bad")).toEqual([]);
  });
});
