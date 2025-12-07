import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Typography,
  Stack,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  FormControlLabel,
  FormGroup,
  FormLabel,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { getColors, type ThemeMode } from '../../theme';

const meta: Meta = {
  title: 'Pages/Inputs',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

// Select Story
const SelectDemo: React.FC = () => {
  const [value, setValue] = React.useState('');
  const [multiValue, setMultiValue] = React.useState<string[]>([]);

  return (
    <Stack spacing={4} sx={{ maxWidth: 400 }}>
      <Typography variant="h5">Select</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Basic Select
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Option</InputLabel>
          <Select
            value={value}
            label="Option"
            onChange={(e) => setValue(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          With Helper Text
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={value} label="Category" onChange={(e) => setValue(e.target.value)}>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="network">Network</MenuItem>
            <MenuItem value="storage">Storage</MenuItem>
          </Select>
          <FormHelperText>Select a category for the item</FormHelperText>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Error State
        </Typography>
        <FormControl fullWidth error>
          <InputLabel>Required Field</InputLabel>
          <Select value="" label="Required Field">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="value1">Value 1</MenuItem>
          </Select>
          <FormHelperText>This field is required</FormHelperText>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Disabled
        </Typography>
        <FormControl fullWidth disabled>
          <InputLabel>Disabled Select</InputLabel>
          <Select value="locked" label="Disabled Select">
            <MenuItem value="locked">Locked Value</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Multiple Select
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Tags</InputLabel>
          <Select
            multiple
            value={multiValue}
            label="Tags"
            onChange={(e) => setMultiValue(e.target.value as string[])}
          >
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="database">Database</MenuItem>
            <MenuItem value="devops">DevOps</MenuItem>
          </Select>
          <FormHelperText>Select multiple tags</FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
};

export const SelectShowcase: StoryObj = {
  name: 'Select',
  render: () => <SelectDemo />,
};

// Checkbox/Radio/Switch Story
const ControlsDemo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.mode as ThemeMode;
  const colors = getColors(mode);
  const [checkboxes, setCheckboxes] = React.useState({
    option1: true,
    option2: false,
    option3: false,
  });
  const [radioValue, setRadioValue] = React.useState('option1');
  const [switches, setSwitches] = React.useState({
    notifications: true,
    darkMode: mode === 'dark',
    autoSave: false,
  });

  const controlStyles = {
    color: colors.border,
    '&.Mui-checked': {
      color: colors.primary,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  };

  const switchStyles = {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: colors.primary,
      '&:hover': {
        backgroundColor: alpha(colors.primary, 0.08),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: colors.primary,
    },
  };

  return (
    <Stack spacing={4}>
      <Typography variant="h5">Form Controls</Typography>

      <Box>
        <Typography variant="h6" gutterBottom>
          Checkboxes
        </Typography>
        <Paper sx={{ p: 2 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.option1}
                  onChange={(e) =>
                    setCheckboxes({ ...checkboxes, option1: e.target.checked })
                  }
                  sx={controlStyles}
                />
              }
              label="Option 1 (checked)"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.option2}
                  onChange={(e) =>
                    setCheckboxes({ ...checkboxes, option2: e.target.checked })
                  }
                  sx={controlStyles}
                />
              }
              label="Option 2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.option3}
                  indeterminate
                  sx={controlStyles}
                />
              }
              label="Indeterminate"
            />
            <FormControlLabel
              control={<Checkbox disabled sx={controlStyles} />}
              label="Disabled"
            />
            <FormControlLabel
              control={<Checkbox disabled checked sx={controlStyles} />}
              label="Disabled Checked"
            />
          </FormGroup>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Radio Buttons
        </Typography>
        <Paper sx={{ p: 2 }}>
          <FormControl>
            <FormLabel sx={{ color: colors.text.secondary, mb: 1 }}>
              Select an option
            </FormLabel>
            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="option1"
                control={<Radio sx={controlStyles} />}
                label="Option 1"
              />
              <FormControlLabel
                value="option2"
                control={<Radio sx={controlStyles} />}
                label="Option 2"
              />
              <FormControlLabel
                value="option3"
                control={<Radio sx={controlStyles} />}
                label="Option 3"
              />
              <FormControlLabel
                value="disabled"
                control={<Radio sx={controlStyles} />}
                label="Disabled"
                disabled
              />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Switches
        </Typography>
        <Paper sx={{ p: 2 }}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={switches.notifications}
                  onChange={(e) =>
                    setSwitches({ ...switches, notifications: e.target.checked })
                  }
                  sx={switchStyles}
                />
              }
              label="Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={switches.darkMode}
                  onChange={(e) =>
                    setSwitches({ ...switches, darkMode: e.target.checked })
                  }
                  sx={switchStyles}
                />
              }
              label="Dark Mode"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={switches.autoSave}
                  onChange={(e) =>
                    setSwitches({ ...switches, autoSave: e.target.checked })
                  }
                  sx={switchStyles}
                />
              }
              label="Auto Save"
            />
            <FormControlLabel
              control={<Switch disabled sx={switchStyles} />}
              label="Disabled"
            />
            <FormControlLabel
              control={<Switch disabled checked sx={switchStyles} />}
              label="Disabled On"
            />
          </FormGroup>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Sizes
        </Typography>
        <Paper sx={{ p: 2 }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Box>
              <Typography variant="caption" display="block" gutterBottom>
                Checkbox
              </Typography>
              <Stack direction="row" spacing={1}>
                <Checkbox size="small" sx={controlStyles} />
                <Checkbox sx={controlStyles} />
              </Stack>
            </Box>
            <Box>
              <Typography variant="caption" display="block" gutterBottom>
                Radio
              </Typography>
              <Stack direction="row" spacing={1}>
                <Radio size="small" sx={controlStyles} />
                <Radio sx={controlStyles} />
              </Stack>
            </Box>
            <Box>
              <Typography variant="caption" display="block" gutterBottom>
                Switch
              </Typography>
              <Stack direction="row" spacing={1}>
                <Switch size="small" sx={switchStyles} />
                <Switch sx={switchStyles} />
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Stack>
  );
};

export const FormControls: StoryObj = {
  name: 'Checkbox / Radio / Switch',
  render: () => <ControlsDemo />,
};
