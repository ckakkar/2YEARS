import { TimelineData } from '@/types/timeline';

// Helper function to format constellation date for display
function formatConstellationDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return `${monthNames[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
}

// Helper function to generate all months from Nov 2023 to Nov 2025
export function generateAllMonths(): TimelineData {
  const months: TimelineData['months'] = [];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Special dates with constellations
  const constellationDates: Record<string, string> = {
    "2023-11-13": "/constellations/nov-13-2023.jpg",
    "2023-11-16": "/constellations/nov-16-2023.jpg",
    "2023-12-01": "/constellations/dec-1-2023.jpg",
    "2023-12-24": "/constellations/dec-24-2023.jpg",
    "2024-02-04": "/constellations/feb-4-2024.jpg",
  };

  // Start from November 2023
  for (let year = 2023; year <= 2025; year++) {
    const startMonth = year === 2023 ? 11 : 1;
    const endMonth = year === 2025 ? 11 : 12;

    for (let month = startMonth; month <= endMonth; month++) {
      const monthKey = `${year}-${String(month).padStart(2, '0')}`;
      // Find constellation dates that match this year-month
      const matchingConstellation = Object.entries(constellationDates).find(([date]) => 
        date.startsWith(monthKey)
      );
      
      months.push({
        month: `${monthNames[month - 1]} ${year}`,
        year,
        monthNumber: month,
        cards: [], // You'll fill these in with actual photos and captions
        hasConstellation: !!matchingConstellation,
        constellationDate: matchingConstellation 
          ? formatConstellationDate(matchingConstellation[0])
          : undefined,
        constellationImage: matchingConstellation ? matchingConstellation[1] : undefined,
      });
    }
  }

  // Add sample cards for November 2023 (starting month)
  // REPLACE THESE WITH YOUR ACTUAL PHOTOS AND CAPTIONS
  months[0].cards = [
    {
      id: "nov-2023-1",
      photo: "/photos/nov-2023-1.jpg",
      caption: "Our first moment together, angel. This is where our beautiful journey began.",
      date: "November 13, 2023"
    },
    // Add 4-9 more cards for November 2023
  ];

  return { months };
}

// Example of filled timeline data for reference
// Uncomment and modify this when adding your actual content
/*
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
          date: "November 16, 2023"
        },
        {
          id: "nov-2023-3",
          photo: "/photos/nov-2023-3.jpg",
          caption: "You make everything better, puu. Your smile lights up my world.",
        },
        {
          id: "nov-2023-4",
          photo: "/photos/nov-2023-4.jpg",
          caption: "These moments are everything, puttu. I treasure every second.",
        },
        {
          id: "nov-2023-5",
          photo: "/photos/nov-2023-5.jpg",
          caption: "I'm so grateful for you, puchu. You've changed my life.",
        },
      ],
      hasConstellation: true,
      constellationDate: "Nov 13, 2023",
      constellationImage: "/constellations/nov-13-2023.jpg"
    },
    // Continue for all months...
  ]
};
*/