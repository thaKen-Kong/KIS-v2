import { useEffect, useRef } from 'react';

/**
 * Custom hook for triggering animations when elements enter the viewport
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {React.RefObject} - Ref to attach to the element
 */
export function useIntersectionAnimation(options = {}) {
  const ref = useRef(null);
  const {
    threshold = 0.1,
    rootMargin = '0px',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            entry.target.classList.add('scroll-animate-in');
            // Stop observing after animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  return ref;
}
