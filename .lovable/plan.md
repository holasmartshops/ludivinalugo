

## Plan: Fix Hero Section Fade

**Problem**: The bottom fade gradient (line 70) has `z-20`, which sits above the content (`z-10`), darkening the text and buttons too.

**Solution**: Move the fade layer between the background and the content by changing its z-index, and bump the text content above it.

### Changes to `src/components/HeroSection.tsx`

1. **Bottom fade div (line 70)**: Change `z-20` to `z-[5]` so it only covers the video/image background layers (which have no z-index set, defaulting to 0).

2. **Content grid (line 73)**: Keep `z-10` — this already sits above `z-[5]`, so the text, logo, and buttons will be unaffected by the fade.

This ensures the fade darkens only the background video/image and the Ludivina photo, while all text and CTAs remain fully visible.

