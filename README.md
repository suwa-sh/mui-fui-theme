# @suwa-sh/mui-fui-theme

Futuristic User Interface (FUI/HUD) theme for MUI and CodeMirror - J.A.R.V.I.S. style.

[![npm version](https://badge.fury.io/js/@suwa-sh%2Fmui-fui-theme.svg)](https://www.npmjs.com/package/@suwa-sh/mui-fui-theme)
[![Storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)](https://suwa-sh.github.io/mui-fui-theme)

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
- `ChartTooltip` - Chart tooltip (for use with recharts)
- `ColorLegend` - Color legend display
- `StatusIndicator` - Status indicator with colors
- `SectionHeader` - Section header with decorations

### Molecules

- `DiamondNode` - Diamond-shaped node
- `IconBox` - Icon container with FUI styling
- `Progress` - Multi-item progress display
- `CodeEditor` - CodeMirror-based editor (YAML/JSON/Markdown)
- `FileUpload` - Drag-and-drop file upload
- `DiagonalDivider` - Diagonal section divider
- `DecodedTitle` - Animated text decode title

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

### Navigation

- `Sidebar` - Full-featured collapsible sidebar
- `SidebarLogo` - Branded logo header
- `NavMenuGroup` - Grouped navigation with stage indicators

### Dashboard

- `MetricCard` - KPI metric card with trends
- `FuiTable` - Styled data table
- `HeatmapLegend` - Heatmap legend
- `HUDOverlay` - HUD scan line overlay
- `VisualPanel` - Decorative visual panel

### Charts (recharts integration)

- `FuiAreaChart` - Area chart with FUI styling
- `FuiBarChart` - Bar chart with FUI styling
- `FuiRadarChart` - Radar chart with FUI styling

<!-- Pro documentation link will be added when available -->

## Development Console Logs

In development mode, the theme may output debug information. To silence:

```typescript
// Option 1: Via environment variable
process.env.MUI_FUI_THEME_SILENT = 'true';

// Option 2: Via window global (browser)
window.MUI_FUI_THEME_SILENT = true;

// Option 3: Per-logger instance
import { createLogger } from '@suwa-sh/mui-fui-theme';
const logger = createLogger({ disableConsole: true });
```

## License

MIT
