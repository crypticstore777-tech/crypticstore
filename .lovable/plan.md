

## Replace Watermarked Image on About Page

### What
Replace the current `src/assets/mc-mysterious-studio.jpeg` (used in the About page hero) with the uploaded clean image of MC Myster?ous with gold headphones and Cryptic Store branding.

### How
1. **Copy** `user-uploads://D5xAHuUh.jpeg` to `src/assets/mc-mysterious-studio.jpeg` (overwrite)
2. **Update alt text** in `src/pages/About.tsx` to match the new image content (gold headphones, Cryptic Store logo, treasure chest)
3. No other code changes needed — the import already references this file

