import { useRef, useState, useEffect } from 'react';

export interface UseScrollAnimationOptions {
  /** Intersection threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Whether to trigger only once. Default: true */
  triggerOnce?: boolean;
}

export interface UseScrollAnimationResult<T extends HTMLElement> {
  /** Ref to attach to the target element */
  ref: React.RefObject<T | null>;
  /** Whether the element is visible in viewport */
  isVisible: boolean;
}

/**
 * Scroll-triggered animation hook using IntersectionObserver.
 * Returns a ref and visibility state for triggering animations when elements enter viewport.
 *
 * @param options - Configuration options for the intersection observer
 * @returns Object containing ref and isVisible state
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
 * return (
 *   <Box
 *     ref={ref}
 *     sx={{
 *       opacity: 0,
 *       animation: isVisible ? `${fadeInUp} 0.8s ease-out forwards` : 'none',
 *     }}
 *   >
 *     Content
 *   </Box>
 * );
 * ```
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationResult<T> => {
  const { threshold = 0.1, rootMargin, triggerOnce = true } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};
