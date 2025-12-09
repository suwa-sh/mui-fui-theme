# FUI Theme Design Rules

> This document is a guide for LLMs to correctly use FUI Theme.
> It focuses on "how to write code to utilize theme values."

## Requirements

- React 18.0+ or 19.0+
- MUI (Material UI) 7.0+
- Emotion 11.0+

## Overview

**FUI Theme** is a J.A.R.V.I.S.-style Futuristic User Interface (FUI/HUD) theme.

- **Dark Mode**: Black + Amber
- **Light Mode**: Light Gray + Blue

---

## Theme Setup

```tsx
import { ThemeProvider, CssBaseline, Grid } from '@mui/material';
import { createFuiTheme } from '@suwa-sh/mui-fui-theme';

const theme = createFuiTheme('dark'); // or 'light'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* FUI-style grid background is automatically applied */}
      <Grid container>
        <YourApp />
      </Grid>
    </ThemeProvider>
  );
}
```

### Layout with MUI Grid

FUI Theme uses the standard MUI `Grid` component for layouts.

```tsx
import { Grid } from '@mui/material';

// Basic responsive layout
<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 6 }}>Left Column</Grid>
  <Grid size={{ xs: 12, md: 6 }}>Right Column</Grid>
</Grid>

// auto/grow layout
<Grid container spacing={2}>
  <Grid size="auto">Fixed Width</Grid>
  <Grid size="grow">Fill Remaining</Grid>
</Grid>
```

---

## How to Use Colors

### Basic Pattern: getColors()

```tsx
import { getColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';
import { useTheme, Box, Typography } from '@mui/material';

function MyComponent() {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Box sx={{
      backgroundColor: colors.background.paper,
      border: `1px solid ${colors.border}`,
      '&:hover': {
        borderColor: colors.borderBright,
      },
    }}>
      <Typography sx={{ color: colors.text.accent }}>
        Accented Text
      </Typography>
    </Box>
  );
}
```

### Available Colors

| Color | Purpose | Usage Example |
|-------|---------|---------------|
| `colors.primary` | Main accent | Buttons, icons |
| `colors.secondary` | Sub accent | Secondary elements |
| `colors.text.primary` | Normal text | Body text |
| `colors.text.secondary` | Muted text | Supplementary info |
| `colors.text.accent` | Accented text | Labels, headings |
| `colors.text.disabled` | Disabled text | Inactive elements |
| `colors.background.default` | Base layer | Page background |
| `colors.background.paper` | Card background | Card, Paper |
| `colors.background.elevated` | Elevated elements | Dropdowns |
| `colors.background.input` | Input background | TextField |
| `colors.border` | Normal border | Borders |
| `colors.borderBright` | Highlighted border | Hover, focus |
| `colors.success` | Success | Status display |
| `colors.error` | Error | Error display |
| `colors.warning` | Warning | Warning display |
| `colors.info` | Info | Info display |

### Stage Colors (13 Levels)

Used for expressing workflows and progress.

```tsx
import { getStageColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function WorkflowSteps() {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  return (
    <>
      <Box sx={{ color: stageColors.stage1 }}>Step 1</Box>
      <Box sx={{ color: stageColors.stage5 }}>Step 5</Box>
      <Box sx={{ color: stageColors.stage13 }}>Complete</Box>
    </>
  );
}
```

**Dark Mode**: Amber gradient → Color wheel
**Light Mode**: Blue gradient → Color wheel

### Glow Effects (Dark Mode Only)

```tsx
import { getGlowEffects, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function GlowingElement() {
  const theme = useTheme();
  const glowEffects = getGlowEffects(theme.palette.mode as ThemeMode);

  return (
    <Box sx={{
      boxShadow: glowEffects.soft,      // Subtle glow
      '&:hover': {
        boxShadow: glowEffects.medium,  // Medium glow
      },
      '&:focus': {
        boxShadow: glowEffects.strong,  // Strong glow
      },
    }}>
      Glowing on hover
    </Box>
  );
}
```

