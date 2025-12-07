import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { getColors, type ThemeMode } from './theme';

/**
 * Create a FUI-styled CodeMirror theme
 * Supports both dark and light modes
 */
export const createFuiCodeMirrorTheme = (mode: ThemeMode): ReturnType<typeof createTheme> => {
  const colors = getColors(mode);
  const isDark = mode === 'dark';

  return createTheme({
    theme: mode,
    settings: {
      // Editor background
      background: isDark ? 'rgba(17, 17, 17, 0.5)' : '#fafaf8',

      // Text color
      foreground: colors.text.primary,

      // Caret color (accent)
      caret: colors.text.accent,

      // Selection
      selection: isDark ? 'rgba(255, 179, 0, 0.2)' : 'rgba(21, 101, 192, 0.2)',
      selectionMatch: isDark
        ? 'rgba(255, 179, 0, 0.1)'
        : 'rgba(21, 101, 192, 0.1)',

      // Active line highlight
      lineHighlight: isDark
        ? 'rgba(255, 179, 0, 0.05)'
        : 'rgba(21, 101, 192, 0.05)',

      // Gutter (line numbers)
      gutterBackground: 'transparent',
      gutterForeground: colors.text.disabled,
      gutterActiveForeground: colors.text.accent,
      gutterBorder: 'transparent',
    },
    styles: [
      // Comments: muted color, italic
      { tag: t.comment, color: colors.text.disabled, fontStyle: 'italic' },

      // Keys (property names): accent color
      { tag: [t.propertyName, t.attributeName], color: colors.text.accent },

      // String values: green
      { tag: t.string, color: isDark ? '#98C379' : '#50A14F' },

      // Numbers: orange
      { tag: t.number, color: isDark ? '#D19A66' : '#986801' },

      // Boolean and null: red
      { tag: [t.bool, t.null], color: isDark ? '#E06C75' : '#E45649' },

      // Punctuation
      { tag: t.punctuation, color: colors.text.secondary },

      // Operators (colon, etc.)
      { tag: t.operator, color: colors.text.accent },

      // Special (anchors, aliases)
      { tag: t.special(t.string), color: isDark ? '#C678DD' : '#A626A4' },
    ],
  });
};

// Re-export for convenience
export { type ThemeMode } from './theme';
