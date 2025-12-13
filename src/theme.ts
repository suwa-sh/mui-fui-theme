import { createTheme, alpha, responsiveFontSizes } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { createFuiCustomTheme } from './responsive';
import { showBanner } from './logger';

// Import Design Tokens
import coreTokens from '../tokens/core.json';
import darkTokens from '../tokens/dark.json';
import lightTokens from '../tokens/light.json';

// Import augmentation to enable theme.fui type
import './augmentation';

// ============================================================
// FUI/HUD THEME - J.A.R.V.I.S. Style
// Supports both Dark (Black + Amber) and Light modes
// Design Tokens: tokens/*.json (Single Source of Truth)
// ============================================================

export type ThemeMode = 'dark' | 'light';

// Helper function to extract value from Figma Token format
const getValue = <T>(token: { value: T }): T => token.value;

// FUI Color palette type
export interface FuiColors {
  primary: string;
  secondary: string;
  stages: {
    stage1: string;   // 1st stage
    stage2: string;   // 2nd stage
    stage3: string;   // 3rd stage
    stage4: string;   // 4th stage
    stage5: string;   // 5th stage
    stage6: string;   // 6th stage
    stage7: string;   // 7th stage
    stage8: string;   // 8th stage
    stage9: string;   // 9th stage
    stage10: string;  // 10th stage
    stage11: string;  // 11th stage
    stage12: string;  // 12th stage
    stage13: string;  // 13th stage
  };
  background: {
    default: string;
    paper: string;
    elevated: string;
    input: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    accent: string;
  };
  border: string;
  borderBright: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  glow: {
    soft: string;
    medium: string;
    strong: string;
    text: string;
  };
  gridOpacity: number;
}

// Export Design Tokens for external use
export { coreTokens, darkTokens, lightTokens };

// FUI Color palette generator - reads from Design Tokens
const createColors = (mode: ThemeMode): FuiColors => {
  const tokens = mode === 'dark' ? darkTokens : lightTokens;

  return {
    // Primary colors from tokens
    primary: getValue(tokens.colors.primary),
    secondary: getValue(tokens.colors.secondary),

    // Stage colors from tokens
    stages: {
      stage1: getValue(tokens.colors.stages.stage1),
      stage2: getValue(tokens.colors.stages.stage2),
      stage3: getValue(tokens.colors.stages.stage3),
      stage4: getValue(tokens.colors.stages.stage4),
      stage5: getValue(tokens.colors.stages.stage5),
      stage6: getValue(tokens.colors.stages.stage6),
      stage7: getValue(tokens.colors.stages.stage7),
      stage8: getValue(tokens.colors.stages.stage8),
      stage9: getValue(tokens.colors.stages.stage9),
      stage10: getValue(tokens.colors.stages.stage10),
      stage11: getValue(tokens.colors.stages.stage11),
      stage12: getValue(tokens.colors.stages.stage12),
      stage13: getValue(tokens.colors.stages.stage13),
    },

    // Backgrounds from tokens
    background: {
      default: getValue(tokens.colors.background.default),
      paper: getValue(tokens.colors.background.paper),
      elevated: getValue(tokens.colors.background.elevated),
      input: getValue(tokens.colors.background.input),
    },

    // Text from tokens
    text: {
      primary: getValue(tokens.colors.text.primary),
      secondary: getValue(tokens.colors.text.secondary),
      disabled: getValue(tokens.colors.text.disabled),
      accent: getValue(tokens.colors.text.accent),
    },

    // Borders from tokens
    border: getValue(tokens.colors.border),
    borderBright: getValue(tokens.colors.borderBright),

    // Status colors (success/error from core, warning/info from mode-specific)
    success: getValue(coreTokens.status.success),
    error: getValue(coreTokens.status.error),
    warning: getValue(tokens.colors.warning),
    info: getValue(tokens.colors.info),

    // Glow effects from tokens
    glow: {
      soft: getValue(tokens.effects.glow.soft),
      medium: getValue(tokens.effects.glow.medium),
      strong: getValue(tokens.effects.glow.strong),
      text: getValue(tokens.effects.glow.text),
    },

    // Grid pattern opacity from tokens
    gridOpacity: parseFloat(getValue(tokens.effects.gridOpacity)),
  };
};

