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
  // ===== DAY 3 CLASSIFIED =====
  {
    id: "ballastmold", name: "Ballast Mold", latin: "Stachybotrys mobilis", threat: "EXTREME", day: 3, confidential: true,
    description: "A fast-growing subspecies of Black Mold. Its thick, dark colonies leach moisture and nutrients from surrounding objects, spreading over fabric, wood and metal far faster than ordinary mold. During a process HSH calls possession, the colony wraps an object in interconnected patches and uses it as a body. Expanding and contracting mold spots act like muscles, dragging chairs, turning handles and making toys walk without batteries. A possessed object is not alive; the mold controlling it is.",
    habitat: "Damp rooms, flooded storage areas and water-damaged furniture. Colonies bridge between nearby objects when their surfaces touch.",
    signs: "Homeowners report moving objects covered in mold, chairs dragging across empty rooms, damp toys walking by themselves, black patches pulsing in sequence and fresh growth appearing within hours.",
    danger: "Possessed furniture can block exits or strike residents. Disturbing a colony disperses fragments to nearby objects. Spores irritate breathing; rapid spread can compromise an entire room overnight.",
    solution: "Keep everyone away from the affected room. Do not touch, scrape, carry or burn possessed objects. Close the room off without approaching the growth, leave the property and request an HSH containment team. Repair moisture damage only after clearance.",
    advice: "Stay away from the affected objects and do not try to clean or move them. Leave the house with everyone and keep the room closed if you can do so safely. Our specialist team will handle the contamination.",
    notes: "CONFIDENTIAL: Never use the word possession on the line. Report moving objects as a priority contamination event.",
  },
  {
    id: "bedsickle", name: "Bed Sickle", latin: "Falx lectularius", threat: "EXTREME", day: 3, confidential: true,
    description: "A carnivorous sickle subspecies capable of hiding itself within beds. Its flattened, flexible body slips between mattress layers, inside box springs or beneath bedding, where its outline resembles ordinary folds. It remains motionless until a large mammal settles above it. Unlike Common Sickles, it can prey on full-grown adults and large dogs as well as children and smaller pets. An occupied mattress may look undisturbed after a disappearance.",
    habitat: "Mattresses, box springs, guest beds and pet beds. Prefers beds used regularly; changing the sheets does not remove it.",
    signs: "Children, adults, large dogs and small pets disappear while on a bed. Homeowners report breathing beneath an empty mattress, deep impressions with nobody lying down, bedding pulled inward and scratching inside a box spring.",
    danger: "Can consume people and animals of many sizes. Prodding a mattress or trying to drag it outside can provoke an attack and trigger metamorphosis into a True Sickle.",
    solution: "Do not sit, sleep or place pets on any suspect bed. Do not cut open or move the mattress. Leave the property, account for household members and contact emergency services for missing people while an HSH field team contains the bed.",
    advice: "Keep everyone and every pet off that bed. Don't open or move the mattress. Leave the house now, and report anyone missing to emergency services. We are sending a specialist team.",
    notes: "CONFIDENTIAL: Refer to a concealed bedroom hazard. Do not ask a caller to look inside the bed.",
  },
  {
    id: "watersprite", name: "Water Sprite", latin: "Aquaptera minuta", threat: "MODERATE", day: 3, confidential: true,
    description: "Small flying insects closely related to Desk Moths, with translucent wings and pale, rounded bodies. They love exposed fresh water and gather at the rims of drinking glasses, dipping their mouthparts into the surface. Their humming resembles a wet fingertip rubbing glass. They are much smaller than Desk Moths but larger than Soda Sprites, and a group can settle around a single glass overnight.",
    habitat: "Glasses of water, uncovered pitchers, bedside cups, wet sinks and trays beneath houseplants. They return to a reliable water source each night.",
    signs: "Tiny winged bugs circling water glasses, ripples in untouched cups, a glass-like hum, damp footprints around rims and pale flecks floating in water.",
    danger: "Contaminates drinking water and may nip when trapped against skin. Swarms can gather around a person's face while they drink. Usually avoids confrontation if left undisturbed.",
    solution: "Stop drinking from exposed containers. Cover fresh water, empty unused glasses and dry sink surrounds when the insects have left them. Do not swat the swarm. Request HSH collection if it returns; keep children and pets away from occupied cups.",
    advice: "Don't drink from those glasses. Cover your fresh water and keep children and pets away from the insects. Once they have moved away, empty unused cups and dry the area. We can arrange a collection visit.",
    notes: "CONFIDENTIAL: Describe these as water-attracted insects. Do not confuse them with the smaller, aggressive Soda Sprite.",
  },
  {
    id: "truesickle", name: "True Sickle", latin: "Falx primordialis", threat: "EXTREME", day: 3, confidential: true,
    description: "The original sickle form: a large, bulky humanoid with heavy limbs, grey hide and hooked claws. Every sickle subspecies can metamorphose into this form when excessively agitated, including Common, Pipe and Bed Sickles. The transformed animal migrates toward basement corners, but retains its previous lifestyle and preferences. A former Common Sickle seeks heat; a former Pipe Sickle favors drains and plumbing; a former Bed Sickle hides near mattresses and attacks resting prey.",
    habitat: "Dark basement corners, utility rooms and crawl-space entrances. Its exact hiding place reflects its prior subspecies: furnace alcoves, plumbing recesses or stored bedding.",
    signs: "A bulky person-shaped figure crouched in a basement corner, deep claw marks, heavy footsteps after a smaller infestation is disturbed, and damage centered on the same heat source, pipes or bedding as before.",
    danger: "An immediate threat to adults, children and pets. Agitation makes it more aggressive. Ordinary treatments for the smaller subspecies are not a safe response once it has transformed.",
    solution: "Evacuate without entering the basement. Do not confront it, block its path or approach controls near it. Record the earlier infestation's signs from the caller's memory only, then dispatch the highest-priority HSH containment team and emergency assistance.",
    advice: "Leave the house immediately with everyone and your pets if you can reach them safely. Stay out of the basement and do not confront the figure. Tell me what happened before it appeared; our emergency specialist team is on its way.",
    notes: "CONFIDENTIAL: Do not name sickles or metamorphosis. Earlier habits are identification clues, not permission to attempt the earlier treatment.",
  },
  {
    id: "sodasprite", name: "Soda Sprite", latin: "Aquaptera saccharina", threat: "EXTREME", day: 3, confidential: true,
    description: "A smaller relative of the Water Sprite, with amber bodies and rapid, nearly invisible wings. Attracted to soda rather than plain water, colonies crowd opened cans and spilled soft drinks. They are messy eaters, scattering sticky droplets and shredded can labels around a feeding site. An undisturbed colony may appear harmless, but agitation turns feeding behavior into a coordinated attack; a large swarm can eat a person alive.",
    habitat: "Opened soda cans, fountain-drink cups, recycling bags, sticky counters and dried soda spills. Plain water is not their preferred food.",
    signs: "Very tiny flying bugs around soda but not water, sticky spray despite nobody spilling a drink, chewed labels, a sharp buzzing from cans and sudden painful bites after a can is shaken or insects are swatted.",
    danger: "Attacks when agitated. Swarms can cause fatal injuries and consume a trapped person. Shaking cans, swatting, spraying or attempting to wipe up an occupied spill can trigger an attack.",
    solution: "Do not disturb the insects or handle occupied drinks. Move everyone away, leave the room and request urgent HSH collection. Remove soda sources and clean residue only after the field team declares the area clear. Never use the Desk Moth soda lure here.",
    advice: "Stop handling the cans and don't swat or spray the insects. Move everyone away from the room and leave the house if they follow you. Our urgent-response team will collect them; wait for clearance before cleaning up any soda.",
    notes: "CONFIDENTIAL: Refer to aggressive sugar-attracted insects. Desk Moth soda-lure advice must never be used for this infestation.",
  },
  {
    id: "atticgnome", name: "Attic Gnome", latin: "Gnomus atticus", threat: "LOW", day: 4,
    description: "A small, bearded gnome subspecies about 14 inches tall that settles in attics and builds homes out of trash. Attic gnomes are extraordinarily crafty: a colony can build one large object in a week that would take a person a month, as long as it is kept supplied with trash. Most of the public knows about them, and many homeowners keep colonies on purpose to build furniture, sheds, boats and sculptures.",
    habitat: "Attics, crawl spaces and storage lofts with steady access to household trash, cardboard, cans, scrap wood and old fabric.",
    signs: "Hammering, sawing and tiny footsteps in the attic; trash vanishing from bins; neat little huts made of cans and cardboard; finished furniture or large objects appearing in the attic that nobody built.",
    danger: "Very low. They are peaceful and shy. A colony that runs out of trash may leave or take random household items to build with. Large finished objects can overload old attic floors.",
    solution: "No extermination needed. Either keep the colony and supply trash regularly (they are excellent builders), or stop leaving trash out and they will move on within a few weeks. Check that the attic floor can support any large objects they build.",
    advice: "Good news — that sounds like attic gnomes. They're harmless and very handy. Keep giving them your clean trash and they'll keep building; stop the trash and they'll move on in a few weeks. Just don't let a big build overload the attic floor.",
    notes: "PUBLIC: Attic gnomes are common knowledge. You may name them to the caller.",
  },
  {
    id: "fluffk", name: "Fluffk", latin: "Falx lanatus", threat: "EXTREME", day: 4, confidential: true,
    description: "A small, semi-carnivorous creature related to sickles but smaller and covered in thick, soft fluff. Despite its size it is a major threat to humans: a fluffk wears the skin of its victims to get close to and eat other people. Fluffks are erratic and quite crazy, so their disguises are poor — wearers twitch, laugh at wrong moments, move stiffly and forget basic facts about the person or animal they are wearing.",
    habitat: "Houses with children or pets. Nests are hidden in laundry piles, under porches and inside stuffed-toy bins, lined with shed fluff.",
    signs: "A child, pet or other mammal that seems 'wrong' — loose or baggy skin, stiff movement, a smile that doesn't move, laughing at nothing, not recognizing family, wanting to be alone with someone. Tufts of grey fluff in clothing and bedding.",
    danger: "Extreme. A disguised fluffk will try to eat the people closest to the person it is wearing. When discovered it becomes frantic and unpredictable.",
    solution: "Do not confront or question the suspected individual. Separate everyone else from it calmly without signaling suspicion, leave the house and request immediate HSH containment. Never try to remove the 'skin'.",
    advice: "I need you to stay calm and not let them know anything is wrong. Make an excuse to take everyone else outside — don't be alone with them and don't try to check them. Lock the door behind you; our specialist team is coming right away.",
    notes: "CONFIDENTIAL: Never name the fluffk or mention skin-wearing. Refer only to 'a dangerous animal that may be hiding in the home'.",
  },
  {
    id: "orb", name: "The Orb", latin: "Sphaera ignota", threat: "MODERATE", day: 4, confidential: true,
    description: "Very little is known about the Orb. It is a floating, softly glowing sphere roughly the size of a basketball that appears inside houses without entering through any door or window. It speaks a short message in an unknown language — HSH linguists believe the messages describe something in the future — and then vanishes. No two recordings have matched, and no one has ever caught or photographed it clearly.",
    habitat: "Unknown. Appears indoors, most often in hallways, kitchens and living rooms, usually at night.",
    signs: "A glowing floating ball, humming, lights flickering, a voice speaking an unfamiliar language, clocks stopping and a static or ozone smell after it leaves.",
    danger: "No physical injuries have been recorded. Witnesses report headaches, ringing ears and lost minutes. The meaning of its messages — and whether they come true — is unknown.",
    solution: "Do not touch or follow it. Write down exactly what it said as best as possible and the time it appeared. Report the message to HSH so it can be logged; it leaves on its own.",
    advice: "Don't touch it or follow it — it will leave on its own. Please write down anything it said, even if it's just sounds, and the exact time. We'll log your report and send someone to take your notes.",
    notes: "CONFIDENTIAL: Do not call it 'the Orb'. Describe it as an unusual electrical or light phenomenon. All recorded messages go to HSH research.",
  },
  {
    id: "springin", name: "Springin", latin: "Arbor mendax", threat: "EXTREME", day: 4, confidential: true,
    description: "Springin — 'fake trees', as they are called in Dutch — look like ordinary young trees, but they speak fluent English. They lure children with friendly talk and convince them to commit horrible acts, and eventually persuade them to become one of them. How the transformation works is unknown. Converted children stand rigidly in the sun for hours, slowly taking root.",
    habitat: "Backyards, parks and lots near homes with children. A springin can appear overnight in a spot where no tree was planted.",
    signs: "Children doing things they would never do, secretive whispering in the yard, a new tree no one planted, a child standing perfectly still in the sun for hours, bark-like dry skin, dirt or sap on the feet.",
    danger: "Extreme for children. Children who are fully converted have not been recovered. Adults are usually ignored, but the trees will try to turn a child against their family.",
    solution: "Keep all children indoors and away from the tree, close blinds facing it and do not let anyone talk to it. Never cut or burn it yourself. Request immediate HSH removal; affected children need supervised care.",
    advice: "Bring your children inside right now and keep them away from that tree — close the curtains facing the yard. Don't cut it down or talk to it. Stay with your child and keep them out of the sun; our removal team is on the way.",
    notes: "CONFIDENTIAL: Never say the tree talks. Refer to it as 'a diseased tree' and the child's behavior as heat sickness.",
  },
  {
    id: "redacted", name: "##########", latin: "#### ######", threat: "EXTREME", day: 4, confidential: true,
    description: "##### ########## ################ ######### ####### ####### ######### rare ###### ######## ################# ######### ######## ###### ####.",
    habitat: "Closets. ####### ####### ######## ########.",
    signs: "Reports usually describe it in their closet. ####### ######## ###### ######## ############ ####### ####.",
    danger: "Unknown. ########## ########## ######## ######.",
    solution: "#### ######## ########## ##### ###### ######. Do not open the closet.",
    advice: "Please close the closet door and don't open it again. Leave that room and shut the door. We're sending someone; don't describe it to anyone else.",
    notes: "CONFIDENTIAL: FILE REDACTED BY ORDER OF HSH MANAGEMENT. ##### ######.",
  },
  {
    id: "fae", name: "Fae", latin: "Caro viridis", threat: "LOW", day: 4, confidential: true,
    description: "A giant, slowly growing mass of living flesh. Nobody knows how it grows — it has no visible mouth, roots or organs. It smells strongly of fresh-cut grass and is warm to the touch. HSH keeps a farm of fae at the office because it makes very good meat, but we are the only ones who know about it.",
    habitat: "Humid climates and humid rooms: basements, bathrooms, greenhouses, laundry rooms and crawl spaces near water.",
    signs: "A smell of fresh-cut grass indoors with no grass nearby, a warm pinkish lump that gets bigger every day, damp walls, a soft pulsing or gurgling sound.",
    danger: "Low. It does not attack. Large masses can block doorways, pull moisture from the room and attract other pests looking for food.",
    solution: "Do not cut, cook or eat it. Keep the room humid and undisturbed until collection. HSH will collect all of it — every sample is to be brought back to the office.",
    advice: "Please don't cut it, throw it away or touch it. Leave the room as it is and keep the door closed. We'll send a crew to collect it for free — we need all of it, so please don't let anyone else take it.",
    notes: "CONFIDENTIAL: Never mention the HSH fae farm or that it is edible. Always arrange collection for the office.",
  },
];

