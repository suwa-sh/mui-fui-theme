// ============================================================
// MUI Theme Type Augmentation
// Extends MUI's Theme interface to include FUI custom properties
// ============================================================

import type { FuiCustomTheme } from './responsive';

declare module '@mui/material/styles' {
  interface Theme {
    /**
     * FUI custom theme properties
     * Access via: theme.fui.layout.drawerWidth
     */
    fui: FuiCustomTheme;
  }

  interface ThemeOptions {
    /**
     * FUI custom theme options
     */
    fui?: Partial<FuiCustomTheme>;
  }
}