> **Note**: In light mode, all return `'none'`, so no conditional branching is needed.

---

## How to Use MUI Components

When FUI Theme is applied, MUI components automatically get FUI styling.

### Works Out of the Box (No Additional Setup)

```tsx
// FUI style is automatically applied
<Button variant="contained">Submit</Button>
<Card>Card</Card>
<TextField label="Input" />
<Chip label="Tag" />
<Alert severity="success">Success</Alert>
<LinearProgress />
```

### When Customizing

```tsx
import { getColors, type ThemeMode } from '@suwa-sh/mui-fui-theme';

function CustomCard() {
  const theme = useTheme();
  const colors = getColors(theme.palette.mode as ThemeMode);

  return (
    <Card sx={{
      // Change background to elevated
      backgroundColor: colors.background.elevated,
      // Add glow on hover
      '&:hover': {
        boxShadow: colors.glow.soft,
      },
    }}>
      Custom Card
    </Card>
  );
}
```

---

## How to Use Layout Values

### Access via theme.fui

```tsx
function ResponsiveLayout() {
  const theme = useTheme();

  return (
    <Box sx={{
      // Responsive padding
      p: theme.fui.spacing.page,

      // Responsive size
      width: theme.fui.sizes.iconBox,

      // Fixed layout value
      maxWidth: theme.fui.layout.maxContentWidth,
    }} />
  );
}
```

### Available Layout Values

| Value | Purpose |
|-------|---------|
| `theme.fui.layout.drawerWidth` | Sidebar width |
| `theme.fui.layout.collapsedDrawerWidth` | Collapsed sidebar width |
| `theme.fui.layout.appBarHeight` | Header height |
| `theme.fui.layout.maxContentWidth` | Max content width |
| `theme.fui.spacing.page` | Page padding (responsive) |
| `theme.fui.spacing.section` | Section spacing (responsive) |
| `theme.fui.sizes.iconBox` | Icon box size (responsive) |
| `theme.fui.sizes.node` | Node size (responsive) |

---

## How to Use Animations

### Basic Usage

```tsx
import { fadeInUp, glowPulse, scanLine } from '@suwa-sh/mui-fui-theme';

function AnimatedContent() {
  return (
    <>
      {/* Entry animation */}
      <Box sx={{ animation: `${fadeInUp} 0.5s ease-out` }}>
        Fade In
      </Box>

      {/* Continuous animation */}
      <Box sx={{ animation: `${glowPulse} 2s infinite` }}>
        Pulse
      </Box>

      {/* HUD effect */}
      <Box sx={{ animation: `${scanLine} 3s linear infinite` }}>
        Scan Line
      </Box>
    </>
  );
}
```

### Available Animations

| Animation | Purpose | Recommended Setting |
|-----------|---------|---------------------|
| `fadeInUp` | Enter from bottom | 0.3-0.5s ease-out |
| `fadeInLeft` | Enter from left | 0.3-0.5s ease-out |
| `fadeInRight` | Enter from right | 0.3-0.5s ease-out |
| `slideInDiagonal` | Enter diagonally | 0.3-0.5s ease-out |
| `scaleIn` | Scale in | 0.3-0.5s ease-out |
| `rotateIn` | Rotate in | 0.3-0.5s ease-out |
| `pulse` | Pulsing | 2s infinite |
| `glowPulse` | Glow pulsing | 2s infinite |
| `float` | Floating | 3s ease-in-out infinite |
| `hologramFlicker` | Hologram | 2s infinite |
| `scanLine` | Scan | 3s linear infinite |
| `dataStream` | Data stream | 2s linear infinite |
| `gridPulse` | Grid pulsing | 4s infinite |

---

## How to Use Hooks

### useTextDecode - Text Decode Effect

```tsx
import { useTextDecode } from '@suwa-sh/mui-fui-theme';

function DecodedTitle() {
  const { displayText, isDecoding } = useTextDecode('SYSTEM ONLINE', {
    duration: 1500,
    characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
  });

  return <Typography>{displayText}</Typography>;
}
```

