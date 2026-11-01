export type SoundKind = "computer" | "dialup" | "phone";

// Browser audio is created only after the operator enables it with a click.
export function createRetroAudio() {
  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.045;
  master.connect(context.destination);
  const tone = (frequency: number, offset: number, duration: number, type: OscillatorType = "square") => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, context.currentTime + offset);
    gain.gain.linearRampToValueAtTime(0.6, context.currentTime + offset + 0.01);
    gain.gain.linearRampToValueAtTime(0, context.currentTime + offset + duration);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(context.currentTime + offset);
    oscillator.stop(context.currentTime + offset + duration + 0.02);
    oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
  };
  return {
    play(kind: SoundKind) {
      if (context.state === "suspended") void context.resume().catch(() => {});
      if (kind === "phone") {
        for (const offset of [0, 0.22, 0.44]) { tone(440, offset, 0.16, "sine"); tone(480, offset, 0.16, "sine"); }
      } else if (kind === "dialup") {
        [350, 440, 1200, 1800, 900, 2100, 1300, 1700].forEach((f, i) => tone(f, i * 0.16, 0.15, "sawtooth"));
      } else {
        [640, 320, 800].forEach((f, i) => tone(f, i * 0.075, 0.05));
      }
    },
    setEnabled(enabled: boolean) { master.gain.value = enabled ? 0.045 : 0; },
    close() { void context.close().catch(() => {}); },
  };
}