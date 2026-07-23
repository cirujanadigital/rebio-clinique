import { useEffect, useRef } from 'react';

// Attaches an IntersectionObserver to every .reveal element inside the
// returned ref's subtree, adding .visible the first time each enters view.
export function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const els = root.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return containerRef;
}