// 10 permanently classified files (sorted by hidden name)
const HIDDEN = [
  "Drywall Eel", "Fridge Tick", "Gutter Shrike", "Hollow Wasp", "Lamp Beetle",
  "Night Possum", "Oven Crab", "Quiet Spider", "Television Fly", "Vent Lamprey",
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
  symptoms?: [string, string, string];
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
  const replies = call.symptoms ?? SYMPTOMS[call.answer];
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
  3: [
    { caller: "Evelyn Price", location: "Findlay, OH", answer: "ballastmold", transcript: ["The mold on my old chair spread over the whole frame before lunchtime.", "Now that chair drags itself across the room. The black patches tighten and loosen like muscles.", "It bumped the door shut, and I haven't touched it."], symptoms: ["My eyes sting in that room. The chair knocked my ankle before I got out.", "On the chair in our damp spare room. Black patches pulse, and the chair moves by itself.", "The leak was yesterday. The mold covered it within hours and it started moving today."] },
    { caller: "Marcus Reed", location: "Newark, OH", answer: "bedsickle", transcript: ["Our big dog jumped onto the guest bed and disappeared. There's no way out of that room.", "Now the mattress is breathing even though nobody is on it.", "My daughter wants to go look for him. I've kept her outside the room."], symptoms: ["Our large dog is missing. Everyone else is out of the bedroom and accounted for.", "Inside the guest bed. Something breathes under the mattress and pulls the blanket inward.", "The bed felt lumpy for two nights. The dog disappeared this morning."] },
    { caller: "Nora Wells", location: "Sandusky, OH", answer: "watersprite", transcript: ["There are tiny flying bugs around every glass of water I leave out.", "They sit on the rims, and the water ripples when nobody touches the glass.", "I can hear a little humming, almost like someone rubbing a wet glass."], symptoms: ["Nobody's hurt, but we stopped drinking the water with those little pale flecks.", "Around uncovered glasses of water, especially the cup on my nightstand.", "Three evenings now. More bugs arrive whenever I leave another glass out."] },
    { caller: "Howard Ames", location: "Warren, OH", answer: "truesickle", transcript: ["We heard a little animal in the furnace and tried banging the vent to chase it away.", "After that there was a horrible scraping noise. Now something huge and person-shaped is crouching in the basement corner.", "It's still right beside the furnace. Its arms are thick and its claws scraped the concrete."], symptoms: ["Nobody's hurt yet. We are outside, but that thing could reach an adult easily.", "The basement corner by the furnace. The earlier small creature also stayed near the heat.", "The small noises lasted a week. The huge figure appeared after we banged on the vent today."] },
    { caller: "Diane Mercer", location: "Lancaster, OH", answer: "sodasprite", transcript: ["Very tiny bugs are crowding my open soda cans, but they ignore my water glass.", "There's sticky spray everywhere and the labels look shredded.", "I shook a can and they flew at my hand and started biting. I left the kitchen."], symptoms: ["My hand has painful bites from when I shook a can. Everyone is away from the kitchen now.", "Around soda cans and a sticky spill on the kitchen counter, not the plain water beside them.", "They showed up yesterday. The biting started today when the can was shaken."] }
  ],
  4: [
    { caller: "Herb Dunlap", location: "Marion, OH", answer: "atticgnome", transcript: ["I keep hearing hammering and little footsteps up in the attic.", "I went up there and found a whole rocking chair made out of soda cans and cardboard.", "And my trash bags keep disappearing from the garage."], symptoms: ["Nobody's hurt. Honestly it's kind of impressive.", "Up in the attic. There are tiny huts made of cans in the corner.", "About two weeks. The chair showed up after the first week."] },
    { caller: "Wendy Carr", location: "Elyria, OH", answer: "fluffk", transcript: ["Something is wrong with my son. He came in from the yard and he just... isn't him.", "His skin looks loose around the neck and he laughs when nothing is funny.", "He keeps asking his little sister to come play in the basement alone with him."], symptoms: ["He's not hurt, but he moves stiff, like he's wearing a costume. He didn't know his own dog's name.", "In the house. I found grey fluff all over his clothes.", "Since yesterday evening. He's acting stranger every hour."] },
    { caller: "Arthur Kim", location: "Kent, OH", answer: "orb", transcript: ["There was a glowing ball floating in my hallway last night.", "It hummed and then it talked — but in a language I've never heard.", "Then it was just gone. My clocks all stopped at 3:14."], symptoms: ["I've had ringing in my ears and a headache since. Nobody was hurt.", "The upstairs hallway. It smelled like a thunderstorm after.", "Just last night. It hasn't come back."] },
    { caller: "Lorraine Fisk", location: "Medina, OH", answer: "springin", transcript: ["My daughter has been doing things she'd never do. She cut up her brother's jacket and smiled about it.", "She keeps whispering to a little tree in the backyard. We never planted a tree there.", "Today she stood in the sun for four hours without moving."], symptoms: ["Her skin is dry and rough, almost like bark. She won't drink anything.", "By the new tree in the backyard. There's dirt all over her feet.", "About a week. That tree showed up the same morning."] },
    { caller: "Unknown Caller", location: "##, OH", answer: "redacted", transcript: ["There is something in my closet.", "I can't describe it. I tried. It's ###### and it ######.", "Please. What do I do? It knows I'm on the phone."], symptoms: ["I don't know. I can't remember what my hands did.", "The bedroom closet. The door is open a crack.", "It has always been there. I only just noticed."] },
    { caller: "Gene Tolliver", location: "Portsmouth, OH", answer: "fae", transcript: ["There's a big warm pink lump growing in my basement.", "It smells exactly like fresh cut grass down there, but it's winter.", "It's bigger every morning. It's the size of a couch now."], symptoms: ["Nobody's sick. It doesn't move or bite.", "The basement by the water heater. It's really humid down there.", "It started as a softball maybe a month ago."] },
  ],
};

