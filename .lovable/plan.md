

## Update Navigation Logo to Match Favicon

### What
Replace the current navigation logo (`src/assets/cryptic-store-logo.jpg` — the gold Cryptic Store emblem) with a new image matching the yellow all-seeing eye favicon design.

### How
1. **Generate a new logo image** using AI image generation — a yellow (#FFCC00) all-seeing eye occult symbol on a black background, matching the favicon but optimized for the nav bar (rectangular/square, clean at 40x40px display size)
2. **Overwrite** `src/assets/cryptic-store-logo.jpg` with the new image
3. No code changes needed — `Navigation.tsx` already imports and displays this file at `h-10 w-10`

