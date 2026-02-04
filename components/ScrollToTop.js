import { useState, useEffect } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

export default function ScrollToTop() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkPosition = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // At top if scroll is less than 300px
      setIsAtTop(scrollTop < 300);

      // At bottom if within 100px of the end
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Check initial position
    return () => window.removeEventListener('scroll', checkPosition);
  }, []);

  const handleClick = () => {
    if (isAtTop) {
      // Scroll to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 lg:bottom-6 right-4 z-40 w-11 h-11 bg-gray-900/70 hover:bg-gray-900/90 active:bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      aria-label={isAtTop ? "Descendre en bas" : "Retourner en haut"}
    >
      {isAtTop ? (
        <FiArrowDown className="w-5 h-5" />
      ) : (
        <FiArrowUp className="w-5 h-5" />
      )}
    </button>
  );
}
