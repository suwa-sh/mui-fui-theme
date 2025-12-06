import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { Checkbox } from '@mui/material';

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
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
    indeterminate: {
      control: 'boolean',
      description: 'If true, the component appears indeterminate.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {
  name: 'Checkbox',
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
    indeterminate: false,
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
    const checkbox = canvas.getByRole('checkbox');

    // Verify initial state (unchecked)
    await expect(checkbox).not.toBeChecked();

    // Click to check
    await userEvent.click(checkbox);
    await expect(checkbox).toBeChecked();

    // Click to uncheck
    await userEvent.click(checkbox);
    await expect(checkbox).not.toBeChecked();
  },
};
