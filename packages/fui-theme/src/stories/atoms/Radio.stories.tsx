import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '@mui/material';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Playground: Story = {
  name: 'Radio',
  args: {
    color: 'primary',
    size: 'medium',
    disabled: false,
    defaultChecked: false,
  },
};