### useScrollAnimation - Scroll Animation

```tsx
import { useScrollAnimation } from '@suwa-sh/mui-fui-theme';

function ScrollReveal() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      Revealed on Scroll
    </Box>
  );
}
```

---

## How to Use Provided Components

### NavMenuItem - Navigation Item

```tsx
import { NavMenuItem } from '@suwa-sh/mui-fui-theme';
import { Home } from '@mui/icons-material';

<NavMenuItem
  icon={<Home />}
  label="Home"
  selected={true}
  color="#FFB300"  // Custom color (optional)
  onClick={() => navigate('/')}
/>
```

### ProgressBar - Progress Bar

```tsx
import { ProgressBar } from '@suwa-sh/mui-fui-theme';

<ProgressBar
  value={75}
  color="#FFB300"  // Custom color
  height={4}
  showLabel={true}
/>
```

### StatusIndicator - Status Display

```tsx
import { StatusIndicator } from '@suwa-sh/mui-fui-theme';

<StatusIndicator status="success" label="Online" />
<StatusIndicator status="error" label="Error" />
<StatusIndicator status="warning" label="Warning" />
<StatusIndicator status="info" label="Info" />
<StatusIndicator status="neutral" label="Standby" />
```

### SectionHeader - Section Heading

```tsx
import { SectionHeader } from '@suwa-sh/mui-fui-theme';

<SectionHeader title="SYSTEM STATUS" />
```

### IconBox - Icon Box

```tsx
import { IconBox } from '@suwa-sh/mui-fui-theme';
import { Settings } from '@mui/icons-material';

<IconBox color="#FFB300">
  <Settings />
</IconBox>
```

### DiamondNode - Diamond Node

```tsx
import { DiamondNode } from '@suwa-sh/mui-fui-theme';
import { CheckCircle } from '@mui/icons-material';

<DiamondNode
  color="#FFB300"
  icon={<CheckCircle />}
  label="Complete"
/>
```

### ColorLegend - Color Legend

```tsx
import { ColorLegend } from '@suwa-sh/mui-fui-theme';

<ColorLegend
  items={[
    { color: '#4CAF50', label: 'Success' },
    { color: '#FF5252', label: 'Error' },
    { color: '#FFB300', label: 'Processing' },
  ]}
/>
```

### Grid - Responsive Grid

```tsx
import { Grid } from '@mui/material';

<Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 4 }}>Item 1</Grid>
  <Grid size={{ xs: 12, md: 4 }}>Item 2</Grid>
  <Grid size={{ xs: 12, md: 4 }}>Item 3</Grid>
</Grid>
```

---

## Direct Use of Design Tokens

For integration with design tools like Figma.

```tsx
// Direct import
import coreTokens from '@suwa-sh/mui-fui-theme/tokens/core.json';
import darkTokens from '@suwa-sh/mui-fui-theme/tokens/dark.json';
import lightTokens from '@suwa-sh/mui-fui-theme/tokens/light.json';

// Or
import { coreTokens, darkTokens, lightTokens } from '@suwa-sh/mui-fui-theme';

// Token format: { value: string, type: string }
const primaryColor = darkTokens.colors.primary.value; // "#FFB300"
const fontFamily = coreTokens.typography.fontFamily.value;
```

---

## Design Principles

FUI Theme is based on the following principles.

### 1. Sharp Edges

All components use `borderRadius: 0` or minimal values.

### 2. Thin Borders

Borders are always `1px` thin. Thick borders violate FUI style.

```tsx
// OK
border: `1px solid ${colors.border}`

// NG
border: `2px solid ${colors.border}`
borderWidth: 3
```

### 3. Glow Effects for Emphasis (Dark Mode Only)

Apply glow effects to **points you want to emphasize** on the page.
Glow effects only work in dark mode. Automatically disabled in light mode.

```tsx
// Apply glow to emphasized elements
<Card sx={{ boxShadow: glowEffects.medium }}>
  Important Content
</Card>

// Draw attention on hover
<Button sx={{ '&:hover': { boxShadow: glowEffects.soft } }}>
  Action
</Button>
```

