# 💜 Happy Anniversary, Rose - Ultra Modern Edition

A stunning, minimalistic timeline website celebrating your 2-year journey together. Built with cutting-edge animations, beautiful typography, and an immersive user experience.

## ✨ Features

### Core Features
- **Stunning Landing Page** - Animated introduction with rotating pet names and day counter
- **25 Month Timeline** - November 2023 through November 2025
- **Photo Memories** - Beautiful cards with parallax effects and smooth transitions
- **Star Constellations** - Special dates marked with constellation overlays
- **Background Music** - Elegant music player with visualizer
- **Ultra-Smooth Navigation** - Keyboard shortcuts, swipe gestures, and navigation dots
- **Loading Screen** - Beautiful entrance animation

### Visual Enhancements
- **Glass Morphism Effects** - Subtle glass textures throughout
- **Parallax Scrolling** - Images and text move at different speeds
- **Word-by-Word Reveal** - Captions animate in beautifully
- **Progress Indicators** - Visual progress bar and section indicators
- **Gradient Animations** - Subtle animated gradients and glows
- **Skeleton Loading** - Smooth image loading states

## 🚀 Installation Guide

### Prerequisites
- Node.js 18+ installed
- A code editor (VS Code recommended)
- Basic terminal knowledge

### Step 1: Setup Project

```bash
# Clone or create your project folder
cd rosie

# Install all dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## 📸 Adding Your Photos

### Step 1: Prepare Your Photos

1. **Optimize your images** (IMPORTANT for performance):
   - Use JPEG format for photos
   - Resize to max 1920px width
   - Aim for 200-500KB per image
   - Use tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)

2. **Naming convention**:
   ```
   nov-2023-1.jpg
   nov-2023-2.jpg
   dec-2023-1.jpg
   ...etc
   ```

3. **Place photos in**: `public/photos/`

### Step 2: Add Photos to Timeline

Edit `data/timeline.ts` and find the month you want to update:

```typescript
// Find the generateAllMonths() function
// Locate the month you want to edit (e.g., months[0] for Nov 2023)

months[0].cards = [
  {
    id: "nov-2023-1",
    photo: "/photos/nov-2023-1.jpg",  // Your photo path
    caption: "Our first date at the coffee shop, angel. You wore that purple dress that took my breath away.",
    date: "November 13, 2023"  // Optional specific date
  },
  {
    id: "nov-2023-2", 
    photo: "/photos/nov-2023-2.jpg",
    caption: "Dancing in the rain, kutty baby. We didn't care who was watching.",
    // No date = just shows the caption
  },
  // Add 3-8 more cards per month for best effect
];
```

### Step 3: Writing Beautiful Captions

**Tips for captions:**
- Keep them personal and heartfelt
- Mix lengths (some short, some longer)
- Use the pet names naturally
- Include sensory details (what you saw, felt, heard)
- Reference inside jokes and special moments

**Pet names to use:**
- Rose, Angel, Kutty Baby, Puu, Puttu, Puchu, Love, Dummy Baby, Lovey, GAY, KGB, Mushu Pork

**Example captions:**
```javascript
"That sunset in December, puu. Your eyes were brighter than the horizon."

"Our first road trip together, angel. Windows down, music loud, hearts full."

"You made me laugh until my sides hurt, dummy baby. That's when I knew."

