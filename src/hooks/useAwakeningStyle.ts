import { useState, useMemo, type Dispatch, type SetStateAction } from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import type { SxProps, Theme } from '@mui/material/styles';
import { getThemeColors, getStageColors, type ThemeMode } from '../theme';

/**
 * Options for the useAwakeningStyle hook
 *
 * @example
 * ```tsx
 * // Basic awakening behavior
 * const style = useAwakeningStyle({ awakening: true });
 *
 * // With alert state (always highlighted)
 * const style = useAwakeningStyle({ awakening: true, isAlert: true });
 *
 * // Custom accent color
 * const style = useAwakeningStyle({ awakening: true, accentColor: '#FF5722' });
 * ```
 */
export interface AwakeningOptions {
  /**
   * Enable awakening behavior (gray-to-accent on hover).
   * When false (default), components show static accent colors for backward compatibility.
   * @default false
   */
  awakening?: boolean;

  /**
   * Force awakening state (e.g., for alerts, thresholds).
   * When true, the component shows accent colors even without hover.
   * @default false
   */
  isAlert?: boolean;

  /**
   * Custom accent color.
   * If not specified, uses stage1 (amber) from the theme.
   */
  accentColor?: string;

  /**
   * Glow intensity multiplier.
   * @default 1.0
   */
  glowMultiplier?: number;
}

/**
 * Return value from the useAwakeningStyle hook
 */
export interface UseAwakeningStyleReturn {
  /** Whether component is in awakened state (hovered or alert) */
  isAwake: boolean;

  /** Current hover state */
  isHovered: boolean;

  /** Set hover state - use with onMouseEnter/onMouseLeave */
  setIsHovered: Dispatch<SetStateAction<boolean>>;

  /** Card container sx props - apply to Card component */
  cardSx: SxProps<Theme>;

  /** Border color (gray or accent) */
  borderColor: string;

  /** Corner accent color (gray or accent) */
  cornerColor: string;

  /** Text/title color (secondary or accent) */
  titleColor: string;

  /** Icon color (muted or accent) */
  iconColor: string;

  /** Primary element color for charts (gray or accent) */
  primaryColor: string;

  /** Secondary element color for charts (always muted) */
  secondaryColor: string;

  /** Progress bar color (gray or accent) */
  progressColor: string;

  /** Progress bar background color */
  progressBgColor: string;

  /** Glow intensity (0 to 1) */
  glowIntensity: number;

  /** Box shadow value */
  boxShadow: string;

  /** Corner size ('30px' or '60px') */
  cornerSize: string;

  /** Accent color being used */
  accentColor: string;

  /** Whether dark mode is active */
  isDark: boolean;

  /** Text shadow for glowing titles */
  titleTextShadow: string;
}

/**
 * Custom hook for the "Silence to Awakening" (静寂からの覚醒) pattern.
 *
 * This hook provides dynamic styling for FUI components that transition from
 * a gray/muted state (silence) to an accented/highlighted state (awakening)
 * on hover or when in an alert state.
 *
 * @example
 * ```tsx
 * const MyCard: React.FC = () => {
 *   const {
 *     cardSx,
 *     setIsHovered,
 *     titleColor,
 *     iconColor,
 *   } = useAwakeningStyle({ awakening: true });
 *
 *   return (
 *     <Card
 *       sx={cardSx}
 *       onMouseEnter={() => setIsHovered(true)}
 *       onMouseLeave={() => setIsHovered(false)}
 *     >
 *       <Typography sx={{ color: titleColor }}>Title</Typography>
 *       <Icon sx={{ color: iconColor }} />
 *     </Card>
 *   );
 * };
 * ```
 *
 * @param options - Configuration options
 * @returns Style values and state handlers
 */
