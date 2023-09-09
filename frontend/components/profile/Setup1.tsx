import React from 'react';
import {
  Grid,
  TextField,
  Button,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { profileSetupActions } from '@/redux/features/profileSetup-slice';

interface SetupState {
  [key: string]: any;
}

function Setup1() {
  const setupData: SetupState = useSelector(
    (state: RootState) => state.profileSetup.value,
  );
  const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({
    firstName: false,
    lastName: false,
    dob: false,
    gender: false,
  });

  const validateInput = () => {
    const newErrors = {
      firstName: !setupData.firstName,
      lastName: !setupData.lastName,
      dob: !setupData.dob,
      gender: !setupData.gender,
    };

    setErrors(newErrors);

    return !Object.values(newErrors).includes(true);
  };

  const handleDateChange = (date: string | null) => {
    dispatch(profileSetupActions.dobAdded(date ? date.toString() : null));
  };

  const handleNext = () => {
    if (validateInput()) {
      dispatch(profileSetupActions.pageChanged(2));
    }
  };

  return (
    <div>
      <Grid container direction="column" spacing={3}>
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={6}>
            <TextField
              autoComplete="off"
              id="firstName"
              key="firstName"
              label="First name"
              required
              error={errors.firstName}
              helperText={errors.firstName && 'First name required'}
              fullWidth
              onChange={(e) => {
                dispatch(profileSetupActions.firstNameAdded(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="lastName"
              key="lastName"
              label="Last name"
              required
              error={errors.lastName}
              helperText={errors.firstName && 'Last name required'}
              fullWidth
              onChange={(e) => {
                dispatch(profileSetupActions.lastNameAdded(e.target.value));
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date Of Birth"
              value={setupData.dob}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: errors.dob,
                },
              }}
              onChange={handleDateChange}
            />
            {errors.dob && (
              <FormHelperText error>Date of birth is required</FormHelperText>
            )}
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <FormControl required error={errors.gender}>
            <FormLabel>Gender </FormLabel>
            <RadioGroup
              name="radio-buttons-group"
              row
              onChange={(e) => {
                dispatch(profileSetupActions.genderAdded(e.target.value));
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            {errors.gender && (
              <FormHelperText error>
                This field is required
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item container xs={12} spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="city"
              key="city"
              label="Current City"
              fullWidth
              onChange={(e) => {
                dispatch(profileSetupActions.cityAdded(e.target.value));
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="hometown"
              key="hometown"
              label="Hometown"
              fullWidth
              onChange={(e) => {
                dispatch(profileSetupActions.hometownAdded(e.target.value));
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Setup1;
