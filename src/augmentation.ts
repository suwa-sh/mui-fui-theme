// ============================================================
// MUI Theme Type Augmentation
// Extends MUI's Theme interface to include FUI custom properties
// ============================================================

import type { FuiCustomTheme } from './responsive';
import type { CSSObject } from '@mui/material/styles';

// Generic style override type for date picker components
type PickerStyleOverrides<T extends string> = {
  [K in T]?: CSSObject;
};

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

  // Extend Components to include @mui/x-date-pickers components
  interface Components {
    MuiPickersPopper?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'paper'>;
    };
    MuiDateCalendar?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root'>;
    };
    MuiPickersCalendarHeader?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'label' | 'labelContainer' | 'switchViewButton' | 'switchViewIcon'>;
    };
    MuiDayCalendar?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'header' | 'weekDayLabel' | 'weekContainer' | 'slideTransition'>;
    };
    MuiPickersDay?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'dayWithMargin' | 'dayOutsideMonth' | 'hiddenDaySpacingFiller' | 'today'>;
    };
    MuiPickersYear?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'yearButton' | 'selected' | 'disabled'>;
    };
    MuiPickersMonth?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'monthButton' | 'selected' | 'disabled'>;
    };
    // TimePicker components
    MuiTimeClock?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'clock' | 'squareMask' | 'pin' | 'amButton' | 'pmButton'>;
    };
    MuiClockPointer?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'thumb'>;
    };
    MuiClockNumber?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'selected' | 'disabled'>;
    };
    MuiMultiSectionDigitalClock?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root'>;
    };
    MuiMultiSectionDigitalClockSection?: {
      defaultProps?: object;
      styleOverrides?: PickerStyleOverrides<'root' | 'item'>;
    };
  }
}
