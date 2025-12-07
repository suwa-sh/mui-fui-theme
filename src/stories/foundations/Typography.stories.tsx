import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography, Stack, Divider } from '@mui/material';

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const TypographyShowcase: StoryObj = {
  name: 'Typography',
  render: () => (
    <Stack spacing={2}>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>
      <Divider />
      <Typography variant="body1">
        Body 1 - Main text content with FUI monospace styling
      </Typography>
      <Typography variant="body2">
        Body 2 - Secondary text with slightly smaller size
      </Typography>
      <Typography variant="caption">Caption - Small uppercase text</Typography>
      <Typography variant="overline">Overline - Label style</Typography>
      <Typography variant="button">Button Text</Typography>
    </Stack>
  ),
};
