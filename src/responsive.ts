// ============================================================
// FUI Custom Theme - Responsive Values
// Centralized responsive values for consistent layout
// Design Tokens: tokens/core.json (Single Source of Truth)
// ============================================================

import coreTokens from '../tokens/core.json';

// Helper function to extract value from Figma Token format
const getValue = <T>(token: { value: T }): T => token.value;

/**
 * Responsive breakpoint values type
 * Follows MUI standard breakpoints: xs, sm, md, lg, xl
 * Index signature allows compatibility with MUI sx prop
 */
export type ResponsiveValue<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
} & { [key: string]: T | undefined };

/**
 * FUI Custom Theme interface
 * Provides centralized responsive values accessible via theme.fui
 */
export interface FuiCustomTheme {
  /**
   * Layout constants (fixed values)
   */
  layout: {
    /** Drawer/Sidebar width in pixels */
    drawerWidth: number;
    /** Drawer/Sidebar width when collapsed in pixels */
    collapsedDrawerWidth: number;
    /** AppBar height in pixels (MUI default) */
    appBarHeight: number;
    /** Maximum content width in pixels */
    maxContentWidth: number;
  };

  /**
   * Responsive spacing values (MUI spacing units)
   * Use with sx={{ p: theme.fui.spacing.page }}
   */
  spacing: {
    /** Page content padding */
    page: ResponsiveValue<number>;
    /** Section gap spacing */
    section: ResponsiveValue<number>;
  };

  /**
   * Responsive size values (pixels)
   * Use with sx={{ width: theme.fui.sizes.iconBox }}
   */
  sizes: {
    /** Icon box container sizes */
    iconBox: ResponsiveValue<number>;
    /** Workflow node sizes */
    node: ResponsiveValue<number>;
  };
}

/**
 * Create FUI custom theme values - reads from Design Tokens
 */
export const createFuiCustomTheme = (): FuiCustomTheme => ({
  layout: {
    drawerWidth: parseInt(getValue(coreTokens.layout.drawerWidth)),
    collapsedDrawerWidth: parseInt(getValue(coreTokens.layout.collapsedDrawerWidth)),
    appBarHeight: parseInt(getValue(coreTokens.layout.appBarHeight)),
    maxContentWidth: parseInt(getValue(coreTokens.layout.maxContentWidth)),
  },
  spacing: {
    page: {
      xs: parseFloat(getValue(coreTokens.responsiveSpacing.page.xs)),
      sm: parseFloat(getValue(coreTokens.responsiveSpacing.page.sm)),
      md: parseFloat(getValue(coreTokens.responsiveSpacing.page.md)),
    },
    section: {
      xs: parseFloat(getValue(coreTokens.responsiveSpacing.section.xs)),
      sm: parseFloat(getValue(coreTokens.responsiveSpacing.section.sm)),
      md: parseFloat(getValue(coreTokens.responsiveSpacing.section.md)),
    },
  },
  sizes: {
    iconBox: {
      xs: parseInt(getValue(coreTokens.responsiveSizes.iconBox.xs)),
      sm: parseInt(getValue(coreTokens.responsiveSizes.iconBox.sm)),
      md: parseInt(getValue(coreTokens.responsiveSizes.iconBox.md)),
    },
    node: {
      xs: parseInt(getValue(coreTokens.responsiveSizes.node.xs)),
      md: parseInt(getValue(coreTokens.responsiveSizes.node.md)),
    },
  },
});

/**
 * Default FUI custom theme instance
 */
export const fuiCustomTheme = createFuiCustomTheme();
