import { createTheme, alpha, responsiveFontSizes } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { createFuiCustomTheme } from './responsive';
import { showBanner } from './logger';

// Import augmentation to enable theme.fui type
import './augmentation';

// ============================================================
// FUI/HUD THEME - J.A.R.V.I.S. Style
// Supports both Dark (Black + Amber) and Light modes
// ============================================================

export type ThemeMode = 'dark' | 'light';

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

// FUI Color palette generator
const createColors = (mode: ThemeMode): FuiColors => {
  const isDark = mode === 'dark';

  return {
    // Primary: Amber (dark) / Blue (light) - FUI style
    primary: isDark ? '#FFB300' : '#1976D2', // Amber (dark) / Blue (light)
    secondary: isDark ? '#FF8F00' : '#0D47A1', // Darker Amber (dark) / Dark Blue (light)

    // Stage colors - 13 colors (Dark: Amber gradient + color wheel / Light: Blue gradient + color wheel)
    stages: isDark
      ? {
          // Dark mode: stage1-4 = Amber gradient (original), stage5-13 = color wheel
          stage1: '#FFB300',   // Amber
          stage2: '#FFA000',   // Dark Amber
          stage3: '#FF8F00',   // Orange Amber
          stage4: '#FF6F00',   // Deep Orange
          stage5: '#FF5252',   // Red (赤)
          stage6: '#FF4081',   // Pink (赤紫)
          stage7: '#E040FB',   // Purple (紫)
          stage8: '#651FFF',   // Deep Purple (青紫)
          stage9: '#3D5AFE',   // Indigo (藍)
          stage10: '#2979FF',  // Blue (青)
          stage11: '#00E5FF',  // Cyan (青緑)
          stage12: '#1DE9B6',  // Teal (緑青)
          stage13: '#4CAF50',  // Green (緑)
        }
      : {
          // Light mode: stage1-4 = Blue gradient (original), stage5-13 = color wheel
          stage1: '#1976D2',   // Blue
          stage2: '#1565C0',   // Dark Blue
          stage3: '#0D47A1',   // Darker Blue
          stage4: '#0A3D91',   // Navy
          stage5: '#8E24AA',   // Purple
          stage6: '#D81B60',   // Pink
          stage7: '#FF5252',   // Red
          stage8: '#FF6F00',   // Deep Orange
          stage9: '#FF9800',   // Orange
          stage10: '#FFB300',  // Amber
          stage11: '#C0CA33',  // Lime
          stage12: '#4CAF50',  // Green
          stage13: '#00897B',  // Teal
        },

    // Backgrounds
    background: isDark
      ? {
          default: '#000000',
          paper: '#0a0a0a',
          elevated: '#111111',
          input: 'rgba(0, 0, 0, 0.3)',
        }
      : {
          default: '#f5f5f0',
          paper: '#ffffff',
          elevated: '#fafafa',
          input: 'rgba(245, 244, 240, 0.85)',
        },

    // Text
    text: isDark
      ? {
          primary: '#ffffff',
          secondary: 'rgba(255, 255, 255, 0.7)',
          disabled: 'rgba(255, 255, 255, 0.4)',
          accent: '#FFB300',
        }
      : {
          primary: '#1a1a1a',
          secondary: 'rgba(0, 0, 0, 0.65)',
          disabled: 'rgba(0, 0, 0, 0.45)',
          accent: '#1565C0', // Blue for light mode (FUI style)
        },

    // Borders
    border: isDark
      ? 'rgba(255, 179, 0, 0.2)'
      : 'rgba(21, 101, 192, 0.25)', // Blue for light mode
    borderBright: isDark
      ? 'rgba(255, 179, 0, 0.4)'
      : 'rgba(21, 101, 192, 0.5)', // Blue for light mode

    // Status colors
    success: '#4CAF50',
    error: '#FF5252',
    warning: isDark ? '#FF6D00' : '#FF9800', // Orange for dark mode (between amber and red)
    info: isDark ? '#FFB300' : '#1565C0', // Use theme primary color for info

    // Glow effect (none in light mode for cleaner look)
    glow: isDark
      ? {
          soft: '0 0 10px rgba(255, 179, 0, 0.3)',
          medium: '0 0 20px rgba(255, 179, 0, 0.4)',
          strong: '0 0 30px rgba(255, 179, 0, 0.5)',
          text: '0 0 8px rgba(255, 179, 0, 0.6)',
        }
      : {
          soft: 'none',
          medium: 'none',
          strong: 'none',
          text: 'none',
        },

    // Grid pattern opacity
    gridOpacity: isDark ? 0.02 : 0.04,
  };
};

// Create FUI theme function
export const createFuiTheme = (mode: ThemeMode = 'dark'): Theme => {
  showBanner();

  const colors = createColors(mode);
  const isDark = mode === 'dark';
  const fuiCustom = createFuiCustomTheme();

  let theme = createTheme({
    // FUI custom properties (accessible via theme.fui)
    fui: fuiCustom,
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: alpha(colors.primary, 0.3),
        dark: '#FF8F00',
        contrastText: isDark ? '#000000' : '#ffffff',
      },
      secondary: {
        main: colors.secondary,
        light: alpha(colors.secondary, 0.3),
        contrastText: isDark ? '#000000' : '#ffffff',
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
      fontFamily: '"JetBrains Mono", "Noto Sans JP", monospace',
      h1: {
        fontWeight: 500,
        letterSpacing: '0.05em',
        textTransform: 'uppercase' as const,
      },
      h2: {
        fontWeight: 500,
        letterSpacing: '0.04em',
        textTransform: 'uppercase' as const,
      },
      h3: {
        fontWeight: 500,
        letterSpacing: '0.03em',
      },
      h4: {
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
      h5: {
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
      h6: {
        fontWeight: 500,
        letterSpacing: '0.02em',
      },
      body1: {
        fontWeight: 400,
        lineHeight: 1.6,
        letterSpacing: '0.01em',
      },
      body2: {
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.01em',
      },
      button: {
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
      },
      caption: {
        letterSpacing: '0.05em',
        textTransform: 'uppercase' as const,
      },
      overline: {
        letterSpacing: '0.15em',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 2,
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
            background: isDark
              ? 'rgba(255, 179, 0, 0.05)'
              : 'rgba(21, 101, 192, 0.05)',
          },
          '::-webkit-scrollbar-thumb': {
            background: isDark
              ? 'rgba(255, 179, 0, 0.3)'
              : 'rgba(21, 101, 192, 0.25)',
            borderRadius: '0px',
            '&:hover': {
              background: isDark
                ? 'rgba(255, 179, 0, 0.5)'
                : 'rgba(21, 101, 192, 0.4)',
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
            border: `1px solid ${colors.border}`,
            borderRadius: 0,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20px',
              height: '1px',
              backgroundColor: isDark ? colors.primary : colors.text.accent,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '20px',
              backgroundColor: isDark ? colors.primary : colors.text.accent,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: alpha(colors.background.paper, isDark ? 0.6 : 0.9),
            border: `1px solid ${colors.border}`,
            borderRadius: 0,
            transition: 'all 0.2s ease',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '30px',
              height: '1px',
              backgroundColor: isDark ? colors.primary : colors.text.accent,
              transition: 'width 0.3s ease',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '30px',
              backgroundColor: isDark ? colors.primary : colors.text.accent,
              transition: 'height 0.3s ease',
            },
            '&:hover': {
              borderColor: colors.borderBright,
              boxShadow: colors.glow.soft,
              '&::before': {
                width: '60px',
              },
              '&::after': {
                height: '60px',
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
