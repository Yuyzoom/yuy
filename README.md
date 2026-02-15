# Project Valentine ❤️

A playful Valentine's Day web application where users are asked "Do you love me?" with a fun twist: every time they click "No", the "Yes" button grows larger!

## Features

- 💝 Interactive Valentine's Day experience
- 🎨 Beautiful gradient design with custom Valentine's color palette
- ✨ Smooth animations using Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌐 Shareable via ngrok tunnel

## Tech Stack

- **Next.js 15** with TypeScript and App Router
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **ngrok** for external sharing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

The dependencies are already installed! Just start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Sharing with ngrok

To share this app with someone special:

1. Install ngrok globally (if not already installed):
```bash
npm install -g ngrok
```

2. Sign up at [ngrok.com](https://ngrok.com) and get your authtoken

3. Configure ngrok with your token:
```bash
ngrok config add-authtoken <YOUR_TOKEN>
```

4. In one terminal, run the dev server:
```bash
npm run dev
```

5. In another terminal, start the tunnel:
```bash
npm run tunnel
```

6. Share the ngrok URL with your Valentine! 💕

## How It Works

1. User sees "Do you love me?" with Yes/No buttons
2. Each click on "No" makes the "Yes" button grow by 1.4x
3. After 6 clicks, the "No" button disappears
4. Clicking "Yes" shows a celebration page with floating hearts
5. Maximum "Yes" button scale: 5.5x

## Project Structure

```
yuy/
├── src/
│   └── app/
│       ├── layout.tsx           # Root layout with metadata
│       ├── page.tsx             # Main interactive page
│       ├── globals.css          # Tailwind styles
│       ├── success/
│       │   └── page.tsx         # Success celebration page
│       └── components/
│           ├── YesButton.tsx    # Animated growing button
│           └── NoButton.tsx     # Disappearing button
├── package.json                  # Dependencies
├── tailwind.config.ts           # Custom Valentine's colors
├── next.config.ts               # Next.js configuration
└── tsconfig.json                # TypeScript configuration
```

## Development Commands

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ngrok tunnel
npm run tunnel
```

## Mobile Responsive Features

✅ **Fully optimized for mobile devices:**
- Touch-friendly buttons with `touch-manipulation` for better tap responsiveness
- Responsive text sizes (smaller on mobile, larger on desktop)
- Flexible button layouts (vertical stack on mobile, horizontal on tablets/desktop)
- Maximum width constraints prevent button overflow on small screens
- Optimized animations perform smoothly on mobile devices
- Viewport meta tags ensure proper rendering on all devices

### Testing on Mobile

**Option 1: Test on your phone via ngrok**
1. Start the dev server and ngrok tunnel (see instructions above)
2. Open the ngrok URL on your phone
3. Experience the app in full mobile glory!

**Option 2: Browser DevTools**
1. Open http://localhost:3001 in Chrome/Firefox
2. Press F12 to open DevTools
3. Click the device toolbar icon (or Ctrl+Shift+M)
4. Select a mobile device (iPhone, Samsung, etc.)
5. Test the responsive design

**Breakpoints:**
- Mobile: < 640px (sm)
- Tablet: 640px - 768px
- Desktop: > 768px (md)

## Customization

### Change Button Growth Rate

Edit `src/app/page.tsx`:
```typescript
setYesButtonScale((prev) => Math.min(prev * 1.4, 5.5));
//                                           ^^^   ^^^
//                                      growth  max scale
```

### Change When "No" Button Disappears

Edit `src/app/page.tsx`:
```typescript
const showNoButton = noClickCount < 6;
//                                  ^
//                           number of clicks
```

### Customize Colors

Edit `src/app/globals.css` in the `@theme` section to modify the Valentine's color palette.

## License

MIT - Feel free to use this for your Valentine's Day surprises! ❤️