### 4. Stage Color Usage

**Use `stage1` through `stage4` when multiple emphasis points are needed on a single page.**

| Stage | Purpose |
|-------|---------|
| `stage1` | Most important emphasis (primary action) |
| `stage2` | Second most important emphasis |
| `stage3` | Third emphasis |
| `stage4` | Fourth emphasis |
| `stage5`-`stage13` | Workflow progress, step display |

```tsx
const stageColors = getStageColors(mode);

// When there are multiple emphasis points
<Box sx={{ color: stageColors.stage1 }}>Most Important</Box>
<Box sx={{ color: stageColors.stage2 }}>Important</Box>
<Box sx={{ color: stageColors.stage3 }}>Secondary</Box>
```

### 5. Monospace Font Adopted

Fonts are automatically applied by the theme.

### 6. Uppercase + Wide Letter Spacing

Headings, labels, and buttons use uppercase + letterSpacing.

### 7. Borders and Grid

Clear borders and background grid patterns.

### 8. Corner Decoration

MuiPaper/MuiCard/MuiAlert have L-shaped decorations applied to the top-left corner.
Do not apply border emphasis (thickness, etc.). If you want to emphasize with borders, use MUI's base components.

### 9. 4-Layer Background Structure

Depth expression: default → paper → elevated → input.

---

## Common Usage Patterns

### Pattern 1: Custom Style for Cards

```tsx
const colors = getColors(mode);
const glowEffects = getGlowEffects(mode);

<Card sx={{
  backgroundColor: colors.background.paper,
  border: `1px solid ${colors.border}`,
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: colors.borderBright,
    boxShadow: glowEffects.soft,
  },
}}>
  Content
</Card>
```

### Pattern 2: Progress Display with Stage Colors

```tsx
const stageColors = getStageColors(mode);

{steps.map((step, index) => (
  <Box
    key={index}
    sx={{
      color: stageColors[`stage${index + 1}` as keyof typeof stageColors],
      borderColor: stageColors[`stage${index + 1}` as keyof typeof stageColors],
    }}
  >
    {step.label}
  </Box>
))}
```

### Pattern 3: List with Entry Animations

```tsx
import { fadeInUp } from '@suwa-sh/mui-fui-theme';

{items.map((item, index) => (
  <Box
    key={index}
    sx={{
      animation: `${fadeInUp} 0.5s ease-out`,
      animationDelay: `${index * 0.1}s`,
      animationFillMode: 'both',
    }}
  >
    {item}
  </Box>
))}
```

### Pattern 4: Responsive Layout

```tsx
<Box sx={{
  p: theme.fui.spacing.page,
  maxWidth: theme.fui.layout.maxContentWidth,
  mx: 'auto',
}}>
  <Box sx={{ mb: theme.fui.spacing.section }}>
    Section 1
  </Box>
  <Box>
    Section 2
  </Box>
</Box>
```

---

## Patterns to Avoid

### NG: Hardcoded Colors

```tsx
// NG
sx={{ color: '#FFB300', backgroundColor: '#000000' }}

// OK
const colors = getColors(mode);
sx={{ color: colors.primary, backgroundColor: colors.background.default }}
```

### NG: Large Border Radius

```tsx
// NG
sx={{ borderRadius: 8 }}

// OK (maintain FUI style)
sx={{ borderRadius: 0 }}
```

### NG: Using Colors Outside the Theme

```tsx
// NG
sx={{ color: '#FF00FF' }}

// OK (use stage colors or theme colors)
sx={{ color: stageColors.stage7 }}
```

### NG: Thick Borders for Emphasis

In FUI style, borders are always `1px`. Use glow effects for emphasis.

```tsx
// NG - Thick border
borderBottom: `2px solid ${color}`

// OK - 1px border + glow effect
'&::after': {
  height: '1px',
  backgroundColor: color,
  boxShadow: `0 0 8px ${color}`,
}
```
