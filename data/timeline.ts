import { TimelineData } from '@/types/timeline';

// Extend the TimelineCard type to include isSpecial
declare module '@/types/timeline' {
  interface TimelineCard {
    id: string;
    photo: string;
    caption: string;
    date?: string;
    isSpecial?: boolean;  // Add this for marking special memories
  }
}

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

  // Special dates with constellations - Add your special dates here!
  const constellationDates: Record<string, string> = {
    "2023-11-13": "/constellations/nov-13-2023.jpg",  // Anniversary
    "2023-11-16": "/constellations/nov-16-2023.jpg",  // First I love you
    "2023-12-01": "/constellations/dec-1-2023.jpg",   // Special memory
    "2023-12-24": "/constellations/dec-24-2023.jpg",  // Christmas Eve
    "2024-02-04": "/constellations/feb-4-2024.jpg",   // Weekend getaway
    "2024-02-14": "/constellations/feb-14-2024.jpg",  // Valentine's Day
    // Add more constellation dates as needed
  };

  // Generate all months
  for (let year = 2023; year <= 2025; year++) {
    const startMonth = year === 2023 ? 11 : 1;
    const endMonth = year === 2025 ? 11 : 12;

    for (let month = startMonth; month <= endMonth; month++) {
      const monthKey = `${year}-${String(month).padStart(2, '0')}`;
      const matchingConstellation = Object.entries(constellationDates).find(([date]) => 
        date.startsWith(monthKey)
      );
      
      months.push({
        month: `${monthNames[month - 1]} ${year}`,
        year,
        monthNumber: month,
        cards: [], // Will be filled below
        hasConstellation: !!matchingConstellation,
        constellationDate: matchingConstellation 
          ? formatConstellationDate(matchingConstellation[0])
          : undefined,
        constellationImage: matchingConstellation ? matchingConstellation[1] : undefined,
      });
    }
  }

  // ============================================
  // ADD YOUR PHOTOS AND MEMORIES BELOW
  // ============================================

  // NOVEMBER 2023 - Where it all began (months[0])
  months[0].cards = [
    {
      id: "nov-2023-1",
      photo: "/photos/nov-2023-1.jpg",
      caption: "Gosh darn this beautiful chapter started right here.",
      date: "November 13, 2023",
      isSpecial: true  // Mark anniversary as special
    },
    {
      id: "nov-2023-2",
      photo: "/photos/nov-2023-2.jpg",
      caption: "I was so nervous cause the night before I went to casino with my friends and I didn't wanted to wake up late and then be late to our date",
      date: "November 16, 2023"
    },
    {
      id: "nov-2023-3",
      photo: "/photos/nov-2023-3.jpg",
      caption: "Dancing in your kitchen at 2 AM, puu. No music, just us swaying to the rhythm of our hearts beating as one.",
    },
    {
      id: "nov-2023-4",
      photo: "/photos/nov-2023-4.jpg",
      caption: "You made me laugh until my sides hurt, dummy baby. That's when I knew you weren't just beautiful - you were my kind of chaos.",
    },
    {
      id: "nov-2023-5",
      photo: "/photos/nov-2023-5.jpg",
      caption: "Our first 'I love you', whispered under the stars. My heart has been yours ever since that moment, love.",
      isSpecial: true
    },
    {
      id: "nov-2023-6",
      photo: "/photos/nov-2023-6.jpg",
      caption: "Our first 'I love you', whispered under the stars. My heart has been yours ever since that moment, love.",
      isSpecial: true
    }
  ];

  // DECEMBER 2023 - First holidays together (months[1])
  months[1].cards = [
    {
      id: "dec-2023-1",
      photo: "/photos/dec-2023-1.jpg",
      caption: "Building our first snowman together, angel. You insisted on giving him a purple scarf, and suddenly he was perfect - just like us.",
      date: "December 1, 2023"
    },
    {
      id: "dec-2023-2",
      photo: "/photos/dec-2023-2.jpg",
      caption: "Christmas lights in your eyes, kutty baby. But honestly, they couldn't compete with the way you light up my world.",
      date: "December 24, 2023",
      isSpecial: true
    },
    {
      id: "dec-2023-3",
      photo: "/photos/dec-2023-3.jpg",
      caption: "New Year's Eve kiss that stopped time, puu. While everyone celebrated midnight, I was celebrating finding you.",
      date: "December 31, 2023",
      isSpecial: true
    }
  ];

  // JANUARY 2024 - New year, deeper love (months[2])
  months[2].cards = [
    {
      id: "jan-2024-1",
      photo: "/photos/jan-2024-1.jpg",
      caption: "New year's resolution: Love you more. Realized that's impossible, angel - I already love you with everything I have.",
      date: "January 1, 2024"
    },
    {
      id: "jan-2024-2",
      photo: "/photos/jan-2024-2.jpg",
      caption: "Snow day cuddles and hot chocolate, kutty baby. The world froze outside, but we were warm in our little bubble.",
    },
    {
      id: "jan-2024-3",
      photo: "/photos/jan-2024-3.jpg",
      caption: "Teaching you to ice skate, puu. We fell a hundred times but got up laughing every single time - that's us.",
    }
  ];

  // FEBRUARY 2024 - Valentine's and romance (months[3])
  months[3].cards = [
    {
      id: "feb-2024-1",
      photo: "/photos/feb-2024-1.jpg",
      caption: "That surprise weekend getaway, love. Waking up next to you in the mountains felt like heaven found earth.",
      date: "February 4, 2024",
      isSpecial: true
    },
    {
      id: "feb-2024-2",
      photo: "/photos/feb-2024-2.jpg",
      caption: "Our first Valentine's Day, angel. You turned a Hallmark holiday into pure magic with just your smile.",
      date: "February 14, 2024",
      isSpecial: true
    },
    {
      id: "feb-2024-3",
      photo: "/photos/feb-2024-3.jpg",
      caption: "Cooking disaster turned perfect night, dummy baby. The smoke alarm was worth it to see you laugh that hard.",
    }
  ];

  // MARCH 2024 (months[4])
  months[4].cards = [
    {
      id: "mar-2024-1",
      photo: "/photos/mar-2024-1.jpg",
      caption: "Spring arrived and so did new adventures, kutty baby. Every season with you feels like the first day of spring.",
    },
    // Add more March memories
  ];

  // APRIL 2024 (months[5])
  months[5].cards = [
    {
      id: "apr-2024-1",
      photo: "/photos/apr-2024-1.jpg",
      caption: "Rain dancing in April showers, puu. Getting soaked never felt so perfect.",
    },
    // Add more April memories
  ];

  // MAY 2024 (months[6])
  months[6].cards = [
    {
      id: "may-2024-1",
      photo: "/photos/may-2024-1.jpg",
      caption: "Flower fields and daisy chains, angel. You are my perpetual spring.",
    },
    // Add more May memories
  ];

  // JUNE 2024 - Summer begins (months[7])
  months[7].cards = [
    {
      id: "jun-2024-1",
      photo: "/photos/jun-2024-1.jpg",
      caption: "Beach days and salty kisses, kutty baby. You + sunset + ocean = my definition of perfection.",
    },
    {
      id: "jun-2024-2",
      photo: "/photos/jun-2024-2.jpg",
      caption: "That road trip playlist you made, love. Every song reminds me of windows down, your hand in mine, endless highways.",
    },
    {
      id: "jun-2024-3",
      photo: "/photos/jun-2024-3.jpg",
      caption: "Finding our secret spot, puu. This place will always be ours, just like my heart will always be yours.",
      isSpecial: true
    }
  ];

  // JULY 2024 (months[8])
  months[8].cards = [
    {
      id: "jul-2024-1",
      photo: "/photos/jul-2024-1.jpg",
      caption: "Fourth of July fireworks, angel. But the real sparks were in your eyes when you looked at me.",
      date: "July 4, 2024"
    },
    // Add more July memories
  ];

  // AUGUST 2024 (months[9])
  months[9].cards = [
    {
      id: "aug-2024-1",
      photo: "/photos/aug-2024-1.jpg",
      caption: "Late summer nights on the rooftop, kutty baby. Counting stars and realizing you're the only wish I need.",
    },
    // Add more August memories
  ];

  // SEPTEMBER 2024 (months[10])
  months[10].cards = [
    {
      id: "sep-2024-1",
      photo: "/photos/sep-2024-1.jpg",
      caption: "Fall arrived with golden leaves, puu. But you're still the most beautiful thing in every season.",
    },
    // Add more September memories
  ];

  // OCTOBER 2024 (months[11])
  months[11].cards = [
    {
      id: "oct-2024-1",
      photo: "/photos/oct-2024-1.jpg",
      caption: "Halloween costumes and candy corn, dummy baby. You make every day feel like a celebration.",
      date: "October 31, 2024"
    },
    // Add more October memories
  ];

  // NOVEMBER 2024 - First Anniversary! (months[12])
  months[12].cards = [
    {
      id: "nov-2024-1",
      photo: "/photos/nov-2024-1.jpg",
      caption: "ONE YEAR, angel! 365 days of loving you and I'm just getting started. Here's to forever and a day.",
      date: "November 13, 2024",
      isSpecial: true
    },
    // Add more anniversary month memories
  ];

  // Continue adding cards for remaining months...
  // months[13] = December 2024
  // months[14] = January 2025
  // ... and so on

  // NOVEMBER 2025 - Two Years! (months[24])
  months[24].cards = [
    {
      id: "nov-2025-1",
      photo: "/photos/nov-2025-1.jpg",
      caption: "TWO YEARS of us, Rose. 730 days, and every single one better than the last. You are my yesterday, today, and all my tomorrows.",
      date: "November 13, 2025",
      isSpecial: true
    },
    // Add your recent memories here
  ];

  return { months };
}

// ============================================
// PRO TIPS FOR ADDING YOUR CONTENT:
// ============================================
// 
// 1. PHOTOS:
//    - Name them consistently: month-year-number.jpg
//    - Keep them under 500KB for fast loading
//    - Use 4:3 ratio for best display
//
// 2. CAPTIONS:
//    - Mix short and long captions
//    - Use pet names naturally throughout
//    - Include specific details only you two would know
//    - Share how you FELT, not just what happened
//
// 3. SPECIAL DATES:
//    - Mark important dates with isSpecial: true
//    - Add constellation images for extra special dates
//    - Include the specific date when it matters
//
// 4. EMPTY MONTHS:
//    - It's okay to leave some months empty
//    - They'll show "Memories coming soon..."
//    - Focus on quality over quantity
//
// 5. CAPTION IDEAS:
//    - "The first time you..."
//    - "I'll never forget when..."
//    - "This was the moment I knew..."
//    - "Dancing with you..."
//    - "Laughing until..."
//
// Remember: This is YOUR love story. Make it personal, make it real, make it beautiful.