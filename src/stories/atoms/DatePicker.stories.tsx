import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Typography, Box } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import dayjs, { Dayjs } from 'dayjs';

const meta: Meta = {
  title: 'Atoms/DatePicker',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Story />
      </LocalizationProvider>
    ),
  ],
};

export default meta;

// Basic DatePicker
const BasicDatePickerDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <DatePicker
      label="SELECT DATE"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Basic: StoryObj = {
  name: 'Basic DatePicker',
  render: () => <BasicDatePickerDemo />,
};

// DateCalendar (standalone)
const DateCalendarDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <DateCalendar
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Calendar: StoryObj = {
  name: 'Date Calendar',
  render: () => <DateCalendarDemo />,
};

// Static DatePicker
const StaticDatePickerDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <StaticDatePicker
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Static: StoryObj = {
  name: 'Static DatePicker',
  render: () => <StaticDatePickerDemo />,
};

// Multiple DatePickers
const MultipleDatePickersDemo = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs().add(7, 'day'));

  return (
    <Stack spacing={3}>
      <DatePicker
        label="START DATE"
        value={startDate}
        onChange={(newValue) => setStartDate(newValue)}
      />
      <DatePicker
        label="END DATE"
        value={endDate}
        onChange={(newValue) => setEndDate(newValue)}
        minDate={startDate || undefined}
      />
    </Stack>
  );
};

export const DateRange: StoryObj = {
  name: 'Date Range',
  render: () => <MultipleDatePickersDemo />,
};

// Basic TimePicker
const BasicTimePickerDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <TimePicker
      label="SELECT TIME"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const Time: StoryObj = {
  name: 'Time Picker',
  render: () => <BasicTimePickerDemo />,
};

// DateTimePicker
const DateTimePickerDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <DateTimePicker
      label="SELECT DATE & TIME"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const DateTime: StoryObj = {
  name: 'DateTime Picker',
  render: () => <DateTimePickerDemo />,
};

// Static TimePicker
const StaticTimePickerDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <StaticTimePicker
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const StaticTime: StoryObj = {
  name: 'Static Time Picker',
  render: () => <StaticTimePickerDemo />,
};

// Digital Clock
const DigitalClockDemo = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Digital Clock
        </Typography>
        <DigitalClock
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
      <Box>
        <Typography variant="overline" gutterBottom display="block">
          Multi-Section Digital Clock
        </Typography>
        <MultiSectionDigitalClock
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </Box>
    </Stack>
  );
};

export const Digital: StoryObj = {
  name: 'Digital Clock',
  render: () => <DigitalClockDemo />,
};

// Showcase
export const Showcase: StoryObj = {
  name: 'DatePicker Showcase',
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        DatePicker Components
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        FUI-styled date pickers with sharp edges, monospace typography, and theme colors.
      </Typography>

      <Stack spacing={3}>
        <Typography variant="overline">Basic DatePicker</Typography>
        <BasicDatePickerDemo />
      </Stack>

      <Stack spacing={3}>
        <Typography variant="overline">Date Range Selection</Typography>
        <MultipleDatePickersDemo />
      </Stack>

      <Stack spacing={3}>
        <Typography variant="overline">Standalone Calendar</Typography>
        <DateCalendarDemo />
      </Stack>
    </Stack>
  ),
};

// TimePicker Showcase
export const TimeShowcase: StoryObj = {
  name: 'TimePicker Showcase',
  render: () => (
    <Stack spacing={4}>
      <Typography variant="h6" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        TimePicker Components
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        FUI-styled time pickers with monospace typography and theme colors.
      </Typography>

      <Stack spacing={3}>
        <Typography variant="overline">Basic TimePicker</Typography>
        <BasicTimePickerDemo />
      </Stack>

      <Stack spacing={3}>
        <Typography variant="overline">DateTimePicker</Typography>
        <DateTimePickerDemo />
      </Stack>

      <Stack spacing={3}>
        <Typography variant="overline">Digital Clock Options</Typography>
        <DigitalClockDemo />
      </Stack>
    </Stack>
  ),
};
