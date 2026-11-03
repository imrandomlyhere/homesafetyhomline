import { describe, expect, it } from "vitest";
import { CALLS, CALL_VARIANTS, ENTRIES, getCatalog } from "./data";
import { getMail, getNewEntryCount } from "./mail";

describe("Day 4 clearance", () => {
  it("unlocks six new entries and keeps a 30-file catalog", () => {
    expect(ENTRIES.filter((e) => e.day === 4).map((e) => e.id)).toEqual(["atticgnome", "fluffk", "orb", "springin", "redacted", "fae"]);
    expect(getNewEntryCount(4)).toBe(6);
    expect(getCatalog(4)).toHaveLength(30);
    expect(getCatalog(4).filter((s) => s.entry).length).toBe(20);
  });
  it("schedules six calls with three variants each", () => {
    expect(CALLS[4]).toHaveLength(6);
    for (const call of CALLS[4] ?? []) expect(CALL_VARIANTS[call.answer]).toHaveLength(3);
  });
  it("delivers Casey's mail and the no-subject message on Day 4 only", () => {
    expect(getMail(4).filter((m) => m.day === 4 && m.sender.startsWith("Casey"))).toHaveLength(1);
    expect(getMail(4).some((m) => m.body[0] === "human expirmentation + fae = ?")).toBe(true);
    expect(getMail(3).some((m) => m.body[0] === "human expirmentation + fae = ?")).toBe(false);
  });
});
