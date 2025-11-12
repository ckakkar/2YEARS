import { TimelineData } from '@/types/timeline';

/**
 * This is a SAMPLE file showing how to structure your timeline data.
 * Copy this structure to data/timeline.ts and fill in your actual photos and captions.
 */

export const sampleTimelineData: TimelineData = {
  months: [
    {
      month: "November 2023",
      year: 2023,
      monthNumber: 11,
      cards: [
        {
          id: "nov-2023-1",
          photo: "/photos/nov-2023-1.jpg",
          caption: "Our first moment together, angel. This is where it all began, love.",
          date: "November 13, 2023"
        },
        {
          id: "nov-2023-2",
          photo: "/photos/nov-2023-2.jpg",
          caption: "Every day with you feels like a dream, kutty baby.",
        },
        {
          id: "nov-2023-3",
          photo: "/photos/nov-2023-3.jpg",
          caption: "You make everything better, puu.",
        },
        {
          id: "nov-2023-4",
          photo: "/photos/nov-2023-4.jpg",
          caption: "These moments are everything, puttu.",
        },
        {
          id: "nov-2023-5",
          photo: "/photos/nov-2023-5.jpg",
          caption: "I'm so grateful for you, puchu.",
        },
      ],
      hasConstellation: true,
      constellationDate: "Nov 13, 2023",
      constellationImage: "/constellations/nov-13-2023.jpg"
    },
    {
      month: "December 2023",
      year: 2023,
      monthNumber: 12,
      cards: [
        {
          id: "dec-2023-1",
          photo: "/photos/dec-2023-1.jpg",
          caption: "December memories with you, love. The best month yet.",
        },
        {
          id: "dec-2023-2",
          photo: "/photos/dec-2023-2.jpg",
          caption: "You're my favorite person, angel.",
        },
        // Add 3-8 more cards for December
      ],
      hasConstellation: true,
      constellationDate: "Dec 1, 2023",
      constellationImage: "/constellations/dec-1-2023.jpg"
    },
    // Continue for all 25 months...
  ]
};

