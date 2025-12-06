import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, userEvent, expect } from 'storybook/test';
import { Alert, AlertTitle, Button } from '@mui/material';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
      description: 'The severity of the alert.',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'The variant to use.',
    },
    children: {
      control: 'text',
      description: 'The content of the component.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  name: 'Alert',
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'This is an alert message',
  },
};

export const WithTitle: Story = {
  name: 'Alert with Title',
  render: (args) => (
    <Alert severity={args.severity} variant={args.variant}>
      <AlertTitle>Alert Title</AlertTitle>
      {args.children}
    </Alert>
  ),
  args: {
    severity: 'warning',
    variant: 'standard',
    children: 'This is a detailed alert message with additional context.',
  },
};

// Edge Cases
export const Closable: Story = {
  name: 'Closable Alert',
  render: () => {
    const [open, setOpen] = React.useState(true);
    return open ? (
      <Alert severity="info" onClose={() => setOpen(false)}>
        This alert can be closed by clicking the X button.
      </Alert>
    ) : (
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Alert
      </Button>
    );
  },
};

export const WithAction: Story = {
  name: 'Alert with Action',
  render: (args) => (
    <Alert
      severity={args.severity}
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      {args.children}
    </Alert>
  ),
  args: {
    severity: 'success',
    children: 'Action completed successfully.',
  },
};

export const AllSeverities: Story = {
  name: 'All Severities',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert severity="success">Success - Operation completed successfully</Alert>
      <Alert severity="info">Info - This is an informational message</Alert>
      <Alert severity="warning">Warning - Please review before proceeding</Alert>
      <Alert severity="error">Error - Something went wrong</Alert>
    </div>
  ),
};
