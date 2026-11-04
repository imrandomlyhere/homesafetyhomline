import { ENTRIES } from "./data";

export type Mail = { id: string; day: number; sender: string; subject: string; body: string[]; afterCalls?: number };
export const DAY_DATES: Record<number, string> = {
  1: "Mon, Jan 3, 2000", 2: "Tue, Jan 4, 2000", 3: "Wed, Jan 5, 2000", 4: "Thu, Jan 6, 2000",
};
export const MAIL: Mail[] = [
  { id: "casey-1", day: 1, sender: "Casey — Shift Manager", subject: "Welcome to HSH / Level 1 permissions", body: [
    "Good morning, operator! I'm Casey, your shift manager. Welcome to Home Safety Hotline. We survived Y2K; now let's survive Monday.",
    "Your Level 1 permissions cover Mole, Rat, Termite, Black Mold and Raccoon. All other PestBase files remain ACCESS DENIED. Finish today's calls to receive tomorrow's clearance.",
    "Ask about injuries, location and timing before making an identification. The right advice matters as much as the right name.",
    "Daily joke: Why did the computer go to the pest inspector? It had too many bugs.",
    "Please don't leave snacks inside the desk. Accounting says replacing a stapler is not a lunch expense. — Casey",
  ] },
  { id: "casey-2", day: 2, sender: "Casey — Shift Manager", subject: "Level 2 approved / Four new files", body: [
    "Nice work getting through your first shift. Your Level 2 clearance is effective today.",
    "Desk Moth, Mimic, Common Sickle and Pipe Sickle are now available alongside yesterday's files. These four cases are confidential. Use the approved caller scripts; never name the classified organism on the line.",
    "Daily joke: What do you call a moth with an office job? A paper shredder with wings.",
    "If you receive mail from an unknown sender, don't reply. Our mail server has been doing something strange since midnight. — Casey",
  ] },
  { id: "tenmio-2", day: 2, sender: "UNKNOWN", subject: "(no subject)", body: ["my name is tenmio oD ton ysta hree"] },
  { id: "casey-3", day: 3, sender: "Casey — Shift Manager", subject: "Level 3 clearance / Five new files", body: [
    "Morning. Your Level 3 permissions are active. Ballast Mold, Bed Sickle, Water Sprite, True Sickle and Soda Sprite have been released to your terminal.",
    "Keep all earlier permissions. Moving mold-covered objects are not a housekeeping call. Missing people on a bed and a bulky figure in a basement are urgent containment cases. Keep callers away from the hazard.",
    "Water Sprites prefer water. Soda Sprites prefer soda and can attack when agitated. Do not reuse the Desk Moth soda lure for a Soda Sprite.",
    "A True Sickle keeps habits from its earlier form. Ask what happened before it appeared, but never send someone downstairs to check.",
    "Daily joke: Why did the operator bring a blanket to work? Too many cold calls. On second thought, leave blankets out of the basement.",
    "About yesterday's unknown message: I didn't send it. Stay with the approved scripts and finish your shift. — Casey",
  ] },
  { id: "casey-4", day: 4, sender: "Casey — Shift Manager", subject: "Level 4 clearance / Six new files", body: [
    "Happy Thursday. Your Level 4 permissions are active: Attic Gnome, Fluffk, The Orb, Springin, Fae and one redacted file.",
    "Attic gnomes are public knowledge — you may name them. They're harmless builders. Everything else today is confidential.",
    "Fluffk callers will say someone at home seems 'wrong'. Never tell a caller to check or confront that person. Get everyone out.",
    "If a caller finds a warm lump that smells like cut grass, arrange collection. We need every sample brought back to the office. Don't ask why the cafeteria smells like a lawn.",
    "Write down every word the Orb says. Research wants it all. As for the redacted file: close the closet, end the call, don't ask me about it.",
    "Daily joke: Why did the attic gnome get promoted? He really knew how to make something out of nothing.",
    "If you get more mail with no subject, delete it. — Casey",
  ] },
  { id: "unknown-4", day: 4, sender: "UNKNOWN", subject: "(no subject)", body: ["human expirmentation + fae = ?"] },
  { id: "fae-truth-4", day: 4, afterCalls: 4, sender: "UNKNOWN", subject: "(no subject)", body: [
    "fae. a strange anomaly, though very strange. they grow like mold but they have organs. the organs act like human organs without a use. they even have eyes with irises and pupils, and the eyes move. they even have repressed bones in them, like finger bones.",
    "from some research i did i found out fae is human tissue for 99.9% of it. the 0.01% is unknown. we think it's pure fae. when it's exposed to air it rapidly expands and explodes. it has gunpowder and other chemicals in it, like sulfur and even formaldehyde.",
    "i think the orb is telling us about it. i have a recording from when it appeared in my room. i found out its vowels and it says: ##e #ae i# u#. i can see it saying THE FAE IS US. i've also found out the orb appears in houses that have fae. my house had some but it died.",
    "i remember the fae outbreak of the 1920s, when fae was used as a weapon — true fae used as explosives, not knowing the little pieces of flesh grow into fae. it ate up most of japan at that time. it took 40 years to clean it up and we had to mind wipe the people that knew too much.",
    "i found fae in cow meat. if a human eats fae they start acting weird. they start hiding from light and like humid spaces, often moving to humid places. in recent years 30 people went missing in brazil, and 30 specimens of fae were found in brazil. large specimens, 10 to 40 feet.",
    "i think we have been eating stuff we should not have eaten. they say it's fine but no. we are all doomed, because i think when humans eat fae flesh they become fae.",
    "i found a tape in the basement where they keep the fae. it said something about melting flesh, skin and bones dissolving into flesh. it showed a time lapse of a human becoming fae.",
    "if i quit then i'll be killed. maybe turned to fae. and i found a strange structure in the basement. it seems like a laser or a syringe that stabs a person and dissolves their bone and skin.",
  ] },
];
/** Mail with afterCalls only appears once its id is in `unlocked` (earned mid-shift). */
export function getMail(day: number, unlocked: string[] = []): Mail[] {
  return MAIL.filter((mail) => mail.day <= day && (mail.afterCalls === undefined || unlocked.includes(mail.id)));
}
/** Mail earned on `day` after completing `callsDone` calls. */
export function getEarnedMail(day: number, callsDone: number): Mail[] {
  return MAIL.filter((mail) => mail.day === day && mail.afterCalls !== undefined && callsDone >= mail.afterCalls);
}
export function getNewEntryCount(day: number): number { return ENTRIES.filter((entry) => entry.day === day).length; }