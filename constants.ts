import { HierarchyLevel, LevelData } from './types';

export const HIERARCHY_DATA: Record<HierarchyLevel, LevelData> = {
  [HierarchyLevel.DH6]: {
    id: HierarchyLevel.DH6,
    name: "Refuting the Central Point",
    summary: "The highest form. Explicitly refuting the central point of the opposing argument. This is the most convincing and valuable form of disagreement.",
    quote: "The force of a refutation depends on what you refute.",
    colorClass: "bg-purple-600",
    hoverClass: "hover:bg-purple-500",
    textClass: "text-purple-600",
    widthPercent: "30%"
  },
  [HierarchyLevel.DH5]: {
    id: HierarchyLevel.DH5,
    name: "Refutation",
    summary: "Quoting a specific passage and explaining why it is mistaken. This requires finding a 'smoking gun' and addressing it directly.",
    quote: "To refute someone you probably have to quote them.",
    colorClass: "bg-indigo-600",
    hoverClass: "hover:bg-indigo-500",
    textClass: "text-indigo-600",
    widthPercent: "40%"
  },
  [HierarchyLevel.DH4]: {
    id: HierarchyLevel.DH4,
    name: "Counterargument",
    summary: "Contradiction plus reasoning and evidence. It can be convincing, but often addresses a slightly different point than the original argument.",
    quote: "Counterargument is contradiction plus reasoning and/or evidence.",
    colorClass: "bg-blue-500",
    hoverClass: "hover:bg-blue-400",
    textClass: "text-blue-500",
    widthPercent: "50%"
  },
  [HierarchyLevel.DH3]: {
    id: HierarchyLevel.DH3,
    name: "Contradiction",
    summary: "Stating the opposing case with little or no supporting evidence. It asserts the opposite but doesn't prove it.",
    quote: "The lowest form of response to an argument is simply to state the opposing case.",
    colorClass: "bg-teal-500",
    hoverClass: "hover:bg-teal-400",
    textClass: "text-teal-500",
    widthPercent: "60%"
  },
  [HierarchyLevel.DH2]: {
    id: HierarchyLevel.DH2,
    name: "Responding to Tone",
    summary: "Criticizing the way the argument was written (tone, style) rather than the validity of the argument itself.",
    quote: "It matters much more whether the author is wrong or right than what his tone is.",
    colorClass: "bg-yellow-500",
    hoverClass: "hover:bg-yellow-400",
    textClass: "text-yellow-600",
    widthPercent: "70%"
  },
  [HierarchyLevel.DH1]: {
    id: HierarchyLevel.DH1,
    name: "Ad Hominem",
    summary: "Attacking the author rather than the argument. This questions the author's authority or character instead of their logic.",
    quote: "If there's something wrong with the senator's argument, you should say what it is.",
    colorClass: "bg-orange-500",
    hoverClass: "hover:bg-orange-400",
    textClass: "text-orange-500",
    widthPercent: "80%"
  },
  [HierarchyLevel.DH0]: {
    id: HierarchyLevel.DH0,
    name: "Name-calling",
    summary: "The lowest form of disagreement. Simple insults without any argument or evidence.",
    quote: "u r a fag!!!!!!!!!!",
    colorClass: "bg-red-600",
    hoverClass: "hover:bg-red-500",
    textClass: "text-red-600",
    widthPercent: "90%"
  }
};

export const LEVELS_ORDERED = [
  HierarchyLevel.DH6,
  HierarchyLevel.DH5,
  HierarchyLevel.DH4,
  HierarchyLevel.DH3,
  HierarchyLevel.DH2,
  HierarchyLevel.DH1,
  HierarchyLevel.DH0,
];