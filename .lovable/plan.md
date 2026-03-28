

## Plan: Combine Two Images into New Homepage Hero

### What
Use AI image editing to combine the CS logo/favicon with the meandcleo editorial photo into a single cinematic hero image for the homepage background. The CS branding will be subtly integrated into the streetwear editorial shot.

### How

1. **Generate combined image** using AI image generation (google/gemini-3-pro-image-preview)
   - Use the meandcleo photo as the base editorial image
   - Prompt the AI to composite the gold "CS" logo into the scene — as a subtle overlay, watermark-style element, or integrated into the dark background area
   - Ensure the result is wide/landscape format suitable for a full-viewport hero background
   - Output to `src/assets/cryptic-store-hero.jpg`

2. **No code changes needed** — `Index.tsx` already imports `cryptic-store-hero.jpg` for the Ken Burns hero section

### Technical Details
- Use the AI gateway script (`lovable_ai.py`) with `--edit-image` to blend the CS logo into the editorial photo
- Target a wide cinematic aspect ratio for hero usage
- Maintain the dark, moody black-and-gold aesthetic
- No watermarks allowed per brand constraints

### Files Changed
| File | Change |
|------|--------|
| `src/assets/cryptic-store-hero.jpg` | Overwrite with combined image |

