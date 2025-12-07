# @suwa-sh/mui-fui-theme

Futuristic User Interface (FUI/HUD) theme for MUI and CodeMirror - J.A.R.V.I.S. style.

[![npm version](https://badge.fury.io/js/@suwa-sh%2Fmui-fui-theme.svg)](https://www.npmjs.com/package/@suwa-sh/mui-fui-theme)
[![Storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)](https://suwa-sh.github.io/mui-fui-theme)

![hero image dark](https://share.cleanshot.com/TDMlpCgM+)
![hero image light](https://share.cleanshot.com/g6fqTwXC+)

## Features

- Dark and Light mode themes
- FUI/HUD-style MUI components
- CodeMirror editor theme
- CSS animations (scan lines, glow effects, etc.)
- React hooks for text decode and scroll animations

## Installation

```bash
npm install @suwa-sh/mui-fui-theme
# or
pnpm add @suwa-sh/mui-fui-theme
```

## Quick Start

```tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createFuiTheme } from '@suwa-sh/mui-fui-theme';

const theme = createFuiTheme('dark'); // or 'light'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <YourApp />
    </ThemeProvider>
  );
}
```

## Components

### Layout

- `AppGrid` - Responsive grid layout

### Atoms

- `NavMenuItem` - Navigation menu item
- `ProgressBar` - Animated progress bar
- `ColorLegend` - Color legend display
- `StatusIndicator` - Status indicator with colors
- `SectionHeader` - Section header with decorations

### Molecules

- `DiamondNode` - Diamond-shaped node
- `IconBox` - Icon container with FUI styling

## Animations

Available CSS keyframe animations:

- `fadeInUp`, `fadeInLeft`, `fadeInRight`, `slideInDiagonal`
- `scaleIn`, `rotateIn`
- `pulse`, `glowPulse`
- `float`, `hologramFlicker`
- `scanLine`, `dataStream`, `gridPulse`

## Hooks

- `useTextDecode` - Matrix/JARVIS-style text scramble effect
- `useScrollAnimation` - Scroll-triggered animations

## Documentation

- [Storybook](https://suwa-sh.github.io/mui-fui-theme) - Interactive component demos

## Pro Version

Need more components? Check out **@suwa-sh/mui-fui-theme-pro** (coming soon) for:

**Atoms:** `ChartTooltip`

**Molecules:** `NavMenuGroup`, `SidebarLogo`, `MetricCard`, `FuiTable`, `HeatmapLegend`, `HUDOverlay`, `VisualPanel`, `DiagonalDivider`, `CodeEditor`, `DecodedTitle`, `FileUpload`, `Progress`

**Organisms:** `Sidebar`, `FuiAreaChart`, `FuiBarChart`, `FuiRadarChart`

<!-- Pro documentation link will be added when available -->

## Console Banner

On first theme creation, a banner is displayed in the console. To disable:

```typescript
// Option 1: Via environment variable (Node.js)
process.env.FUI_THEME_SILENT = 'true';

// Option 2: Via Vite environment variable
// .env: FUI_THEME_SILENT=true or VITE_FUI_THEME_SILENT=true

// Option 3: Via window global (browser)
window.FUI_THEME_SILENT = true;

// Option 4: Per-logger instance
import { createLogger } from '@suwa-sh/mui-fui-theme';
const logger = createLogger({ disableConsole: true });
```

## License

MIT
