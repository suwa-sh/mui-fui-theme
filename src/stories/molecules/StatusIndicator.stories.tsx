import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography } from '@mui/material';
import { StatusIndicator, type StatusType } from '../../components/atoms/StatusIndicator';

const meta: Meta<typeof StatusIndicator> = {
  title: 'Molecules/StatusIndicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['running', 'idle', 'error', 'warning', 'success'],
    },
    size: {
      control: { type: 'range', min: 4, max: 20, step: 1 },
    },
    showGlow: {
      control: 'boolean',
    },
    uppercase: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Running: Story = {
  args: {
    status: 'running',
    label: 'running',
  },
};

export const Idle: Story = {
  args: {
    status: 'idle',
    label: 'idle',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    label: 'error',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    label: 'warning',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    label: 'success',
  },
};

// All statuses
const AllStatuses: React.FC = () => {
  const statuses: StatusType[] = ['running', 'success', 'idle', 'warning', 'error'];

  return (
    <Stack spacing={2}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        All Status Types
      </Typography>
      <Stack spacing={1.5}>
        {statuses.map((status) => (
          <StatusIndicator key={status} status={status} label={status} />
        ))}
      </Stack>
    </Stack>
  );
};

export const AllTypes: Story = {
  render: () => <AllStatuses />,
};

// Without labels (indicator only)
const IndicatorsOnly: React.FC = () => {
  const statuses: StatusType[] = ['running', 'success', 'idle', 'warning', 'error'];

  return (
    <Stack spacing={2}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Indicator Only (No Labels)
      </Typography>
      <Stack direction="row" spacing={2}>
        {statuses.map((status) => (
          <StatusIndicator key={status} status={status} />
        ))}
      </Stack>
    </Stack>
  );
};

export const NoLabels: Story = {
  render: () => <IndicatorsOnly />,
};

// Different sizes
const SizeVariations: React.FC = () => {
  const sizes = [6, 8, 10, 12, 16];

  return (
    <Stack spacing={2}>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        Size Variations
      </Typography>
      <Stack spacing={1.5}>
        {sizes.map((size) => (
          <StatusIndicator key={size} status="running" label={`Size: ${size}px`} size={size} />
        ))}
      </Stack>
    </Stack>
  );
};

export const Sizes: Story = {
  render: () => <SizeVariations />,
};

// Uppercase labels
export const Uppercase: Story = {
  args: {
    status: 'running',
    label: 'active',
    uppercase: true,
  },
};
