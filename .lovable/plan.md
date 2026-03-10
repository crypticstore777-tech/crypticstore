

## Add Imitable Club Hero Image to Imitable Lives Collection

### What
Add the uploaded "Imitable Club" Egyptian royal image as the hero background for the Imitable Lives collection page, replacing the current abstract SVG pyramid pattern with this striking visual.

### Technical Steps

1. **Copy image** to `src/assets/`:
   - `user-uploads://IMG_0280.jpeg` → `src/assets/imitable-club-hero.jpg`

2. **Update `src/pages/ImitableLives.tsx`** hero section (lines 117-161):
   - Import the new image
   - Replace the SVG pyramid pattern with the actual image as a background
   - Add a dark gradient overlay so text remains readable
   - Keep the gold glow border style consistent with other hero sections (per design conventions)
   - Shift to a side-by-side layout (flex-col lg:flex-row) matching the hero pattern used on DJ Services, YouKnowWeDoMagic, and blog pages

### No Database Changes
Frontend-only asset addition and layout update.

