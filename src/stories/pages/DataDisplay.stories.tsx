import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Typography,
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  IconButton,
  Badge,
  Button,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Info,
  Delete,
  Edit,
  Visibility,
  Mail,
  Notifications,
  ShoppingCart,
  CheckCircle,
  Error as ErrorIcon,
  Warning,
} from '@mui/icons-material';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Pages/Data Display',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Sample data for tables
const createData = (
  id: number,
  name: string,
  status: 'active' | 'pending' | 'error',
  value: number,
  date: string
) => ({ id, name, status, value, date });

const rows = [
  createData(1, 'System Alpha', 'active', 2400, '2024-01-15'),
  createData(2, 'Process Beta', 'pending', 1800, '2024-01-14'),
  createData(3, 'Module Gamma', 'active', 3200, '2024-01-13'),
  createData(4, 'Service Delta', 'error', 950, '2024-01-12'),
  createData(5, 'Node Epsilon', 'active', 4100, '2024-01-11'),
];

// Table Story
const TableDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'error':
        return colors.error;
      default:
        return colors.text.secondary;
    }
  };

  const tableStyles = {
    '& .MuiTableCell-head': {
      backgroundColor: alpha(colors.primary, 0.1),
      color: colors.primary,
      fontWeight: 600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      borderBottom: `1px solid ${colors.border}`,
    },
    '& .MuiTableCell-body': {
      borderBottom: `1px solid ${colors.border}`,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '0.8125rem',
    },
    '& .MuiTableRow-root:hover': {
      backgroundColor: alpha(colors.primary, 0.05),
    },
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Table</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Basic Table
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={tableStyles}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Box
                      component="span"
                      sx={{
                        color: getStatusColor(row.status),
                        textTransform: 'uppercase',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.value.toLocaleString()}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Table with Actions
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={tableStyles}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(0, 3).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 0.5,
                        color: getStatusColor(row.status),
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: getStatusColor(row.status),
                          boxShadow:
                            mode === 'dark'
                              ? `0 0 6px ${getStatusColor(row.status)}`
                              : 'none',
                        }}
                      />
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" sx={{ color: colors.text.secondary }}>
                      <Visibility fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: colors.primary }}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" sx={{ color: colors.error }}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export const TableShowcase: StoryObj = {
  name: 'Table',
  render: () => <TableDemo />,
};

// Tooltip Story
const TooltipDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Tooltip</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Placements
        </Typography>
        <Paper sx={{ p: 4 }}>
          <Stack spacing={3} alignItems="center">
            <Stack direction="row" spacing={2}>
              <Tooltip title="Top Start" placement="top-start">
                <Button variant="outlined" size="small">
                  Top-Start
                </Button>
              </Tooltip>
              <Tooltip title="Top" placement="top">
                <Button variant="outlined" size="small">
                  Top
                </Button>
              </Tooltip>
              <Tooltip title="Top End" placement="top-end">
                <Button variant="outlined" size="small">
                  Top-End
                </Button>
              </Tooltip>
            </Stack>
            <Stack direction="row" spacing={8}>
              <Stack spacing={1}>
                <Tooltip title="Left Start" placement="left-start">
                  <Button variant="outlined" size="small">
                    Left-Start
                  </Button>
                </Tooltip>
                <Tooltip title="Left" placement="left">
                  <Button variant="outlined" size="small">
                    Left
                  </Button>
                </Tooltip>
                <Tooltip title="Left End" placement="left-end">
                  <Button variant="outlined" size="small">
                    Left-End
                  </Button>
                </Tooltip>
              </Stack>
              <Stack spacing={1}>
                <Tooltip title="Right Start" placement="right-start">
                  <Button variant="outlined" size="small">
                    Right-Start
                  </Button>
                </Tooltip>
                <Tooltip title="Right" placement="right">
                  <Button variant="outlined" size="small">
                    Right
                  </Button>
                </Tooltip>
                <Tooltip title="Right End" placement="right-end">
                  <Button variant="outlined" size="small">
                    Right-End
                  </Button>
                </Tooltip>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Tooltip title="Bottom Start" placement="bottom-start">
                <Button variant="outlined" size="small">
                  Bottom-Start
                </Button>
              </Tooltip>
              <Tooltip title="Bottom" placement="bottom">
                <Button variant="outlined" size="small">
                  Bottom
                </Button>
              </Tooltip>
              <Tooltip title="Bottom End" placement="bottom-end">
                <Button variant="outlined" size="small">
                  Bottom-End
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          With Arrow
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="With arrow" arrow>
            <Button variant="contained">Arrow Tooltip</Button>
          </Tooltip>
          <Tooltip title="Without arrow">
            <Button variant="outlined">No Arrow</Button>
          </Tooltip>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          On Icon Buttons
        </Typography>
        <Stack direction="row" spacing={1}>
          <Tooltip title="View details">
            <IconButton>
              <Info />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit item">
            <IconButton color="primary">
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete item">
            <IconButton sx={{ color: colors.error }}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </Stack>
  );
};

export const TooltipShowcase: StoryObj = {
  name: 'Tooltip',
  render: () => <TooltipDemo />,
};

// Badge Story
const BadgeDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Badge</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Basic Badges
        </Typography>
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={4} color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
          <Badge badgeContent={12} color="secondary">
            <Notifications sx={{ fontSize: 28 }} />
          </Badge>
          <Badge badgeContent={99} max={99} color="error">
            <ShoppingCart sx={{ fontSize: 28 }} />
          </Badge>
          <Badge badgeContent={100} max={99} color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Dot Badge
        </Typography>
        <Stack direction="row" spacing={4}>
          <Badge variant="dot" color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
          <Badge variant="dot" color="error">
            <Notifications sx={{ fontSize: 28 }} />
          </Badge>
          <Badge variant="dot" color="success">
            <CheckCircle sx={{ fontSize: 28 }} />
          </Badge>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Status Colors
        </Typography>
        <Stack direction="row" spacing={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Badge badgeContent="OK" color="success">
              <CheckCircle sx={{ fontSize: 28, color: colors.success }} />
            </Badge>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Success
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Badge badgeContent="!" color="warning">
              <Warning sx={{ fontSize: 28, color: colors.warning }} />
            </Badge>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Warning
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Badge badgeContent="X" color="error">
              <ErrorIcon sx={{ fontSize: 28, color: colors.error }} />
            </Badge>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Error
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Badge Visibility
        </Typography>
        <Stack direction="row" spacing={4}>
          <Badge badgeContent={0} showZero color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
          <Badge badgeContent={0} color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
          <Badge invisible badgeContent={5} color="primary">
            <Mail sx={{ fontSize: 28 }} />
          </Badge>
        </Stack>
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          showZero=true | default (hidden when 0) | invisible=true
        </Typography>
      </Box>
    </Stack>
  );
};

export const BadgeShowcase: StoryObj = {
  name: 'Badge',
  render: () => <BadgeDemo />,
};
