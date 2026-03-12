

## Enhance Homepage Hero

### Changes

**1. `tailwind.config.ts`** — Add Ken Burns keyframe animation:
- Add `ken-burns` keyframe: scales from `1` to `1.08` over 20s
- Add corresponding animation utility

**2. `src/pages/Index.tsx`** — Hero section updates (lines 117–156):
- **Full height**: Change `h-[70vh] min-h-[500px]` → `h-screen min-h-[600px]`
- **Ken Burns on background**: Add `animate-ken-burns` class to the background image div
- **Remove overlays**: Strip `bg-primary/20`, `backdrop-blur-sm`, and `bg-background/50 backdrop-blur-sm` from the Welcome badge and Dare2Wear button
- **Stronger text shadows**: Upgrade h1 shadow to multi-layer `[0_2px_4px_rgba(0,0,0,1),0_4px_20px_rgba(0,0,0,0.8)]`; add text shadow to tagline and badge text
- Welcome badge becomes transparent with just a border: `bg-transparent border border-primary/60`
- Dare2Wear outline button: remove `bg-background/50 backdrop-blur-sm`, keep border styling

**3. Use uploaded image as new hero** — Copy `user-uploads://grok_image_1773088855519.jpg` to `src/assets/cryptic-store-hero.jpg` replacing the current hero, giving the homepage a fresh fashion runway look

### Summary
Full-viewport hero with slow Ken Burns zoom animation on the background image, no blur/overlay effects, and stronger text shadows for readability against the raw image.

