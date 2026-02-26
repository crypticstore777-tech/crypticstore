

## Add Image to YouKnowWeDoMagic Page

### Changes

1. **Copy uploaded image** to `src/assets/youknowwedomagic-hero.jpg`

2. **Update `src/pages/YouKnowWeDoMagic.tsx`**:
   - Import the new image asset
   - Update the hero section to a side-by-side layout (text left, image right) matching the DJ Services page pattern
   - Add the image with gold glow border styling consistent with the DJ Services page

### Technical Details

**File to copy:**
- `user-uploads://IMG_1063.jpeg` → `src/assets/youknowwedomagic-hero.jpg`

**File to modify:**
- `src/pages/YouKnowWeDoMagic.tsx` — import image, restructure hero to `flex-col lg:flex-row` layout with image on the right side

