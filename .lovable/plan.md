

## Plan: Scroll to top on navigation

**Problem**: Clicking "Tienda" or "Inicio" in the navbar doesn't scroll to the top of the page.

**Solution**: Two changes in `src/components/Header.tsx`:

1. **`handleNav` function**: Add `window.scrollTo(0, 0)` for non-anchor links (`/tienda` and `/`), so clicking them scrolls to top.

2. Specifically, after `setMenuOpen(false)`, if the href does NOT start with `/#`, call `window.scrollTo({ top: 0, behavior: 'smooth' })`. For `/#` links on the home page, keep the existing `scrollIntoView` behavior. For `/#` links when navigating TO home from another page, also scroll after navigation.

Additionally, add a `useEffect` in `src/pages/Tienda.tsx` and `src/pages/Index.tsx` (or handle it globally) to scroll to top on mount — this covers cases where React Router changes the route but doesn't reset scroll position.

### Files to change

- **`src/components/Header.tsx`**: Update `handleNav` to add `window.scrollTo({ top: 0, behavior: 'smooth' })` for `/tienda` and `/` links.
- **`src/App.tsx`**: Add a `ScrollToTop` component inside `BrowserRouter` that listens to `location.pathname` changes and scrolls to top — this is the cleanest global solution.

