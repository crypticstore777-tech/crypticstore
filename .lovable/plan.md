

## Add MC Mysterious Logo Designs to 4 Pages

### What
Add 4 logo variations as branding elements to About, DJ Services, Music, and Contact pages. The logos were previously uploaded but never copied to assets.

### Image Assignments
- **Badge logo** (IMG_3347.jpeg) → **About** — centered brand emblem between the two existing photos
- **Gold logo** (A12FC352.jpeg) → **DJ Services** — brand badge in the hero section
- **Stone logo** (IMG_3343.jpeg) → **Music** — decorative element in the studio section
- **Dark logo** (IMG_3344.jpeg) → **Contact** — brand mark in the hero section

### Technical Steps

1. **Copy 4 images** to `src/assets/`:
   - `user-uploads://A12FC352-EB6E-4911-8ECC-079CC47CE90B.jpeg` → `mc-mysterious-logo-gold.jpeg`
   - `user-uploads://IMG_3343.jpeg` → `mc-mysterious-logo-stone.jpeg`
   - `user-uploads://IMG_3347.jpeg` → `mc-mysterious-logo-badge.jpeg`
   - `user-uploads://IMG_3344.jpeg` → `mc-mysterious-logo-dark.jpeg`

2. **About.tsx** — Add badge logo between the two existing portrait images (between lines 56-57), styled as a centered circular emblem with gold glow

3. **DJServices.tsx** — Add gold logo in the hero section (around line 77) as a floating brand element alongside the hero image

4. **Music.tsx** — Add stone logo in the "In the Studio" section (around line 46) as a decorative element next to the text

5. **Contact.tsx** — Add dark logo in the hero section (lines 91-98) below the heading text as a centered brand mark

### Styling
All logos displayed at ~80-120px with subtle gold shadow (`shadow-[0_0_20px_hsla(50,100%,50%,0.3)]`), rounded, consistent with the site's premium dark aesthetic.

### No Database Changes
Frontend-only.