// Create FUI theme function
export const createFuiTheme = (mode: ThemeMode = 'dark'): Theme => {
  showBanner();

  const colors = createColors(mode);
  const tokens = mode === 'dark' ? darkTokens : lightTokens;
  const isDark = mode === 'dark';
  const fuiCustom = createFuiCustomTheme();

  let theme = createTheme({
    // FUI custom properties (accessible via theme.fui)
    fui: fuiCustom,
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: alpha(colors.primary, parseFloat(getValue(tokens.opacity.primaryLight))),
        dark: getValue(tokens.colors.primaryDark),
        contrastText: getValue(tokens.colors.contrastText),
      },
      secondary: {
        main: colors.secondary,
        light: alpha(colors.secondary, parseFloat(getValue(tokens.opacity.primaryLight))),
        contrastText: getValue(tokens.colors.contrastText),
      },
      background: {
        default: colors.background.default,
        paper: colors.background.paper,
      },
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
        disabled: colors.text.disabled,
      },
      divider: colors.border,
      success: {
        main: colors.success,
      },
      error: {
        main: colors.error,
      },
      warning: {
        main: colors.warning,
      },
    },
    typography: {
      fontFamily: getValue(coreTokens.typography.fontFamily),
      h1: {
        fontWeight: parseInt(getValue(coreTokens.typography.h1.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h1.letterSpacing),
        textTransform: getValue(coreTokens.typography.h1.textTransform) as 'uppercase',
      },
      h2: {
        fontWeight: parseInt(getValue(coreTokens.typography.h2.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h2.letterSpacing),
        textTransform: getValue(coreTokens.typography.h2.textTransform) as 'uppercase',
      },
      h3: {
        fontWeight: parseInt(getValue(coreTokens.typography.h3.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h3.letterSpacing),
      },
      h4: {
        fontWeight: parseInt(getValue(coreTokens.typography.h4.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h4.letterSpacing),
      },
      h5: {
        fontWeight: parseInt(getValue(coreTokens.typography.h5.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h5.letterSpacing),
      },
      h6: {
        fontWeight: parseInt(getValue(coreTokens.typography.h6.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.h6.letterSpacing),
      },
      body1: {
        fontWeight: parseInt(getValue(coreTokens.typography.body1.fontWeight)),
        lineHeight: parseFloat(getValue(coreTokens.typography.body1.lineHeight)),
        letterSpacing: getValue(coreTokens.typography.body1.letterSpacing),
      },
      body2: {
        fontWeight: parseInt(getValue(coreTokens.typography.body2.fontWeight)),
        lineHeight: parseFloat(getValue(coreTokens.typography.body2.lineHeight)),
        letterSpacing: getValue(coreTokens.typography.body2.letterSpacing),
      },
      button: {
        fontWeight: parseInt(getValue(coreTokens.typography.button.fontWeight)),
        letterSpacing: getValue(coreTokens.typography.button.letterSpacing),
        textTransform: getValue(coreTokens.typography.button.textTransform) as 'uppercase',
      },
      caption: {
        letterSpacing: getValue(coreTokens.typography.caption.letterSpacing),
        textTransform: getValue(coreTokens.typography.caption.textTransform) as 'uppercase',
      },
      overline: {
        letterSpacing: getValue(coreTokens.typography.overline.letterSpacing),
        fontWeight: parseInt(getValue(coreTokens.typography.overline.fontWeight)),
      },
    },
    shape: {
      borderRadius: parseInt(getValue(coreTokens.spacing.borderRadius)),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.background.default,
            backgroundImage: `
              linear-gradient(rgba(255, 179, 0, ${colors.gridOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 179, 0, ${colors.gridOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
          },
          '::selection': {
            backgroundColor: alpha(colors.primary, 0.4),
            color: isDark ? '#000000' : '#ffffff',
          },
          '::-webkit-scrollbar': {
            width: '6px',
            height: '6px',
          },
          '::-webkit-scrollbar-track': {
            background: getValue(tokens.colors.scrollbar.track),
          },
          '::-webkit-scrollbar-thumb': {
            background: getValue(tokens.colors.scrollbar.thumb),
            borderRadius: '0px',
            '&:hover': {
              background: getValue(tokens.colors.scrollbar.thumbHover),
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            padding: '10px 24px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.2s ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
              opacity: 0,
              transition: 'opacity 0.2s ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
              color: colors.text.disabled,
              border: `1px solid ${colors.border}`,
            },
          },
          contained: {
            backgroundColor: alpha(colors.primary, isDark ? 0.15 : 0.12),
            color: isDark ? colors.primary : colors.text.accent,
            border: `1px solid ${isDark ? colors.primary : colors.text.accent}`,
            boxShadow: colors.glow.soft,
            '&:hover': {
              backgroundColor: alpha(colors.primary, isDark ? 0.25 : 0.18),
              boxShadow: colors.glow.medium,
            },
          },
          containedPrimary: {
            backgroundColor: alpha(colors.primary, isDark ? 0.15 : 0.12),
            '&:hover': {
              backgroundColor: alpha(colors.primary, isDark ? 0.3 : 0.2),
            },
          },
          outlined: {
            borderWidth: 1,
            borderColor: colors.border,
            color: colors.text.primary,
            '&:hover': {
              borderWidth: 1,
              borderColor: colors.primary,
              backgroundColor: alpha(colors.primary, 0.05),
              boxShadow: colors.glow.soft,
            },
          },
          text: {
            color: colors.text.primary,
            '&:hover': {
              backgroundColor: alpha(colors.primary, 0.05),
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: alpha(colors.background.paper, isDark ? 0.8 : 0.95),
            // "Silence to Awakening" pattern: gray border by default
            border: `1px solid ${alpha(colors.text.primary, 0.15)}`,
            borderRadius: 0,
            position: 'relative',
            // L-shaped corner accent (gray by default)
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20px',
              height: '1px',
              backgroundColor: alpha(colors.text.primary, 0.3),
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '20px',
              backgroundColor: alpha(colors.text.primary, 0.3),
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: alpha(colors.background.paper, isDark ? 0.6 : 0.9),
            // CSS variable for accent color customization
            // Usage: <Card sx={{ '--fui-accent-color': '#FFB300' }}>
            '--fui-accent-color': colors.primary,
            // "Silence to Awakening" pattern: 30% accent color by default, 100% on hover
            border: '1px solid color-mix(in srgb, var(--fui-accent-color) 30%, transparent)',
            borderRadius: 0,
            transition: 'all 0.3s ease',
            position: 'relative',
            // L-shaped corner accent (30% accent color by default)
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '30px',
              height: '1px',
              backgroundColor: 'color-mix(in srgb, var(--fui-accent-color) 30%, transparent)',
              transition: 'all 0.3s ease',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '30px',
              backgroundColor: 'color-mix(in srgb, var(--fui-accent-color) 30%, transparent)',
              transition: 'all 0.3s ease',
            },
            // Awakening on hover: 100% accent color border, L-shape, glow effect
            '&:hover': {
              borderColor: 'var(--fui-accent-color)',
              boxShadow: isDark ? colors.glow.soft : 'none',
              '&::before': {
                width: '60px',
                backgroundColor: 'var(--fui-accent-color)',
              },
              '&::after': {
                height: '60px',
                backgroundColor: 'var(--fui-accent-color)',
              },
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: alpha(colors.background.default, isDark ? 0.9 : 0.95),
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${colors.border}`,
            borderLeft: 'none',
            boxShadow: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            width: fuiCustom.layout.drawerWidth,
            backgroundColor: colors.background.default,
            borderRight: 'none', // Border handled internally to avoid overlap with AppBar
            backgroundImage: `
              linear-gradient(rgba(255, 179, 0, ${colors.gridOpacity * 1.5}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 179, 0, ${colors.gridOpacity * 1.5}) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            margin: '2px 8px',
            padding: '8px 12px',
            transition: 'all 0.15s ease',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '2px',
              height: '0%',
              backgroundColor: isDark ? colors.primary : colors.text.accent,
              transition: 'height 0.15s ease',
            },
            '&:hover': {
              backgroundColor: alpha(colors.primary, 0.08),
              '&::before': {
                height: '60%',
              },
            },
            '&.Mui-selected': {
              backgroundColor: alpha(colors.primary, 0.1),
              '&::before': {
                height: '80%',
                boxShadow: colors.glow.soft,
              },
              '&:hover': {
                backgroundColor: alpha(colors.primary, 0.15),
              },
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 36,
            color: colors.text.secondary,
            '.Mui-selected &': {
              color: isDark ? colors.primary : colors.text.accent,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              backgroundColor: isDark
                ? alpha(colors.background.elevated, 0.5)
                : '#ffffff',
              fontFamily: '"JetBrains Mono", monospace',
              '& fieldset': {
                borderColor: isDark ? colors.border : 'rgba(0, 0, 0, 0.25)',
                borderWidth: 1,
              },
              '&:hover fieldset': {
                borderColor: isDark ? colors.borderBright : 'rgba(230, 81, 0, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDark ? colors.primary : colors.text.accent,
                borderWidth: 1,
                boxShadow: colors.glow.soft,
              },
            },
            '& .MuiInputBase-input': {
              color: colors.text.primary,
              '&::placeholder': {
                color: isDark ? colors.text.disabled : 'rgba(0, 0, 0, 0.5)',
                opacity: 1,
                letterSpacing: '0.05em',
              },
            },
            '& .MuiInputLabel-root': {
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '0.75rem',
              color: isDark ? colors.text.secondary : 'rgba(0, 0, 0, 0.6)',
              '&.Mui-focused': {
                color: isDark ? colors.primary : colors.text.accent,
              },
            },
          },
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            '& .MuiSlider-rail': {
              backgroundColor: colors.border,
            },
            '& .MuiSlider-track': {
              backgroundColor: isDark ? colors.primary : colors.text.accent,
              boxShadow: colors.glow.soft,
            },
            '& .MuiSlider-thumb': {
              backgroundColor: isDark ? colors.primary : colors.text.accent,
              width: 12,
              height: 12,
              borderRadius: 0,
              '&:hover, &.Mui-focusVisible': {
                boxShadow: colors.glow.medium,
              },
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
          },
          outlined: {
            borderColor: colors.border,
          },
          filled: {
            backgroundColor: alpha(colors.primary, isDark ? 0.15 : 0.12),
            color: isDark ? colors.primary : colors.text.accent,
          },
          colorPrimary: {
            backgroundColor: alpha(colors.primary, isDark ? 0.15 : 0.12),
            color: isDark ? colors.primary : colors.text.accent,
            border: `1px solid ${alpha(colors.primary, 0.3)}`,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            border: '1px solid',
            fontFamily: '"JetBrains Mono", monospace',
            letterSpacing: '0.02em',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20px',
              height: '1px',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '20px',
            },
          },
          standardSuccess: {
            backgroundColor: alpha(colors.success, isDark ? 0.1 : 0.08),
            borderColor: alpha(colors.success, 0.3),
            color: colors.success,
            '&::before, &::after': {
              backgroundColor: colors.success,
            },
          },
          standardError: {
            backgroundColor: alpha(colors.error, isDark ? 0.1 : 0.08),
            borderColor: alpha(colors.error, 0.3),
            color: colors.error,
            '&::before, &::after': {
              backgroundColor: colors.error,
            },
          },
          standardInfo: {
            backgroundColor: alpha(colors.info, isDark ? 0.1 : 0.08),
            borderColor: alpha(colors.info, 0.3),
            color: colors.info,
            '&::before, &::after': {
              backgroundColor: colors.info,
            },
            '& .MuiAlert-icon': {
              color: colors.info,
            },
          },
          standardWarning: {
            backgroundColor: alpha(colors.warning, isDark ? 0.1 : 0.08),
            borderColor: alpha(colors.warning, 0.3),
            color: colors.warning,
            '&::before, &::after': {
              backgroundColor: colors.warning,
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            height: 2,
            backgroundColor: alpha(colors.primary, 0.1),
          },
          bar: {
            borderRadius: 0,
            backgroundColor: isDark ? colors.primary : colors.text.accent,
            boxShadow: colors.glow.soft,
          },
        },
      },
      MuiCircularProgress: {
        styleOverrides: {
          root: {
            color: isDark ? colors.primary : colors.text.accent,
          },
          circle: {
            strokeLinecap: 'square',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: colors.border,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: '56px !important',
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: alpha(colors.background.paper, 0.95),
            border: `1px solid ${colors.border}`,
            borderRadius: 0,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            color: colors.text.primary,
          },
          arrow: {
            color: alpha(colors.background.paper, 0.95),
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 0,
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.background.paper,
            backgroundImage: `
              linear-gradient(rgba(255, 179, 0, ${colors.gridOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 179, 0, ${colors.gridOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            fontFamily: '"JetBrains Mono", monospace',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderBottom: `1px solid ${colors.border}`,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            transition: 'all 0.15s ease',
            '&:hover': {
              backgroundColor: alpha(colors.primary, 0.1),
              boxShadow: colors.glow.soft,
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            borderRadius: 0,
            backgroundColor: isDark
              ? alpha(colors.background.elevated, 0.5)
              : '#ffffff',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            backgroundColor: isDark
              ? alpha(colors.background.elevated, 0.5)
              : '#ffffff',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? colors.border : 'rgba(0, 0, 0, 0.25)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? colors.borderBright : 'rgba(230, 81, 0, 0.5)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: isDark ? colors.primary : colors.text.accent,
              borderWidth: 1,
            },
          },
          input: {
            color: colors.text.primary,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: colors.text.primary,
          },
          input: {
            '&::placeholder': {
              color: isDark ? colors.text.disabled : 'rgba(0, 0, 0, 0.5)',
              opacity: 1,
            },
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: 0,
            border: `1px solid ${colors.border}`,
            backgroundColor: alpha(colors.background.paper, 0.95),
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.8125rem',
            letterSpacing: '0.02em',
            '&:hover': {
              backgroundColor: alpha(colors.primary, 0.1),
            },
            '&.Mui-selected': {
              backgroundColor: alpha(colors.primary, 0.15),
              '&:hover': {
                backgroundColor: alpha(colors.primary, 0.2),
              },
            },
          },
        },
      },
    },
  });

  // Apply responsive font sizes (MUI standard feature)
  theme = responsiveFontSizes(theme);

  return theme;
};

// Get colors for a specific mode (useful for components)
export const getColors = (mode: ThemeMode): FuiColors => createColors(mode);

// Default theme (dark mode)
export const theme = createFuiTheme('dark');

// Export stage colors generator
export const getStageColors = (mode: ThemeMode) => createColors(mode).stages;

// Default stage colors (dark mode) - for backward compatibility
export const stageColors = getStageColors('dark');

// Export glow effects generator
export const getGlowEffects = (mode: ThemeMode) => createColors(mode).glow;

// Default glow effects (dark mode)
export const glowEffects = getGlowEffects('dark');

// Export colors generator (alias for getColors)
export const getThemeColors = getColors;
