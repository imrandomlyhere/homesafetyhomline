// News bulletins for HSH Radio, available after Day 4. Mostly about fae.
export const RADIO_UNLOCK_DAY = 5;
export const RADIO_NEWS: string[] = [
  "This is W-H-S-H News Radio, eleven-forty AM. Our top story: residents in southern Ohio report warm pink growths in their basements that smell of fresh cut grass. Officials urge you not to touch, cut or eat any growth.",
  "Doctors in Portsmouth confirm three patients with unexplained pain after eating what they believed were beets from a backyard garden. Their families say the patients' skin has begun to soften. The hospital has declined further comment.",
  "A local butcher was closed today after inspectors found meat they could not identify. Inspectors say the meat had what looked like tiny bones inside. The owner says he bought it from a man in an office building downtown.",
  "Strange lights continue over Kent. Witnesses describe a humming, glowing ball that speaks an unknown language. One listener wrote down the sounds and says only the vowels are clear.",
  "Scrapyards in Dayton report piles of metal melting overnight and hardening into metals nobody can name. One sample appears to be a gas in solid form.",
  "Weather now. Humid all week, which experts say is ideal for mold, and for, quote, other growing things. Keep your basements dry.",
  "And finally, a reminder from Home Safety Hotline. If you find something growing in your home that smells like a lawn, please call us. Do not throw it away. We will collect it. We keep your home safe.",
];

export type RadioBroadcast = { text: string; speaker?: string };
export type RadioChannel = { id: number; name: string; broadcasts: RadioBroadcast[] };

// All stations are authored, in-universe broadcasts for the year-2000 game.
export const RADIO_CHANNELS: RadioChannel[] = [
  { id: 1, name: "News", broadcasts: RADIO_NEWS.map((text) => ({ text })) },
  { id: 2, name: "Politics", broadcasts: [
    { text: "Good evening from the statehouse. Lawmakers are debating who should pay for unexplained household damage. One representative asked whether furniture walking out of a house counts as theft. The committee requested a recess." },
    { text: "A proposed basement inspection bill has divided the council. Supporters want independent testing of pink growths. Opponents say Home Safety Hotline already has the matter under control. The public hearing has been moved to a room without windows." },
    { text: "Campaign news, November 2000. Candidates promise safer neighborhoods and cleaner drinking water. Neither campaign would answer our question about the noises coming from the municipal pipes." },
    { text: "The Department of Agriculture insists all approved meat is safe. A request to publish the ingredients of its new emergency food program was denied. The official statement says the public should avoid unnecessary speculation." },
  ] },
  { id: 3, name: "Home Safety Hotline Office News", broadcasts: [
    { text: "This is the Home Safety Hotline staff frequency. Casey here. Level five operators, your ten new files are ready. Keep confidential names off public calls, and please stop using the office intercom to practice your customer service voice." },
    { text: "Facilities notice. The sorter gnomes have rearranged the supply cupboard again. Say hello, handle them gently, and never drop them. They repeat what they hear, so keep complaints about management to yourself." },
    { text: "The attic gnomes finished our new filing shelves in one week. Please leave clean recycling at the marked collection point. Whoever donated an entire telephone, we still needed that." },
    { text: "Restricted basement notice. Humidity controls must remain running. Any growth smelling of fresh cut grass belongs to the research department. Do not bring samples upstairs, and do not open the unmarked freezer." },
    { text: "Casey's joke of the shift. Why did the operator bring a ladder to work? To reach a higher clearance level. All right, back to the phones. The office picnic menu is still awaiting approval." },
  ] },
  { id: 4, name: "Wonders of Nature", broadcasts: [
    { text: "Welcome to Wonders of Nature. Today, the industrious attic gnome. These publicly known builders turn household rubbish into surprisingly sturdy furniture. A steady supply of material can keep a small workshop busy for a week." },
    { text: "In a quiet garden, garden gnomes gather recycling for their attic and sorter relatives. Observe from a respectful distance. A peaceful garden is not an invitation to threaten its residents." },
    { text: "Beside an abandoned glass of water, tiny water sprites gather. These flying relatives of the desk moth prefer moisture. Their smaller soda-loving cousins are messy feeders and should never be provoked." },
    { text: "Our restricted research feature concerns fae. This flesh-like growth favors humid conditions and gives off the scent of freshly cut grass. Its resemblance to ordinary living tissue raises questions that our guest researcher has declined to discuss on air." },
    { text: "Under warm floorboards, a common sickle keeps out of sight. Agitation can trigger a transformation into a much larger true sickle, which retains its former preference for heat. Our field team has ended today's observation early." },
  ] },
  { id: 5, name: "HSH Live Podcast", broadcasts: [
    { speaker: "Casey", text: "You're listening to the break-room broadcast, live from Home Safety Hotline. I'm Casey, and Morgan from the late shift is here. Morgan, is that microphone working?" },
    { speaker: "Morgan", text: "It is now. A sorter gnome put it in the drawer marked things that make noise. It also sorted all my lunch into ingredients." },
    { speaker: "Casey", text: "At least someone is organized. We've had a lot of calls about fae today. Remember, the public instruction is to arrange collection. Not to taste it." },
    { speaker: "Morgan", text: "That's what worries me. The basement smells like cut grass, but the cafeteria smells exactly the same. Has anyone actually checked where our meat comes from?" },
    { speaker: "Casey", text: "Morgan, we're on the staff frequency. Let's talk about something else. How are those shelves the attic gnomes built?" },
    { speaker: "Morgan", text: "Excellent. One week, all recycled materials. But last night an orb appeared beside them. It spoke, and every gnome stopped moving until it left." },
    { speaker: "Casey", text: "Send me the recording after the shift. Privately. And nobody goes into that basement alone. That's not a joke this time." },
    { speaker: "Morgan", text: "Understood. The phones are lighting up again. Thanks for spending your break with us. This is Morgan and Casey, returning you to the hotline." },
  ] },
];

export function getRadioChannel(id: number): RadioChannel {
  return RADIO_CHANNELS.find((channel) => channel.id === id) ?? RADIO_CHANNELS[0] ?? { id: 1, name: "News", broadcasts: [] };
}
