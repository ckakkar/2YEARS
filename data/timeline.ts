import { TimelineData, TimelineCard } from '@/types/timeline';

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
  // 
  // TIP: Use \n in captions to create line breaks for better formatting!
  // Example: "First line\n\nSecond line" creates a paragraph break

  // NOVEMBER 2023 - Where it all began (months[0])
  months[0].cards = [
    {
      id: "nov-2023-1",
      photo: "/photos/nov-2023-1.jpg",
      caption: "Gosh darn this beautiful chapter started right here.\n\nHonest to god this is the best text I ever sent.",
      isSpecial: true  // Mark anniversary as special
    },
    {
      id: "nov-2023-2",
      photo: "/photos/nov-2023-2.jpg",
      caption: "I remember the night before I went to casino with my friends for Diwali.\n\nDidn't want to wake up late and miss a second with you. I was even texting you that night.",
    },
    {
      id: "nov-2023-3",
      photo: "/photos/nov-2023-3.jpg",
      caption: "The best MF day I have ever had, the best date, the company and the best MF kiss.\n\nAND yes, I'll potek you-ALWAYS.",
      isSpecial: true  // Mark anniversary as special
    },
    {
      id: "nov-2023-4",
      photo: "/photos/nov-2023-4.jpg",
      caption: "The first time we had sex kutty, we just got progressively better but this was the start of my cunt struck era.\n\nBTW this is the beginning of a very iconic photo pose for us.",
      isSpecial: true
    },
    {
      id: "nov-2023-5",
      photo: "/photos/nov-2023-5.jpg",
      caption: "Challamae, honestly I just loved hanging with you after meeting you once.\n\nLike for my anti-social ass, it was super weird.",
    },
    {
      id: "nov-2023-6",
      photo: "/photos/nov-2023-6.jpg",
      caption: "Our first time at waterfront, this day was so nice, and this hug was just perfect.\n\nBy this time, I knew you were way too perfect and I had wierd thing in me that I don't wanna fuck up.",
    }
  ];

  // DECEMBER 2023 - First holidays together (months[1])
  months[1].cards = [
    {
      id: "dec-2023-1",
      photo: "/photos/dec-2023-1.jpg",
      caption: "Periya study baby you are? I had so much shit to do this day but I couldn't keep my eyes off of you.",
    },
    {
      id: "dec-2023-2",
      photo: "/photos/dec-2023-2.jpg",
      caption: "I fell for that smile so hard, I still am.\n\nThis was our first nights together, even more than sex, the sleep hit sooooo mf hard.",
      isSpecial: true
    },
    {
      id: "dec-2023-3",
      photo: "/photos/dec-2023-3.jpg",
      caption: "Denny's was such vibe this day, I remember you wanted to go out, we decided to go to denny's and after that we didn't had in us to go out anymore-so we went back home like a couple of kutty kutty babies.",
    },
    {
      id: "dec-2023-4",
      photo: "/photos/dec-2023-4.jpg",
      caption: "SEE the pose and those mf EYES-I can drown to death in em and I'd be the most peaceful.",
    },
    {
      id: "dec-2023-5",
      photo: "/photos/dec-2023-5.jpg",
      caption: "I thought you would have been weirded out by how much I wanted to touch you right off the bat, you you kinda weird too-I loved it.",
    },
    {
      id: "dec-2023-6",
      photo: "/photos/dec-2023-6.jpg",
      caption: "I loved this night, it nice to reminisce about it.\n\nI loved coming here with you, how scared initially you were to go there but shit I loved caring for you, loving you and protecting you.",
    },
    {
      id: "dec-2023-7",
      photo: "/photos/dec-2023-7.jpg",
      caption: "This a start of a very very beautiful tradition.\n\nI'll continue this till the day I die.",
    },
    {
      id: "dec-2023-8",
      photo: "/photos/dec-2023-8.MOV",
      caption: "My lil kutty you look heaven sent, so mf beautiful, those curls, those eyes, those lips; those everything.\n\nBut the look you give me and my beard line-PEAK.",
    },
    {
      id: "dec-2023-9",
      photo: "/photos/dec-2023-9.jpg",
      caption: "Late night conversations by the fireplace, kutty baby.\n\nTime stood still when we talked, and I never wanted those moments to end.",
    },
    {
      id: "dec-2023-10",
      photo: "/photos/dec-2023-10.jpg",
      caption: "December magic wrapped in your smile, love.\n\nYou turned the coldest month into the warmest memories of my life.",
    }
  ];

  // JANUARY 2024 - New year, deeper love (months[2])
  months[2].cards = [
    {
      id: "jan-2024-1",
      photo: "/photos/jan-2024-1.jpg",
      caption: "New year's resolution: Love you more.\n\nRealized that's impossible, angel - I already love you with everything I have.",
      date: "January 1, 2024"
    },
    {
      id: "jan-2024-2",
      photo: "/photos/jan-2024-2.jpg",
      caption: "Snow day cuddles and hot chocolate, kutty baby.\n\nThe world froze outside, but we were warm in our little bubble.",
    },
    {
      id: "jan-2024-3",
      photo: "/photos/jan-2024-3.jpg",
      caption: "Teaching you to ice skate, puu.\n\nWe fell a hundred times but got up laughing every single time - that's us.",
    },
    {
      id: "jan-2024-4",
      photo: "/photos/jan-2024-4.jpg",
      caption: "That cozy Sunday morning, love.\n\nWaking up next to you felt like winning the lottery every single day.",
    },
    {
      id: "jan-2024-5",
      photo: "/photos/jan-2024-5.jpg",
      caption: "Making breakfast together in pajamas, dummy baby.\n\nEven burnt toast tasted perfect when we made it together.",
    },
    {
      id: "jan-2024-6",
      photo: "/photos/jan-2024-6.jpg",
      caption: "January sunsets and your hand in mine, puu.\n\nEvery evening felt like a promise of forever.",
    }
  ];

  // FEBRUARY 2024 - Valentine's and romance (months[3])
  months[3].cards = [
    {
      id: "feb-2024-1",
      photo: "/photos/feb-2024-1.jpg",
      caption: "That surprise weekend getaway, love.\n\nWaking up next to you in the mountains felt like heaven found earth.",
      date: "February 4, 2024",
      isSpecial: true
    },
    {
      id: "feb-2024-2",
      photo: "/photos/feb-2024-2.jpg",
      caption: "Our first Valentine's Day, angel.\n\nYou turned a Hallmark holiday into pure magic with just your smile.",
      date: "February 14, 2024",
      isSpecial: true
    },
    {
      id: "feb-2024-3",
      photo: "/photos/feb-2024-3.jpg",
      caption: "Cooking disaster turned perfect night, dummy baby.\n\nThe smoke alarm was worth it to see you laugh that hard.",
    },
    {
      id: "feb-2024-4",
      photo: "/photos/feb-2024-4.jpg",
      caption: "Late night walks in the cold, kutty baby.\n\nYou made even freezing temperatures feel warm with your hand in mine.",
    },
    {
      id: "feb-2024-5",
      photo: "/photos/feb-2024-5.jpg",
      caption: "That movie night when we forgot to watch the movie, puu.\n\nWe got too lost in each other to care about anything else.",
    }
  ];

  // MARCH 2024 (months[4])
  months[4].cards = [
    {
      id: "mar-2024-1",
      photo: "/photos/mar-2024-1.jpg",
      caption: "Spring arrived and so did new adventures, kutty baby.\n\nEvery season with you feels like the first day of spring.",
    },
    {
      id: "mar-2024-2",
      photo: "/photos/mar-2024-2.jpg",
      caption: "First picnic of the year, love.\n\nYou packed everything perfectly, and I packed you - the only thing that mattered.",
    },
    {
      id: "mar-2024-3",
      photo: "/photos/mar-2024-3.jpg",
      caption: "Cherry blossoms and your laugh, angel.\n\nNature tried its best, but you're still the most beautiful thing in bloom.",
    },
    {
      id: "mar-2024-4",
      photo: "/photos/mar-2024-4.jpg",
      caption: "That rainy day we stayed in bed, puu.\n\nThunder outside, peace inside - just us and nowhere to be.",
    },
    {
      id: "mar-2024-5",
      photo: "/photos/mar-2024-5.jpg",
      caption: "Teaching you to ride a bike, dummy baby.\n\nYou fell, I caught you, and we both ended up laughing on the grass.",
    },
    {
      id: "mar-2024-6",
      photo: "/photos/mar-2024-6.jpg",
      caption: "Morning coffee runs became our ritual, kutty baby.\n\nEvery sunrise tasted better when shared with you.",
    },
    {
      id: "mar-2024-7",
      photo: "/photos/mar-2024-7.mov",
      caption: "That spontaneous road trip, love.\n\nWindows down, music up, and your hand finding mine at every red light.",
    },
    {
      id: "mar-2024-8",
      photo: "/photos/mar-2024-8.jpg",
      caption: "Stargazing on the rooftop, puu.\n\nYou pointed at constellations, I pointed at you - the brightest star in my sky.",
    },
    {
      id: "mar-2024-9",
      photo: "/photos/mar-2024-9.jpg",
      caption: "Dancing in the kitchen again, angel.\n\nThis time with music, but we still moved to our own rhythm.",
    }
  ];

  // APRIL 2024 (months[5])
  months[5].cards = [
    {
      id: "apr-2024-1",
      photo: "/photos/apr-2024-1.jpg",
      caption: "Rain dancing in April showers, puu.\n\nGetting soaked never felt so perfect.",
    },
    {
      id: "apr-2024-2",
      photo: "/photos/apr-2024-2.jpg",
      caption: "Easter morning and your sleepy smile, love.\n\nYou made even waking up early feel like a gift.",
    },
    {
      id: "apr-2024-3",
      photo: "/photos/apr-2024-3.jpg",
      caption: "That garden we planted together, angel.\n\nWatching things grow with you felt like watching our love bloom.",
    },
    {
      id: "apr-2024-4",
      photo: "/photos/apr-2024-4.jpg",
      caption: "Sunset drives with nowhere to go, kutty baby.\n\nWe found home in the journey, not the destination.",
    },
    {
      id: "apr-2024-5",
      photo: "/photos/apr-2024-5.jpg",
      caption: "First ice cream of the season, dummy baby.\n\nYou got it all over your nose and I fell in love all over again.",
    },
    {
      id: "apr-2024-6",
      photo: "/photos/apr-2024-6.jpg",
      caption: "April fool's prank that backfired, puu.\n\nYou pranked me, I pranked you, and we both ended up laughing until we cried.",
    }
  ];

  // MAY 2024 (months[6])
  months[6].cards = [
    {
      id: "may-2024-1",
      photo: "/photos/may-2024-1.jpg",
      caption: "Flower fields and daisy chains, angel.\n\nYou are my perpetual spring.",
    },
    {
      id: "may-2024-2",
      photo: "/photos/may-2024-2.jpg",
      caption: "That first warm day, love.\n\nWe shed our jackets and found freedom in the sunshine together.",
    },
    {
      id: "may-2024-3",
      photo: "/photos/may-2024-3.jpg",
      caption: "Mother's Day brunch, kutty baby.\n\nYou made it special for everyone, and I made it special for you.",
    },
    {
      id: "may-2024-4",
      photo: "/photos/may-2024-4.jpg",
      caption: "Beach day before summer crowds, puu.\n\nJust us, the sand, and a million reasons to stay forever.",
    },
    {
      id: "may-2024-5",
      photo: "/photos/may-2024-5.jpg",
      caption: "That farmers market adventure, dummy baby.\n\nYou picked the perfect strawberries and I picked the perfect moment to kiss you.",
    },
    {
      id: "may-2024-6",
      photo: "/photos/may-2024-6.jpg",
      caption: "Cinco de Mayo celebration, angel.\n\nWe danced until our feet hurt and laughed until our sides ached.",
    },
    {
      id: "may-2024-7",
      photo: "/photos/may-2024-7.jpg",
      caption: "First barbecue of the season, love.\n\nYou burned the burgers, I burned my fingers, and we both had the time of our lives.",
    },
    {
      id: "may-2024-8",
      photo: "/photos/may-2024-8.jpg",
      caption: "Hiking trail we discovered, kutty baby.\n\nEvery step felt like we were exploring not just nature, but each other.",
    },
    {
      id: "may-2024-9",
      photo: "/photos/may-2024-9.jpg",
      caption: "That outdoor concert, puu.\n\nMusic filled the air, but your voice was the only song I heard.",
    },
    {
      id: "may-2024-10",
      photo: "/photos/may-2024-10.jpg",
      caption: "Sunset picnic by the lake, dummy baby.\n\nYou brought the food, I brought the blanket, and we both brought our hearts.",
    },
    {
      id: "may-2024-11",
      photo: "/photos/may-2024-11.jpg",
      caption: "Planting flowers on the balcony, angel.\n\nWatching them grow felt like watching us grow - beautiful and unstoppable.",
    },
    {
      id: "may-2024-12",
      photo: "/photos/may-2024-12.jpg",
      caption: "May memories wrapped in golden hour, love.\n\nEvery evening felt like a promise that tomorrow would be even better.",
    }
  ];

  // JUNE 2024 - Summer begins (months[7])
  months[7].cards = [
    {
      id: "jun-2024-1",
      photo: "/photos/jun-2024-1.jpg",
      caption: "Beach days and salty kisses, kutty baby.\n\nYou + sunset + ocean = my definition of perfection.",
    },
    {
      id: "jun-2024-2",
      photo: "/photos/jun-2024-2.jpg",
      caption: "That road trip playlist you made, love.\n\nEvery song reminds me of windows down, your hand in mine, endless highways.",
    },
    {
      id: "jun-2024-3",
      photo: "/photos/jun-2024-3.jpg",
      caption: "Finding our secret spot, puu.\n\nThis place will always be ours, just like my heart will always be yours.",
      isSpecial: true
    },
    {
      id: "jun-2024-4",
      photo: "/photos/jun-2024-4.jpg",
      caption: "First swim of summer, angel.\n\nThe water was cold, but your laugh warmed everything up instantly.",
    },
    {
      id: "jun-2024-5",
      photo: "/photos/jun-2024-5.jpg",
      caption: "That bonfire night, dummy baby.\n\nMarshmallows, stories, and your silhouette against the flames - perfect.",
    },
    {
      id: "jun-2024-6",
      photo: "/photos/jun-2024-6.jpg",
      caption: "Summer solstice celebration, kutty baby.\n\nLongest day of the year, but still not long enough with you.",
    },
    {
      id: "jun-2024-7",
      photo: "/photos/jun-2024-7.jpg",
      caption: "Ice cream truck chase, puu.\n\nWe ran like kids and laughed like we'd never grow old.",
    },
    {
      id: "jun-2024-8",
      photo: "/photos/jun-2024-8.jpg",
      caption: "That outdoor movie night, love.\n\nYou fell asleep on my shoulder halfway through, and I didn't move for hours.",
    },
    {
      id: "jun-2024-9",
      photo: "/photos/jun-2024-9.jpg",
      caption: "Water balloon fight in the backyard, angel.\n\nWe both got soaked and neither of us cared - we were too busy smiling.",
    },
    {
      id: "jun-2024-10",
      photo: "/photos/jun-2024-10.jpg",
      caption: "June ending, summer beginning, kutty baby.\n\nEvery day felt like the start of forever with you.",
    }
  ];

  // JULY 2024 (months[8])
  months[8].cards = [
    {
      id: "jul-2024-1",
      photo: "/photos/jul-2024-1.jpg",
      caption: "Fourth of July fireworks, angel.\n\nBut the real sparks were in your eyes when you looked at me.",
      date: "July 4, 2024"
    },
    {
      id: "jul-2024-2",
      photo: "/photos/jul-2024-2.jpg",
      caption: "That heat wave day, love.\n\nWe stayed inside with the AC and each other - best decision we ever made.",
    },
    {
      id: "jul-2024-3",
      photo: "/photos/jul-2024-3.jpg",
      caption: "Watermelon picnic in the park, kutty baby.\n\nYou got juice everywhere and I couldn't stop smiling.",
    },
    {
      id: "jul-2024-4",
      photo: "/photos/jul-2024-4.jpg",
      caption: "Late night swim under the stars, puu.\n\nThe pool was cool, but your hand in mine was warmer than summer.",
    },
    {
      id: "jul-2024-5",
      photo: "/photos/jul-2024-5.jpg",
      caption: "That music festival weekend, dummy baby.\n\nWe danced until dawn and fell asleep in each other's arms.",
    },
    {
      id: "jul-2024-6",
      photo: "/photos/jul-2024-6.jpg",
      caption: "Sunset boat ride, angel.\n\nYou at the helm, me by your side, and the whole world painted in gold.",
    },
    {
      id: "jul-2024-7",
      photo: "/photos/jul-2024-7.jpg",
      caption: "Ice cream for dinner, kutty baby.\n\nBecause sometimes the best meals are the ones that make you smile.",
    },
    {
      id: "jul-2024-8",
      photo: "/photos/jul-2024-8.jpg",
      caption: "July memories like fireflies, love.\n\nEach one glowing brighter because you were there to share them with me.",
    }
  ];

  // AUGUST 2024 (months[9])
  months[9].cards = [
    {
      id: "aug-2024-1",
      photo: "/photos/aug-2024-1.jpg",
      caption: "Late summer nights on the rooftop, kutty baby.\n\nCounting stars and realizing you're the only wish I need.",
    },
    {
      id: "aug-2024-2",
      photo: "/photos/aug-2024-2.jpg",
      caption: "That last beach trip of summer, love.\n\nWe made sandcastles and I realized I'd build a real one with you if you asked.",
    },
    {
      id: "aug-2024-3",
      photo: "/photos/aug-2024-3.jpg",
      caption: "Outdoor concert under the stars, angel.\n\nMusic washed over us, but your voice was the melody I remembered.",
    },
    {
      id: "aug-2024-4",
      photo: "/photos/aug-2024-4.jpg",
      caption: "Sunset hike to the peak, puu.\n\nWe reached the top just in time to watch the world turn golden together.",
    },
    {
      id: "aug-2024-5",
      photo: "/photos/aug-2024-5.jpg",
      caption: "That lazy Sunday in the hammock, dummy baby.\n\nWe swung gently and talked about everything and nothing at all.",
    },
    {
      id: "aug-2024-6",
      photo: "/photos/aug-2024-6.jpg",
      caption: "Perseid meteor shower watching, kutty baby.\n\nWe saw shooting stars, but I was already holding one.",
    },
    {
      id: "aug-2024-7",
      photo: "/photos/aug-2024-7.jpg",
      caption: "Farmers market Saturday morning, love.\n\nFresh produce, your smile, and the perfect start to every weekend.",
    },
    {
      id: "aug-2024-8",
      photo: "/photos/aug-2024-8.jpg",
      caption: "That spontaneous camping trip, angel.\n\nTent, stars, and you - everything we needed for the perfect night.",
    },
    {
      id: "aug-2024-9",
      photo: "/photos/aug-2024-9.jpg",
      caption: "August ending, memories beginning, kutty baby.\n\nSummer faded but our love only grew brighter.",
    }
  ];

  // SEPTEMBER 2024 (months[10])
  months[10].cards = [
    {
      id: "sep-2024-1",
      photo: "/photos/sep-2024-1.jpg",
      caption: "Fall arrived with golden leaves, puu.\n\nBut you're still the most beautiful thing in every season.",
    },
    {
      id: "sep-2024-2",
      photo: "/photos/sep-2024-2.jpg",
      caption: "First day of autumn, love.\n\nLeaves changed colors, but my love for you stayed the same - constant and true.",
    },
    {
      id: "sep-2024-3",
      photo: "/photos/sep-2024-3.jpg",
      caption: "Apple picking adventure, kutty baby.\n\nWe filled baskets with fruit and hearts with memories.",
    },
    {
      id: "sep-2024-4",
      photo: "/photos/sep-2024-4.jpg",
      caption: "That cozy sweater weather morning, angel.\n\nYou looked perfect in my hoodie, and I looked perfect next to you.",
    },
    {
      id: "sep-2024-5",
      photo: "/photos/sep-2024-5.jpg",
      caption: "Pumpkin spice everything, dummy baby.\n\nYou ordered one of everything and I ordered one of you - forever.",
    },
    {
      id: "sep-2024-6",
      photo: "/photos/sep-2024-6.jpg",
      caption: "Sunset drive through the countryside, puu.\n\nGolden hour, golden leaves, and you - the most golden of all.",
    },
    {
      id: "sep-2024-7",
      photo: "/photos/sep-2024-7.jpg",
      caption: "That first bonfire of fall, love.\n\nFlames danced and so did we, wrapped in blankets and each other.",
    },
    {
      id: "sep-2024-8",
      photo: "/photos/sep-2024-8.jpg",
      caption: "September ending, autumn beginning, kutty baby.\n\nEvery season with you feels like coming home.",
    }
  ];

  // OCTOBER 2024 (months[11])
  months[11].cards = [
    {
      id: "oct-2024-1",
      photo: "/photos/oct-2024-1.jpg",
      caption: "Halloween costumes and candy corn, dummy baby.\n\nYou make every day feel like a celebration.",
      date: "October 31, 2024"
    },
    {
      id: "oct-2024-2",
      photo: "/photos/oct-2024-2.jpg",
      caption: "Pumpkin carving contest, love.\n\nYou won, but I won just by watching you smile.",
    },
    {
      id: "oct-2024-3",
      photo: "/photos/oct-2024-3.jpg",
      caption: "That haunted house we went to, kutty baby.\n\nYou held my hand tight, but I was the scared one.",
    },
    {
      id: "oct-2024-4",
      photo: "/photos/oct-2024-4.jpg",
      caption: "Fall foliage drive, angel.\n\nEvery turn revealed more colors, but none as beautiful as you.",
    },
    {
      id: "oct-2024-5",
      photo: "/photos/oct-2024-5.jpg",
      caption: "Hot apple cider and your warm hands, puu.\n\nOctober nights were cold, but you made everything warm.",
    }
  ];

  // NOVEMBER 2024 - First Anniversary! (months[12])
  months[12].cards = [
    {
      id: "nov-2024-1",
      photo: "/photos/nov-2024-1.jpg",
      caption: "ONE YEAR, angel!\n\n365 days of loving you and I'm just getting started.\n\nHere's to forever and a day.",
      date: "November 13, 2024",
      isSpecial: true
    },
    {
      id: "nov-2024-2",
      photo: "/photos/nov-2024-2.jpg",
      caption: "Thanksgiving together, love.\n\nWe made a feast and I realized you're the best thing I'm thankful for.",
    },
    {
      id: "nov-2024-3",
      photo: "/photos/nov-2024-3.jpg",
      caption: "That cozy night by the fire, kutty baby.\n\nOne year in and every moment still feels like the first.",
    },
    {
      id: "nov-2024-4",
      photo: "/photos/nov-2024-4.jpg",
      caption: "Black Friday shopping adventure, dummy baby.\n\nWe bought nothing but left with everything - each other.",
    },
    {
      id: "nov-2024-5",
      photo: "/photos/nov-2024-5.jpg",
      caption: "First snowfall of the season, puu.\n\nYou caught snowflakes on your tongue and I caught my breath watching you.",
    },
    {
      id: "nov-2024-6",
      photo: "/photos/nov-2024-6.jpg",
      caption: "Anniversary month memories, angel.\n\nEvery day a celebration, every moment a treasure with you.",
    }
  ];

  // DECEMBER 2024 (months[13])
  months[13].cards = [
    {
      id: "dec-2024-1",
      photo: "/photos/dec-2024-1.jpg",
      caption: "Second Christmas together, love.\n\nThis time we knew what we were doing - loving each other even more.",
      date: "December 25, 2024",
      isSpecial: true
    },
    {
      id: "dec-2024-2",
      photo: "/photos/dec-2024-2.jpg",
      caption: "Tree decorating night, kutty baby.\n\nYou insisted on every ornament having a story, and I listened to every one.",
    },
    {
      id: "dec-2024-3",
      photo: "/photos/dec-2024-3.jpg",
      caption: "First snow day of the season, angel.\n\nWe built a snowman and I realized I'd build a life with you too.",
    },
    {
      id: "dec-2024-4",
      photo: "/photos/dec-2024-4.jpg",
      caption: "Holiday market adventure, puu.\n\nWe bought gifts for everyone and I realized you're the best gift I've ever received.",
    },
    {
      id: "dec-2024-5",
      photo: "/photos/dec-2024-5.jpg",
      caption: "That cookie baking disaster, dummy baby.\n\nFlour everywhere, laughter everywhere, and love everywhere.",
    },
    {
      id: "dec-2024-6",
      photo: "/photos/dec-2024-6.jpg",
      caption: "Christmas lights tour, love.\n\nEvery house tried to outdo the last, but none could outshine you.",
    },
    {
      id: "dec-2024-7",
      photo: "/photos/dec-2024-7.jpg",
      caption: "Cozy movie marathon, kutty baby.\n\nWe watched holiday classics and I realized you're my favorite story.",
    },
    {
      id: "dec-2024-8",
      photo: "/photos/dec-2024-8.jpg",
      caption: "Gift wrapping session, angel.\n\nYou wrapped everything perfectly, and I wrapped my arms around you.",
    },
    {
      id: "dec-2024-9",
      photo: "/photos/dec-2024-9.jpg",
      caption: "That hot chocolate date, puu.\n\nSteam rising, hearts racing, and everything feeling just right.",
    },
    {
      id: "dec-2024-10",
      photo: "/photos/dec-2024-10.jpg",
      caption: "Ice skating at the rink, dummy baby.\n\nWe held hands and didn't fall once - except for falling deeper in love.",
    },
    {
      id: "dec-2024-11",
      photo: "/photos/dec-2024-11.jpg",
      caption: "New Year's Eve prep, love.\n\nGetting ready for midnight, but every moment with you feels like a celebration.",
    },
    {
      id: "dec-2024-12",
      photo: "/photos/dec-2024-12.jpg",
      caption: "That surprise gift you gave me, kutty baby.\n\nIt wasn't the gift that mattered - it was the way your eyes lit up giving it.",
    },
    {
      id: "dec-2024-13",
      photo: "/photos/dec-2024-13.jpg",
      caption: "Winter walk in the park, angel.\n\nSnow falling, hands holding, and hearts full.",
    },
    {
      id: "dec-2024-14",
      photo: "/photos/dec-2024-14.jpg",
      caption: "Holiday party together, puu.\n\nWe danced and laughed and I realized you're my favorite person to celebrate with.",
    },
    {
      id: "dec-2024-15",
      photo: "/photos/dec-2024-15.jpg",
      caption: "December ending, year beginning, love.\n\nAnother year of us, and I can't wait for all the years to come.",
      date: "December 31, 2024",
      isSpecial: true
    }
  ];

  // JANUARY 2025 (months[14])
  months[14].cards = [
    {
      id: "jan-2025-1",
      photo: "/photos/jan-2025-1.MOV",
      caption: "New Year's Day, angel.\n\nWaking up next to you felt like the best way to start any year.",
      date: "January 1, 2025"
    },
    {
      id: "jan-2025-2",
      photo: "/photos/jan-2025-2.jpg",
      caption: "That resolution we made together, love.\n\nTo love each other more - impossible, but we're trying anyway.",
    },
    {
      id: "jan-2025-3",
      photo: "/photos/jan-2025-3.jpg",
      caption: "Snowed in weekend, kutty baby.\n\nTrapped inside with you? Best kind of trap there is.",
    },
    {
      id: "jan-2025-4",
      photo: "/photos/jan-2025-4.jpg",
      caption: "Ice fishing adventure, puu.\n\nWe caught nothing but I caught you smiling - that's enough.",
    },
    {
      id: "jan-2025-5",
      photo: "/photos/jan-2025-5.jpg",
      caption: "That cozy bookstore date, dummy baby.\n\nYou picked books, I picked you - we both made the right choice.",
    },
    {
      id: "jan-2025-6",
      photo: "/photos/jan-2025-6.jpg",
      caption: "Winter hike in the mountains, angel.\n\nCold air, warm hearts, and the perfect view - you.",
    },
    {
      id: "jan-2025-7",
      photo: "/photos/jan-2025-7.jpg",
      caption: "Soup making together, kutty baby.\n\nWe stirred and tasted and I realized you make everything better.",
    },
    {
      id: "jan-2025-8",
      photo: "/photos/jan-2025-8.jpg",
      caption: "That puzzle we never finished, love.\n\nWe got distracted by each other - worth it.",
    },
    {
      id: "jan-2025-9",
      photo: "/photos/jan-2025-9.jpg",
      caption: "Sledding down the hill, puu.\n\nWe crashed and laughed and did it again and again.",
    },
    {
      id: "jan-2025-10",
      photo: "/photos/jan-2025-10.jpg",
      caption: "Wine tasting evening, dummy baby.\n\nWe tried different flavors but you're still my favorite taste.",
    },
    {
      id: "jan-2025-11",
      photo: "/photos/jan-2025-11.jpg",
      caption: "That lazy Sunday in bed, angel.\n\nWe didn't move for hours and I didn't want to.",
    },
    {
      id: "jan-2025-12",
      photo: "/photos/jan-2025-12.jpg",
      caption: "Winter photography walk, kutty baby.\n\nYou took pictures of everything, I took pictures of you.",
    },
    {
      id: "jan-2025-13",
      photo: "/photos/jan-2025-13.jpg",
      caption: "January ending, love growing, love.\n\nAnother month of us, and every day better than the last.",
    }
  ];

  // FEBRUARY 2025 (months[15])
  months[15].cards = [
    {
      id: "feb-2025-1",
      photo: "/photos/feb-2025-1.MOV",
      caption: "Second Valentine's Day, angel.\n\nYou made another Hallmark holiday feel like pure magic.",
      date: "February 14, 2025",
      isSpecial: true
    },
    {
      id: "feb-2025-2",
      photo: "/photos/feb-2025-2.jpg",
      caption: "That surprise getaway weekend, love.\n\nTwo years in and you still know how to surprise me.",
      date: "February 4, 2025",
      isSpecial: true
    },
    {
      id: "feb-2025-3",
      photo: "/photos/feb-2025-3.jpg",
      caption: "Winter market adventure, kutty baby.\n\nWe browsed and talked and I realized shopping with you is my favorite hobby.",
    },
    {
      id: "feb-2025-4",
      photo: "/photos/feb-2025-4.jpg",
      caption: "Cooking class together, dummy baby.\n\nWe learned new recipes and I learned I love watching you cook.",
    },
    {
      id: "feb-2025-5",
      photo: "/photos/feb-2025-5.jpg",
      caption: "That indoor garden project, puu.\n\nWe planted seeds and I planted kisses - both growing beautifully.",
    },
    {
      id: "feb-2025-6",
      photo: "/photos/feb-2025-6.jpg",
      caption: "Late night talks by the fireplace, angel.\n\nHours passed like minutes when we talked about everything and nothing.",
    },
    {
      id: "feb-2025-7",
      photo: "/photos/feb-2025-7.jpg",
      caption: "Art museum visit, kutty baby.\n\nWe admired paintings and I admired you - the most beautiful art I know.",
    },
    {
      id: "feb-2025-8",
      photo: "/photos/feb-2025-8.jpg",
      caption: "February ending, spring approaching, love.\n\nWinter fading but our love staying strong, like always.",
    }
  ];

  // MARCH 2025 (months[16])
  months[16].cards = [
    {
      id: "mar-2025-1",
      photo: "/photos/mar-2025-1.jpg",
      caption: "Spring arrived again, kutty baby.\n\nSecond spring together and it's still as magical as the first.",
    },
    {
      id: "mar-2025-2",
      photo: "/photos/mar-2025-2.jpg",
      caption: "That first picnic of spring, love.\n\nWe spread the blanket and I spread my heart - both open for you.",
    },
    {
      id: "mar-2025-3",
      photo: "/photos/mar-2025-3.jpg",
      caption: "Cherry blossoms and your smile, angel.\n\nNature bloomed and so did my love for you.",
    },
    {
      id: "mar-2025-4",
      photo: "/photos/mar-2025-4.jpg",
      caption: "St. Patrick's Day celebration, puu.\n\nWe wore green and I realized you're my lucky charm.",
    },
    {
      id: "mar-2025-5",
      photo: "/photos/mar-2025-5.jpg",
      caption: "That bike ride through the park, dummy baby.\n\nWind in our hair, sun on our faces, and love in our hearts.",
    },
    {
      id: "mar-2025-6",
      photo: "/photos/mar-2025-6.jpg",
      caption: "Outdoor brunch date, kutty baby.\n\nWe ate and talked and I realized every meal tastes better with you.",
    },
    {
      id: "mar-2025-7",
      photo: "/photos/mar-2025-7.jpg",
      caption: "Spring cleaning together, love.\n\nWe organized everything and I realized you organize my heart perfectly.",
    },
    {
      id: "mar-2025-8",
      photo: "/photos/mar-2025-8.jpg",
      caption: "March ending, spring blooming, angel.\n\nFlowers everywhere, but you're still the most beautiful bloom.",
    }
  ];

  // APRIL 2025 (months[17])
  months[17].cards = [
    {
      id: "apr-2025-1",
      photo: "/photos/apr-2025-1.jpg",
      caption: "April showers and your laugh, puu.\n\nRain couldn't dampen the joy of being with you.",
    },
    {
      id: "apr-2025-2",
      photo: "/photos/apr-2025-2.jpg",
      caption: "Easter morning together, love.\n\nWe hunted for eggs and I realized I found the best treasure - you.",
    },
    {
      id: "apr-2025-3",
      photo: "/photos/apr-2025-3.jpg",
      caption: "That garden we started, kutty baby.\n\nWatching things grow with you felt like watching our future bloom.",
    },
    {
      id: "apr-2025-4",
      photo: "/photos/apr-2025-4.jpg",
      caption: "Sunset walk in the park, angel.\n\nGolden hour, golden leaves, and you - the goldenest of all.",
    },
    {
      id: "apr-2025-5",
      photo: "/photos/apr-2025-5.jpg",
      caption: "First ice cream of spring, dummy baby.\n\nYou got it all over your face and I got it all over my heart.",
    },
    {
      id: "apr-2025-6",
      photo: "/photos/apr-2025-6.jpg",
      caption: "That flea market adventure, puu.\n\nWe found treasures and I found you - the best find of the day.",
    },
    {
      id: "apr-2025-7",
      photo: "/photos/apr-2025-7.jpg",
      caption: "Outdoor yoga session, kutty baby.\n\nWe stretched and breathed and I realized you're my peace.",
    },
    {
      id: "apr-2025-8",
      photo: "/photos/apr-2025-8.jpg",
      caption: "That rainy day we stayed in, love.\n\nThunder outside, comfort inside - just us and nowhere to be.",
    },
    {
      id: "apr-2025-9",
      photo: "/photos/apr-2025-9.jpg",
      caption: "April ending, spring in full bloom, angel.\n\nFlowers everywhere, but you're still the most beautiful thing growing.",
    }
  ];

  // MAY 2025 (months[18])
  months[18].cards = [
    {
      id: "may-2025-1",
      photo: "/photos/may-2025-1.jpg",
      caption: "May flowers everywhere, kutty baby.\n\nBut you're still the most beautiful bloom in my garden.",
    },
    {
      id: "may-2025-2",
      photo: "/photos/may-2025-2.jpg",
      caption: "Mother's Day celebration, love.\n\nWe made it special and I realized you make every day special.",
    },
    {
      id: "may-2025-3",
      photo: "/photos/may-2025-3.jpg",
      caption: "That first warm beach day, angel.\n\nSand between our toes, sun on our faces, and love in our hearts.",
    },
    {
      id: "may-2025-4",
      photo: "/photos/may-2025-4.jpg",
      caption: "Cinco de Mayo fiesta, puu.\n\nWe danced and celebrated and I realized every day with you is a fiesta.",
    },
    {
      id: "may-2025-5",
      photo: "/photos/may-2025-5.jpg",
      caption: "Farmers market Saturday, dummy baby.\n\nFresh produce, your smile, and the perfect start to every weekend.",
    },
    {
      id: "may-2025-6",
      photo: "/photos/may-2025-6.jpg",
      caption: "That outdoor concert, kutty baby.\n\nMusic filled the air, but your voice was the only song I heard.",
    },
    {
      id: "may-2025-7",
      photo: "/photos/may-2025-7.jpg",
      caption: "First barbecue of the season, love.\n\nWe grilled and laughed and I realized you're the best thing on the menu.",
    },
    {
      id: "may-2025-8",
      photo: "/photos/may-2025-8.jpg",
      caption: "May ending, summer beginning, angel.\n\nFlowers fading but our love blooming stronger every day.",
    }
  ];

  // JUNE 2025 (months[19])
  months[19].cards = [
    {
      id: "jun-2025-1",
      photo: "/photos/jun-2025-1.jpg",
      caption: "Summer officially begins, kutty baby.\n\nSecond summer together and it's still as perfect as the first.",
    },
    {
      id: "jun-2025-2",
      photo: "/photos/jun-2025-2.jpg",
      caption: "Beach day perfection, love.\n\nYou + sand + sun = my definition of happiness.",
    },
    {
      id: "jun-2025-3",
      photo: "/photos/jun-2025-3.jpg",
      caption: "That road trip we planned, angel.\n\nWindows down, music up, and your hand in mine - perfect.",
    },
    {
      id: "jun-2025-4",
      photo: "/photos/jun-2025-4.jpg",
      caption: "Summer solstice celebration, puu.\n\nLongest day of the year, but still not long enough with you.",
    },
    {
      id: "jun-2025-5",
      photo: "/photos/jun-2025-5.jpg",
      caption: "Ice cream for dinner again, dummy baby.\n\nBecause some traditions are too good to break.",
    },
    {
      id: "jun-2025-6",
      photo: "/photos/jun-2025-6.jpg",
      caption: "Outdoor movie night, kutty baby.\n\nWe watched under the stars and I realized you're my favorite constellation.",
    },
    {
      id: "jun-2025-7",
      photo: "/photos/jun-2025-7.jpg",
      caption: "That bonfire on the beach, love.\n\nFlames dancing, waves crashing, and us - just perfect.",
    },
    {
      id: "jun-2025-8",
      photo: "/photos/jun-2025-8.jpg",
      caption: "Water balloon fight round two, angel.\n\nWe got soaked and laughed and did it all over again.",
    },
    {
      id: "jun-2025-9",
      photo: "/photos/jun-2025-9.jpg",
      caption: "June ending, summer in full swing, kutty baby.\n\nEvery day feels like a vacation when I'm with you.",
    }
  ];

  // JULY 2025 (months[20])
  months[20].cards = [
    {
      id: "jul-2025-1",
      photo: "/photos/jul-2025-1.MOV",
      caption: "Fourth of July fireworks, angel.\n\nBut the real sparks were still in your eyes when you looked at me.",
      date: "July 4, 2025"
    },
    {
      id: "jul-2025-2",
      photo: "/photos/jul-2025-2.mov",
      caption: "That heat wave day, love.\n\nWe stayed cool with AC and each other - perfect combination.",
    },
    {
      id: "jul-2025-3",
      photo: "/photos/jul-2025-3.jpg",
      caption: "Watermelon picnic in the park, kutty baby.\n\nYou got juice everywhere again and I loved every second.",
    },
    {
      id: "jul-2025-4",
      photo: "/photos/jul-2025-4.jpg",
      caption: "Late night swim under the stars, puu.\n\nThe pool was cool, but your hand in mine was warmer than summer.",
    },
    {
      id: "jul-2025-5",
      photo: "/photos/jul-2025-5.jpg",
      caption: "That music festival weekend, dummy baby.\n\nWe danced until dawn and fell asleep in each other's arms again.",
    },
    {
      id: "jul-2025-6",
      photo: "/photos/jul-2025-6.jpg",
      caption: "July memories like fireflies, angel.\n\nEach one glowing brighter because you were there to share them with me.",
    }
  ];

  // AUGUST 2025 (months[21])
  months[21].cards = [
    {
      id: "aug-2025-1",
      photo: "/photos/aug-2025-1.jpg",
      caption: "Late summer nights on the rooftop, kutty baby.\n\nCounting stars and realizing you're still the only wish I need.",
    },
    {
      id: "aug-2025-2",
      photo: "/photos/aug-2025-2.jpg",
      caption: "That last beach trip of summer, love.\n\nWe made sandcastles and I realized I'd build a real one with you if you asked.",
    },
    {
      id: "aug-2025-3",
      photo: "/photos/aug-2025-3.jpg",
      caption: "Outdoor concert under the stars, angel.\n\nMusic washed over us, but your voice was still the melody I remembered.",
    },
    {
      id: "aug-2025-4",
      photo: "/photos/aug-2025-4.jpg",
      caption: "Sunset hike to the peak, puu.\n\nWe reached the top just in time to watch the world turn golden together again.",
    },
    {
      id: "aug-2025-5",
      photo: "/photos/aug-2025-5.MOV",
      caption: "That lazy Sunday in the hammock, dummy baby.\n\nWe swung gently and talked about everything and nothing at all.",
    },
    {
      id: "aug-2025-6",
      photo: "/photos/aug-2025-6.jpg",
      caption: "Perseid meteor shower watching, kutty baby.\n\nWe saw shooting stars, but I was already holding one.",
    },
    {
      id: "aug-2025-7",
      photo: "/photos/aug-2025-7.jpg",
      caption: "Farmers market Saturday morning, love.\n\nFresh produce, your smile, and the perfect start to every weekend.",
    },
    {
      id: "aug-2025-8",
      photo: "/photos/aug-2025-8.jpg",
      caption: "That spontaneous camping trip, angel.\n\nTent, stars, and you - everything we needed for the perfect night.",
    },
    {
      id: "aug-2025-9",
      photo: "/photos/aug-2025-9.MOV",
      caption: "Summer ending, memories beginning, kutty baby.\n\nSeason fading but our love staying strong, like always.",
    },
    {
      id: "aug-2025-10",
      photo: "/photos/aug-2025-10.jpg",
      caption: "August ending, fall approaching, love.\n\nSummer faded but our love only grew brighter with every passing day.",
    }
  ];

  // SEPTEMBER 2025 (months[22])
  months[22].cards = [
    {
      id: "sep-2025-1",
      photo: "/photos/sep-2025-1.jpg",
      caption: "Fall arrived with golden leaves, puu.\n\nBut you're still the most beautiful thing in every season.",
    },
    {
      id: "sep-2025-2",
      photo: "/photos/sep-2025-2.jpg",
      caption: "First day of autumn, love.\n\nLeaves changed colors, but my love for you stayed the same - constant and true.",
    },
    {
      id: "sep-2025-3",
      photo: "/photos/sep-2025-3.jpg",
      caption: "Apple picking adventure, kutty baby.\n\nWe filled baskets with fruit and hearts with memories.",
    },
    {
      id: "sep-2025-4",
      photo: "/photos/sep-2025-4.jpg",
      caption: "That cozy sweater weather morning, angel.\n\nYou looked perfect in my hoodie, and I looked perfect next to you.",
    },
    {
      id: "sep-2025-5",
      photo: "/photos/sep-2025-5.jpg",
      caption: "Pumpkin spice everything, dummy baby.\n\nYou ordered one of everything and I ordered one of you - forever.",
    },
    {
      id: "sep-2025-6",
      photo: "/photos/sep-2025-6.jpg",
      caption: "Sunset drive through the countryside, puu.\n\nGolden hour, golden leaves, and you - the most golden of all.",
    },
    {
      id: "sep-2025-7",
      photo: "/photos/sep-2025-7.jpg",
      caption: "September ending, autumn beginning, kutty baby.\n\nEvery season with you feels like coming home.",
    }
  ];

  // OCTOBER 2025 (months[23])
  months[23].cards = [
    {
      id: "oct-2025-1",
      photo: "/photos/oct-2025-1.jpg",
      caption: "Halloween costumes and candy corn, dummy baby.\n\nYou make every day feel like a celebration.",
      date: "October 31, 2025"
    },
    {
      id: "oct-2025-2",
      photo: "/photos/oct-2025-2.jpg",
      caption: "Pumpkin carving contest, love.\n\nYou won, but I won just by watching you smile.",
    },
    {
      id: "oct-2025-3",
      photo: "/photos/oct-2025-3.jpg",
      caption: "That haunted house we went to, kutty baby.\n\nYou held my hand tight, but I was the scared one.",
    },
    {
      id: "oct-2025-4",
      photo: "/photos/oct-2025-4.jpg",
      caption: "Fall foliage drive, angel.\n\nEvery turn revealed more colors, but none as beautiful as you.",
    },
    {
      id: "oct-2025-5",
      photo: "/photos/oct-2025-5.jpg",
      caption: "Hot apple cider and your warm hands, puu.\n\nOctober nights were cold, but you made everything warm.",
    },
    {
      id: "oct-2025-6",
      photo: "/photos/oct-2025-6.jpg",
      caption: "October ending, November approaching, love.\n\nAnother month of us, and I can't wait for what's next.",
    }
  ];

  // NOVEMBER 2025 - Two Years! (months[24])
  months[24].cards = [
    {
      id: "nov-2025-1",
      photo: "/photos/nov-2025-1.jpg",
      caption: "TWO YEARS of us, Rose.\n\n730 days, and every single one better than the last.\n\nYou are my yesterday, today, and all my tomorrows.",
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
//    - Works with any aspect ratio (portrait, landscape, square)
//    - Place in: public/photos/
//
// 2. CAPTIONS WITH LINE BREAKS:
//    - Use \n for single line break
//    - Use \n\n for paragraph break
//    - Example: "First line\n\nSecond paragraph"
//    - Mix short and long captions
//    - Use pet names naturally
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
// 5. CAPTION FORMATTING IDEAS:
//    - "The moment...\n\nHow it felt..."
//    - "What happened...\n\nWhat it meant..."
//    - "The setup...\n\nThe punchline..."
//    - Break up long thoughts with line breaks
//
// Remember: This is YOUR love story. Make it personal, make it real, make it beautiful.