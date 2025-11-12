# Happy Anniversary, Rose 💜

A beautiful, scrollable timeline website documenting your 2-year relationship journey with Rose.

## Features

- ✨ **Beautiful Landing Page** - Animated "Happy Anniversary" page with rotating pet names
- 📅 **25 Month Timeline** - November 2023 through November 2025
- 📸 **Photo Cards** - 5-10 cards per month with photos and captions
- 🌟 **Star Constellations** - Special constellation backgrounds for important dates
- 🎵 **Background Music** - Play/pause and mute/unmute controls
- 📱 **Mobile Optimized** - Swipe gestures and smooth scrolling
- 🎨 **Beautiful Design** - Dark theme with pastel purple accents

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Your Content

### 1. Adding Photos

1. Place your photos in the `public/photos/` directory
2. Name them descriptively, e.g., `nov-2023-1.jpg`, `nov-2023-2.jpg`, etc.
3. Update the photo paths in `data/timeline.ts`

**Example:**
```typescript
{
  id: "nov-2023-1",
  photo: "/photos/nov-2023-1.jpg",  // Update this path
  caption: "Our first moment together, angel.",
  date: "November 13, 2023"
}
```

### 2. Adding Captions

Edit the `caption` field in each card object in `data/timeline.ts`. You can use any of the pet names:
- Rose
- angel
- kutty baby
- puu
- puttu
- puchu
- love
- dummy baby

**Example:**
```typescript
{
  id: "nov-2023-1",
  photo: "/photos/nov-2023-1.jpg",
  caption: "Our first moment together, angel. This is where it all began, love.",
  date: "November 13, 2023"
}
```

### 3. Adding Cards to a Month

Each month should have 5-10 cards. To add more cards to a month, add new objects to the `cards` array:

```typescript
{
  month: "November 2023",
  year: 2023,
  monthNumber: 11,
  cards: [
    {
      id: "nov-2023-1",
      photo: "/photos/nov-2023-1.jpg",
      caption: "First card",
    },
    {
      id: "nov-2023-2",
      photo: "/photos/nov-2023-2.jpg",
      caption: "Second card",
    },
    // Add more cards here...
  ],
}
```

### 4. Adding Background Music

1. Place your music file in `public/music/` directory
2. Name it `background-music.mp3` (or update the path in `components/MusicPlayer.tsx`)

The music will automatically loop and play at 30% volume. Users can control it with the play/pause and mute buttons.

### 5. Adding Star Constellation Backgrounds

#### For Existing Special Dates

The following dates already have constellation support configured:
- Nov 13, 2023 (started dating)
- Nov 16, 2023
- Dec 1, 2023
- Dec 24, 2023
- Feb 4, 2024

1. Get star map images or coordinates for these dates
2. Place constellation images in `public/constellations/` directory
3. Name them according to the date, e.g., `nov-13-2023.jpg`
4. The images will automatically appear as background overlays on those months

#### Adding New Special Dates

To add constellation backgrounds for new dates:

1. **Add the constellation image:**
   - Place it in `public/constellations/`
   - Name it descriptively, e.g., `mar-15-2024.jpg`

2. **Update `data/timeline.ts`:**
   - Find the month in the `generateAllMonths()` function
   - Update the `constellationDates` object:

```typescript
const constellationDates: Record<string, string> = {
  "2023-11-13": "/constellations/nov-13-2023.jpg",
  "2023-11-16": "/constellations/nov-16-2023.jpg",
  "2023-12-01": "/constellations/dec-1-2023.jpg",
  "2023-12-24": "/constellations/dec-24-2023.jpg",
  "2024-02-04": "/constellations/feb-4-2024.jpg",
  "2024-03-15": "/constellations/mar-15-2024.jpg", // Add your new date
};
```

3. **Or manually set it on a specific month:**
   - Find the month object in the `timelineData` object
   - Set `hasConstellation: true`
   - Set `constellationDate: "Mar 15, 2024"`
   - Set `constellationImage: "/constellations/mar-15-2024.jpg"`

### 6. Adjusting Number of Cards Per Month

Each month currently has an empty `cards` array. Simply add 5-10 card objects to each month. The structure supports any number of cards per month.

## File Structure

```
rosie/
├── app/
│   ├── page.tsx          # Main page (landing + timeline)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── LandingPage.tsx    # Opening "Happy Anniversary" page
│   ├── Timeline.tsx       # Main timeline container
│   ├── TimelineMonth.tsx  # Month section component
│   ├── TimelineCard.tsx   # Individual photo card
│   └── MusicPlayer.tsx    # Music controls
├── data/
│   └── timeline.ts        # Your timeline data (edit this!)
├── types/
│   └── timeline.ts        # TypeScript types
└── public/
    ├── photos/            # Your photos go here
    ├── constellations/    # Star map images go here
    └── music/             # Background music goes here
```

## Customization

### Changing Colors

The color scheme uses pastel purple. To change colors, edit the Tailwind classes in:
- `components/LandingPage.tsx` - Landing page colors
- `components/TimelineCard.tsx` - Card colors
- `components/TimelineMonth.tsx` - Month header colors
- `app/globals.css` - Scrollbar colors

Look for classes like `text-purple-200`, `bg-purple-500/20`, etc.

### Changing Fonts

Fonts are set in `app/layout.tsx`. The default uses Geist Sans. You can change it to any Google Font or custom font.

### Adjusting Animations

Animation speeds and effects can be adjusted in:
- `components/LandingPage.tsx` - Landing page animations
- `components/Timeline.tsx` - Scroll behavior

## Building for Production

```bash
npm run build
npm start
```

## Tips

1. **Photo Sizes:** For best performance, optimize your photos. Recommended size: 1200-1600px width, JPEG format.

2. **Constellation Images:** Star map images work best as PNG with transparency or as subtle overlays.

3. **Music Format:** MP3 is recommended for best browser compatibility.

4. **Mobile Testing:** Test on actual mobile devices for the best swipe experience.

5. **Content Organization:** Keep your photos organized by month in subfolders if you prefer, just update the paths accordingly.

## Support

If you need help adding content or customizing the site, refer to the code comments in each component file. The structure is designed to be easy to modify!

---

Made with 💜 for Rose
