# Example: Converting a Page to Use Scroll Animations

This example shows how to update an existing page from the old page-load animations to the new scroll-triggered blur-fade-sharpen animation system.

## Example 1: Simple Page with Header and Content

### Before (Old System)
```jsx
// src/pages/About/Administrations.jsx
import { PageContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";

export function AdministrationsPages() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="Administration" />
      </div>
      <div className="page-item" style={{ animationDelay: '0.1s' }}>
        <PageContainer className="box-shadow vertical-padding vbox">
          {/* Content here */}
        </PageContainer>
      </div>
    </>
  )
}
```

**Issues:**
- ❌ Animates on page load (doesn't match scroll position)
- ❌ Animations run with hard-coded delays
- ❌ No performance benefit when elements aren't visible
- ❌ Staggered animation doesn't feel natural

### After (New Scroll System)
```jsx
// src/pages/About/Administrations.jsx
import { PageContainer } from "../../components/common/Container";
import { PageHeaderUi } from "../../components/common/PageHeader";
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";

export function AdministrationsPages() {
  return (
    <>
      <ScrollAnimationWrapper>
        <PageHeaderUi text="Administration" />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <PageContainer className="box-shadow vertical-padding vbox">
          {/* Content here */}
        </PageContainer>
      </ScrollAnimationWrapper>
    </>
  )
}
```

**Benefits:**
- ✅ Animates only when scrolled into view
- ✅ No animation delays needed
- ✅ Better performance (lazy animation)
- ✅ Smoother blur-fade-sharpen effect
- ✅ Cleaner code

---

## Example 2: Page with Multiple Content Sections

### Before (Old System)
```jsx
export function NewsPage() {
  return (
    <>
      <div className="page-item" style={{ animationDelay: '0s' }}>
        <PageHeaderUi text="News & Updates" />
      </div>
      
      <div className="page-item" style={{ animationDelay: '0.1s' }}>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Latest Articles</h2>
          <p>Articles go here...</p>
        </PageContainer>
      </div>
      
      <div className="page-item" style={{ animationDelay: '0.2s' }}>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Announcements</h2>
          <p>Announcements go here...</p>
        </PageContainer>
      </div>

      <div className="page-item" style={{ animationDelay: '0.3s' }}>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Events</h2>
          <p>Events go here...</p>
        </PageContainer>
      </div>
    </>
  )
}
```

### After (New Scroll System)
```jsx
export function NewsPage() {
  return (
    <>
      <ScrollAnimationWrapper>
        <PageHeaderUi text="News & Updates" />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Latest Articles</h2>
          <p>Articles go here...</p>
        </PageContainer>
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Announcements</h2>
          <p>Announcements go here...</p>
        </PageContainer>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <PageContainer className="box-shadow vertical-padding vbox">
          <h2>Events</h2>
          <p>Events go here...</p>
        </PageContainer>
      </ScrollAnimationWrapper>
    </>
  )
}
```

**What Changed:**
- Replaced `<div className="page-item" style={{ animationDelay: '...' }}>` with `<ScrollAnimationWrapper>`
- Removed all `animationDelay` styles
- Removed the need to import anything else - just use the wrapper component

---

## Example 3: Advanced - Custom Intersection Timing

If you need to customize when animations trigger:

```jsx
import { ScrollAnimationWrapper } from "../../components/common/ScrollAnimationWrapper";

export function AdvancedPage() {
  return (
    <>
      {/* Trigger animation when 20% of element is visible */}
      <ScrollAnimationWrapper 
        animationConfig={{ threshold: 0.2 }}
      >
        <section>Early Trigger Section</section>
      </ScrollAnimationWrapper>

      {/* Trigger animation 100px before element enters viewport */}
      <ScrollAnimationWrapper 
        animationConfig={{ rootMargin: '100px' }}
      >
        <section>Pre-entry Animation</section>
      </ScrollAnimationWrapper>

      {/* Default: trigger at 10% visible */}
      <ScrollAnimationWrapper>
        <section>Standard Section</section>
      </ScrollAnimationWrapper>
    </>
  );
}
```

---

## Migration Checklist

- [ ] Import `ScrollAnimationWrapper` in your page file
- [ ] Replace `<div className="page-item" ...>` with `<ScrollAnimationWrapper>`
- [ ] Remove all `animationDelay` style props
- [ ] Remove the `style={{ animationDelay: ... }}` attributes
- [ ] Test that animations trigger on scroll (not on page load)
- [ ] Verify blur-fade-sharpen effect looks good
- [ ] Optional: Customize animation timing if needed

---

## Quick Search & Replace

If you're updating many files, you can use this pattern:

**Find:** `className="page-item"[^>]*style=\{\s*\{\s*animationDelay.*?\}\s*\}`
**Replace with:** `(remove this entire line and wrap content with ScrollAnimationWrapper)`

Or more manually:

**Find:** `<div className="page-item" style={{ animationDelay: '0s' }}>`
**Replace with:** `<ScrollAnimationWrapper>`

**Find:** `</div>` (the closing tag of page-item)
**Replace with:** `</ScrollAnimationWrapper>`

---

## Files to Update

All these pages should be updated to use `ScrollAnimationWrapper`:

1. `src/pages/About/Administrations.jsx`
2. `src/pages/About/History.jsx`
3. `src/pages/News/News.jsx`
4. `src/pages/News/Announcements.jsx`
5. `src/pages/Contact/Contacts.jsx`
6. `src/pages/LifeAtKis/StudentOrganizations.jsx`
7. `src/pages/LifeAtKis/Shs.jsx`
8. `src/pages/LifeAtKis/Jhs.jsx`
9. `src/pages/LifeAtKis/Facilities.jsx`
10. `src/pages/Admissions/WhyChooseUs.jsx`
11. `src/pages/Admissions/Requirements.jsx`
12. `src/pages/Admissions/Enrollment.jsx`
13. `src/pages/Home/HomePage.jsx`

---

## Testing Tips

1. **Check Desktop**: Open DevTools and scroll to verify animations trigger correctly
2. **Check Mobile**: Test on actual mobile device or device emulation
3. **Check Performance**: Open Lighthouse to verify no performance regressions
4. **Check Accessibility**: Ensure animations respect `prefers-reduced-motion` preference (can customize in hook if needed)

