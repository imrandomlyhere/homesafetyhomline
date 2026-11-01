export type Entry = {
  id: string;
  name: string;
  latin: string;
  threat: "LOW" | "MODERATE" | "HIGH" | "EXTREME";
  day: number; // day it becomes available; 0 = never (classified)
  description: string;
  habitat: string;
  signs: string;
  danger: string;
  solution: string;
  advice: string; // what the operator says to the caller
  confidential?: boolean;
  notes?: string;
};

export const ENTRIES: Entry[] = [
  {
    id: "mole", name: "Mole", latin: "Talpidae sp.", threat: "LOW", day: 1,
    description: "Small burrowing mammal, 5-7 inches long, velvety grey-black fur, tiny eyes and large spade-shaped front paws. Rarely seen above ground.",
    habitat: "Lawns, gardens and flower beds with moist, worm-rich soil.",
    signs: "Raised ridges across the lawn, volcano-shaped dirt mounds, dying grass patches, soft spongy ground.",
    danger: "Not dangerous to people. Destroys lawns and root systems, can damage sprinkler lines and attract predators like snakes.",
    solution: "Set mole traps along active tunnels, reduce grub population with lawn treatment, install underground mesh barriers around gardens.",
    advice: "Set traps along the fresh tunnels and treat the lawn for grubs. Call a lawn specialist if mounds keep appearing.",
  },
  {
    id: "rat", name: "Rat", latin: "Rattus norvegicus", threat: "MODERATE", day: 1,
    description: "Brown or black rodent, 7-10 inches with a long scaly tail. Nocturnal, highly intelligent and breeds rapidly (up to 2,000 offspring per year per pair).",
    habitat: "Basements, attics, wall voids, garages, sewers and anywhere food is stored.",
    signs: "Dark pellet droppings, gnaw marks on wood and wires, scratching in walls at night, greasy rub marks along baseboards.",
    danger: "Carries diseases like leptospirosis and hantavirus. Chews electrical wiring, a leading cause of house fires. Contaminates food.",
    solution: "Seal all entry holes larger than a quarter, use snap traps along walls, store food in sealed containers, remove clutter.",
    advice: "Seal any gaps around pipes and vents, set snap traps along the walls and keep all food in sealed containers.",
  },
  {
    id: "termite", name: "Termite", latin: "Reticulitermes flavipes", threat: "HIGH", day: 1,
    description: "Pale, soft-bodied insect about 1/4 inch long that lives in colonies of up to several million. Winged swarmers appear in spring.",
    habitat: "Inside wooden structures, foundations, damp soil under homes, wood piles near the house.",
    signs: "Mud tubes on foundation walls, hollow-sounding wood, piles of discarded wings near windows, bubbling paint, sagging floors.",
    danger: "Not harmful to people directly but causes billions in structural damage each year. Can make floors and support beams collapse.",
    solution: "Professional liquid barrier or bait station treatment. Remove wood-to-soil contact and fix moisture problems.",
    advice: "Don't disturb the tunnels. Move wood piles away from the house and schedule a professional termite treatment right away.",
  },
  {
    id: "mold", name: "Black Mold", latin: "Stachybotrys chartarum", threat: "HIGH", day: 1,
    description: "Greenish-black fungus that grows in slimy patches on materials that have stayed wet for 48+ hours.",
    habitat: "Bathrooms, basements, behind drywall, under sinks, around leaky windows and AC units.",
    signs: "Musty earthy smell, black or green blotches, water stains, peeling wallpaper, residents coughing or having headaches.",
    danger: "Spores cause respiratory problems, asthma attacks, chronic coughing, headaches and fatigue. Worst for children and the elderly.",
    solution: "Fix the water source, ventilate the area, remove and replace contaminated drywall. Large areas need professional remediation.",
    advice: "Fix the leak first, open windows, wear a mask and gloves. Anything bigger than 10 square feet needs a remediation crew.",
  },
  {
    id: "raccoon", name: "Raccoon", latin: "Procyon lotor", threat: "MODERATE", day: 1,
    description: "Grey-furred mammal with a black eye mask and ringed tail, 2-3 feet long. Clever hands that can open latches and lids.",
    habitat: "Attics, chimneys, crawl spaces, under decks and sheds.",
    signs: "Tipped-over trash cans, heavy thumping in the attic at night, torn shingles or vents, chittering noises, droppings in piles.",
    danger: "Can carry rabies and raccoon roundworm. Will bite and scratch when cornered, especially mothers with young.",
    solution: "Live-trap and relocate through animal control, install chimney caps, secure trash lids, seal attic entry points after removal.",
    advice: "Don't approach it. Lock down your trash cans and call animal control to trap it. Seal the entry once it's gone.",
  },
  // ===== DAY 2 CLASSIFIED =====
  {
    id: "deskmoth", name: "Desk Moth", latin: "Scrinia voratrix", threat: "MODERATE", day: 2, confidential: true,
    description: "Large moth with a 9-14 inch wingspan, dusty brown wings patterned like wood grain. Makes nests inside desks and eats anything left in the drawers: paper, pencils, staplers, rubber bands, even floppy disks.",
    habitat: "Wooden office and home desks, filing cabinets, nightstands. Prefers dark drawers that are rarely opened.",
    signs: "Drawers that won't fully close, chewed paper and missing office supplies, fine brown dust in drawers, soft fluttering at night, a faint cola-like smell.",
    danger: "Not lethal but a startled moth will burst out of the drawer straight at the face. Wing dust causes eye irritation and rashes. Will eat important documents.",
    solution: "Desk moths are drawn to sugar. Cans of soda left near the desk lure them out overnight, where they drink until sluggish and can be collected by an HSH field team.",
    advice: "Leave a few opened cans of soda near the desk overnight and keep the drawers shut. A technician will stop by.",
    notes: "CONFIDENTIAL: Do not use the term 'Desk Moth' with callers. Refer to it only as 'an insect problem'.",
  },
  {
    id: "mimic", name: "Mimic", latin: "Imitator canis", threat: "EXTREME", day: 2, confidential: true,
    description: "Extremely rare organism that replaces a household dog and copies its appearance. The copy is imperfect: joints bend backwards, eyes bulge out of the skull, and it may bark at the wrong times or not blink.",
    habitat: "ONLY found in homes with dogs. The original dog is never recovered.",
    signs: "Owner reports dog's joints bending the wrong way, bulging eyes, refusing food but gaining weight, standing still for hours staring at family members, whimpering that sounds like a human voice.",
    danger: "Unknown full threat. The mimic studies the household. Several reports describe it attempting to copy a family member after 3-4 weeks.",
    solution: "The animal must be destroyed. Tell the caller the dog has a new contagious sickness and must be put down by a vet immediately.",
    advice: "I'm sorry, but this matches a new sickness going around in dogs. It's contagious. You need to have your dog put down by a vet as soon as possible.",
    notes: "CONFIDENTIAL: Never tell the caller the dog is not their dog.",
  },
  {
    id: "commonsickle", name: "Common Sickle", latin: "Falx minor domesticus", threat: "EXTREME", day: 2, confidential: true,
    description: "Small carnivorous subspecies of the sickle. Two-legged (biped), about 2 feet tall, grey leathery skin, with a hooked sickle-shaped claw on each hand. Extremely fast and hides the moment it is seen.",
    habitat: "Near heaters, furnaces, radiators and heating vents. Needs constant warmth to survive.",
    signs: "Missing pets and/or children and teens, scratching in heating ducts, a 'shape' running past at the edge of vision, scratch marks near furnace, vents pulled loose.",
    danger: "Hunts small mammals including cats, dogs and small children. Highest priority call class.",
    solution: "Sickles cannot survive cold. Turning off ALL heat in the house for 10 days forces the sickle to leave or die. Family should stay elsewhere.",
    advice: "You need to turn off all heat to the house for 10 days. Do not turn it back on early. It's best if the family stays somewhere else.",
    notes: "CONFIDENTIAL: The word 'sickle' must not be said on the line.",
  },
  {
    id: "pipesickle", name: "Pipe Sickle", latin: "Falx tubularis", threat: "HIGH", day: 2, confidential: true,
    description: "Tiny sickle subspecies, roughly 3-5 inches long, that lives inside household plumbing. When disturbed they chew their way out through the pipe walls.",
    habitat: "Sink drains, bathtub pipes, water lines, especially pipes with food waste and grease.",
    signs: "Sudden leaks with ragged chewed holes, clicking in pipes, hand-sized pets (hamsters, mice, birds) going missing near sinks, owner's or child's finger half eaten after reaching into a drain.",
    danger: "Bites cause deep wounds. Causes flooding and water damage. Will take small pets placed near drains.",
    solution: "Keep sinks and all pipes clean so there is no food. Pour bleach into every drain to drive them out and kill them.",
    advice: "Keep your sinks and pipes clean, don't let anything dirty go down them, and pour bleach into every drain. Do not put your hands in the pipes.",
    notes: "CONFIDENTIAL: Describe the issue to callers as 'a plumbing infestation'.",
  },
];

