import React from 'react';
import { Grid, TextField, Button, Avatar, RadioGroup,  FormControl,FormLabel, FormControlLabel, Radio, InputLabel, MenuItem, Select } from '@mui/material';
import { LocalizationProvider, DatePicker, } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { profileSetupActions } from '@/redux/features/profileSetup-slice';


const Setup1 = () => {
    const setupData = useAppSelector((state) => state.profileSetup.value);
    const dispatch = useDispatch<AppDispatch>();

    console.log(setupData);

    const handleDateChange = (date: string | null) => {
        dispatch(profileSetupActions.dobAdded(date ? date.toString(): null));
    }
    const handleNext = () => {
        dispatch(profileSetupActions.pageChanged(2));
    }

    return (
        <div>
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="name"
                        key="name"
                        label="Name"
                        required
                        fullWidth
                        onChange={(e) => {dispatch(profileSetupActions.nameAdded(e.target.value))}}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date Of Birth"
                            value={setupData.dob}
                            slotProps={
                                {
                                    textField: {
                                        required: true,
                                        fullWidth: true,
                                        
                                    }
                                }
                            }
                            onChange={handleDateChange}
                            
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel>Gender *</FormLabel>
                        <RadioGroup
                            defaultValue="female"
                            name="radio-buttons-group"
                            row
                            onChange={(e) => {dispatch(profileSetupActions.genderAdded(e.target.value))}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="city"
                        key="city"
                        label="Current City"
                        required
                        fullWidth
                        onChange={(e) => {dispatch(profileSetupActions.cityAdded(e.target.value))}}
                    />  
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="hometown"
                        key="hometown"
                        label="Hometown"
                        fullWidth
                        onChange={(e) => {dispatch(profileSetupActions.hometownAdded(e.target.value))}}
                    />  
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
};

export default Setup1;