

## Music Page

A new `/music` page for MC Myster?ous featuring embedded music players from SoundCloud, Mixcloud, and YouTube, organized with tabs. The page follows the existing dark theme with gold/yellow accents and adds Orbitron + Space Grotesk fonts.

### What will be built

1. **New page: `src/pages/Music.tsx`**
   - Hero section with gradient background matching the site's dark + gold brand
   - Tabbed interface (using existing Radix Tabs component) with three tabs: SoundCloud, Mixcloud, YouTube
   - Each tab contains responsive iframe embeds with dark-themed player parameters
   - Placeholder embed URLs that you can swap with your actual profile/playlist URLs

2. **Font additions in `index.html`**
   - Google Fonts import for Orbitron (headings) and Space Grotesk (body text)
   - Applied via inline styles/classes on the Music page only (won't affect other pages)

3. **Navigation update: `src/components/Navigation.tsx`**
   - Add `{ to: "/music", label: "Music", exact: false }` to the navLinks array

4. **Route registration: `src/App.tsx`**
   - Import the Music page component
   - Add `<Route path="/music" element={<Music />} />` 

### Technical details

- Tabs use the existing `@radix-ui/react-tabs` component already installed
- SoundCloud/Mixcloud/YouTube embeds use standard iframes with dark theme parameters (`color=...&theme_color=...&auto_play=false`)
- Orbitron applied to headings via `font-family: 'Orbitron', sans-serif` style
- Space Grotesk applied to body text via `font-family: 'Space Grotesk', sans-serif` style
- SEO metadata via react-helmet
- Responsive layout -- embeds scale with container width

