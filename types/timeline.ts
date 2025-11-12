export interface TimelineCard {
  id: string;
  photo: string; // path to photo
  caption: string;
  date?: string; // optional specific date within the month
}

export interface TimelineMonth {
  month: string; // "November 2023"
  year: number;
  monthNumber: number; // 1-12
  cards: TimelineCard[];
  hasConstellation?: boolean; // if this month has a special constellation date
  constellationDate?: string; // specific date like "Nov 13, 2023"
  constellationImage?: string; // path to constellation image
}

export interface TimelineData {
  months: TimelineMonth[];
}