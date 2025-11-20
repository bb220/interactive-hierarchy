export enum HierarchyLevel {
  DH0 = 'DH0',
  DH1 = 'DH1',
  DH2 = 'DH2',
  DH3 = 'DH3',
  DH4 = 'DH4',
  DH5 = 'DH5',
  DH6 = 'DH6',
}

export interface LevelData {
  id: HierarchyLevel;
  name: string;
  summary: string;
  quote: string;
  colorClass: string; // Tailwind background class
  hoverClass: string;
  textClass: string; // Tailwind text color class
  widthPercent: string; // For the pyramid shape
}

export interface GeneratorState {
  isLoading: boolean;
  result: string | null;
  error: string | null;
}