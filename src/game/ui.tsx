import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { RetroIcon } from "@/game/retro-icon";
import { CALLS, ENTRIES, getCatalog, type Entry } from "@/game/data";

function Win({ title, children, onClose, className = "" }: { title: string; children: ReactNode; onClose?: () => void; className?: string }) {
  return (
    <div className={`win p-[3px] flex flex-col ${className}`}>
      <div className="titlebar flex items-center justify-between px-2 py-1 text-sm font-bold">
        <span>{title}</span>
        {onClose && <Button variant="ghost" onClick={onClose} className="btn98 !px-2 !py-0 text-foreground text-xs">✕</Button>}
      </div>
      <div className="p-3 flex-1 min-h-0">{children}</div>
    </div>
  );
}

type Phase = "desktop" | "days" | "clockin" | "working" | "summary";

export function Game({ callerPage = false, initialDay = 1, employee = "" }: { callerPage?: boolean; initialDay?: number; employee?: string }) {
  const navigate = useNavigate();
  const [maxDay, setMaxDay] = useState(1);
  const [day, setDay] = useState(initialDay);
  const [phase, setPhase] = useState<Phase>(callerPage ? "working" : "desktop");
  const [empId, setEmpId] = useState(employee);
  const [callIdx, setCallIdx] = useState(0);
  const [pick, setPick] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; entry: Entry }>(null);
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState<Entry | null>(null);
  const [showCatalog, setShowCatalog] = useState(true);
  const [seen, setSeen] = useState<string[]>([]);
  const [time, setTime] = useState("9:00 AM");
  const [loading, setLoading] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [connecting, setConnecting] = useState(callerPage);

  const load = (label: string, action: () => void) => {
    if (loading) return;
    setLoading(label);
    setPendingAction(() => action);
  };

  useEffect(() => {
    if (!pendingAction) return;
    const timer = setTimeout(() => {
      pendingAction();
      setLoading(null);
      setPendingAction(null);
    }, 1200);
    return () => clearTimeout(timer);
  }, [pendingAction]);

  useEffect(() => {
    if (!connecting) return;
    const timer = setTimeout(() => setConnecting(false), 1800);
    return () => clearTimeout(timer);
  }, [connecting]);

  useEffect(() => {
    try {
      const d = Number(localStorage.getItem("hsh-maxday") || 1);
      setMaxDay(Number.isFinite(d) && d >= 1 ? Math.min(d, 2) : 1);
      const s = JSON.parse(localStorage.getItem("hsh-seen") || "[]");
      setSeen(Array.isArray(s) ? s.filter((x) => typeof x === "string") : []);
    } catch {
      localStorage.removeItem("hsh-maxday");
      localStorage.removeItem("hsh-seen");
    }
  }, []);

  const calls = CALLS[day] ?? [];
  const call = calls[callIdx];
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
    if (!call) return;
    const entry = ENTRIES.find((e) => e.id === call.answer);
    if (!entry) return;
    const ok = pick === call.answer;
    if (ok) setScore((s) => s + 1);
    setResult({ ok, entry });
  };

  const next = () => {
    setResult(null); setPick("");
    const h = 9 + Math.round(((callIdx + 1) / calls.length) * 8);
    setTime(`${h > 12 ? h - 12 : h}:00 ${h >= 12 ? "PM" : "AM"}`);
    if (callIdx + 1 >= calls.length) {
      if (day + 1 > maxDay && CALLS[day + 1]) { setMaxDay(day + 1); localStorage.setItem("hsh-maxday", String(day + 1)); }
      setPhase("summary");
    } else { setConnecting(true); setCallIdx(callIdx + 1); }
  };

  return (
    <div className="font-y2k bg-desk min-h-screen flex flex-col text-foreground">
      <div className="flex-1 p-4 relative">
        {phase === "desktop" && (
          <Button variant="ghost" onClick={() => load("Opening HSH Work Days...", () => setPhase("days"))} className="desktop-icon">
            <RetroIcon kind="folder" />
            <span>HSH Work Days</span>
          </Button>
        )}

        {phase === "days" && (
          <Win title="HSH Work Days" onClose={() => setPhase("desktop")} className="w-full max-w-lg">
            <div className="bevel-in min-h-48 p-4 flex flex-wrap gap-6">
              {Object.keys(CALLS).map(Number).map((d) => (
                <Button key={d} variant="ghost" disabled={d > maxDay} onClick={() => load("Starting TimeClock.exe...", () => startDay(d))} className="file-icon">
                  <RetroIcon kind={d > maxDay ? "lock" : "clock"} />
                  <span>Day {d}<br />{d > maxDay ? "ACCESS DENIED" : "TimeClock.exe"}</span>
                </Button>
              ))}
            </div>
          </Win>
        )}

        {phase === "clockin" && (
          <div className="flex justify-center pt-20">
            <Win title="HSH TimeClock v1.2" onClose={() => setPhase("desktop")} className="w-96">
              <p className="font-bold">HOME SAFETY HOTLINE</p>
              <p className="text-xs mb-3">"We keep your home safe." — Est. 2000</p>
              <p className="text-sm mb-1">Day {day} — {day === 1 ? "Mon, Jan 3, 2000" : "Tue, Jan 4, 2000"}</p>
              <label className="text-sm">Employee ID:</label>
              <input value={empId} onChange={(e) => setEmpId(e.target.value)} className="bevel-in w-full px-2 py-1 mb-3 outline-none" placeholder="e.g. 0451" />
              <Button variant="ghost" className="btn98 w-full" disabled={!empId} onClick={() => load("Connecting to HSH Call Center...", () => { void navigate({ to: "/calls", search: { day, employee: empId } }); })}>CLOCK IN</Button>
            </Win>
          </div>
        )}

        {phase === "working" && call && (
          <div className="caller-page">
            <header className="caller-header"><div className="flex items-center gap-3"><RetroIcon kind="phone" /><div><h1 className="font-bold text-xl">HOME SAFETY HOTLINE</h1><p className="text-xs">Operator {empId} · Day {day} · Line 1</p></div></div><span className="text-sm">CALL CENTER / 2000</span></header>
            <div className="grid lg:grid-cols-2 gap-4 items-start">
            <Win title={`Incoming Call — Line 1 (${callIdx + 1}/${calls.length})`}>
              <div className="bg-term font-term text-xl p-3 h-64 overflow-auto">
                {connecting ? <div role="status"><p>&gt; LINE 1: CONNECTING...</p><p>&gt; Waiting for incoming call...</p><div className="loading-track mt-4"><div className="loading-block" /></div></div> : <>
                <p>&gt; CALLER: {call.caller}</p>
                <p>&gt; LOCATION: {call.location}</p>
                <p>&gt; CONNECTED...</p>
                {call.transcript.map((t, i) => <p key={i} className="mt-2">"{t}"</p>)}
                </>}
              </div>
              {!result ? (
                <div className="mt-3 space-y-2">
                  <label className="text-sm">Identify pest:</label>
                  <select disabled={connecting} value={pick} onChange={(e) => setPick(e.target.value)} className="bevel-in w-full px-2 py-1">
                    <option value="">-- select --</option>
                    {available.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
                  </select>
                  <Button variant="ghost" className="btn98" disabled={!pick || connecting} onClick={submit}>Submit & Advise Caller</Button>
                </div>
              ) : (
                <div className="mt-3 space-y-2 text-sm">
                  <p className={`font-bold ${result.ok ? "" : "text-classified"}`}>
                    {result.ok ? "Correct identification." : `Wrong. It was: ${result.entry.name}`}
                  </p>
                  <div className="bevel-in p-2">
                    <p className="font-bold">Script — say to caller:</p>
                    <p className="italic">"{result.entry.advice}"</p>
                    {result.entry.confidential && <p className="text-classified text-xs mt-1">Confidential pest. Do not name it to the caller.</p>}
                  </div>
                  <Button variant="ghost" className="btn98" onClick={next}>{callIdx + 1 >= calls.length ? "End Shift" : "Next Call"}</Button>
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
                      <Button variant="ghost" key={s.key} onClick={() => { const entry = s.entry; if (entry) load("Reading PestBase file...", () => openEntry(entry)); }} className={`w-full text-left px-2 py-1 flex justify-between hover:bg-secondary ${s.entry.day === day && day > 1 ? "bg-new font-bold" : ""}`}>
                        <span className="flex items-center gap-2"><RetroIcon kind="file" small /> {s.entry.name}</span>
                        {s.entry.day === day && day > 1 && <span className="text-xs">★ NEW ENTRY{!seen.includes(s.entry.id) ? "!" : ""}</span>}
                      </Button>
                    ) : (
                      <div key={s.key} className="px-2 py-1 text-classified">ACCESS DENIED</div>
                    ))}
                  </div>
                )}
              </Win>
            ) : (
              <Button variant="ghost" className="btn98 justify-self-start" onClick={() => load("Opening PestBase...", () => setShowCatalog(true))}>Open PestBase Catalog</Button>
            )}
            </div>
          </div>
        )}

        {phase === "summary" && (
          <div className="flex justify-center pt-20">
            <Win title="Shift Report" className="w-96">
              <p className="font-bold">Day {day} complete.</p>
              <p>Correct IDs: {score} / {calls.length}</p>
              {CALLS[day + 1] ? <p className="mt-2 bg-new p-1 text-sm">Day {day + 1} unlocked! 4 new entries available.</p> : <p className="mt-2 text-sm">More days coming soon...</p>}
              <Button variant="ghost" className="btn98 mt-3" onClick={() => navigate({ to: "/" })}>Clock Out</Button>
            </Win>
          </div>
        )}
      </div>
      {loading && <div className="loading-overlay" role="status" aria-live="polite"><Win title="Please wait" className="w-80 max-w-full"><p className="text-sm mb-3">{loading}</p><div className="loading-track"><div className="loading-block" /></div></Win></div>}
      <div className="win flex justify-between items-center px-2 py-1 text-sm">
        <Button variant="ghost" className="btn98 font-bold !py-0">⊞ Start</Button>
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
      <Button variant="ghost" className="btn98 mb-2" onClick={back}>◀ Back</Button>
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
