import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Typography,
  Stack,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Alert,
  CircularProgress,
  Skeleton,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  CreateNewFolder,
  Warning,
  Delete,
  Save,
} from '@mui/icons-material';
import { getColors, getGlowEffects, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Pages/Feedback',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Dialog Story
const DialogDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);
  const [basicOpen, setBasicOpen] = React.useState(false);
  const [formOpen, setFormOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleFormSubmit = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setError('An error occurred while saving.');
    }, 1500);
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Dialog</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dialog Variants
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={() => setBasicOpen(true)}>
            Basic Dialog
          </Button>
          <Button variant="outlined" onClick={() => setFormOpen(true)}>
            Form Dialog
          </Button>
          <Button variant="outlined" onClick={() => setConfirmOpen(true)}>
            Confirm Dialog
          </Button>
        </Stack>
      </Box>

      {/* Basic Dialog */}
      <Dialog open={basicOpen} onClose={() => setBasicOpen(false)}>
        <DialogTitle>System Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a basic dialog with title, content, and actions. The FUI theme
            applies sharp corners and monospace typography for a futuristic look.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBasicOpen(false)}>Close</Button>
          <Button variant="contained" onClick={() => setBasicOpen(false)}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Form Dialog */}
      <Dialog
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setError(null);
          setLoading(false);
        }}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <CreateNewFolder sx={{ color: colors.primary }} />
          Create New Folder
        </DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <TextField
            autoFocus
            margin="dense"
            label="Folder Name"
            fullWidth
            disabled={loading}
            placeholder="Enter folder name"
          />
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            The folder will be created in the current directory.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setFormOpen(false);
              setError(null);
              setLoading(false);
            }}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleFormSubmit}
            disabled={loading}
            startIcon={
              loading ? <CircularProgress size={18} color="inherit" /> : <Save />
            }
          >
            {loading ? 'Creating...' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Dialog */}
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: colors.warning,
          }}
        >
          <Warning />
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this item? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setConfirmOpen(false)}
            startIcon={<Delete />}
            sx={{
              backgroundColor: alpha(colors.error, 0.15),
              color: colors.error,
              border: `1px solid ${colors.error}`,
              '&:hover': {
                backgroundColor: alpha(colors.error, 0.25),
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Static Examples */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Dialog Preview (Static)
        </Typography>
        <Paper sx={{ p: 3, maxWidth: 400 }}>
          <Box
            sx={{
              borderBottom: `1px solid ${colors.border}`,
              pb: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <CreateNewFolder sx={{ color: colors.primary }} />
            <Typography variant="h6">Dialog Title</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Dialog content goes here. This is a preview of how dialogs appear
            with the FUI theme styling.
          </Typography>
          <TextField
            label="Input Field"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
          />
          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button size="small">Cancel</Button>
            <Button variant="contained" size="small">
              Confirm
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export const DialogShowcase: StoryObj = {
  name: 'Dialog',
  render: () => <DialogDemo />,
};

// Skeleton Story
const SkeletonDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Skeleton</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Variants
        </Typography>
        <Stack spacing={2}>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Text
            </Typography>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="text" width={180} />
            <Skeleton variant="text" width={240} />
          </Box>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Circular
            </Typography>
            <Stack direction="row" spacing={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={56} height={56} />
            </Stack>
          </Box>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Rectangular
            </Typography>
            <Skeleton variant="rectangular" width={210} height={118} />
          </Box>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Rounded
            </Typography>
            <Skeleton variant="rounded" width={210} height={60} />
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Animation
        </Typography>
        <Stack direction="row" spacing={3}>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Pulse (default)
            </Typography>
            <Skeleton animation="pulse" width={120} height={40} />
          </Box>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              Wave
            </Typography>
            <Skeleton animation="wave" width={120} height={40} />
          </Box>
          <Box>
            <Typography variant="caption" gutterBottom display="block">
              False (disabled)
            </Typography>
            <Skeleton animation={false} width={120} height={40} />
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Card Loading State
        </Typography>
        <Stack direction="row" spacing={3}>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
              <Skeleton variant="text" width="80%" height={32} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="text" width="90%" />
              <Skeleton variant="rectangular" height={8} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
          <Card sx={{ width: 280 }}>
            <CardContent>
              <Typography variant="overline" color="text.secondary">
                Module
              </Typography>
              <Typography variant="h6" gutterBottom>
                Loaded Content
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This card shows the actual loaded state.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          List Loading State
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Stack spacing={2}>
            {[1, 2, 3].map((item) => (
              <Stack key={item} direction="row" spacing={2} alignItems="center">
                <Skeleton variant="circular" width={40} height={40} />
                <Box sx={{ flex: 1 }}>
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </Box>
                <Skeleton variant="rectangular" width={60} height={24} />
              </Stack>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export const SkeletonShowcase: StoryObj = {
  name: 'Skeleton',
  render: () => <SkeletonDemo />,
};
