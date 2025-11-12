# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding Your Content

### Step 1: Add Photos
- Place photos in `public/photos/`
- Name them: `nov-2023-1.jpg`, `nov-2023-2.jpg`, etc.

### Step 2: Add Captions
- Edit `data/timeline.ts`
- Find the month you want to edit
- Add cards to the `cards` array:

```typescript
cards: [
  {
    id: "nov-2023-1",
    photo: "/photos/nov-2023-1.jpg",
    caption: "Your beautiful caption here, angel.",
    date: "November 13, 2023" // optional
  },
  // Add more cards...
]
```

### Step 3: Add Music
- Place your music file in `public/music/`
- Name it `background-music.mp3`

### Step 4: Add Constellation Images
- Place star map images in `public/constellations/`
- Name them: `nov-13-2023.jpg`, `dec-1-2023.jpg`, etc.
- They'll automatically appear on the configured special dates

## 🎨 Features

✅ Landing page with animated pet names  
✅ 25 months (Nov 2023 - Nov 2025)  
✅ Swipe/scroll navigation  
✅ Background music with controls  
✅ Star constellation backgrounds  
✅ Dark theme with purple accents  
✅ Mobile optimized  

## 📚 Full Documentation

See `README.md` for detailed instructions.

---

**Ready to go!** Just add your photos and captions, and you're all set! 💜

