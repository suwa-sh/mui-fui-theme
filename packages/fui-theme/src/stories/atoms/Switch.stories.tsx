import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { Switch } from '@mui/material';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      description: 'The color of the component.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'The size of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'The default checked state.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  name: 'Switch',
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
  },
};

// Interaction Testing
export const ToggleInteraction: Story = {
  name: 'Toggle Interaction',
  args: {
    color: 'primary',
    defaultChecked: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchInput = canvas.getByRole('checkbox');

    // Verify initial state (off)
    await expect(switchInput).not.toBeChecked();

    // Click to turn on
    await userEvent.click(switchInput);
    await expect(switchInput).toBeChecked();

    // Click to turn off
    await userEvent.click(switchInput);
    await expect(switchInput).not.toBeChecked();
  },
};
