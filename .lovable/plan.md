

## Add Sync Hub — Central Services Page + Nav Link

### What
Create a new "Sync Hub" page that acts as a central hub linking to DJ Services, Music, YouKnowWeDoMagic (spiritual services), and Contact. Add a nav button for it in the Navigation component, replacing the individual "Services" link to reduce nav clutter.

### Technical Steps

1. **Create `src/pages/SyncHub.tsx`**
   - Hero section with heading "Sync Hub" and tagline about all services in one place
   - Card grid linking to the 4 service areas:
     - **DJ Services** — Mobile DJ, weddings, events
     - **Music** — Production, studio, releases
     - **#YouKnowWeDoMagic** — Tarot, scrying, astrology, spiritual development
     - **Contact** — Book a service
   - Each card with icon, title, short description, and CTA button linking to the respective page
   - Consistent dark/gold styling with the rest of the site
   - Navigation + Footer included

2. **Update `src/App.tsx`**
   - Import SyncHub page
   - Add route: `/sync-hub`

3. **Update `src/components/Navigation.tsx`**
   - Replace the existing "Services" nav link (`/youknowwedomagic`) with "Sync Hub" (`/sync-hub`)
   - This consolidates DJ Services, Music, and YouKnowWeDoMagic under one hub entry point

### No Database Changes
Frontend-only.

