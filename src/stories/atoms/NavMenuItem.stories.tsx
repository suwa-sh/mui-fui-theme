import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, List, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { NavMenuItem } from '../../components/atoms/NavMenuItem';
import { getStageColors, getThemeColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof NavMenuItem> = {
  title: 'Atoms/NavMenuItem',
  component: NavMenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof NavMenuItem>;

// Default state
const DefaultDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Home"
          description="Dashboard"
          icon={<HomeIcon />}
          color={themeColors.text.accent}
          path="/"
          themeColors={themeColors}
          onClick={() => console.log('Home clicked')}
        />
      </List>
    </Box>
  );
};

export const Default: Story = {
  render: () => <DefaultDemo />,
};

// Selected state
const SelectedDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Narration"
          description="Audio Generator"
          icon={<MicIcon />}
          color={stageColors.stage4}
          path="/narration"
          selected
          themeColors={themeColors}
          onClick={() => console.log('Narration clicked')}
        />
      </List>
    </Box>
  );
};

export const Selected: Story = {
  render: () => <SelectedDemo />,
};

// With Badge
const WithBadgeDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Tweet Advisor"
          description="GEM"
          icon={<ChatBubbleOutlineIcon />}
          color={stageColors.stage1}
          url="https://example.com"
          badge="AI"
          external
          themeColors={themeColors}
          onClick={() => console.log('Tweet Advisor clicked')}
        />
      </List>
    </Box>
  );
};

export const WithBadge: Story = {
  render: () => <WithBadgeDemo />,
};

// External Link
const ExternalLinkDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Slides"
          description="Speaker Deck"
          icon={<SlideshowIcon />}
          color={themeColors.text.accent}
          url="https://speakerdeck.com"
          external
          themeColors={themeColors}
          onClick={() => console.log('Slides clicked')}
        />
      </List>
    </Box>
  );
};

export const ExternalLink: Story = {
  render: () => <ExternalLinkDemo />,
};

// Collapsed mode
const CollapsedDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 64, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Narration"
          description="Audio Generator"
          icon={<MicIcon />}
          color={stageColors.stage4}
          path="/narration"
          selected
          collapsed
          themeColors={themeColors}
          onClick={() => console.log('Narration clicked')}
        />
      </List>
    </Box>
  );
};

export const Collapsed: Story = {
  render: () => <CollapsedDemo />,
};

// All States
const AllStatesDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Default"
          description="Normal state"
          icon={<HomeIcon />}
          color={stageColors.stage1}
          path="/"
          themeColors={themeColors}
        />
        <NavMenuItem
          label="Selected"
          description="Active item"
          icon={<MicIcon />}
          color={stageColors.stage2}
          path="/selected"
          selected
          themeColors={themeColors}
        />
        <NavMenuItem
          label="With Badge"
          description="Has AI badge"
          icon={<ChatBubbleOutlineIcon />}
          color={stageColors.stage3}
          url="https://example.com"
          badge="AI"
          external
          themeColors={themeColors}
        />
        <NavMenuItem
          label="External Link"
          description="Opens in new tab"
          icon={<SlideshowIcon />}
          color={stageColors.stage4}
          url="https://example.com"
          external
          themeColors={themeColors}
        />
      </List>
    </Box>
  );
};

export const AllStates: Story = {
  render: () => <AllStatesDemo />,
};

// Awakening mode - gray to accent on hover/selected
const AwakeningDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const themeColors = getThemeColors(mode);
  const stageColors = getStageColors(mode);

  return (
    <Box sx={{ width: 260, bgcolor: themeColors.background.default, p: 1 }}>
      <List disablePadding>
        <NavMenuItem
          label="Default (Awakening)"
          description="Hover to see color"
          icon={<HomeIcon />}
          color={stageColors.stage1}
          path="/"
          awakening
          themeColors={themeColors}
        />
        <NavMenuItem
          label="Selected (Awakening)"
          description="Always accent color"
          icon={<MicIcon />}
          color={stageColors.stage2}
          path="/selected"
          selected
          awakening
          themeColors={themeColors}
        />
        <NavMenuItem
          label="With Badge (Awakening)"
          description="Has AI badge"
          icon={<ChatBubbleOutlineIcon />}
          color={stageColors.stage3}
          url="https://example.com"
          badge="AI"
          external
          awakening
          themeColors={themeColors}
        />
        <NavMenuItem
          label="External (Awakening)"
          description="Opens in new tab"
          icon={<SlideshowIcon />}
          color={stageColors.stage4}
          url="https://example.com"
          external
          awakening
          themeColors={themeColors}
        />
      </List>
    </Box>
  );
};

export const Awakening: Story = {
  render: () => <AwakeningDemo />,
};
