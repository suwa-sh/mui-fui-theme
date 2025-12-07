import { useState, useEffect } from 'react';

const DECODE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';

export interface UseTextDecodeOptions {
  /** Delay before animation starts (ms) */
  startDelay?: number;
  /** Total duration of the decode animation (ms) */
  duration?: number;
  /** Characters to use for the scramble effect */
  chars?: string;
}

export interface UseTextDecodeResult {
  /** Current display text (scrambled or final) */
  displayText: string;
  /** Whether the decode animation has completed */
  isComplete: boolean;
}

/**
 * JARVIS/Matrix-style text decode animation hook.
 * Characters scramble through random values before settling on the target text.
 *
 * @param targetText - The final text to display after decode
 * @param options - Animation configuration options
 * @returns Object containing displayText and isComplete state
 *
 * @example
 * ```tsx
 * const { displayText, isComplete } = useTextDecode('HELLO WORLD', { startDelay: 500 });
 * return <Typography>{displayText}</Typography>;
 * ```
 */
export const useTextDecode = (
  targetText: string,
  options: UseTextDecodeOptions = {}
): UseTextDecodeResult => {
  const { startDelay = 0, duration = 2000, chars = DECODE_CHARS } = options;

  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const targetChars = targetText.split('');
    const finalChars = [...targetChars];
    let currentChars = targetChars.map(() => chars[Math.floor(Math.random() * chars.length)]);

    const startTime = Date.now() + startDelay;
    const charDuration = duration / targetChars.length;

    const animate = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed < 0) {
        setDisplayText(currentChars.join(''));
        requestAnimationFrame(animate);
        return;
      }

      let allComplete = true;
      currentChars = currentChars.map((_, i) => {
        const charStartTime = i * (charDuration * 0.3);
        const charElapsed = elapsed - charStartTime;

        if (charElapsed < 0) {
          allComplete = false;
          return chars[Math.floor(Math.random() * chars.length)];
        }

        if (charElapsed < charDuration) {
          allComplete = false;
          const progress = charElapsed / charDuration;
          if (Math.random() < progress * progress) {
            return finalChars[i];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }

        return finalChars[i];
      });

      setDisplayText(currentChars.join(''));

      if (allComplete) {
        setDisplayText(targetText);
        setIsComplete(true);
      } else {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetText, startDelay, duration, chars]);

  return { displayText, isComplete };
};
