import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
  Button,
  Snackbar,
  SnackbarContent,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from '@mui/material';
import {
  ExpandMore,
  Close,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  ViewList,
  ViewModule,
  ViewQuilt,
} from '@mui/icons-material';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Atoms/Surfaces',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Accordion Demo
const AccordionDemo = () => {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Accordion</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled accordions with sharp edges and glow effect on expansion.
      </Typography>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Basic Accordion
        </Typography>
        <Stack spacing={1}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              System Overview
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                The system is running optimally. All processes are within normal parameters.
                CPU utilization at 42%, memory at 68%.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Network Status
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Network connectivity: Active. Latency: 12ms. Bandwidth utilization: 23%.
                No anomalies detected in the last 24 hours.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              Security Protocols
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                All security protocols are active. Firewall status: Enabled.
                Last security scan: 2 hours ago. No threats detected.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Box>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Disabled Accordion
        </Typography>
        <Accordion disabled>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Disabled Section
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              This content is not accessible.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};

export const AccordionShowcase: StoryObj = {
  name: 'Accordion',
  render: () => <AccordionDemo />,
};

// Snackbar Demo
const SnackbarDemo = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Snackbar</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled snackbars with sharp edges and monospace typography.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          SHOW BASIC SNACKBAR
        </Button>
        <Button variant="outlined" onClick={() => setOpenAction(true)}>
          SHOW WITH ACTION
        </Button>
      </Stack>

      {/* Basic Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message="System notification: Operation completed successfully."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />

      {/* Snackbar with Action */}
      <Snackbar
        open={openAction}
        autoHideDuration={6000}
        onClose={() => setOpenAction(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <SnackbarContent
          message="Process completed. 3 files updated."
          action={
            <>
              <Button size="small" sx={{ color: colors.primary }}>
                VIEW
              </Button>
              <IconButton size="small" color="inherit" onClick={() => setOpenAction(false)}>
                <Close fontSize="small" />
              </IconButton>
            </>
          }
        />
      </Snackbar>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Static Preview
        </Typography>
        <SnackbarContent
          message="Preview: This is how the snackbar appears"
          sx={{ maxWidth: 400 }}
        />
      </Box>
    </Stack>
  );
};

export const SnackbarShowcase: StoryObj = {
  name: 'Snackbar',
  render: () => <SnackbarDemo />,
};

// ToggleButton Demo
const ToggleButtonDemo = () => {
  const [alignment, setAlignment] = useState<string | null>('left');
  const [formats, setFormats] = useState<string[]>(['bold']);
  const [view, setView] = useState('list');

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Toggle Button</Typography>
      <Typography variant="body2" color="text.secondary">
        FUI-styled toggle buttons with sharp edges and accent color on selection.
      </Typography>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Exclusive Selection
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(_, newAlignment) => setAlignment(newAlignment)}
        >
          <ToggleButton value="left">
            <FormatAlignLeft />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenter />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRight />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustify />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Multiple Selection
        </Typography>
        <ToggleButtonGroup
          value={formats}
          onChange={(_, newFormats) => setFormats(newFormats)}
        >
          <ToggleButton value="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          With Text Labels
        </Typography>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(_, newView) => newView && setView(newView)}
        >
          <ToggleButton value="list">
            <ViewList sx={{ mr: 1 }} />
            LIST
          </ToggleButton>
          <ToggleButton value="module">
            <ViewModule sx={{ mr: 1 }} />
            GRID
          </ToggleButton>
          <ToggleButton value="quilt">
            <ViewQuilt sx={{ mr: 1 }} />
            QUILT
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Sizes
        </Typography>
        <Stack spacing={2}>
          <ToggleButtonGroup value="option1" exclusive size="small">
            <ToggleButton value="option1">SMALL</ToggleButton>
            <ToggleButton value="option2">OPTION</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup value="option1" exclusive size="medium">
            <ToggleButton value="option1">MEDIUM</ToggleButton>
            <ToggleButton value="option2">OPTION</ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup value="option1" exclusive size="large">
            <ToggleButton value="option1">LARGE</ToggleButton>
            <ToggleButton value="option2">OPTION</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>

      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Disabled
        </Typography>
        <ToggleButtonGroup value="option1" exclusive disabled>
          <ToggleButton value="option1">DISABLED</ToggleButton>
          <ToggleButton value="option2">OPTIONS</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Stack>
  );
};

export const ToggleButtonShowcase: StoryObj = {
  name: 'Toggle Button',
  render: () => <ToggleButtonDemo />,
};

// Showcase all surface components
export const Showcase: StoryObj = {
  name: 'Surfaces Showcase',
  render: () => (
    <Stack spacing={6}>
      <Typography variant="h4" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Surface Components
      </Typography>
      <AccordionDemo />
      <SnackbarDemo />
      <ToggleButtonDemo />
    </Stack>
  ),
};
