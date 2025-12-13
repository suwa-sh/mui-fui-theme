import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Typography, useTheme } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import PublicIcon from '@mui/icons-material/Public';
import StorageIcon from '@mui/icons-material/Storage';
import { SectionHeader } from '../../components/atoms/SectionHeader';
import { getThemeColors, type ThemeMode } from '../../theme';

const meta: Meta<typeof SectionHeader> = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['h4', 'h5', 'h6', 'overline'],
    },
    showDiamond: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    title: 'SYSTEM MONITOR',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'PERFORMANCE',
    subtitle: 'Real-time system metrics',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'MEMORY USAGE',
    icon: <MemoryIcon sx={{ fontSize: 20 }} />,
  },
};

export const Overline: Story = {
  args: {
    title: 'RESOURCE HISTORY',
    variant: 'overline',
    icon: <StorageIcon sx={{ fontSize: 18 }} />,
  },
};

// With action
const HeaderWithAction: React.FC = () => {
  const theme = useTheme();
  const themeColors = getThemeColors(theme.palette.mode as ThemeMode);

  const currentTime = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <Box sx={{ width: 500 }}>
      <SectionHeader
        title="GLOBAL TRAFFIC"
        icon={<PublicIcon sx={{ fontSize: 20 }} />}
        action={
          <Typography
            variant="body2"
            sx={{
              color: themeColors.text.secondary,
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            {currentTime}
          </Typography>
        }
      />
    </Box>
  );
};

export const WithAction: Story = {
  render: () => <HeaderWithAction />,
};

// No diamond
export const NoDiamond: Story = {
  args: {
    title: 'METRICS',
    showDiamond: false,
    icon: <MemoryIcon sx={{ fontSize: 20 }} />,
  },
};

// All variants
const VariantShowcase: React.FC = () => {
  return (
    <Box sx={{ width: 400, '& > *': { mb: 4 } }}>
      <SectionHeader title="H4 VARIANT" variant="h4" />
      <SectionHeader title="H5 VARIANT (Default)" variant="h5" />
      <SectionHeader title="H6 VARIANT" variant="h6" />
      <SectionHeader title="OVERLINE VARIANT" variant="overline" />
    </Box>
  );
};

export const AllVariants: Story = {
  render: () => <VariantShowcase />,
};
