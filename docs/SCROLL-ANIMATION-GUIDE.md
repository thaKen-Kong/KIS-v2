# Scroll Animation System

## Overview
The animation system has been updated to trigger animations only when elements enter the viewport, removing page load animations. This provides a smoother, more performance-friendly experience.

## What Changed

### Removed
- ❌ Page load animations (fade-in on initial load)
- ❌ Animation delays tied to load time
- ❌ `animation-play-state` hacks

### Added
- ✅ Scroll-triggered blur → fade → sharpen animation
- ✅ Elements only animate when they come into view
- ✅ Reusable React hook: `useIntersectionAnimation`
- ✅ Wrapper component: `ScrollAnimationWrapper`

## Animation Sequence

The new animation creates a smooth visual effect:
1. **Start (0%)**: Element is blurred (12px) and invisible (opacity: 0)
2. **Middle (50%)**: Element fades in and blur reduces (6px blur)
3. **End (100%)**: Element is fully visible and sharp (0px blur)

Duration: 0.8s with ease-out timing

## How to Use

### Option 1: Using ScrollAnimationWrapper (Recommended)

The easiest way - just wrap your content:

```jsx
import { ScrollAnimationWrapper } from '../components/common/ScrollAnimationWrapper';

export function MyPage() {
  return (
    <>
      <ScrollAnimationWrapper>
        <PageHeaderUi text="My Header" />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <PageContainer>
          <p>My content</p>
        </PageContainer>
      </ScrollAnimationWrapper>
    </>
  );
}
```

**Optional: Customize animation timing**

```jsx
<ScrollAnimationWrapper 
  animationConfig={{
    threshold: 0.2,        // Trigger when 20% of element is visible
    rootMargin: '100px'    // Trigger 100px before element is visible
  }}
>
  <YourContent />
</ScrollAnimationWrapper>
```

### Option 2: Using useIntersectionAnimation Hook (Direct)

For more control, use the hook directly:

```jsx
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export function MyComponent() {
  const ref = useIntersectionAnimation();

  return (
    <div ref={ref} className="page-item scroll-hidden">
      <YourContent />
    </div>
  );
}
```

### Option 3: Manual Class Application

If you're using class names without components:

```jsx
<div className="page-item scroll-hidden">
  <YourContent />
</div>
```

Then attach the hook or manually add the `scroll-animate-in` class when the element is in view.

## Migration Guide

### Old Code
```jsx
<div className="page-item" style={{ animationDelay: '0s' }}>
  <PageHeaderUi text="Administration" />
</div>
<div className="page-item" style={{ animationDelay: '0.1s' }}>
  <PageContainer>...</PageContainer>
</div>
```

### New Code
```jsx
<ScrollAnimationWrapper>
  <PageHeaderUi text="Administration" />
</ScrollAnimationWrapper>

<ScrollAnimationWrapper>
  <PageContainer>...</PageContainer>
</ScrollAnimationWrapper>
```

## CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `page-item` | Base class for animated elements |
| `scroll-hidden` | Initial state: hidden & blurred |
| `scroll-animate-in` | Applied when element enters viewport (triggers animation) |

## Performance Considerations

- ✅ Uses Intersection Observer API (native browser optimization)
- ✅ Animations stop being observed after triggering (automatic cleanup)
- ✅ GPU-accelerated animating (filter & opacity)
- ✅ No layout thrashing

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 13+)
- IE 11: Not supported (gracefully degrades)

## Customization

### Adjust Animation Duration

Edit `src/styles/mobile.css`:

```css
.page-item.scroll-animate-in {
    animation: scroll-blur-fade-sharp 0.8s ease-out forwards;
    /* Change 0.8s to your preferred duration */
}
```

### Change Blur Amount

Edit the `@keyframes scroll-blur-fade-sharp`:

```css
@keyframes scroll-blur-fade-sharp {
    0% {
        opacity: 0;
        filter: blur(20px);  /* Increase/decrease blur amount */
    }
    50% {
        opacity: 1;
        filter: blur(10px);
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
}
```

### Adjust Trigger Point

In your component, customize when the animation triggers:

```jsx
<ScrollAnimationWrapper 
  animationConfig={{
    threshold: 0.5,    // Trigger when 50% visible (default: 0.1 = 10%)
    rootMargin: '50px' // Trigger 50px before entering
  }}
>
  <YourContent />
</ScrollAnimationWrapper>
```

## Troubleshooting

**Animation not triggering?**
- Ensure `scroll-hidden` class is applied initially
- Check that scroll threshold is set appropriately
- Verify element is actually scrolling into view

**Animation too fast/slow?**
- Adjust the duration in CSS (0.8s in keyframes)
- Modify timing function (ease-out, linear, etc.)

**Too much/too little blur?**
- Change blur pixel values in `@keyframes scroll-blur-fade-sharp`

**Only works on first scroll?**
- That's by design! Observer stops watching after first animation to save performance
- If you need repeated animations, modify the hook to remove `observer.unobserve()`
