import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { CALLS, ENTRIES, getCatalog, type Entry } from "@/game/data";

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

function Win({ title, children, onClose, className = "" }: { title: string; children: ReactNode; onClose?: () => void; className?: string }) {
  return (
    <div className={`win p-[3px] flex flex-col ${className}`}>
      <div className="titlebar flex items-center justify-between px-2 py-1 text-sm font-bold">
        <span>{title}</span>
        {onClose && <button onClick={onClose} className="btn98 !px-2 !py-0 text-foreground text-xs">✕</button>}
      </div>
      <div className="p-3 flex-1 min-h-0">{children}</div>
    </div>
  );
}

type Phase = "desktop" | "clockin" | "working" | "summary";

function Game() {
  const [maxDay, setMaxDay] = useState(1);
  const [day, setDay] = useState(1);
  const [phase, setPhase] = useState<Phase>("desktop");
  const [empId, setEmpId] = useState("");
  const [callIdx, setCallIdx] = useState(0);
  const [pick, setPick] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; entry: Entry }>(null);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState<Entry | null>(null);
  const [showCatalog, setShowCatalog] = useState(true);
  const [seen, setSeen] = useState<string[]>([]);
  const [time, setTime] = useState("9:00 AM");

  useEffect(() => {
    setMaxDay(Number(localStorage.getItem("hsh-maxday") || 1));
    setSeen(JSON.parse(localStorage.getItem("hsh-seen") || "[]"));
  }, []);

  const calls = CALLS[day] ?? [];
  const call = calls[callIdx]!;
  const catalog = getCatalog(day);
  const available = ENTRIES.filter((e) => e.day <= day).sort((a, b) => a.name.localeCompare(b.name));

  const openEntry = (e: Entry) => {
    setOpen(e);
    if (!seen.includes(e.id)) {
      const s = [...seen, e.id];
      setSeen(s);
      localStorage.setItem("hsh-seen", JSON.stringify(s));
    }
  };

  const startDay = (d: number) => { setDay(d); setPhase("clockin"); setCallIdx(0); setScore(0); setResult(null); setPick(""); setOpen(null); };

  const submit = () => {
    const ok = pick === call.answer;
    if (ok) setScore((s) => s + 1);
    setResult({ ok, entry: ENTRIES.find((e) => e.id === call.answer)! });
  };

  const next = () => {
    setResult(null); setPick("");
    const h = 9 + Math.round(((callIdx + 1) / calls.length) * 8);
    setTime(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`);
    if (callIdx + 1 >= calls.length) {
      if (day + 1 > maxDay && CALLS[day + 1]) { setMaxDay(day + 1); localStorage.setItem("hsh-maxday", String(day + 1)); }
      setPhase("summary");
    } else setCallIdx(callIdx + 1);
  };

  return (
    <div className="font-y2k bg-desk min-h-screen flex flex-col text-foreground">
      <div className="flex-1 p-4 relative">
        {phase === "desktop" && (
          <div className="flex flex-col gap-6 w-24">
            {[1, 2].map((d) => (
              <button key={d} disabled={d > maxDay} onClick={() => startDay(d)} className="flex flex-col items-center gap-1 text-xs text-primary-foreground disabled:opacity-40">
                <span className="text-4xl">{d > maxDay ? "🔒" : "⏰"}</span>
                <span className="text-center">HSH Clock-In<br />Day {d}{d > maxDay ? " (locked)" : ""}</span>
              </button>
            ))}
          </div>
        )}

        {phase === "clockin" && (
          <div className="flex justify-center pt-20">
            <Win title="HSH TimeClock v1.2" onClose={() => setPhase("desktop")} className="w-96">
              <p className="font-bold">HOME SAFETY HOTLINE</p>
              <p className="text-xs mb-3">"We keep your home safe." — Est. 2000</p>
              <p className="text-sm mb-1">Day {day} — {day === 1 ? "Mon, Jan 3, 2000" : "Tue, Jan 4, 2000"}</p>
              <label className="text-sm">Employee ID:</label>
              <input value={empId} onChange={(e) => setEmpId(e.target.value)} className="bevel-in w-full px-2 py-1 mb-3 outline-none" placeholder="e.g. 0451" />
              <button className="btn98 w-full" disabled={!empId} onClick={() => { setTime("9:00 AM"); setPhase("working"); }}>CLOCK IN</button>
            </Win>
          </div>
        )}

        {phase === "working" && (
          <div className="grid lg:grid-cols-2 gap-4 items-start">
            <Win title={`Incoming Call — Line 1 (${callIdx + 1}/${calls.length})`}>
              <div className="bg-term font-term text-xl p-3 h-64 overflow-auto">
                <p>&gt; CALLER: {call.caller}</p>
                <p>&gt; LOCATION: {call.location}</p>
                <p>&gt; CONNECTED...</p>
                {call.transcript.map((t, i) => <p key={i} className="mt-2">"{t}"</p>)}
              </div>
              {!result ? (
                <div className="mt-3 space-y-2">
                  <label className="text-sm">Identify pest:</label>
                  <select value={pick} onChange={(e) => setPick(e.target.value)} className="bevel-in w-full px-2 py-1">
                    <option value="">-- select --</option>
                    {available.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
                  </select>
                  <button className="btn98" disabled={!pick} onClick={submit}>Submit & Advise Caller</button>
                </div>
              ) : (
                <div className="mt-3 space-y-2 text-sm">
                  <p className={`font-bold ${result.ok ? "" : "text-classified"}`}>
                    {result.ok ? "✔ Correct identification." : `✘ Wrong. It was: ${result.entry.name}`}
                  </p>
                  <div className="bevel-in p-2">
                    <p className="font-bold">Script — say to caller:</p>
                    <p className="italic">"{result.entry.advice}"</p>
                    {result.entry.confidential && <p className="text-classified text-xs mt-1">⚠ Confidential pest. Do not name it to the caller.</p>}
                  </div>
                  <button className="btn98" onClick={next}>{callIdx + 1 >= calls.length ? "End Shift" : "Next Call"}</button>
                </div>
              )}
            </Win>

            {showCatalog ? (
              <Win title="PestBase Catalog 2000" onClose={() => setShowCatalog(false)}>
                {open ? (
                  <EntryView e={open} back={() => setOpen(null)} />
                ) : (
                  <div className="bevel-in h-[28rem] overflow-auto p-1 text-sm">
                    <p className="text-xs px-1 pb-1">{catalog.filter((s) => s.entry).length} / {catalog.length} entries unlocked — sorted A–Z</p>
                    {catalog.map((s) => s.entry ? (
                      <button key={s.key} onClick={() => openEntry(s.entry!)} className={`w-full text-left px-2 py-1 flex justify-between hover:bg-secondary ${s.entry.day === day && day > 1 ? "bg-new font-bold" : ""}`}>
                        <span>📄 {s.entry.name}</span>
                        {s.entry.day === day && day > 1 && <span className="text-xs">★ NEW ENTRY{!seen.includes(s.entry.id) ? "!" : ""}</span>}
                      </button>
                    ) : (
                      <div key={s.key} className="px-2 py-1 text-classified">🔒 ████████ — CLASSIFIED</div>
                    ))}
                  </div>
                )}
              </Win>
            ) : (
              <button className="btn98 justify-self-start" onClick={() => setShowCatalog(true)}>Open PestBase Catalog</button>
            )}
          </div>
        )}

        {phase === "summary" && (
          <div className="flex justify-center pt-20">
            <Win title="Shift Report" className="w-96">
              <p className="font-bold">Day {day} complete.</p>
              <p>Correct IDs: {score} / {calls.length}</p>
              {CALLS[day + 1] ? <p className="mt-2 bg-new p-1 text-sm">🔓 Day {day + 1} unlocked! 4 classified files have been declassified.</p> : <p className="mt-2 text-sm">More days coming soon...</p>}
              <button className="btn98 mt-3" onClick={() => setPhase("desktop")}>Clock Out</button>
            </Win>
          </div>
        )}
      </div>
      <div className="win flex justify-between items-center px-2 py-1 text-sm">
        <button className="btn98 font-bold !py-0">⊞ Start</button>
        <span className="bevel-in px-2">{phase === "working" ? time : "12:00 AM"} · Y2K Ready</span>
      </div>
    </div>
  );
}

function EntryView({ e, back }: { e: Entry; back: () => void }) {
  const Row = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="mb-2"><p className="font-bold text-xs uppercase">{label}</p><p>{children}</p></div>
  );
  return (
    <div className="bevel-in h-[28rem] overflow-auto p-3 text-sm">
      <button className="btn98 mb-2" onClick={back}>◀ Back</button>
      <h2 className="text-lg font-bold">{e.name}</h2>
      <p className="italic text-xs mb-2">{e.latin} · Threat level: <span className="text-classified font-bold">{e.threat}</span></p>
      {e.notes && <p className="text-classified text-xs mb-2 font-bold">{e.notes}</p>}
      <Row label="Description">{e.description}</Row>
      <Row label="Habitat">{e.habitat}</Row>
      <Row label="Signs / What callers report">{e.signs}</Row>
      <Row label="Danger">{e.danger}</Row>
      <Row label="Solution">{e.solution}</Row>
      <Row label="Operator script">"{e.advice}"</Row>
    </div>
  );
}
