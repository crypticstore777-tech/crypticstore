

## Update YouTube Embed and Verify Desktop Layout

### Changes

1. **Fix YouTube embed in `src/pages/Music.tsx`**
   - Replace the broken `listType=user_uploads` URL with a single video embed using the provided video ID
   - New URL: `https://www.youtube.com/embed/Wegjdo4mbpE?theme=dark`

2. **Verify desktop layout** after the change to confirm all three tabs render correctly and responsively

### Technical details

- The current YouTube iframe src (`https://www.youtube.com/embed?listType=user_uploads&list=mcmysterous999&theme=dark`) uses a deprecated format that shows "Video unavailable"
- Replacing with the standard `/embed/VIDEO_ID` format will fix playback
- No other files need changes

