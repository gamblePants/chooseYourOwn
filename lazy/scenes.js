var scenes = [{
	name: "INTRO",
	description: "You stand at the entrance of a cave, wet and taking shelter from the rain that has drenched you for days. You have the sniffles. Do you:",
	choice1: "Go inside the cavern",
	choice2: "Head back out to the wilderness",
	choice3: "",
	result1: "CAVERN",
	result2: "OUTSIDE",
	result3: ""
  },
  {
	name: "CAVERN",
	description: "You walk deeper in to the cavern and see a rusty lantern on the ground. The cave ahead narrows and disappears in to darkness.",
	choice1: "Head back to the entrance",
	choice2: "Pick up the lantern",
	choice3: "Continue in to darkness",
	result1: "INTRO",
	result2: "LANTERN",
	result3: "DARKNESS"
  },
  {
	name: "OUTSIDE",
	description: "You head back out to the forest. Shivering, you wander through wet branches until it's too dark to see. You crawl under a log.<br ><br >The next morning you wake to a coughing fit. Your lungs are rattling with phlegm, but you press on. As the days go by your cough becomes worse until the last day, when you lie in agony on the forest floor, drowning in your own mucus. You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "DARKNESS",
	description: "Holding against the rock's face you inch your way to the back of the cave. But all you see is black. You stumble and hit your head as the floor dips down. Now you're all but crawling, groping at the rock.",
	choice1: "Head back to the light",
	choice2: "Continue groping",
	choice3: "",
	result1: "CAVERN",
	result2: "FALLDOWN",
	result3: ""
  },
  {
	name: "FALLDOWN",
	description: "Blindly climbing down, the rocks suddenly give way underneath! You're sent sprawling out in to the nothing below.<br ><br >Your head cracks on the rock and you fall in a heap. A boulder rolls on to your head. As your skull caves in, you feel your eyeballs squish and you think \"Huh, didn't see that coming.\"",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "LANTERN",
	description: "The lantern has fuel, so you light it up and it casts a warm yellow glow around. The warmth cheers you up. Maybe.. just maybe.. you won't die today.. <br ><br >Continuing on, with one hand on the rock face, you whistle a tune and the cave whistles it back. But as you listen, the rocks give way under your feet! You jump back just as they drop away in to a jagged crevasse.",
	choice1: "Jump down in to the crevasse",
	choice2: "Pick nose",
	choice3: "Look for another way",
	result1: "CREVASSE",
	result2: "PICKNOSE",
	result3: "TUNNEL"
  },
  {
	name: "CREVASSE",
	description: "You jump in to the crevasse, fear gripping your heart. As you plunge in the dark every nerve in your body surges with panic!<br ><br >But then you realise you're <i>dreaming</i>. You float up and away from danger, your body light with relief. You're now standing in a green meadow spotted with wildflowers. Do you want to be:",
	choice1: "A horse",
	choice2: "An ostrich",
	choice3: "You, but more hairy",
	result1: "HORSE",
	result2: "OSTRICH",
	result3: "HAIRY"
  },
  {
	name: "PICKNOSE",
	description: "Hmmm. Nothing like a good nose picking. You get some slippery ones.",
	choice1: "Jump down in to the crevasse",
	choice2: "Pick nose",
	choice3: "Look for another way",
	result1: "CREVASSE",
	result2: "PICKNOSE2",
	result3: "TUNNEL"
  },
   {
	name: "PICKNOSE2",
	description: "Nope. Nothing left now.",
	choice1: "Jump down in to the crevasse",
	choice2: "Look for another way",
	choice3: "",
	result1: "CREVASSE",
	result2: "TUNNEL",
	result3: ""
  },
  {
	name: "TUNNEL",
	description: "You shine your lamp on a pile of rocks, and find a small tunnel cut in the rock. Down on your knees you scrape and shuffle until you can go no further, because the programmer hasn't finished making the game yet.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "HORSE",
	description: "You're having so much fun frolicking around the meadow! You eat some flowers, and then you see some more horses! Do you want to:",
	choice1: "Fight one of the horses",
	choice2: "Hump one of the horses",
	choice3: "Just horse around",
	result1: "FIGHT",
	result2: "HUMP",
	result3: "AROUND"
  },
  {
	name: "OSTRICH",
	description: "You're a huge ostrich, fanning your feathers and strutting about! You prance in the meadow, legs and wings flailing about like a demented prehistoric ballerina.<br ><br >Uh-oh, some ostrich hunters over the hill! Quickly you bury your head in the sand. Your big, fluffy feathered bottom is blasted by buckshot. You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "HAIRY",
	description: "Wow. You're so hairy. Your beard is bristling out by 1 foot and your eyebrows droop down to your cheeks. Cut the stuff, and it sprouts back in front of your eyes! You start a business, stuffing pillows with your hair and selling them at the market. How much do you want to charge?",
	choice1: "50c",
	choice2: "$10",
	choice3: "$50",
	result1: "HALF",
	result2: "TEN",
	result3: "FIFTY"
  },
  {
	name: "FIGHT",
	description: "A white and grey stallion stands apart from the herd. You're jealous of his fine silvery coat. The two of you buck and kick and twist, hooves colliding. The stallion spins away from you and bucks both back legs straight in to your head. You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "HUMP",
	description: "You have wild horse sex! With bestial enthusiasm you and the herd turn the afternoon in to a frenzy of love far too graphic for this game. Afterwards you lie in the flowers, discussing philosophy.<br ><br >It feels like you've forgotten something. Distracted, you get up and wander away from your horse friends. You find yourself at the entrance of a cavern. It smells familiar and smoky. Wandering in you see a light at the far end and find a guttering torch set in the rock wall. There are three doors in front of you.",
	choice1: "Take the left door",
	choice2: "Take the middle door",
	choice3: "Take the right door",
	result1: "CHANGEMIND",
	result2: "MIDDLEDOOR",
	result3: "RIGHTDOOR"
  },
  {
	name: "AROUND",
	description: "You play a practical joke on one of the horses, putting blue food colouring in her soap dispenser. She gets blue spots all over her! The horses whinnie with laughter at her misfortune. But alas, that particular shade of midnight blue is attractive to the Mongolian killer bee. Laughter turns to anaphylactic gasps, as the herd is swallowed by an angry buzzing cloud of death",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "TEN",
	description: "Your hair pillows are great success! Super-soft and sleep inducing, you sell billions. But with success comes boredom. Is this all there is to life? You're so bored that you sit still for a long time. You sit for so long that you become a statue. Your once lucrative hair hardens to rock. <br ><br >Eventually someone purchases you to decorate their underground citadel. You're in a dark room, lit by a dwindling smoky torch. Busting to go to the toilet, you stretch and move and the rock crumbles away from your skin. There are 3 doors in front of you.",
	choice1: "Take the left door",
	choice2: "Take the middle door",
	choice3: "Take the right door",
	result1: "CHANGEMIND",
	result2: "MIDDLEDOOR",
	result3: "RIGHTDOOR"
  },
  {
	name: "HALF",
	description: "At 50c a pillow you don't make enough to cover your expenses. You take a loan from a notorious gang of criminal horses. On collection day, you can only pay them hair. They neigh \"Grose!\", trample you, and place your severed head in the bed of a rival pony. You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "FIFTY",
	description: "The first horse who comes to your store is outraged. \"Fifty bucks! Ugh! Capitalist pigs have such GREEDY dreams!\", and before you can say \"Horses don't shop!\", you realise he's right.. you are indeed dreaming and with that you wake.<br ><br >A bit dazed, you lie in bed for a while, wondering what Freud said about horse dreams. After a while you realise you're late for work! You dress without showering and hurry the street, distracted. You are hit by a bus and die.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
  },
  {
	name: "CHANGEMIND",
	description: "As you reach out for the door handle something doesn't seem quite right. You stop, change your mind and reach for the door on the right instead.",
	choice1: "Continue",
	choice2: "",
	choice3: "",
	result1: "RIGHTDOOR",
	result2: "",
	result3: ""
	},
  {
	name: "RIGHTDOOR",
	description: "\"Oh you can't go in that room, my stuff's in there\". You turn to see a small man with a little white beard standing by your side. He wears a patchwork hat and a woollen coat. You say to him in a croaky voice:",
	choice1: "\"Where did you come from?\"",
	choice2: "\"Who runs this place?\"",
	choice3: "\"Step aside old man. No-one stands in my way!\"",
	result1: "WHERE",
	result2: "RUNS",
	result3: "ASIDE"
	},
	{
	name: "WHERE",
	description: "\"Well, we are all beings of light, waiting for the next vibrational shift of consciousness. You will know when the shift is happening because of the frequency. Some people describe it like the sound of a trumpet. You and I both come from the same place, a galaxy about 98,000 light years from here.\"",
	choice1: "\"Do you have the time?\"",
	choice2: "\"Who runs this place?\"",
	choice3: "\"Step aside old man. No-one stands in my way!\"",
	result1: "TIME",
	result2: "RUNS",
	result3: "ASIDE"
	},
	{
	name: "TIME",
	description: "\"Yes, I have all the time in the world\". You look at him. He looks at you.",
	choice1: "Take the left door",
	choice2: "Take the middle door",
	choice3: "",
	result1: "LEFTDOOR",
	result2: "MIDDLEDOOR",
	result3: ""
	},
	{
	name: "RUNS",
	description: "\"Oh nobody does much running around here. Too dangerous you know, with all this rock to fall in to.\"",
	choice1: "Take the left door",
	choice2: "Take the middle door",
	choice3: "",
	result1: "LEFTDOOR",
	result2: "MIDDLEDOOR",
	result3: ""
	},
	{
	name: "ASIDE",
	description: "\"Ok, well don't say I didn't warn you.\" Ignoring the little man you open the right door and stride through in to the next room. It's full of stuff! There are paper stacks and piles of books so high that they crowd and teeter overhead. <br ><br >Picking your path cautiously through the junk you try to find your way to the other side. You brush against a pillar of newspapers and it pitches forward, paper and books raining down! Buried under a pile of forgotten paper, you are forgotten.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
	},
	{
	name: "MIDDLEDOOR",
	description: "You push the door but it only opens part way. A fetid odour washes over your face and makes you cover your mouth. Resolutely, you force the door open and peer in. You see what looks like a wooden desk by the far wall and a skeletal figure slumped over it.",
	choice1: "Ignore the stench and step in",
	choice2: "Retreat and try another door",
	choice3: "",
	result1: "STEPIN",
	result2: "RETREAT",
	result3: ""
	},
	{
	name: "STEPIN",
	description: "As you walk through the smell, the figure twitches. The withered head rises, pullling strands of hair up from the desk. It's Margaret Thatcher. Your heart squeezes tight as you feel the collective rage of the proletariat! You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
	},
	{
	name: "RETREAT",
	description: "You turn to leave but your legs are too heavy, as if buried in wet cement! You claw at the ground with your hands but some unseen force holds you down.<br ><br >At the end of the room, the figure rises. A low moan complains from the withered lips.. of Margaret Thatcher. Your heart squeezes tight as you feel the collective rage of the proletariat! You have died.",
	choice1: "Play Again",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
	},
	{
	name: "LEFTDOOR",
	description: "The door opens to a small bedroom. Someone has left a fire crackling in the hearth. There is a soft arm chair, a bed and even a little toilet in the corner. Hurrying to the corner you drop your trousers and piss with great relief!<br ><br >Satisfied, you flop down in the arm chair. A great sense of peace fills you. In the distance, you hear what sounds like notes of a trumpet, they escape higher and higher and then fade away. You live! Congratulations. Gain 4 dork points.",
	choice1: "",
	choice2: "",
	choice3: "",
	result1: "",
	result2: "",
	result3: ""
	}
];