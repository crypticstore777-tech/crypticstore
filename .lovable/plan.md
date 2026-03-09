

## Add Wedding Photo Gallery to DJ Services Page

### What
Add a dedicated "Weddings" section to the DJ Services page featuring the two uploaded wedding photos — one showing guests dancing at an outdoor reception, the other a bridal party group photo.

### How
1. **Copy both uploaded images** to `src/assets/`:
   - `src/assets/dj-wedding-dancing.jpeg` (outdoor reception dance floor)
   - `src/assets/dj-wedding-party.jpeg` (bridal party group shot)

2. **Update `src/pages/DJServices.tsx`**:
   - Import both new images
   - Add a new "Weddings" section between the Services Grid and CTA sections
   - Section includes a heading ("Wedding Entertainment"), brief description text, and a two-column image gallery with rounded corners, gold accent borders, and hover effects matching the page style

