// ============================================================
// FUI Custom Theme - Responsive Values
// Centralized responsive values for consistent layout
// ============================================================

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
 * Create FUI custom theme values
 */
export const createFuiCustomTheme = (): FuiCustomTheme => ({
  layout: {
    drawerWidth: 260,
    collapsedDrawerWidth: 64,
    appBarHeight: 64,
    maxContentWidth: 1200,
  },
  spacing: {
    page: { xs: 2, sm: 3, md: 4 },
    section: { xs: 1, sm: 1.5, md: 2 },
  },
  sizes: {
    iconBox: { xs: 48, sm: 64, md: 80 },
    node: { xs: 56, md: 72 },
  },
});

/**
 * Default FUI custom theme instance
 */
export const fuiCustomTheme = createFuiCustomTheme();
