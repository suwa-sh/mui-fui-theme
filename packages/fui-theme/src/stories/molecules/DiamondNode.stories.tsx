import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, useTheme } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SettingsIcon from '@mui/icons-material/Settings';
import { DiamondNode } from '../../components/molecules/DiamondNode';
import { getStageColors, getThemeColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof DiamondNode> = {
  title: 'Molecules/DiamondNode',
  component: DiamondNode,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the node (border, glow effects)',
    },
    size: {
      control: { type: 'number', min: 20, max: 120, step: 10 },
      description: 'Size of the node in pixels',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether to show hover effects',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DiamondNode>;

// Playground with theme-aware default color
const PlaygroundDemo: React.FC<{ size?: number; hoverable?: boolean }> = ({ size = 60, hoverable = true }) => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const color = themeColors.text.accent;

  return (
    <DiamondNode color={color} size={size} hoverable={hoverable}>
      <SettingsIcon sx={{ color, fontSize: 24 }} />
    </DiamondNode>
  );
};

export const Playground: Story = {
  args: {
    size: 60,
    hoverable: true,
  },
  render: (args) => <PlaygroundDemo size={args.size} hoverable={args.hoverable} />,
};

// Basic usage with stage colors
const BasicDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ display: 'flex', gap: 4, p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60 }}>
        <DiamondNode color={stageColors.stage1} size={60}>
          <ChatBubbleOutlineIcon sx={{ color: stageColors.stage1, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage1, textAlign: 'center' }}>
          1st
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60 }}>
        <DiamondNode color={stageColors.stage2} size={60}>
          <AutoStoriesIcon sx={{ color: stageColors.stage2, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage2, textAlign: 'center' }}>
          2nd
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60 }}>
        <DiamondNode color={stageColors.stage3} size={60}>
          <PresentToAllIcon sx={{ color: stageColors.stage3, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage3, textAlign: 'center' }}>
          3rd
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 60 }}>
        <DiamondNode color={stageColors.stage4} size={60}>
          <MovieCreationIcon sx={{ color: stageColors.stage4, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage4, textAlign: 'center' }}>
          4th
        </Typography>
      </Box>
    </Box>
  );
};

export const Basic: Story = {
  name: 'Stage Colors',
  render: () => <BasicDemo />,
};

// Size variations
const SizesDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const color = themeColors.text.accent;

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-end', p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <DiamondNode color={color} size={40}>
          <SettingsIcon sx={{ color, fontSize: 18 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Small (40px)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <DiamondNode color={color} size={60}>
          <SettingsIcon sx={{ color, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Medium (60px)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <DiamondNode color={color} size={80}>
          <SettingsIcon sx={{ color, fontSize: 32 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Large (80px)
        </Typography>
      </Box>
    </Box>
  );
};

export const Sizes: Story = {
  render: () => <SizesDemo />,
};

// Hoverable vs non-hoverable
const HoverableDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const color = themeColors.text.accent;

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <DiamondNode color={color} size={60} hoverable={true}>
          <SettingsIcon sx={{ color, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Hoverable
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <DiamondNode color={color} size={60} hoverable={false}>
          <SettingsIcon sx={{ color, fontSize: 24 }} />
        </DiamondNode>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Non-hoverable
        </Typography>
      </Box>
    </Box>
  );
};

export const Hoverable: Story = {
  render: () => <HoverableDemo />,
};
