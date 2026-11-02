import { describe, expect, it } from "vitest";
import { CALLS, CALL_VARIANTS, ENTRIES, getCatalog, getShiftCalls, getSymptomQuestions } from "./data";
import { getMail, getNewEntryCount } from "./mail";

describe("Day 3 clearance", () => {
  it("unlocks exactly the five requested creatures on Day 3", () => {
    expect(ENTRIES.filter((entry) => entry.day === 3).map((entry) => entry.name)).toEqual(["Ballast Mold", "Bed Sickle", "Water Sprite", "True Sickle", "Soda Sprite"]);
    expect(getCatalog(2).filter((slot) => slot.entry).length).toBe(9);
    expect(getCatalog(3).filter((slot) => slot.entry).length).toBe(14);
    expect(getCatalog(1)).toHaveLength(30);
    expect(getCatalog(3)).toHaveLength(30);
    expect(getNewEntryCount(3)).toBe(5);
  });
  it("schedules five Day 3 calls with available answers", () => {
    expect(CALLS[3]).toHaveLength(5);
    expect(CALLS[3]?.map((call) => call.answer)).toEqual(["ballastmold", "bedsickle", "watersprite", "truesickle", "sodasprite"]);
  });
});
describe("three call variations per pest", () => {
  for (const entry of ENTRIES) it(`provides three distinct ${entry.name} callers with their own replies`, () => {
    const variants = CALL_VARIANTS[entry.id] ?? [];
    expect(variants).toHaveLength(3);
    expect(new Set(variants.map((call) => JSON.stringify(call.transcript))).size).toBe(3);
    expect(new Set(variants.map((call) => getSymptomQuestions(call)[1]?.reply)).size).toBe(3);
    for (const call of variants) {
      expect(call.answer).toBe(entry.id);
      expect(getSymptomQuestions(call).map((question) => question.id)).toEqual(["health", "location", "duration"]);
    }
  });
  it("selects each authored alternative without changing the shift length", () => {
    for (const day of [1, 2, 3]) for (const index of [0, 1, 2]) {
      const selected = getShiftCalls(day, () => (index + 0.1) / 3);
      expect(selected).toHaveLength(CALLS[day]?.length ?? 0);
      selected.forEach((call) => expect(call).toBe(CALL_VARIANTS[call.answer]?.[index]));
    }
  });
});
describe("daily manager mail", () => {
  it("delivers one Casey message per day and no future messages", () => {
    for (const day of [1, 2, 3]) {
      expect(getMail(day).filter((mail) => mail.day === day && mail.sender === "Casey — Shift Manager")).toHaveLength(1);
      expect(getMail(day).every((mail) => mail.day <= day)).toBe(true);
    }
  });
  it("delivers the exact mystery message on Day 2, not Day 1", () => {
    expect(getMail(1).find((mail) => mail.id === "tenmio-2")).toBeUndefined();
    expect(getMail(2).find((mail) => mail.id === "tenmio-2")?.body).toEqual(["my name is tenmio oD ton ysta hree"]);
  });
});