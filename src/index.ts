/**
 * @suwa-sh/mui-fui-theme
 *
 * Futuristic User Interface (FUI/HUD) theme for MUI - J.A.R.V.I.S. style.
 *
 * @see https://github.com/suwa-sh/mui-fui-theme
 * @license MIT
 *
 * For advanced components (Sidebar, Dashboard, Charts), consider upgrading to:
 * @see https://www.npmjs.com/package/@suwa-sh/mui-fui-theme-pro
 */

// Main theme exports
export {
  createFuiTheme,
  getColors,
  getThemeColors,
  getStageColors,
  getGlowEffects,
  theme,
  stageColors,
  glowEffects,
  type ThemeMode,
  type FuiColors,
} from './theme';

// Responsive/Custom theme exports
export {
  createFuiCustomTheme,
  fuiCustomTheme,
  type FuiCustomTheme,
  type ResponsiveValue,
} from './responsive';

// Import augmentation to ensure types are available when using the package
import './augmentation';

// Animation exports
export {
  // Fade in
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  slideInDiagonal,
  // Scale & Rotate
  scaleIn,
  rotateIn,
  // Pulse
  pulse,
  glowPulse,
  // Float & Flicker
  float,
  hologramFlicker,
  // HUD / Cyber
  scanLine,
  dataStream,
  gridPulse,
} from './animations';

// Hook exports
export {
  useTextDecode,
  useScrollAnimation,
  type UseTextDecodeOptions,
  type UseTextDecodeResult,
  type UseScrollAnimationOptions,
  type UseScrollAnimationResult,
} from './hooks';

// Logger exports
export { createLogger, logger, showBanner, type LoggerOptions } from './logger';

// Component exports
export {
  // Atoms
  NavMenuItem,
  ProgressBar,
  ColorLegend,
  StatusIndicator,
  SectionHeader,
  type NavMenuItemProps,
  type ProgressBarProps,
  type ColorLegendProps,
  type ColorLegendItem,
  type StatusIndicatorProps,
  type StatusType,
  type SectionHeaderProps,
  // Molecules
  DiamondNode,
  IconBox,
  type DiamondNodeProps,
  type IconBoxProps,
} from './components';
