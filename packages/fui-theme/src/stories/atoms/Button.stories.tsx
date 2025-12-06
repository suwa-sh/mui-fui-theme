import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { Button } from '@mui/material';
import { PlayArrow, CloudUpload } from '@mui/icons-material';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'The variant to use.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'The color of the component.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the button will take up the full width of its container.',
    },
    children: {
      control: 'text',
      description: 'The content of the component.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  name: 'Button',
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    fullWidth: false,
    children: 'Button',
  },
};

export const WithStartIcon: Story = {
  name: 'Button with Start Icon',
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Start',
    startIcon: <PlayArrow />,
  },
  argTypes: {
    startIcon: { table: { disable: true } },
  },
};

export const WithEndIcon: Story = {
  name: 'Button with End Icon',
  args: {
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    disabled: false,
    children: 'Upload',
    endIcon: <CloudUpload />,
  },
  argTypes: {
    endIcon: { table: { disable: true } },
  },
};

// Interaction Testing
export const ClickInteraction: Story = {
  name: 'Click Interaction',
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    // Verify button is visible and enabled
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();

    // Click the button
    await userEvent.click(button);

    // After click, button should have focus
    await expect(button).toHaveFocus();
  },
};

export const DisabledInteraction: Story = {
  name: 'Disabled State',
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /disabled/i });

    // Verify button is disabled
    await expect(button).toBeDisabled();
  },
};

// Edge Cases
export const LongText: Story = {
  name: 'Long Text (Overflow)',
  args: {
    variant: 'contained',
    color: 'primary',
    children: 'This is a very long button text that might cause overflow issues in constrained layouts',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
};