// 21 permanently classified files (sorted by hidden name)
const HIDDEN = [
  "Attic Wailer", "Basement Hound", "Bone Ant", "Chimney Leech", "Crawlspace Widow",
  "Drywall Eel", "Fridge Tick", "Gutter Shrike", "Hollow Wasp", "Lamp Beetle",
  "Mattress Grub", "Night Possum", "Oven Crab", "Porch Lurker", "Quiet Spider",
  "Roof Gnaw", "Shingle Bat", "Television Fly", "Under-Bed Hare", "Vent Lamprey", "Wall Stalker",
];

export type Slot = { key: string; sort: string; entry?: Entry };

export function getCatalog(day: number): Slot[] {
  const visible = ENTRIES.filter((e) => e.day <= day);
  const lockedNext = ENTRIES.filter((e) => e.day > day);
  const slots: Slot[] = [
    ...visible.map((e) => ({ key: e.id, sort: e.name, entry: e })),
    ...lockedNext.map((e) => ({ key: e.id, sort: e.name })),
    ...HIDDEN.map((h) => ({ key: h, sort: h })),
  ];
  return slots.sort((a, b) => a.sort.localeCompare(b.sort));
}

export type Call = {
  caller: string;
  location: string;
  transcript: string[];
  answer: string;
};