export function useAwakeningStyle(
  options: AwakeningOptions = {}
): UseAwakeningStyleReturn {
  const {
    awakening = false,
    isAlert = false,
    accentColor: customAccentColor,
    glowMultiplier = 1.0,
  } = options;

  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);
  const isDark = mode === 'dark';

  const [isHovered, setIsHovered] = useState(false);

  // Use mode-specific accent color: amber for dark, blue for light
  const accentColor = customAccentColor ?? stageColors.stage1;

  return useMemo(() => {
    // If awakening is disabled, always show static accent colors (backward compatible)
    // Override theme's gray default with amber for legacy behavior
    if (!awakening) {
      const legacyCardSx: SxProps<Theme> = {
        // Override theme's gray border with amber (legacy behavior)
        border: `1px solid ${themeColors.border}`,
        '&:hover': {
          borderColor: themeColors.primary,
          boxShadow: isDark ? themeColors.glow.soft : 'none',
        },
        // L-shaped corner accent (amber)
        '&::before': {
          backgroundColor: themeColors.primary,
        },
        '&::after': {
          backgroundColor: themeColors.primary,
        },
      };

      return {
        isAwake: true,
        isHovered,
        setIsHovered,
        cardSx: legacyCardSx,
        borderColor: themeColors.border,
        cornerColor: accentColor,
        titleColor: themeColors.text.secondary,
        iconColor: accentColor,
        primaryColor: accentColor,
        secondaryColor: alpha(themeColors.text.primary, 0.4),
        progressColor: accentColor,
        progressBgColor: alpha(themeColors.text.primary, 0.1),
        glowIntensity: 0,
        boxShadow: 'none',
        cornerSize: '30px',
        accentColor,
        isDark,
        titleTextShadow: 'none',
      };
    }

    // Awakening mode: gray → accent on hover/alert
    const showAccent = isHovered || isAlert;

    // Glow intensity: alert always glows, hover adds glow, nothing = no glow
    const glowIntensity = isAlert
      ? (isHovered ? 0.4 * glowMultiplier : 0.3 * glowMultiplier)
      : (isHovered ? 0.3 * glowMultiplier : 0);

    // Colors - silence state uses visible but muted gray tones
    // Match SYSTEM PERFORMANCE card style (alpha 0.15 for border, 0.3 for corner)
    const borderColor = showAccent
      ? accentColor
      : alpha(themeColors.text.primary, 0.15);

    const cornerColor = showAccent
      ? accentColor
      : alpha(themeColors.text.primary, 0.3);

    const titleColor = showAccent
      ? accentColor
      : themeColors.text.secondary;

    const iconColor = showAccent
      ? accentColor
      : alpha(themeColors.text.primary, 0.5);

    const primaryColor = showAccent
      ? accentColor
      : alpha(themeColors.text.primary, 0.5);

    const progressColor = showAccent
      ? accentColor
      : alpha(themeColors.text.primary, 0.4);

    // Box shadow (glow effect - dark mode only)
    const boxShadow = glowIntensity > 0 && isDark
      ? `0 0 12px ${alpha(accentColor, glowIntensity)}`
      : 'none';

    // Corner size: only expand on hover (not on alert alone)
    const cornerSize = isHovered ? '60px' : '30px';

    // Title text shadow (glow effect - dark mode only)
    const titleTextShadow = showAccent && isDark
      ? `0 0 6px ${accentColor}`
      : 'none';

    // Card sx props with theme override
    // Override MuiCard default border (colors.border = amber)
    // Use && selector to increase specificity and override theme styleOverrides
    const cardSx: SxProps<Theme> = {
      // && doubles specificity to override theme defaults
      '&&': {
        transition: 'all 0.3s ease',
        cursor: 'default',
        border: `1px solid ${borderColor}`,
        boxShadow: boxShadow,
      },
      // Override theme's hover styles with increased specificity
      '&&:hover': {
        border: `1px solid ${borderColor}`,
        boxShadow: boxShadow,
      },
      // L-shaped corner accent (top-left)
      '&::before': {
        backgroundColor: cornerColor,
        width: cornerSize,
        transition: 'all 0.3s ease',
      },
      '&::after': {
        backgroundColor: cornerColor,
        height: cornerSize,
        transition: 'all 0.3s ease',
      },
    };

    return {
      isAwake: showAccent,
      isHovered,
      setIsHovered,
      cardSx,
      borderColor,
      cornerColor,
      titleColor,
      iconColor,
      primaryColor,
      secondaryColor: alpha(themeColors.text.primary, 0.4),
      progressColor,
      progressBgColor: alpha(themeColors.text.primary, 0.1),
      glowIntensity,
      boxShadow,
      cornerSize,
      accentColor,
      isDark,
      titleTextShadow,
    };
  }, [awakening, isHovered, isAlert, accentColor, glowMultiplier, themeColors, isDark, stageColors]);
}
