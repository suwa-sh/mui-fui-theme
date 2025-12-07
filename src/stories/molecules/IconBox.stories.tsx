import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, useTheme } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloudIcon from '@mui/icons-material/Cloud';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconBox } from '../../components/molecules/IconBox';
import { getStageColors, getThemeColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof IconBox> = {
  title: 'Molecules/IconBox',
  component: IconBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the box (border, inner frame)',
    },
    size: {
      control: { type: 'number', min: 20, max: 100, step: 8 },
      description: 'Size of the box in pixels',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether to show hover effects',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconBox>;

// Playground with theme-aware default color
const PlaygroundDemo: React.FC<{ size?: number; hoverable?: boolean }> = ({ size = 48, hoverable = true }) => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const color = themeColors.text.accent;

  return (
    <IconBox color={color} size={size} hoverable={hoverable}>
      <SettingsIcon sx={{ color, fontSize: 22 }} />
    </IconBox>
  );
};

export const Playground: Story = {
  args: {
    size: 48,
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48 }}>
        <IconBox color={stageColors.stage1} size={48}>
          <MicIcon sx={{ color: stageColors.stage1, fontSize: 22 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage1, textAlign: 'center' }}>
          1st
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48 }}>
        <IconBox color={stageColors.stage2} size={48}>
          <SlideshowIcon sx={{ color: stageColors.stage2, fontSize: 22 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage2, textAlign: 'center' }}>
          2nd
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48 }}>
        <IconBox color={stageColors.stage3} size={48}>
          <ChatBubbleOutlineIcon sx={{ color: stageColors.stage3, fontSize: 22 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color: stageColors.stage3, textAlign: 'center' }}>
          3rd
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 48 }}>
        <IconBox color={stageColors.stage4} size={48}>
          <CloudIcon sx={{ color: stageColors.stage4, fontSize: 22 }} />
        </IconBox>
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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 64 }}>
        <IconBox color={color} size={32}>
          <SettingsIcon sx={{ color, fontSize: 16 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Small (32px)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 64 }}>
        <IconBox color={color} size={48}>
          <SettingsIcon sx={{ color, fontSize: 22 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Medium (48px)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 64 }}>
        <IconBox color={color} size={64}>
          <SettingsIcon sx={{ color, fontSize: 28 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Large (64px)
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
        <IconBox color={color} size={48} hoverable={true}>
          <SettingsIcon sx={{ color, fontSize: 22 }} />
        </IconBox>
        <Typography variant="caption" sx={{ mt: 1, color, textAlign: 'center' }}>
          Hoverable
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
        <IconBox color={color} size={48} hoverable={false}>
          <SettingsIcon sx={{ color, fontSize: 22 }} />
        </IconBox>
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
