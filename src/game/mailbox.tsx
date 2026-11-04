import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DAY_DATES, getMail } from "./mail";
import { RetroIcon } from "./retro-icon";

export function Mailbox({ day, unlocked = [] }: { day: number; unlocked?: string[] }) {
  const messages = getMail(day, unlocked).reverse();
  const [selected, setSelected] = useState(messages[0]?.id ?? "");
  const [read, setRead] = useState<string[]>([]);
  const message = messages.find((mail) => mail.id === selected);
  useEffect(() => { if (selected) setRead((previous) => previous.includes(selected) ? previous : [...previous, selected]); }, [selected]);
  return <div className="space-y-3 text-sm">
    <div className="flex items-center gap-2"><RetroIcon kind="mail" small /><strong>Inbox ({messages.length})</strong><span className="ml-auto text-xs">Through Day {day}</span></div>
    <div className="bevel-in max-h-48 overflow-auto p-1">
      {messages.map((mail) => <Button key={mail.id} variant="ghost" aria-pressed={selected === mail.id} className={`btn98 w-full justify-start text-left mb-1 ${selected === mail.id ? "bg-new" : ""}`} onClick={() => { setSelected(mail.id); }}>
        <span className="min-w-0"><span className="block font-bold">{!read.includes(mail.id) && "NEW · "}{mail.subject}</span><span className="block text-xs">{mail.sender} · Day {mail.day}</span></span>
      </Button>)}
    </div>
    {message && <article className="bevel-in p-3 max-h-[28rem] overflow-auto" aria-label="Selected email">
      <h2 className="font-bold mb-2">{message.subject}</h2>
      <p className="text-xs">From: {message.sender}</p><p className="text-xs mb-3">Date: {DAY_DATES[message.day]}</p>
      <div className="space-y-3">{message.body.map((paragraph, index) => <p key={index} className="break-words">{paragraph}</p>)}</div>
    </article>}
  </div>;
}