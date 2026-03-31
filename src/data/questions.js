export const questions = [
  {
    id: 1,
    category: "Consistency",
    weight: 1.0,
    prompt: "I say I’ll do things (plans, calls, follow-ups) but don’t follow through.",
  },
  {
    id: 2,
    category: "Consistency",
    weight: 1.0,
    prompt: "My effort depends on my mood more than my commitment.",
  },
  {
    id: 3,
    category: "Communication",
    weight: 1.0,
    prompt: "I avoid difficult conversations even when they matter.",
  },
  {
    id: 4,
    category: "Communication",
    weight: 1.0,
    prompt: "I give unclear or mixed signals about my intentions.",
  },
  {
    id: 5,
    category: "Accountability",
    weight: 1.3,
    prompt: "When confronted, I tend to defend myself instead of listening.",
  },
  {
    id: 6,
    category: "Accountability",
    weight: 1.3,
    prompt: "I repeat behaviours I’ve already apologized for.",
  },
  {
    id: 7,
    category: "Emotional Regulation",
    weight: 1.4,
    prompt: "I react impulsively (anger, withdrawal, shutdown) during conflict.",
  },
  {
    id: 8,
    category: "Emotional Regulation",
    weight: 1.4,
    prompt: "I struggle to stay calm when something doesn’t go my way.",
  },
  {
    id: 9,
    category: "Respect & Boundaries",
    weight: 1.5,
    prompt: "I push or question boundaries instead of respecting them.",
  },
  {
    id: 10,
    category: "Respect & Boundaries",
    weight: 1.5,
    prompt: "I make jokes or comments that others have said hurt them.",
  },
  {
    id: 11,
    category: "Reciprocity",
    weight: 1.0,
    prompt: "I expect effort, attention, or care without consistently giving it.",
  },
  {
    id: 12,
    category: "Reciprocity",
    weight: 1.0,
    prompt: "I tend to show up more when I need something.",
  },
  {
    id: 13,
    category: "Control / Manipulation",
    weight: 2.0,
    prompt: "I use guilt, silence, or withdrawal to influence outcomes.",
  },
  {
    id: 14,
    category: "Control / Manipulation",
    weight: 2.0,
    prompt: "I become more invested only when I feel I might lose the person.",
  },
];

export const answerLabels = [
  { value: 0, label: "Rarely / Never" },
  { value: 1, label: "Sometimes" },
  { value: 2, label: "Often" },
  { value: 3, label: "Consistently" },
];

export const resultBands = [
  {
    min: 0,
    max: 15,
    title: "Self-Aware & Regulated",
    emoji: "🌱",
    summary:
      "You show a relatively strong baseline of awareness, accountability, and relational steadiness. That does not mean perfection — just fewer repeated high-impact patterns.",
    tone: "Keep checking in with yourself. Healthy people still have edges.",
  },
  {
    min: 16,
    max: 30,
    title: "Growth Areas Present",
    emoji: "🪴",
    summary:
      "Some patterns may create confusion or friction in relationships. These may be situational, stress-based, or habit-driven, but they are worth noticing.",
    tone: "Awareness here is a strength, not a drag.",
  },
  {
    min: 31,
    max: 50,
    title: "Repeated Behaviour Patterns",
    emoji: "🚧",
    summary:
      "There are repeated behaviours here that may impact trust, communication, or emotional stability in a relationship. This is a signal to reflect and make active changes.",
    tone: "Patterns are learned — which means they can be unlearned.",
  },
  {
    min: 51,
    max: 70,
    title: "High-Impact Patterns",
    emoji: "🚨",
    summary:
      "Some behaviours are showing up consistently in ways that may create meaningful instability, disrespect, or emotional harm in relationships. Reflection and change matter here.",
    tone: "This is not a life sentence. It is a wake-up call.",
  },
];

export const categoryDescriptions = {
  "Consistency": "How reliably your effort matches your words.",
  "Communication": "How clearly and directly you express yourself.",
  "Accountability": "How you respond when your behaviour affects someone else.",
  "Emotional Regulation": "How you handle upset, disappointment, and conflict.",
  "Respect & Boundaries": "How well you honour limits, feedback, and emotional safety.",
  "Reciprocity": "How balanced your effort and care are in connection.",
  "Control / Manipulation": "How often influence, guilt, or destabilizing behaviour shows up.",
};