import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const meta: Meta = {
  title: 'Atoms/Dialog',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

// Basic Dialog
const BasicDialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        OPEN DIALOG
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>SYSTEM NOTIFICATION</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The FUI Dialog component features L-shaped corner accents and an
            awakening effect when focused. Notice the corner animations when
            interacting with form elements inside.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Basic: StoryObj = {
  name: 'Basic Dialog',
  render: () => <BasicDialogDemo />,
};

// Dialog with Form
const FormDialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        OPEN FORM DIALOG
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>USER AUTHENTICATION</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            Enter your credentials to access the system. The dialog will show
            the awakening effect when form fields are focused.
          </DialogContentText>
          <Stack spacing={2}>
            <TextField
              autoFocus
              label="USER ID"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="ACCESS CODE"
              type="password"
              fullWidth
              variant="outlined"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>ABORT</Button>
          <Button onClick={() => setOpen(false)} variant="contained">
            AUTHENTICATE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const WithForm: StoryObj = {
  name: 'With Form',
  render: () => <FormDialogDemo />,
};

// Alert Dialog
const AlertDialogDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        INITIATE SHUTDOWN
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>WARNING: SYSTEM SHUTDOWN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to initiate system shutdown? This action
            cannot be undone and will terminate all active processes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>CANCEL</Button>
          <Button onClick={() => setOpen(false)} color="error" variant="contained">
            CONFIRM SHUTDOWN
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const Alert: StoryObj = {
  name: 'Alert Dialog',
  render: () => <AlertDialogDemo />,
};

// Showcase all dialog variants
export const Showcase: StoryObj = {
  name: 'Dialog Showcase',
  render: () => (
    <Stack spacing={2} alignItems="center">
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Click each button to see the FUI-styled dialog with L-shaped corner accents
      </Typography>
      <Stack direction="row" spacing={2}>
        <BasicDialogDemo />
        <FormDialogDemo />
        <AlertDialogDemo />
      </Stack>
    </Stack>
  ),
};
