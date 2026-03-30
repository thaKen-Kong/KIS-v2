import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

/**
 * Wrapper component that adds scroll-triggered animation to any child element
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.animationConfig - Intersection observer configuration
 * @returns {React.ReactElement}
 */
export function ScrollAnimationWrapper({
  children,
  className = '',
  animationConfig = {},
}) {
  const ref = useIntersectionAnimation(animationConfig);

  return (
    <div
      ref={ref}
      className={`page-item scroll-hidden ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Wrapper component for slide animations from left or right
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.direction - Animation direction: "left" or "right"
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.animationConfig - Intersection observer configuration
 * @returns {React.ReactElement}
 */
export function ScrollSlideWrapper({
  children,
  direction = 'left',
  className = '',
  animationConfig = {},
}) {
  const ref = useIntersectionAnimation(animationConfig);
  const directionClass = `scroll-slide-${direction}`;

  return (
    <div
      ref={ref}
      className={`page-item scroll-slide-hidden ${directionClass} ${className}`}
    >
      {children}
    </div>
  );
}
