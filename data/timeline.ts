import { TimelineData } from '@/types/timeline';

// This is a template structure - you'll fill in the actual photos and captions
export const timelineData: TimelineData = {
  months: [
    {
      month: "November 2023",
      year: 2023,
      monthNumber: 11,
      cards: [
        {
          id: "nov-2023-1",
          photo: "/photos/nov-2023-1.jpg",
          caption: "Our first moment together, angel. This is where it all began.",
          date: "November 13, 2023"
        },
        // Add 4-9 more cards for November 2023
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
          caption: "December memories with you, love.",
        },
        // Add 4-9 more cards for December 2023
      ],
      hasConstellation: true,
      constellationDate: "Dec 1, 2023",
      constellationImage: "/constellations/dec-1-2023.jpg"
    },
    // Add months from January 2024 through November 2025
    // Each month should have 5-10 cards
  ]
};

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
        cards: [], // You'll fill these in
        hasConstellation: !!matchingConstellation,
        constellationDate: matchingConstellation 
          ? formatConstellationDate(matchingConstellation[0])
          : undefined,
        constellationImage: matchingConstellation ? matchingConstellation[1] : undefined,
      });
    }
  }

  return { months };
}