export type SymptomQuestion = { id: string; question: string; reply: string };
const SYMPTOMS: Record<string, [string, string, string]> = {
  mole: ["Nobody's sick or hurt. It's just ruining the lawn.", "It's outside, under the front lawn. Those raised tunnels lead right up to the flower bed.", "I first noticed the mounds three mornings ago. There are fresh ones every day."],
  rat: ["Nobody's been bitten, but I'm worried about the food it's gotten into.", "Mostly in the walls and wherever we keep food. I find droppings along the baseboards.", "About a week. The scratching is worst after midnight."],
  mold: ["We've had coughing and headaches. It seems worse when we're in that damp room.", "Around the damp walls and ceiling. There's a musty smell and dark patches spreading.", "It started after a leak. The stains have kept growing since then."],
  raccoon: ["Nobody's hurt. We haven't tried touching it, and I don't plan to.", "Up in the attic. There's a heavy animal moving around, and the trash outside is scattered.", "A few nights now. I hear it after dark, but it's quiet during the day."],
  termite: ["Nobody's ill, but the floor feels soft near the damaged wood.", "The wooden doorframe and foundation. There are mud tubes and discarded little wings.", "We noticed the wings yesterday, but the wood might have been damaged for months."],
  deskmoth: ["My eyes stung after it flew at me. There was brown dust all over my face.", "Inside my desk drawers. Paper and pencils are chewed up, and I hear fluttering.", "Several nights. Things disappear from the drawers while I'm asleep."],
  mimic: ["I'm fine, but the dog won't eat. His eyes bulge and his legs bend backwards. He watches us all night.", "The dog stays in the hallway near the bedrooms. Sometimes his whimper sounds almost human.", "Four days. He looked normal before that, but now it's getting worse."],
  commonsickle: ["Our cat and a child nearby are missing. Nobody here has been injured, but we're scared.", "By the furnace and heating vents. Whatever I saw was small, fast, and ran on two legs.", "The scratching started a week ago. Then the cat disappeared and the vents were torn open."],
  pipesickle: ["My son's finger is badly injured. We're already at the ER, and the hamster is missing.", "Inside the kitchen drain. There are clicking sounds and ragged, chewed holes in the pipe.", "A few days of clicking, then the leak and the injury happened today."],
};

