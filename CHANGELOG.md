# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- **BREAKING CHANGE:** Removed CodeMirror theme integration (`createFuiCodeMirrorTheme`)
  - CodeEditor functionality is now available only in `@suwa-sh/mui-fui-theme-pro`
  - Removed `@suwa-sh/mui-fui-theme/codemirror` export
  - Removed CodeMirror-related peer dependencies (`@lezer/highlight`, `@uiw/codemirror-themes`)
  - Removed CodeMirror-related dependencies (`@codemirror/*`, `@uiw/react-codemirror`)

## [0.3.1] - 2025-12-09

### Removed

- `AppGrid` component - Use MUI's standard `Grid` component instead

## [0.3.0] - 2025-12-09

### Changed

- Updated peer dependency to MUI v7 (`@mui/material ^7.0.0`)

## [0.2.0] - 2025-12-09

### Added

- Design Tokens in Figma Tokens (Tokens Studio) format as Single Source of Truth
  - `tokens/core.json` - Typography, spacing, layout (shared)
  - `tokens/dark.json` - Dark mode colors and effects
  - `tokens/light.json` - Light mode colors and effects
- Direct import support for design tokens (`@suwa-sh/mui-fui-theme/tokens/*.json`)
- Documentation for LLM/Coding Agents
  - `DESIGN_RULES.md` - Theme usage guide (English)
  - `DESIGN_RULES_ja.md` - Theme usage guide (Japanese)

## [0.1.0] - 2025-12-07

### Added

- Initial release of @suwa-sh/mui-fui-theme
- Dark and Light mode themes with FUI/HUD styling
- MUI component customizations (Button, Paper, Card, TextField, etc.)
- CodeMirror editor theme integration
- CSS animations (fadeIn, scaleIn, pulse, scanLine, etc.)
- React hooks:
  - `useTextDecode` - Matrix/JARVIS-style text scramble effect
  - `useScrollAnimation` - Scroll-triggered animations
- Components:
  - Atoms: `NavMenuItem`, `ProgressBar`, `ColorLegend`, `StatusIndicator`, `SectionHeader`
  - Molecules: `DiamondNode`, `IconBox`
- Storybook documentation with interactive demos
- TypeScript type definitions
- Theme augmentation for type-safe `theme.fui` access
