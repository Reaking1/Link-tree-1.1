

// useScrollEffect.tsx
import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const threshold = 200;
      setIsVisible(scrollY < threshold);
    };

    handleScroll(); // Initial check on mount

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
};

export default useScroll;
