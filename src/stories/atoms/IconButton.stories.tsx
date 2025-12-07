import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
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
      options: ['small', 'medium', 'large'],
      description: 'The size of the component.',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the component is disabled.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Playground: Story = {
  name: 'IconButton',
  render: (args) => (
    <IconButton {...args}>
      <Settings />
    </IconButton>
  ),
  args: {
    color: 'default',
    size: 'medium',
    disabled: false,
  },
};
