import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ProgressBar } from '../../components/atoms/ProgressBar';
import { getStageColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    height: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
    },
    showGlow: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// Basic example
export const Default: Story = {
  args: {
    value: 65,
    color: '#FFB300',
    height: 4,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};

// Different heights
const HeightVariations: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  return (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Height: 2px
        </Typography>
        <ProgressBar value={80} color={stageColors.stage1} height={2} />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Height: 4px (default)
        </Typography>
        <ProgressBar value={60} color={stageColors.stage2} height={4} />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Height: 8px
        </Typography>
        <ProgressBar value={45} color={stageColors.stage3} height={8} />
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Height: 16px
        </Typography>
        <ProgressBar value={75} color={stageColors.stage4} height={16} />
      </Box>
    </Stack>
  );
};

export const Heights: Story = {
  render: () => <HeightVariations />,
};

// Stage colors showcase
const StageColorsShowcase: React.FC = () => {
  const theme = useTheme();
  const stageColors = getStageColors(theme.palette.mode as ThemeMode);

  const stages = [
    { key: 'stage1', value: 90 },
    { key: 'stage2', value: 80 },
    { key: 'stage3', value: 70 },
    { key: 'stage4', value: 60 },
    { key: 'stage5', value: 50 },
    { key: 'stage6', value: 40 },
  ];

  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      {stages.map(({ key, value }) => (
        <Box key={key}>
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {key}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {value}%
            </Typography>
          </Stack>
          <ProgressBar
            value={value}
            color={stageColors[key as keyof typeof stageColors]}
            height={6}
          />
        </Box>
      ))}
    </Stack>
  );
};

export const StageColors: Story = {
  render: () => <StageColorsShowcase />,
};

// Without glow effect
export const NoGlow: Story = {
  args: {
    value: 75,
    color: '#FFB300',
    height: 8,
    showGlow: false,
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: 300 }}>
        <Story />
      </Box>
    ),
  ],
};
