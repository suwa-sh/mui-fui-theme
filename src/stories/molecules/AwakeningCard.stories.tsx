import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, useTheme } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { AwakeningCard } from '../../components/molecules/AwakeningCard';
import { getStageColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof AwakeningCard> = {
  title: 'Molecules/AwakeningCard',
  component: AwakeningCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A Card component with "Silence to Awakening" (静寂からの覚醒) hover effect.

## Design Concept
- **Initial State (Silence)**: Gray borders, L-shaped corner markers, muted colors
- **Hover/Alert State (Awakening)**: Amber accent colors, glow effect, expanded corner markers

## Features
- \`awakening\` prop enables the gray-to-amber transition on hover
- \`isAlert\` prop forces the awakened state (for alerts, thresholds)
- Optional \`title\` and \`titleIcon\` for card headers
- Seamlessly integrates with FUI theme
        `,
      },
    },
  },
  argTypes: {
    awakening: {
      control: 'boolean',
      description: 'Enable awakening behavior (gray → amber on hover)',
    },
    isAlert: {
      control: 'boolean',
      description: 'Force awakening state (for alerts)',
    },
    title: {
      control: 'text',
      description: 'Card title text',
    },
    accentColor: {
      control: 'color',
      description: 'Custom accent color (default: amber/stage1)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AwakeningCard>;

// Basic Playground
const PlaygroundDemo: React.FC<{
  awakening?: boolean;
  isAlert?: boolean;
  title?: string;
}> = ({ awakening = true, isAlert = false, title = 'SYSTEM STATUS' }) => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 300 }}>
      <AwakeningCard
        awakening={awakening}
        isAlert={isAlert}
        title={title}
        titleIcon={<MemoryIcon />}
        accentColor={stageColors.stage1}
      >
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hover over this card to see the "awakening" effect.
          The border, corner markers, and title will transition to amber.
        </Typography>
      </AwakeningCard>
    </Box>
  );
};

export const Playground: Story = {
  args: {
    awakening: true,
    isAlert: false,
    title: 'SYSTEM STATUS',
  },
  render: (args) => (
    <PlaygroundDemo
      awakening={args.awakening}
      isAlert={args.isAlert}
      title={args.title}
    />
  ),
};

// Comparison: With and Without Awakening
const ComparisonDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ display: 'flex', gap: 3, p: 2 }}>
      <Box sx={{ width: 280 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          awakening={'{false}'} (default)
        </Typography>
        <AwakeningCard
          awakening={false}
          title="STATIC CARD"
          titleIcon={<MemoryIcon />}
          accentColor={stageColors.stage1}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Traditional static styling. No hover effects.
          </Typography>
        </AwakeningCard>
      </Box>
      <Box sx={{ width: 280 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          awakening={'{true}'}
        </Typography>
        <AwakeningCard
          awakening={true}
          title="AWAKENING CARD"
          titleIcon={<SpeedIcon />}
          accentColor={stageColors.stage1}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Hover to see gray → amber transition with glow.
          </Typography>
        </AwakeningCard>
      </Box>
    </Box>
  );
};

export const Comparison: Story = {
  render: () => <ComparisonDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between static (default) and awakening behavior.',
      },
    },
  },
};

// Alert State Demo
const AlertStateDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ display: 'flex', gap: 3, p: 2 }}>
      <Box sx={{ width: 280 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Normal state (hover for effect)
        </Typography>
        <AwakeningCard
          awakening={true}
          title="MEMORY USAGE"
          titleIcon={<MemoryIcon />}
          accentColor={stageColors.stage1}
        >
          <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
            45%
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Normal usage level
          </Typography>
        </AwakeningCard>
      </Box>
      <Box sx={{ width: 280 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block' }}>
          Alert state (always highlighted)
        </Typography>
        <AwakeningCard
          awakening={true}
          isAlert={true}
          title="CPU USAGE"
          titleIcon={<WarningAmberIcon />}
          accentColor={stageColors.stage1}
        >
          <Typography variant="h4" sx={{ color: stageColors.stage1, fontWeight: 600 }}>
            85%
          </Typography>
          <Typography variant="caption" sx={{ color: stageColors.stage1 }}>
            High usage - threshold exceeded
          </Typography>
        </AwakeningCard>
      </Box>
    </Box>
  );
};

export const AlertState: Story = {
  render: () => <AlertStateDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use `isAlert={true}` to force the awakened state for alerts or threshold warnings.',
      },
    },
  },
};

// Multiple Cards Grid
const GridDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const stageColors = getStageColors(mode);

  const metrics = [
    { title: 'CPU', value: '85%', icon: <SpeedIcon />, isAlert: true },
    { title: 'MEMORY', value: '12.4 GB', icon: <MemoryIcon />, isAlert: false },
    { title: 'STORAGE', value: '456 GB', icon: <StorageIcon />, isAlert: false },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, p: 2, flexWrap: 'wrap' }}>
      {metrics.map((metric) => (
        <Box key={metric.title} sx={{ width: 200 }}>
          <AwakeningCard
            awakening={true}
            isAlert={metric.isAlert}
            title={metric.title}
            titleIcon={metric.icon}
            accentColor={stageColors.stage1}
          >
            <Typography
              variant="h5"
              sx={{
                color: metric.isAlert ? stageColors.stage1 : 'text.primary',
                fontWeight: 600,
              }}
            >
              {metric.value}
            </Typography>
          </AwakeningCard>
        </Box>
      ))}
    </Box>
  );
};

export const Grid: Story = {
  render: () => <GridDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple AwakeningCards in a grid layout. CPU card shows alert state.',
      },
    },
  },
};
