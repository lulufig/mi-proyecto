import { useEffect, useRef } from 'react';

const useScrollReveal = (selector = '.animada', threshold = 0.8) => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Limpiar observer anterior si existe
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const elementos = document.querySelectorAll(selector);

    if (elementos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // solo una vez
          }
        });
      },
      {
        threshold: threshold,
      }
    );

    observerRef.current = observer;
    elementos.forEach(el => observer.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [selector, threshold]);
};

export default useScrollReveal;