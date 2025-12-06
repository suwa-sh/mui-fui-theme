import React from 'react';
import { Box, Typography, useTheme, alpha } from '@mui/material';
import { getThemeColors, type ThemeMode } from '../../theme';

export interface ChartTooltipPayloadItem {
  value: number;
  name: string;
  color: string;
}

export interface ChartTooltipProps {
  /** Whether tooltip is active */
  active?: boolean;
  /** Tooltip payload data */
  payload?: ChartTooltipPayloadItem[];
  /** Label text (typically X-axis value) */
  label?: string;
  /** Custom value formatter */
  formatter?: (value: number, name: string) => string;
  /** Unit suffix for values (e.g., '%', 'MB') */
  unit?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
  active,
  payload,
  label,
  formatter,
  unit = '',
}) => {
  const theme = useTheme();
  const themeColors = getThemeColors(theme.palette.mode as ThemeMode);

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const formatValue = (value: number, name: string): string => {
    if (formatter) {
      return formatter(value, name);
    }
    return `${value}${unit}`;
  };

  return (
    <Box
      sx={{
        backgroundColor: alpha(themeColors.background.paper, 0.95),
        border: `1px solid ${themeColors.border}`,
        p: 1,
        fontFamily: '"JetBrains Mono", monospace',
      }}
    >
      {label && (
        <Typography variant="caption" sx={{ color: themeColors.text.secondary }}>
          {label}
        </Typography>
      )}
      {payload.map((entry, index) => (
        <Typography
          key={index}
          variant="caption"
          sx={{ display: 'block', color: entry.color }}
        >
          {entry.name}: {formatValue(entry.value, entry.name)}
        </Typography>
      ))}
    </Box>
  );
};
