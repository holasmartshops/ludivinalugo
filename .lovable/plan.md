

## Plan: Make hero section fade more linear

The current fade is a small `h-48` div at the very bottom with a simple `from-transparent to-dark` gradient — this means it stays clear for most of the section and only fades in the last ~12rem, creating a sudden dark band.

### Change
- Increase the fade height from `h-48` to `h-96` (or larger) so it covers more of the section
- Use a custom CSS gradient with multiple color stops for a more linear, gradual transition instead of the default two-stop Tailwind gradient

Specifically, replace the single gradient div with a taller one using an inline style like:
```css
background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 75%, #0a0a0a 100%)
```
This distributes the opacity evenly across the height, making the fade feel smooth and linear rather than concentrated at the bottom.

**File**: `src/components/HeroSection.tsx` — line 70, replace the existing fade div.

