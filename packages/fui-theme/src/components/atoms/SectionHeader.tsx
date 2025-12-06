import React from 'react';
import { Box, Stack, Typography, useTheme, alpha } from '@mui/material';
import { getThemeColors, type ThemeMode } from '../../theme';

export interface SectionHeaderProps {
  /** Main title text */
  title: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional icon to display before the title */
  icon?: React.ReactNode;
  /** Show diamond decoration (default: true) */
  showDiamond?: boolean;
  /** Title variant (default: 'h5') */
  variant?: 'h4' | 'h5' | 'h6' | 'overline';
  /** Right-side content (e.g., timestamp, actions) */
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  showDiamond = true,
  variant = 'h5',
  action,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const themeColors = getThemeColors(theme.palette.mode as ThemeMode);

  const isOverline = variant === 'overline';
  const diamondSize = isOverline ? 6 : 8;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        {showDiamond && (
          <Box
            sx={{
              width: diamondSize,
              height: diamondSize,
              backgroundColor: themeColors.text.accent,
              transform: 'rotate(45deg)',
              boxShadow: isDark ? `0 0 8px ${themeColors.text.accent}` : 'none',
            }}
          />
        )}
        {icon && (
          <Box sx={{ color: themeColors.text.accent, display: 'flex', alignItems: 'center' }}>
            {icon}
          </Box>
        )}
        <Box>
          <Typography
            variant={variant}
            sx={{
              color: themeColors.text.accent,
              fontWeight: isOverline ? 600 : 500,
              letterSpacing: isOverline ? '0.15em' : '0.1em',
              textShadow: isDark ? `0 0 10px ${alpha(themeColors.text.accent, 0.5)}` : 'none',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="caption"
              sx={{
                color: themeColors.text.secondary,
                display: 'block',
                mt: 0.5,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Stack>
      {action && <Box>{action}</Box>}
    </Stack>
  );
};
