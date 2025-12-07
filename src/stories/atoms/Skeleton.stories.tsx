import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, Stack, Box, Card, CardContent, Typography } from '@mui/material';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'rounded', 'circular'],
      description: 'The type of content that will be rendered.',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', false],
      description: 'The animation. If false the animation effect is disabled.',
    },
    width: {
      control: { type: 'number', min: 50, max: 400 },
      description: 'Width of the skeleton.',
    },
    height: {
      control: { type: 'number', min: 20, max: 200 },
      description: 'Height of the skeleton.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
  name: 'Skeleton',
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 210,
    height: 20,
  },
};

export const TextSkeleton: Story = {
  name: 'Text Skeleton',
  render: () => (
    <Stack spacing={1} sx={{ width: 250 }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="80%" />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width="60%" />
    </Stack>
  ),
};

export const RectangularSkeleton: Story = {
  name: 'Rectangular Skeleton',
  render: () => (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </Stack>
  ),
};

export const CircularSkeleton: Story = {
  name: 'Circular Skeleton',
  render: () => (
    <Stack direction="row" spacing={2}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="circular" width={56} height={56} />
      <Skeleton variant="circular" width={72} height={72} />
    </Stack>
  ),
};

export const RoundedSkeleton: Story = {
  name: 'Rounded Skeleton',
  render: () => (
    <Skeleton variant="rounded" width={210} height={60} />
  ),
};

export const AnimationVariants: Story = {
  name: 'Animation Variants',
  render: () => (
    <Stack spacing={3}>
      <Box>
        <Typography variant="caption" gutterBottom display="block">
          Pulse (default)
        </Typography>
        <Skeleton animation="pulse" width={200} height={40} />
      </Box>
      <Box>
        <Typography variant="caption" gutterBottom display="block">
          Wave
        </Typography>
        <Skeleton animation="wave" width={200} height={40} />
      </Box>
      <Box>
        <Typography variant="caption" gutterBottom display="block">
          No Animation
        </Typography>
        <Skeleton animation={false} width={200} height={40} />
      </Box>
    </Stack>
  ),
};

export const CardLoadingState: Story = {
  name: 'Card Loading State',
  render: () => (
    <Stack direction="row" spacing={3}>
      {/* Loading state */}
      <Card sx={{ width: 280 }}>
        <CardContent>
          <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
          <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="rectangular" height={8} sx={{ mt: 2 }} />
        </CardContent>
      </Card>
      {/* Loaded state for comparison */}
      <Card sx={{ width: 280 }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            Module
          </Typography>
          <Typography variant="h6" gutterBottom>
            Loaded Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This card shows the actual loaded state for comparison.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  ),
};

export const ListLoadingState: Story = {
  name: 'List Loading State',
  render: () => (
    <Stack spacing={2} sx={{ width: 300 }}>
      {[1, 2, 3].map((item) => (
        <Stack key={item} direction="row" spacing={2} alignItems="center">
          <Skeleton variant="circular" width={40} height={40} />
          <Box sx={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
          </Box>
          <Skeleton variant="rectangular" width={60} height={24} />
        </Stack>
      ))}
    </Stack>
  ),
};
