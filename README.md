# @suwa-sh/mui-fui-theme

Futuristic User Interface (FUI/HUD) theme for MUI - J.A.R.V.I.S. style.

[![npm version](https://badge.fury.io/js/@suwa-sh%2Fmui-fui-theme.svg)](https://www.npmjs.com/package/@suwa-sh/mui-fui-theme)
[![Storybook](https://img.shields.io/badge/Storybook-ff4785?logo=storybook&logoColor=white)](https://suwa-sh.github.io/mui-fui-theme)

![hero image dark](https://share.cleanshot.com/TDMlpCgM+)
![hero image light](https://share.cleanshot.com/g6fqTwXC+)

## Features

- Dark and Light mode themes
- FUI/HUD-style MUI components
- CSS animations (scan lines, glow effects, etc.)
- React hooks for text decode and scroll animations

## Requirements

- React 18.0+ or 19.0+
- MUI (Material UI) 7.0+
- Emotion 11.0+

## Installation

```bash
npm install @suwa-sh/mui-fui-theme @mui/material @emotion/react @emotion/styled
# or
pnpm add @suwa-sh/mui-fui-theme @mui/material @emotion/react @emotion/styled
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
- `useAwakeningStyle` - "Silence to Awakening" hover effect for dashboard cards

## Design Tokens

This package includes design tokens in [Figma Tokens (Tokens Studio)](https://tokens.studio/) format as the Single Source of Truth.

### Token Files

```text
tokens/
├── core.json      # Typography, spacing, layout (shared)
├── dark.json      # Dark mode colors and effects
└── light.json     # Light mode colors and effects
```

### Direct Import

```typescript
// Import tokens directly
import coreTokens from '@suwa-sh/mui-fui-theme/tokens/core.json';
import darkTokens from '@suwa-sh/mui-fui-theme/tokens/dark.json';
import lightTokens from '@suwa-sh/mui-fui-theme/tokens/light.json';

// Or via the main export
import { coreTokens, darkTokens, lightTokens } from '@suwa-sh/mui-fui-theme';
```

### Figma Tokens Studio Integration

1. Install [Tokens Studio for Figma](https://tokens.studio/)
2. Import `tokens/*.json` files as Token Sets
3. Sync design changes back to JSON

### Token Format

Tokens follow the Figma Tokens format:

```json
{
  "colors": {
    "primary": { "value": "#FFB300", "type": "color" }
  }
}
```

## Documentation

- [Storybook](https://suwa-sh.github.io/mui-fui-theme/storybook) - Interactive component demos
- [Design Rules](./DESIGN_RULES.md) - Document for LLM / Coding Agent
  - [Design Rules 日本語版](./DESIGN_RULES_ja.md)

## Pro Version

Need more components? Check out **@suwa-sh/mui-fui-theme-pro** (coming soon) for:

**Atoms:** `ChartTooltip`

**Molecules:** `NavMenuGroup`, `SidebarLogo`, `MetricCard`, `FuiTable`, `HeatmapLegend`, `HUDOverlay`, `VisualPanel`, `DiagonalDivider`, `CodeEditor`, `DecodedTitle`, `FileUpload`, `Progress`

**Organisms:** `Sidebar`, `FuiAreaChart`, `FuiBarChart`, `FuiRadarChart`

<!-- Pro documentation link will be added when available -->

## License

MIT
