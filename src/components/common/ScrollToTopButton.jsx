import { useState, useEffect } from 'react';

/**
 * Button that appears when page is scrolled and scrolls back to top when clicked
 */
export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
