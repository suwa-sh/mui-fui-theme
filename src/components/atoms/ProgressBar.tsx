import React from 'react';
import { Box, useTheme, alpha } from '@mui/material';

export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number;
  /** Bar color */
  color: string;
  /** Bar height in pixels (default: 4) */
  height?: number;
  /** Show glow effect (default: auto based on theme mode) */
  showGlow?: boolean;
  /** Background color (default: semi-transparent version of color) */
  backgroundColor?: string;
  /** Transition duration for value changes */
  transition?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  height = 4,
  showGlow,
  backgroundColor,
  transition = 'width 0.5s ease',
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const shouldGlow = showGlow ?? isDark;

  const clampedValue = Math.max(0, Math.min(100, value));
  const bgColor = backgroundColor ?? alpha(color, 0.15);

  return (
    <Box
      sx={{
        height,
        backgroundColor: bgColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: `${clampedValue}%`,
          backgroundColor: color,
          boxShadow: shouldGlow ? `0 0 8px ${color}` : 'none',
          transition,
        }}
      />
    </Box>
  );
};
