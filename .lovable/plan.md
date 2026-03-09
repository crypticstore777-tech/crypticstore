

## Add Uploaded Images to Website Branding

### What
Add the 4 uploaded images across the site for enhanced branding: homepage gallery section, About page update, Music page, and YouKnowWeDoMagic page.

### Where Each Image Goes

1. **Y5mrKuZK.jpeg** (gold headphones + Cryptic Store logo) → Homepage: new "Meet the Founder" section between the Amazon section and Products section
2. **IMG_2962.jpeg** (studio mixing board) → Music page: replace or supplement current hero image (`mc-mysterious-music-hero.jpg`)
3. **7M58Z8gQ.jpeg** (moonlit portrait, arms crossed) → YouKnowWeDoMagic page: add as a second image in the hero section
4. **rKn1nC8A.jpeg** (moonlit portrait, relaxed pose) → About page: add as a second image below or alongside the existing hero image in a mini gallery

### Technical Steps

1. **Copy images** to `src/assets/`:
   - `user-uploads://Y5mrKuZK.jpeg` → `src/assets/mc-mysterious-founder.jpeg`
   - `user-uploads://IMG_2962.jpeg` → `src/assets/mc-mysterious-studio-mixing.jpeg`
   - `user-uploads://7M58Z8gQ.jpeg` → `src/assets/mc-mysterious-moonlit-1.jpeg`
   - `user-uploads://rKn1nC8A.jpeg` → `src/assets/mc-mysterious-moonlit-2.jpeg`

2. **Index.tsx** — Add a "Meet the Founder" section after the Amazon Store section with the gold headphones image, a brief intro, and a link to the About page

3. **Music.tsx** — Import the studio mixing board image and use it as the hero background or add it as a secondary visual

4. **YouKnowWeDoMagic.tsx** — Add moonlit portrait 1 as an additional image in the spiritual services section or hero

5. **About.tsx** — Add moonlit portrait 2 alongside existing content, creating a two-image layout in the hero or a new gallery row

### No Database Changes
All changes are frontend-only asset additions and component updates.

