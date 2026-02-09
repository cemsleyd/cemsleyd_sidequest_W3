let currentScene = "pathStart";
let buttons = [];

/* ---------- STORY DATA ---------- */
const scenes = {
  pathStart: {
    text: "You are a mailperson in the underground kingdom of bugs and critter, traveling along a winding dirt path to deliver an important letter to the king.\n\nThe path splits ahead of you.",
    choices: [
      { label: "Take the tricky shortcut", next: "deadShortcut" },
      { label: "Take the long way round", next: "longWay" },
    ],
  },

  deadShortcut: {
    text: "You attempt the shortcut. The ground crumbles beneath you, you fall into a nest of ravenous ants.\n\nYour journey ends here.",
    choices: [{ label: "Restart", next: "pathStart" }],
  },

  longWay: {
    text: 'You choose the long way around. The path is slow but steady.\n\nA large caterpillar slithers up beside you and speaks softly:\n\n"This road has a ghoul on it. Follow me through the woods — it will be safer."',
    choices: [
      { label: "Follow the caterpillar", next: "deadCaterpillar" },
      { label: "Stay on the path", next: "cave" },
    ],
  },

  deadCaterpillar: {
    text: "You follow the caterpillar into the woods.\n\nMoments later, it makes a strange sound, a calling. More caterpillars arrive.\n\nThe forest grows silent.",
    choices: [{ label: "Restart", next: "pathStart" }],
  },

  cave: {
    text: "The path leads to a dark cave. You see a faint glow at the far end — the kingdom at last.\n\nThe cave is pitch black, and you hear faint skittering sounds.",
    choices: [
      { label: "Sprint through the cave", next: "win" },
      { label: "Skulk carefully in the dark", next: "deadEarwigs" },
    ],
  },

  deadEarwigs: {
    text: "You move steadly through the darkness.\n\nSuddenly, earwigs swarm from the walls and overwhelm you.\n\nYou never make it.",
    choices: [{ label: "Restart", next: "pathStart" }],
  },

  win: {
    text: "You sprint through the cave, barely stopping to breathe.\n\nYou burst into the glowing town, letter still intact.\n\nYou survived — and the mail is delivered to the king.",
    choices: [{ label: "Play Again", next: "pathStart" }],
  },
};
