

## Add Uploaded Image to Music Page Hero

### What
Add the uploaded image of MC Myster?ous (with gold headphones, Cryptic Store branding) as the hero background on the Music page, replacing the current gradient-only hero.

### How
1. **Copy the uploaded image** to `src/assets/mc-mysterious-music-hero.jpg`
2. **Update `src/pages/Music.tsx`** hero section:
   - Import the new image asset
   - Use it as a background image on the hero section (similar to how `cryptic-store-hero.jpg` is used on the Index page)
   - Add a dark gradient overlay to maintain text readability
   - Increase hero height to showcase the image properly

