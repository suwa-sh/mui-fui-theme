import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { getThemeColors, type ThemeMode } from '../../theme';

export interface ColorLegendItem {
  /** Legend label */
  label: string;
  /** Legend color */
  color: string;
  /** Show dashed style (for baseline/reference lines) */
  dashed?: boolean;
}

export interface ColorLegendProps {
  /** Legend items */
  items: ColorLegendItem[];
  /** Layout direction (default: 'row') */
  direction?: 'row' | 'column';
  /** Show glow effect on color swatches (default: auto based on theme mode) */
  showGlow?: boolean;
  /** Spacing between items (default: 2) */
  spacing?: number;
  /** Swatch width (default: 16) */
  swatchWidth?: number;
  /** Swatch height (default: 2 for line, 12 for box) */
  swatchHeight?: number;
  /** Swatch style: 'line' or 'box' (default: 'line') */
  swatchStyle?: 'line' | 'box';
}

export const ColorLegend: React.FC<ColorLegendProps> = ({
  items,
  direction = 'row',
  showGlow,
  spacing = 2,
  swatchWidth = 16,
  swatchHeight,
  swatchStyle = 'line',
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const themeColors = getThemeColors(theme.palette.mode as ThemeMode);
  const shouldGlow = showGlow ?? isDark;

  const defaultHeight = swatchStyle === 'line' ? 2 : 12;
  const height = swatchHeight ?? defaultHeight;

  return (
    <Stack direction={direction} spacing={spacing} justifyContent="center">
      {items.map((item) => (
        <Stack key={item.label} direction="row" spacing={0.5} alignItems="center">
          <Box
            sx={{
              width: swatchWidth,
              height,
              backgroundColor: item.color,
              boxShadow: shouldGlow ? `0 0 4px ${item.color}` : 'none',
              ...(item.dashed && {
                background: `repeating-linear-gradient(
                  90deg,
                  ${item.color},
                  ${item.color} 3px,
                  transparent 3px,
                  transparent 6px
                )`,
              }),
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: themeColors.text.secondary,
              fontSize: '0.6rem',
            }}
          >
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};
