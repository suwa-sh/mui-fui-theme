import React from 'react';
import Box from '@mui/material/Box';
import { alpha, SxProps, Theme } from '@mui/material/styles';

export interface DiamondNodeProps {
  /** The color of the node (border, glow effects) */
  color: string;
  /** Size of the node in pixels */
  size?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  /** Content to display inside the node (typically an icon) */
  children?: React.ReactNode;
  /** Whether to show hover effects */
  hoverable?: boolean;
  /** Additional sx props for the container */
  sx?: SxProps<Theme>;
}

/**
 * DiamondNode - A rotated square (diamond) container with FUI styling.
 * Used for workflow stages and status indicators.
 *
 * Features:
 * - Double-bordered diamond shape (outer + inner frames)
 * - Glow effects on the inner frame
 * - Optional hover animation with scale and enhanced glow
 */
export const DiamondNode: React.FC<DiamondNodeProps> = ({
  color,
  size = 60,
  children,
  hoverable = true,
  sx,
}) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        ...(hoverable && {
          '&:hover': {
            transform: 'scale(1.1)',
            '& .diamond-inner': {
              boxShadow: `0 0 24px ${alpha(color, 0.6)}`,
              borderColor: color,
            },
          },
        }),
        ...sx,
      }}
    >
      {/* Outer frame */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          border: '1px solid',
          borderColor: alpha(color, 0.3),
          transform: 'rotate(45deg)',
        }}
      />
      {/* Inner frame */}
      <Box
        className="diamond-inner"
        sx={{
          position: 'absolute',
          inset: 6,
          border: '1px solid',
          borderColor: alpha(color, 0.5),
          transform: 'rotate(45deg)',
          backgroundColor: alpha(color, 0.05),
          boxShadow: `0 0 12px ${alpha(color, 0.3)}`,
          transition: 'all 0.3s ease',
        }}
      />
      {/* Content (icon) */}
      <Box sx={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </Box>
    </Box>
  );
};

export default DiamondNode;
