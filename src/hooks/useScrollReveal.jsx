import { useEffect } from 'react';

const useScrollReveal = (selector = '.animada', threshold = 0.8) => {
  useEffect(() => {
    const elementos = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      {
        threshold: threshold, // 0.4 = 40% del elemento debe estar visible
      }
    );

    elementos.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
};

export default useScrollReveal;