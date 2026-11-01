import { describe, expect, it } from "vitest";
import { CALLS, getSymptomQuestions } from "./data";
import { CALL_LOAD_MS, FILE_LOAD_MS, textProgress } from "./loading";

describe("caller follow-up questions", () => {
  it("offers health, location and duration replies for every call", () => {
    for (const calls of Object.values(CALLS)) for (const call of calls) {
      expect(getSymptomQuestions(call).map((q) => q.id)).toEqual(["health", "location", "duration"]);
      expect(getSymptomQuestions(call).every((q) => q.reply.length > 20)).toBe(true);
    }
  });
  it("returns symptom replies for the current caller's problem", () => {
    const mold = CALLS[1]?.find((c) => c.answer === "mold");
    const mole = CALLS[1]?.find((c) => c.answer === "mole");
    if (!mold || !mole) throw new Error("Missing test calls");
    expect(getSymptomQuestions(mold)[0]?.reply).toContain("coughing and headaches");
    expect(getSymptomQuestions(mole)[0]?.reply).toContain("Nobody's sick or hurt");
  });
});
describe("longer text loading", () => {
  it("takes longer than the previous file and call waits", () => {
    expect(FILE_LOAD_MS).toBeGreaterThan(1200);
    expect(CALL_LOAD_MS).toBeGreaterThan(1800);
  });
  it("advances from ---------- to [---------", () => {
    expect(textProgress(0)).toBe("----------");
    expect(textProgress(10)).toBe("[---------");
    expect(textProgress(100)).toBe("[[[[[[[[[[");
  });
});