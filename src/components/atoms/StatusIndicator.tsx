import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { getThemeColors, type ThemeMode } from '../../theme';

export type StatusType = 'running' | 'idle' | 'error' | 'warning' | 'success';

export interface StatusIndicatorProps {
  /** Status type */
  status: StatusType;
  /** Optional label text */
  label?: string;
  /** Show glow effect (default: auto based on theme mode) */
  showGlow?: boolean;
  /** Indicator size in pixels (default: 8) */
  size?: number;
  /** Show label in uppercase */
  uppercase?: boolean;
}

const getStatusColor = (status: StatusType, themeColors: ReturnType<typeof getThemeColors>): string => {
  switch (status) {
    case 'running':
    case 'success':
      return themeColors.success;
    case 'error':
      return themeColors.error;
    case 'warning':
      return themeColors.warning;
    case 'idle':
    default:
      return themeColors.text.disabled;
  }
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  showGlow,
  size = 8,
  uppercase = false,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const themeColors = getThemeColors(theme.palette.mode as ThemeMode);
  const shouldGlow = showGlow ?? isDark;
  const color = getStatusColor(status, themeColors);

  const indicator = (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: shouldGlow && status !== 'idle' ? `0 0 6px ${color}` : 'none',
      }}
    />
  );

  if (!label) {
    return indicator;
  }

  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      {indicator}
      <Typography
        variant="caption"
        sx={{
          color,
          textTransform: uppercase ? 'uppercase' : 'capitalize',
        }}
      >
        {label ?? status}
      </Typography>
    </Stack>
  );
};
