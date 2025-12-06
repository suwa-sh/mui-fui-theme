import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from '@mui/material';

const meta: Meta<typeof Slider> = {
  title: 'Atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
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
    defaultValue: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The default value.',
    },
    min: {
      control: 'number',
      description: 'The minimum allowed value.',
    },
    max: {
      control: 'number',
      description: 'The maximum allowed value.',
    },
    step: {
      control: 'number',
      description: 'The granularity with which the slider can step.',
    },
    marks: {
      control: 'boolean',
      description: 'Marks indicate predetermined values.',
    },
    valueLabelDisplay: {
      control: 'select',
      options: ['auto', 'on', 'off'],
      description: 'Controls when the value label is displayed.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Playground: Story = {
  name: 'Slider',
  render: (args) => (
    <div style={{ width: 300, padding: '0 20px' }}>
      <Slider {...args} />
    </div>
  ),
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    marks: false,
    valueLabelDisplay: 'auto',
  },
};
