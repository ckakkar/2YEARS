# 🚀 QUICK START - Get Running in 5 Minutes

## Step 1: Install (30 seconds)
```bash
npm install
```

## Step 2: Start Dev Server (10 seconds)
```bash
npm run dev
```

## Step 3: View Your Site
Open [http://localhost:3000](http://localhost:3000)

---

## 📸 Quick Photo Setup

### Add Photos:
1. Put photos in: `public/photos/`
2. Name them: `nov-2023-1.jpg`, `nov-2023-2.jpg`, etc.

### Add to Timeline:
Edit `data/timeline.ts`:

```typescript
months[0].cards = [  // November 2023
  {
    id: "nov-2023-1",
    photo: "/photos/nov-2023-1.jpg",
    caption: "Our first moment, angel.",
    date: "November 13, 2023"
  },
  // Add more cards...
];

months[1].cards = [  // December 2023
  {
    id: "dec-2023-1",
    photo: "/photos/dec-2023-1.jpg",
    caption: "Christmas magic with you, love.",
  },
  // Add more cards...
];
```

---

## 🎵 Quick Music Setup
1. Add MP3 file to: `public/music/background-music.mp3`
2. Done! Auto-plays at 30% volume

---

## 🌟 Quick Constellation Setup
1. Add star maps to: `public/constellations/`
2. Name: `nov-13-2023.jpg`, `dec-24-2023.jpg`, etc.
3. They'll appear automatically on configured dates

---

## 📝 Quick Tips

### Finding the Right Month Index:
- `months[0]` = November 2023
- `months[1]` = December 2023  
- `months[2]` = January 2024
- ...and so on

### Pet Names to Use:
Rose, Angel, Kutty Baby, Puu, Puttu, Puchu, Love, Dummy Baby

### Caption Ideas:
- "That perfect sunset, puu."
- "You make me laugh like no one else, angel."
- "Dancing in the kitchen, kutty baby."
- "This moment changed everything, love."

---

## 🚢 Deploy to Vercel (2 minutes)
1. Push to GitHub
2. Import to Vercel.com
3. Click Deploy
4. Share link with Rose! 💜

---

**That's it! You're ready to go!**

Full documentation in `README.md` for detailed customization.