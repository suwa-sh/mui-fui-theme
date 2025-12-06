import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createFuiTheme } from '../src/theme';

const darkTheme = createFuiTheme('dark');
const lightTheme = createFuiTheme('light');

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      disabled: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    options: {
      storySort: {
        order: ['Foundations', 'Atoms', 'Molecules', 'Layout'],
      },
    },
  },
  initialGlobals: {
    // Set the initial story to display
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        dark: darkTheme,
        light: lightTheme,
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
