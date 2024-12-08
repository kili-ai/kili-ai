import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export const useSmoothScroll = () => {
  const easeInOutCubic = (t: number): number => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const scrollToSection = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const {
      offset = 0,
      duration = 1000,
      easing = easeInOutCubic
    } = options;

    const element = document.getElementById(elementId);
    if (!element) return;

    const start = window.pageYOffset;
    const elementPosition = element.getBoundingClientRect().top;
    const targetPosition = elementPosition + start - offset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      
      window.scrollTo({
        top: start + (targetPosition - start) * easedProgress,
        behavior: 'auto'
      });

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return scrollToSection;
};