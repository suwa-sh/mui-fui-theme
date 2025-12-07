import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
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
    defaultValue: {
      control: 'select',
      options: ['', 'option1', 'option2', 'option3'],
      description: 'The default value.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  name: 'Select',
  render: (args) => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel>Option</InputLabel>
      <Select {...args} label="Option">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  ),
  args: {
    variant: 'outlined',
    size: 'medium',
    disabled: false,
    error: false,
    defaultValue: '',
  },
};

// Interaction Testing
export const SelectOptionInteraction: Story = {
  name: 'Select Option Interaction',
  render: (args) => (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="select-label">Option</InputLabel>
      <Select {...args} labelId="select-label" label="Option">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  ),
  args: {
    variant: 'outlined',
    defaultValue: '',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click the select to open dropdown
    const selectButton = canvas.getByRole('combobox');
    await expect(selectButton).toBeVisible();
    await userEvent.click(selectButton);

    // Wait for the dropdown to appear and select an option
    const listbox = await within(document.body).findByRole('listbox');
    const option = within(listbox).getByRole('option', { name: /option 1/i });
    await userEvent.click(option);

    // Verify the selection
    await expect(selectButton).toHaveTextContent('Option 1');
  },
};
