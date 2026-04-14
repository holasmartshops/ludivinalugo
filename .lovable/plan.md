

## Fix: Carousel item visible during wrap-around

**Problem**: With 7 products and `visible = Math.abs(offset) <= 3`, items at offset ±3 are still rendered. When switching slides, an item wrapping from one side to the other (e.g., offset jumping from -3 to +3) animates across the entire carousel because `transition-all duration-500` smoothly interpolates the position change.

**Solution**: Reduce visible range to `Math.abs(offset) <= 2` so only 5 items render at a time (2 on each side + active). Items entering/leaving will mount/unmount instead of sliding across the back. Additionally, items at offset ±2 should have very low opacity to create a cleaner edge fade.

### Changes to `src/components/ProductCarousel.tsx`

1. **Line 37**: Change `Math.abs(offset) <= 3` to `Math.abs(offset) <= 2`
2. **Line 48**: Adjust opacity — keep active at 1, offset ±1 at 0.4, offset ±2 at 0.15 for a smoother fade at edges

This eliminates the wrap-around animation artifact since items beyond offset ±2 are simply not rendered.