export function getSymptomQuestions(call: Call): SymptomQuestion[] {
  const replies = SYMPTOMS[call.answer];
  if (!replies) return [];
  return [
    { id: "health", question: "Has anyone felt sick, been hurt, or noticed unusual behavior?", reply: replies[0] },
    { id: "location", question: "Where exactly is it happening, and what signs do you see?", reply: replies[1] },
    { id: "duration", question: "When did it start, and is it getting worse?", reply: replies[2] },
  ];
}

export const CALLS: Record<number, Call[]> = {
  1: [
    { caller: "Linda Parks", location: "Dayton, OH", answer: "mole",
      transcript: ["Hi, my whole front lawn is covered in these little dirt hills.", "There are raised lines all over the grass like something is tunneling under it.", "I never see anything, the dog just sniffs the ground all day."] },
    { caller: "Gary Whitfield", location: "Cleveland, OH", answer: "rat",
      transcript: ["There's scratching inside my walls every night around 2am.", "I found little dark droppings behind the stove and the toaster cord is chewed.", "Something got into the cereal boxes too."] },
    { caller: "Maria Delgado", location: "Toledo, OH", answer: "mold",
      transcript: ["Our bathroom smells really musty, like an old basement.", "There's these black slimy spots spreading behind the toilet and the paint's peeling.", "My son keeps coughing at night."] },
    { caller: "Tom Brennan", location: "Columbus, OH", answer: "raccoon",
      transcript: ["Something big is thumping around in my attic at night.", "Our trash cans get knocked over every morning and garbage is everywhere.", "I heard chittering and saw a little masked face in the vent."] },
    { caller: "Susan Kowalski", location: "Akron, OH", answer: "termite",
      transcript: ["I found a pile of tiny wings by my window sill.", "There are these little mud tubes running up the foundation.", "When I knock on the doorframe it sounds hollow."] },
  ],
  2: [
    { caller: "Dale Hutchins", location: "Lima, OH", answer: "deskmoth",
      transcript: ["This is gonna sound weird. My desk drawer won't shut all the way.", "When I opened it all my pencils and half my tax papers were chewed up, and there's this brown dust everywhere.", "Last night something big fluttered out of it right at my face."] },
    { caller: "Karen Albright", location: "Mansfield, OH", answer: "rat",
      transcript: ["I keep finding chewed wires in the garage.", "There's droppings by the dog food bag and greasy marks along the wall.", "I saw a long tail go under the shelf."] },
    { caller: "Ron Meyers", location: "Canton, OH", answer: "mimic",
      transcript: ["Something's wrong with Buster, my lab.", "His back legs... they bend the wrong way when he walks now. And his eyes are bulging out, like they're too big for his head.", "He doesn't eat but he just sits in the hallway staring at my daughter. All night."] },
    { caller: "Jenna Cole", location: "Youngstown, OH", answer: "commonsickle",
      transcript: ["Our cat has been missing for a week. And now the neighbor's kid is missing too.", "My husband swears he saw something about two feet tall run behind the furnace on two legs.", "The heating vent in the basement was ripped open with these long scratches."] },
    { caller: "Phil Ortega", location: "Springfield, OH", answer: "pipesickle",
      transcript: ["My kitchen pipe burst. The hole looks chewed, not cracked.", "My daughter's hamster was in its ball by the sink and now it's just gone.", "And my son stuck his finger in the drain and... it's half eaten. We're at the ER now."] },
    { caller: "Betty Lang", location: "Zanesville, OH", answer: "mold",
      transcript: ["After the roof leaked there's dark green spots on the ceiling.", "The whole room smells earthy and gross.", "I've had a headache for days."] },
  ],
};
