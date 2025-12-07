import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { TextField } from '@mui/material';

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'The variant to use.',
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
    error: {
      control: 'boolean',
      description: 'If true, the label is displayed in an error state.',
    },
    required: {
      control: 'boolean',
      description: 'If true, the label is displayed as required.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, the input will take up the full width of its container.',
    },
    multiline: {
      control: 'boolean',
      description: 'If true, a textarea element is rendered.',
    },
    label: {
      control: 'text',
      description: 'The label content.',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text.',
    },
    helperText: {
      control: 'text',
      description: 'The helper text content.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
  name: 'TextField',
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    variant: 'outlined',
    size: 'medium',
    disabled: false,
    error: false,
    required: false,
    fullWidth: false,
    multiline: false,
    helperText: '',
  },
};

// Interaction Testing
export const TypeInteraction: Story = {
  name: 'Type Interaction',
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
    variant: 'outlined',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Verify input is visible and enabled
    await expect(input).toBeVisible();
    await expect(input).toBeEnabled();

    // Clear and type new text
    await userEvent.clear(input);
    await userEvent.type(input, 'testuser');

    // Verify the typed value
    await expect(input).toHaveValue('testuser');
  },
};

export const FocusInteraction: Story = {
  name: 'Focus Interaction',
  args: {
    label: 'Email',
    placeholder: 'Enter email...',
    variant: 'outlined',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    // Click to focus
    await userEvent.click(input);

    // Verify input has focus
    await expect(input).toHaveFocus();
  },
};

// Edge Cases
export const ErrorWithHelperText: Story = {
  name: 'Error with Helper Text',
  args: {
    label: 'Email',
    placeholder: 'Enter email...',
    variant: 'outlined',
    error: true,
    helperText: 'Invalid email format. Please enter a valid email address.',
    defaultValue: 'invalid-email',
  },
};

export const LongValue: Story = {
  name: 'Long Value (Overflow)',
  args: {
    label: 'Description',
    variant: 'outlined',
    defaultValue: 'This is a very long text value that demonstrates how the TextField handles overflow when the content exceeds the visible area of the input field',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export const Required: Story = {
  name: 'Required Field',
  args: {
    label: 'Username',
    placeholder: 'Enter username...',
    variant: 'outlined',
    required: true,
    helperText: 'This field is required',
  },
};