"Three hours talking about everything and nothing, kutty baby. Time stopped."
```

## 🌟 Adding Star Constellations

### For Existing Special Dates

Already configured dates:
- Nov 13, 2023 (Anniversary)
- Nov 16, 2023
- Dec 1, 2023
- Dec 24, 2023
- Feb 4, 2024

1. **Get star map images**:
   - Use [The Night Sky](https://thenightsky.com) or similar
   - Download as JPG/PNG
   - Make them subtle (low opacity works best)

2. **Add to project**:
   ```
   public/constellations/nov-13-2023.jpg
   public/constellations/dec-24-2023.jpg
   etc.
   ```

### Adding New Special Dates

In `data/timeline.ts`, add to the `constellationDates` object:

```typescript
const constellationDates: Record<string, string> = {
  "2023-11-13": "/constellations/nov-13-2023.jpg",
  "2024-02-14": "/constellations/feb-14-2024.jpg", // Add Valentine's Day
  "2024-07-04": "/constellations/jul-4-2024.jpg",  // Add another special date
};
```

## 🎵 Adding Background Music

1. **Choose your song** (MP3 format recommended)
2. **Optimize it**:
   - Use 128kbps bitrate for smaller file size
   - Consider trimming to 3-4 minutes if longer
3. **Add to project**: Place in `public/music/background-music.mp3`

The player auto-loops and starts at 30% volume.

## 🎨 Customization

### Changing Colors

The site uses a purple theme. To change colors, edit these files:

**components/LandingPage.tsx** - Search for:
- `text-purple-300` → Change to `text-pink-300` (or any color)
- `from-purple-300` → Change gradient colors
- `bg-purple-500` → Change background colors

**app/globals.css** - Update:
```css
:root {
  --purple-glow: 196 181 253; /* Change RGB values */
}
```

### Adjusting Animation Speeds

In components, look for `transition` properties:
```typescript
transition={{ duration: 0.6 }}  // Change to 1.2 for slower
```

### Changing Fonts

Edit `app/layout.tsx`:
```typescript
// Import a different Google Font
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});
```

## 📱 Mobile Optimization

The site is fully responsive, but test on real devices:

1. **Test swipe gestures** on actual phones
2. **Check image loading** on slower connections
3. **Verify music playback** (some phones require user interaction first)

## 🚢 Deployment

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Deploy with one click!

### Option 2: Netlify

1. Build the project: `npm run build`
2. Drag the `.next` folder to Netlify

### Option 3: Custom Domain

After deploying, add a custom domain like `rose-anniversary.com` through your hosting provider.

## 📋 Checklist Before Going Live

- [ ] Added at least 5 photos per month (where applicable)
- [ ] Written heartfelt captions for each photo
- [ ] Added background music file
- [ ] Added constellation images for special dates
- [ ] Tested on mobile device
- [ ] Optimized all images (< 500KB each)
- [ ] Checked all pet names are spelled correctly
- [ ] Tested music player works
- [ ] Reviewed all captions for typos
- [ ] Backed up your code and photos

## 🎯 Pro Tips

1. **Photo Selection**:
   - Mix close-ups with scenic shots
   - Include both of you, but also individual moments
   - Add photos of meaningful places/objects

2. **Caption Writing**:
   - Write when you're feeling emotional
   - Include specific details only you two would know
   - Vary between funny, romantic, and nostalgic

3. **Performance**:
   - Keep total photos under 200 for smooth performance
   - Use lazy loading (already implemented)
   - Test on 4G connection to ensure smooth experience

4. **Personal Touches**:
   - Add a surprise message at specific months
   - Include photos of handwritten notes
   - Add screenshots of meaningful conversations

## 💝 Final Touch Ideas

- Add a hidden message in the last month
- Include a photo of the ring (if applicable)
- Add voice recordings as Easter eggs
- Create a QR code that leads to the site
- Print some photos to give alongside the digital experience

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths are exactly: `/photos/filename.jpg`
- Ensure images are in `public/photos/` folder
- Verify file extensions match (.jpg vs .jpeg)

**Music not playing?**
- File must be in `public/music/background-music.mp3`
- Some browsers block autoplay - user needs to click play

**Animations choppy?**
- Reduce image sizes
- Close other browser tabs
- Try in Chrome for best performance

**Build errors?**
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check for typos in component imports

---

## 🎉 You're Ready!

This website is your digital love letter. Take your time adding content, make it personal, and most importantly, make it yours.

Rose is going to love this! 💜

---

*Need help? The code is well-commented, and each component is modular. Start with small changes and build up. You've got this!*