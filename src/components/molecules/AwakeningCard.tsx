import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import {
  useAwakeningStyle,
  type AwakeningOptions,
} from '../../hooks/useAwakeningStyle';

/**
 * Props for the AwakeningCard component
 */
export interface AwakeningCardProps extends AwakeningOptions {
  /** Card title (optional) */
  title?: string;

  /** Title icon (optional) - will be colored dynamically */
  titleIcon?: React.ReactNode;

  /** Card content */
  children: React.ReactNode;

  /** Additional card sx props */
  sx?: SxProps<Theme>;

  /** Additional CardContent sx props */
  contentSx?: SxProps<Theme>;

  /** Minimum width of the card */
  minWidth?: number;

  /** Height of the card */
  height?: number | string;
}

/**
 * A Card component with "Silence to Awakening" hover effect.
 *
 * When `awakening` is enabled, the card transitions from a muted gray state
 * to an accented highlighted state on hover or when `isAlert` is true.
 *
 * @example
 * ```tsx
 * // Basic usage with awakening
 * <AwakeningCard awakening title="SYSTEM STATUS">
 *   <p>Content here</p>
 * </AwakeningCard>
 *
 * // With alert state
 * <AwakeningCard awakening isAlert title="CPU USAGE" titleIcon={<CpuIcon />}>
 *   <p>85% - High usage detected</p>
 * </AwakeningCard>
 *
 * // Wrap a chart
 * <AwakeningCard awakening title="PERFORMANCE" titleIcon={<ChartIcon />}>
 *   <MyChart />
 * </AwakeningCard>
 * ```
 */
export const AwakeningCard: React.FC<AwakeningCardProps> = ({
  title,
  titleIcon,
  children,
  sx,
  contentSx,
  minWidth,
  height,
  awakening = false,
  isAlert = false,
  accentColor,
  glowMultiplier,
}) => {
  const {
    cardSx,
    setIsHovered,
    titleColor,
    iconColor,
    titleTextShadow,
  } = useAwakeningStyle({
    awakening,
    isAlert,
    accentColor,
    glowMultiplier,
  });

  // Clone icon with dynamic color
  const styledIcon = titleIcon
    ? React.cloneElement(titleIcon as React.ReactElement<{ sx?: object }>, {
        sx: {
          ...((titleIcon as React.ReactElement<{ sx?: object }>).props?.sx || {}),
          color: iconColor,
          fontSize: 20,
          transition: 'color 0.3s ease',
        },
      })
    : null;

  // Merge sx props properly
  const mergedSx: SxProps<Theme> = [
    cardSx,
    minWidth ? { minWidth } : {},
    height ? { height } : {},
    ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
  ];

  return (
    <Card
      sx={mergedSx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent sx={contentSx}>
        {title && (
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
            {styledIcon}
            <Typography
              variant="overline"
              sx={{
                color: titleColor,
                fontWeight: 600,
                letterSpacing: '0.15em',
                transition: 'all 0.3s ease',
                textShadow: titleTextShadow,
              }}
            >
              {title}
            </Typography>
          </Stack>
        )}
        {children}
      </CardContent>
    </Card>
  );
};
