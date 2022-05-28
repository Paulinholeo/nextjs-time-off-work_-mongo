import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Form.module.css';

export default function Form() {
  const d1 = new Date();
  d1.setHours(9, 0, 0, 0);

  const d2 = new Date();
  d2.setHours(12, 0, 0, 0);

  const d3 = new Date();
  d3.setHours(13, 0, 0, 0);

  const [startTime, setStartTime] = useState<Date | null>(d1);
  const [lunchTime, setLunchTime] = useState<Date | null>(d2);
  const [returnTime, setReturnTime] = useState<Date | null>(d3);
  const [timeOff, setTimeOff] = useState('18:00');

  useEffect(() => {
    calculate();
  });

  function calculate() {
    // worked hour
    const startTimeDuration: moment.Duration = moment.duration(
      moment(startTime).format('HH:mm')
    );

    const lunchTimetDuration: moment.Duration = moment.duration(
      moment(lunchTime).format('HH:mm')
    );

    const workedHours = lunchTimetDuration.subtract(startTimeDuration);

    // remaining hours
    const hoursPerDay = moment.duration('08:00');
    const remainingHours = hoursPerDay.subtract(workedHours);

    // time off work
    const returnTimeDuration: moment.Duration = moment.duration(
      moment(returnTime).format('HH:mm')
    );

    const timeOffWork = returnTimeDuration.add(remainingHours);

    setTimeOff(
      () =>
        `${String(timeOffWork.hours()).padStart(2, '0')}:${String(
          timeOffWork.minutes()
        ).padStart(2, '0')}`
    );
  }

  return (
    <div className={styles.container}>
      <Card variant="outlined" className={styles.card}>
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            calculating time off work
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <TimePicker
                label="Start Time"
                value={startTime}
                onChange={(newValue) => {
                  setStartTime(newValue);
                  calculate();
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <TimePicker
                label="Lunch Time"
                value={lunchTime}
                onChange={(newValue) => {
                  setLunchTime(newValue);
                  calculate();
                }}
                renderInput={(params) => <TextField {...params} />}
              />

              <TimePicker
                label="Return Time "
                value={returnTime}
                onChange={(newValue) => {
                  setReturnTime(newValue);
                  calculate();
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </CardContent>
      </Card>
      <Alert variant="outlined" severity="info" className={styles.alert}>
        <AlertTitle>
          Time off Work: {timeOff} hrs &#128513;&#128517;&#128514;
        </AlertTitle>
      </Alert>
    </div>
  );
}
