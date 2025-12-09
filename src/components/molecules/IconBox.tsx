import React from 'react';
import Box from '@mui/material/Box';
import { alpha, SxProps, Theme } from '@mui/material/styles';

export interface IconBoxProps {
  /** The color of the box (border, inner frame) */
  color: string;
  /** Size of the box in pixels */
  size?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  /** Content to display inside the box (typically an icon) */
  children?: React.ReactNode;
  /** Whether to show hover effects */
  hoverable?: boolean;
  /** Whether to show the inner corner accent (L-shaped frame) */
  showCornerAccent?: boolean;
  /** Additional sx props for the container */
  sx?: SxProps<Theme>;
  /** Class name for targeting in parent hover effects */
  className?: string;
}

/**
 * IconBox - A square container with FUI styling for icons.
 * Used for tool cards, action buttons, and feature highlights.
 *
 * Features:
 * - Double-bordered square (outer border + inner frame)
 * - Subtle nested frame effect
 * - Optional hover animation with glow
 */
export const IconBox: React.FC<IconBoxProps> = ({
  color,
  size = 48,
  children,
  hoverable = true,
  showCornerAccent = true,
  sx,
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        width: size,
        height: size,
        border: '1px solid',
        borderColor: alpha(color, 0.4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
        transition: 'all 0.25s ease',
        ...(showCornerAccent && {
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 3,
            border: '1px solid',
            borderColor: alpha(color, 0.2),
          },
        }),
        ...(hoverable && {
          '&:hover': {
            boxShadow: `0 0 16px ${alpha(color, 0.5)}`,
            borderColor: alpha(color, 0.6),
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default IconBox;