// Authored alternatives: one variant is selected for each scheduled call per shift.
const ALTERNATE_CALLS: Record<string, Call[]> = {
  mole: [
    {"caller": "Frank Ellis", "location": "Ohio", "answer": "mole", "transcript": ["The flower bed is sinking into soft ridges. Fresh dirt mounds appear beside the tulips every morning.", "I saw a small dark animal with huge front paws vanish underground."], "symptoms": ["No injuries, just damaged flower roots.", "Outside in the flower bed; tunnels and fresh mounds surround the tulips.", "Five mornings, with a fresh mound each day."]},
    {"caller": "June Abbott", "location": "Ohio", "answer": "mole", "transcript": ["My backyard feels spongy and has raised tunnels. There are little volcano-shaped heaps by the sprinkler.", "I have not seen anything above ground, but the grass over those tunnels is dying."], "symptoms": ["Everyone is fine; the yard is the only damage.", "Under the backyard lawn beside the sprinkler, with soft ground and raised ridges.", "Two weeks; the dying grass patches are growing."]},
  ],
  rat: [
    {"caller": "Owen Nash", "location": "Ohio", "answer": "rat", "transcript": ["Something gnawed through a bag of rice in the basement. Dark little pellets are scattered along the wall.", "At night I hear scratching, and I saw a brown rodent with a long bare tail."], "symptoms": ["Nobody was bitten, but the rice is contaminated.", "In the basement food cupboard, with droppings along its baseboard.", "Six nights, and the rice bag was torn open yesterday."]},
    {"caller": "Rita Chen", "location": "Ohio", "answer": "rat", "transcript": ["The attic insulation has greasy tracks and little dark droppings. Something has chewed the cable up there.", "The scratching starts after midnight; I caught a glimpse of a long scaly tail."], "symptoms": ["Nobody is ill or hurt. I worry the chewed cable could start a fire.", "In the attic beside a damaged cable, with greasy tracks and pellet droppings.", "Ten days of night scratching; the cable damage is new."]},
  ],
  mold: [
    {"caller": "Paula Scott", "location": "Ohio", "answer": "mold", "transcript": ["A pipe leaked under our sink, and now there is greenish-black slimy growth on the cabinet wall.", "The kitchen smells musty and I keep coughing when I stand there."], "symptoms": ["I cough in the kitchen, but nobody has been injured.", "Inside the wet cabinet under the kitchen sink; dark slimy patches surround the leak.", "The leak lasted a week. The patches spread over the last three days."]},
    {"caller": "Victor Lane", "location": "Ohio", "answer": "mold", "transcript": ["The wallpaper in our basement is peeling over dark damp stains. It smells like wet earth.", "My wife gets a headache downstairs. Nothing is moving, it is just spreading over the wall."], "symptoms": ["My wife gets headaches and feels tired after being downstairs.", "On a basement wall behind peeling wallpaper; it is wet and stained green-black.", "Since last month's flood. The stains get wider each week."]},
  ],
  raccoon: [
    {"caller": "Dean Porter", "location": "Ohio", "answer": "raccoon", "transcript": ["There is a heavy animal in our chimney, making little chittering sounds after dark.", "I saw its black eye mask and striped tail when it peeked out. Our trash lid was pulled open too."], "symptoms": ["No bites or scratches. We have kept away from it.", "Inside the chimney, plus overturned trash outside.", "Three nights; the lid was opened again this morning."]},
    {"caller": "Alma Brooks", "location": "Ohio", "answer": "raccoon", "transcript": ["Something large crawled under the deck, with a grey body and a tail covered in rings.", "It tips the trash and thumps against the boards at night. I think there are babies with it."], "symptoms": ["Nobody is hurt; I have not cornered or touched it.", "Under our deck, near the trash cans; chittering and heavy thumps come from there.", "A week, mainly after sunset."]},
  ],
  termite: [
    {"caller": "Ben Foster", "location": "Ohio", "answer": "termite", "transcript": ["The porch support sounds hollow and has thin mud tunnels running up it.", "There are piles of tiny discarded wings at the door and the porch is sagging."], "symptoms": ["No illnesses, but we have stopped walking on the sagging porch.", "The wooden porch support and foundation; there are mud tubes and hollow wood.", "We noticed the sag yesterday; the tubes may have been there longer."]},
    {"caller": "Celia Ward", "location": "Ohio", "answer": "termite", "transcript": ["Paint on the window frame is bubbling, and the timber crumbles when pressed.", "I found little wings on the sill and mud tubes leading up from the soil."], "symptoms": ["Nobody is hurt, but the weakened frame worries me.", "At the downstairs window frame, with discarded wings and foundation mud tubes.", "A month of bubbling paint; the crumbling wood was noticed today."]},
  ],
  deskmoth: [
    {"caller": "Lester Boyd", "location": "Ohio", "answer": "deskmoth", "transcript": ["The nightstand drawer sticks and all the paper inside has been chewed. Brown dust coats everything.", "A huge wood-grain moth burst out toward my face. There is a strange cola smell."], "symptoms": ["My eyes are irritated from brown wing dust.", "Inside the wooden nightstand drawer, with chewed paper and a cola smell.", "Four nights of fluttering; it flew out today."]},
    {"caller": "Megan Ross", "location": "Ohio", "answer": "deskmoth", "transcript": ["My filing cabinet is full of brown dust and half the folders are eaten. I hear soft fluttering inside.", "A giant brown moth came out when I tried to shut the drawer, and my stapler is gone."], "symptoms": ["I have a rash on my wrist where its dusty wing brushed me.", "In the filing cabinet; eaten folders, missing supplies and brown dust.", "About a week; another folder disappears every night."]},
  ],
  mimic: [
    {"caller": "Walter Bell", "location": "Ohio", "answer": "mimic", "transcript": ["Our terrier has stopped eating but looks heavier. Its front joints bend backward.", "It never blinks and stands outside our bedroom. The whining sounds like a person."], "symptoms": ["Nobody is hurt, but the dog's eyes bulge and its joints look wrong.", "In the hallway outside our bedroom; it stands there motionless and makes human-like whines.", "Five days since its behavior changed; it keeps getting heavier without eating."]},
    {"caller": "Harriet Snow", "location": "Ohio", "answer": "mimic", "transcript": ["My shepherd stares at my son for hours. His eyes seem too large and his knees bend the wrong way.", "He barks when nobody is around and leaves his food untouched. He used to be normal."], "symptoms": ["The family is unharmed. The dog refuses food and has bulging eyes and backward-bending legs.", "By my son's room; he stares there without blinking.", "Three days; he no longer sleeps and stares all night."]},
  ],
  commonsickle: [
    {"caller": "Gordon Pike", "location": "Ohio", "answer": "commonsickle", "transcript": ["Our kitten vanished and something small with two legs sprinted behind the radiator.", "Its hands looked hooked. There are claw marks around the heat vent, which has been pulled loose."], "symptoms": ["The kitten is missing. Everyone here is accounted for, but we are scared.", "At the radiator and heating vent; a small two-legged shape with hooked hands ran there.", "Six days of vent scratching; the kitten vanished last night."]},
    {"caller": "Leah Grant", "location": "Ohio", "answer": "commonsickle", "transcript": ["My nephew is missing and the basement heater has long scratches beside it.", "I glimpsed a grey creature about two feet tall running on two legs into the warm duct."], "symptoms": ["My nephew is missing and police have been contacted. Nobody else here is hurt.", "Beside the basement heater and warm duct, with long claw scratches and a loose vent.", "The noises began two weeks ago; my nephew went missing today."]},
  ],
  pipesickle: [
    {"caller": "Eric Moss", "location": "Ohio", "answer": "pipesickle", "transcript": ["A pipe below the bathtub has a ragged chewed hole. Clicking comes from the drain.", "Our pet mouse went missing beside the bath. My wife was bitten when she touched the drain opening."], "symptoms": ["My wife has a deep finger wound and is seeking medical care. The mouse is missing.", "Inside the bathtub drain and the chewed pipe below it.", "Clicking for four days, then the leak and bite this morning."]},
    {"caller": "Tessa Ford", "location": "Ohio", "answer": "pipesickle", "transcript": ["Something clicked inside the laundry sink and chewed right through its pipe.", "Our small pet bird disappeared near it. I have kept the children away from the drain."], "symptoms": ["Nobody is injured, but the small bird is missing.", "The laundry sink plumbing, with clicking and a ragged hole leaking water.", "A week of clicking; the bird disappeared yesterday and the pipe leaked today."]},
  ],
  ballastmold: [
    {"caller": "Martin Shaw", "location": "Ohio", "answer": "ballastmold", "transcript": ["My child's wooden toy is covered in black mold. It walks across the table without batteries.", "The patches puff up and shrink in order. It spread from a wet shelf to the toy in one afternoon."], "symptoms": ["Nobody is injured. We moved the children out before touching the toy.", "On a wooden toy and wet shelf; the pulsing patches make the toy walk.", "The shelf got wet yesterday; the growth spread and started moving this afternoon."]},
    {"caller": "Sylvia Hart", "location": "Ohio", "answer": "ballastmold", "transcript": ["Black mold wrapped around a cupboard door after a leak. Now it opens and shuts by itself.", "The spots stretch and contract like muscles, and mold is reaching toward the chair beside it."], "symptoms": ["I have a cough in that room and the door struck my arm.", "Across a damp cupboard door, spreading toward an adjacent chair; the door moves by itself.", "Only two days since the leak. It grew across the door overnight."]},
  ],
  bedsickle: [
    {"caller": "Rachel Dunn", "location": "Ohio", "answer": "bedsickle", "transcript": ["My husband lay on the bed and vanished. The bedroom door was closed and the window locked.", "There is a deep hollow in the mattress and scratching inside the box spring."], "symptoms": ["My husband is missing; I have called emergency services and stayed off the bed.", "Inside our bed and box spring, with an unexplained hollow and scratching.", "The mattress made noises for three nights. My husband disappeared today."]},
    {"caller": "Neil Cross", "location": "Ohio", "answer": "bedsickle", "transcript": ["My child and our rabbit both went missing on the spare bed. We have searched everywhere else.", "The sheets keep pulling into the middle, and an empty mattress rises like something is breathing."], "symptoms": ["My child is missing and emergency services are on the way. The rabbit is gone too.", "On the spare bed; bedding draws inward and the empty mattress breathes.", "We heard noises yesterday. Both disappearances happened this morning."]},
  ],
  watersprite: [
    {"caller": "Doris Kent", "location": "Ohio", "answer": "watersprite", "transcript": ["Pale winged bugs circle our open water pitcher. They gather at the rim and make a ringing hum.", "There are damp tiny marks around it and flecks floating in the water."], "symptoms": ["No injuries; we have stopped using the pitcher.", "Around an uncovered water pitcher on the dining table, with ripples and pale flecks.", "Since the weekend; more arrive each evening."]},
    {"caller": "Alan Pierce", "location": "Ohio", "answer": "watersprite", "transcript": ["Tiny translucent-winged insects are crowding a cup of plain water beside my houseplant.", "They dip into it and make ripples. They are not eating my paperwork or touching soda."], "symptoms": ["One nipped my finger when I trapped it against the cup; everyone else is fine.", "At a plain water cup and wet houseplant tray; there are tiny winged bugs on the rims.", "Two nights; I noticed the humming again this morning."]},
  ],
  truesickle: [
    {"caller": "Felicia West", "location": "Ohio", "answer": "truesickle", "transcript": ["We tried clearing clicking bugs from a drain. Then something much larger smashed the pipe cover.", "Now a bulky humanoid crouches in the basement corner beside the water lines. It still claws at the drains."], "symptoms": ["Nobody is hurt; we left the house when the huge figure appeared.", "A basement corner beside water lines. The earlier problem was clicking and chewed drain pipes.", "The pipe trouble lasted several days. The large creature appeared after we disturbed it today."]},
    {"caller": "Stanley Webb", "location": "Ohio", "answer": "truesickle", "transcript": ["Something hid inside a mattress, so we tried cutting it open. A huge grey figure forced its way out.", "It moved to the basement corner where we store bedding. It is bulky, person-shaped and has hooked claws."], "symptoms": ["My brother has a scratch and is getting medical help. We are all outside now.", "In a basement corner by stored mattresses; it previously hid inside a bed.", "The bed noises lasted a week. It changed after the mattress was cut this morning."]},
  ],
  sodasprite: [
    {"caller": "Gloria Hines", "location": "Ohio", "answer": "sodasprite", "transcript": ["Little amber flying bugs are eating around the soda recycling bag and throwing sticky drops everywhere.", "I tried wiping the spill and they swarmed my sleeve. They leave the plain water alone."], "symptoms": ["I have small painful bites on my arm. Everyone has left that room.", "At soda residue and cans in a recycling bag; tiny amber insects scatter sticky droplets.", "Three days of sticky mess. They attacked when I tried cleaning today."]},
    {"caller": "Patrick Lowe", "location": "Ohio", "answer": "sodasprite", "transcript": ["There is sharp buzzing inside my fountain soda cup. Tiny bugs shredded the label and syrup is sprayed all around.", "When I swatted one, the others came at my face. I ran outside."], "symptoms": ["I was bitten near my cheek. My family is outside and away from them.", "At a fountain-drink cup and soda spill, not the covered water nearby.", "They appeared this afternoon and attacked as soon as I swatted one."]},
  ],
  atticgnome: [
    { caller: "Rosa Ingram", location: "Ohio", answer: "atticgnome", transcript: ["Someone built a full-size canoe in my attic out of cereal boxes and tin foil.", "At night there's tiny sawing sounds and my recycling bin is always empty."], symptoms: ["Nobody's hurt. My kids want to keep whatever it is.", "In the attic, behind the insulation. Little doors made of bottle caps.", "The canoe appeared in about a week."] },
    { caller: "Clyde Barker", location: "Ohio", answer: "atticgnome", transcript: ["I keep hearing tapping above my bedroom, and there's a dresser up there made of milk jugs.", "My old newspapers are gone and there are tiny boot prints in the dust."], symptoms: ["No one is hurt, it's just noisy.", "Over the bedroom in the attic. There's a whole tiny village of cans.", "A couple of weeks, and the building gets faster."] },
  ],
  fluffk: [
    { caller: "Maureen Pratt", location: "Ohio", answer: "fluffk", transcript: ["Our cat came back from outside and it's not right. It walks on its back legs when it thinks no one's looking.", "Its fur is baggy around the middle and it purrs like a person humming."], symptoms: ["It scratched my husband and laughed. Cats don't laugh.", "In the laundry room. There's grey fluff on everything.", "Two days ago."] },
    { caller: "Doug Fenwick", location: "Ohio", answer: "fluffk", transcript: ["My daughter's smile doesn't move. It just stays there.", "She forgot her own birthday and keeps sniffing her baby brother."], symptoms: ["She isn't hurt, but her skin looks too big for her hands.", "Her bedroom. The toy bin is stuffed with grey fluff.", "Since she came back from the park this morning."] },
  ],
  orb: [
    { caller: "Ida Monroe", location: "Ohio", answer: "orb", transcript: ["A glowing sphere floated through my kitchen and the lights flickered.", "It spoke a few words — not any language I know — and then it vanished."], symptoms: ["I lost about ten minutes. Otherwise I'm fine.", "In the kitchen above the table. Smelled like static after.", "Tonight, about an hour ago."] },
    { caller: "Ray Holloway", location: "Ohio", answer: "orb", transcript: ["A ball of light was hovering in my living room when I woke up.", "It said something strange, almost like it was warning me, and then it disappeared."], symptoms: ["My ears are ringing. Nobody's hurt.", "In the living room by the TV. The TV turned to static.", "This morning. First time ever."] },
  ],
  springin: [
    { caller: "Joan Mercer", location: "Ohio", answer: "springin", transcript: ["My son set the neighbor's shed on fire and said the tree told him to.", "There's a little tree by our fence that wasn't there last month."], symptoms: ["He's fine but he won't come inside. He stands in the sun all day.", "The backyard by the fence. His shoes are full of soil.", "About two weeks, and it's getting worse."] },
    { caller: "Hank Sorensen", location: "Ohio", answer: "springin", transcript: ["My twins stand perfectly still in the yard for hours, facing a new tree.", "They've started lying to us and hurting the dog. They were never like this."], symptoms: ["Their arms feel stiff and their skin is flaky like bark.", "In the front yard near a tree nobody planted.", "Since last weekend."] },
  ],
  redacted: [
    { caller: "Unknown Caller", location: "##, OH", answer: "redacted", transcript: ["My closet door won't stay closed.", "There's ###### inside. It is rare, isn't it? Someone told me it's rare."], symptoms: ["My daughter won't talk anymore.", "The hall closet.", "Since ######."] },
    { caller: "Unknown Caller", location: "##, OH", answer: "redacted", transcript: ["I keep seeing it in the closet. Only in the closet.", "########## ##### ####. I'm sorry, I can't say the rest."], symptoms: ["############.", "The closet under the stairs.", "I don't know. Time is wrong."] },
  ],
  fae: [
    { caller: "Peggy Lund", location: "Ohio", answer: "fae", transcript: ["There's a fleshy lump growing out of the wall of my bathroom.", "The bathroom smells like a freshly mowed lawn and the lump is warm."], symptoms: ["Nobody's sick. It just gurgles a little.", "In the bathroom behind the shower. It's always steamy there.", "A few weeks. It's doubled since Sunday."] },
    { caller: "Otis Crane", location: "Ohio", answer: "fae", transcript: ["My greenhouse has this huge pink growth on the floor, like meat.", "It smells like cut grass in there, stronger every day."], symptoms: ["My dog keeps trying to eat it, but no one's hurt.", "In the greenhouse, it's very humid in there.", "About a month."] },
  ],
};
export const CALL_VARIANTS: Record<string, Call[]> = Object.fromEntries(ENTRIES.map((entry) => {
  const original = Object.values(CALLS).flat().find((call) => call.answer === entry.id);
  return [entry.id, original ? [original, ...(ALTERNATE_CALLS[entry.id] ?? [])] : []];
}));
export function getShiftCalls(day: number, random: () => number = Math.random): Call[] {
  const scheduled = (CALLS[day] ?? []).map((call) => {
    const variants = CALL_VARIANTS[call.answer] ?? [call];
    return variants[Math.min(variants.length - 1, Math.max(0, Math.floor(random() * variants.length)))] ?? call;
  });
  // Shuffle call order every shift so no pest is always the first caller.
  for (let i = scheduled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const temp = scheduled[i]!;
    scheduled[i] = scheduled[j]!;
    scheduled[j] = temp;
  }
  return scheduled;
}
