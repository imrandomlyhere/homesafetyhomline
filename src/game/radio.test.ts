import { describe, expect, it } from "vitest";
import { getRadioChannel, RADIO_CHANNELS, RADIO_UNLOCK_DAY } from "./radio";

describe("radio channels", () => {
  it("provides the five requested stations in order", () => {
    expect(RADIO_CHANNELS.map(({ id, name }) => [id, name])).toEqual([
      [1, "News"], [2, "Politics"], [3, "Home Safety Hotline Office News"],
      [4, "Wonders of Nature"], [5, "HSH Live Podcast"],
    ]);
    for (const station of RADIO_CHANNELS) {
      expect(getRadioChannel(station.id)).toBe(station);
      expect(station.broadcasts.length).toBeGreaterThan(1);
    }
  });
  it("features two HSH employees in the podcast", () => {
    expect([...new Set(getRadioChannel(5).broadcasts.map(({ speaker }) => speaker))]).toEqual(["Casey", "Morgan"]);
  });
  it("keeps radio unlocked on Day 5", () => {
    expect(RADIO_UNLOCK_DAY).toBe(5);
  });
  it("falls back to news for an unknown station", () => {
    expect(getRadioChannel(99).id).toBe(1);
  });
});