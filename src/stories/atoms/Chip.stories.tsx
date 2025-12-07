import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: 'The variant to use.',
    },
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
    clickable: {
      control: 'boolean',
      description: 'If true, the chip will appear clickable.',
    },
    label: {
      control: 'text',
      description: 'The content of the component.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Playground: Story = {
  name: 'Chip',
  args: {
    label: 'Chip',
    variant: 'filled',
    color: 'default',
    size: 'medium',
    disabled: false,
    clickable: false,
  },
};

export const WithIcon: Story = {
  name: 'Chip with Icon',
  args: {
    label: 'Success',
    variant: 'filled',
    color: 'success',
    size: 'medium',
    icon: <CheckCircle />,
  },
  argTypes: {
    icon: { table: { disable: true } },
  },
};

export const Deletable: Story = {
  name: 'Chip Deletable',
  render: (args) => <Chip {...args} onDelete={() => {}} />,
  args: {
    label: 'Deletable',
    variant: 'filled',
    color: 'primary',
    size: 'medium',
  },
};
