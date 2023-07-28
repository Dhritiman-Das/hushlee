"use client"

import React, { useState } from 'react';
import {GiMagicHat} from 'react-icons/gi'
import { Grid, TextField, Button, Avatar, RadioGroup,  FormControl,FormLabel, FormControlLabel, Radio, InputLabel, MenuItem, Select } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';


interface BubbleProps {
    $filled: boolean;
}
  
const Bubble = styled(Avatar)<BubbleProps>(({ theme, $filled }) => ({
backgroundColor: $filled ? '#F8BBD0' : '#D9D9D9',
color: $filled ? theme.palette.primary.contrastText : theme.palette.primary.main,
width: theme.spacing(3),
height: theme.spacing(3),
marginRight: theme.spacing(1),
border: `1px solid ${theme.palette.primary.main}`,
}));


const Page = () => {
    const classes = useTheme();
    const currentPage = 1;    

    return (
        <div className='bg-background h-screen flex items-center justify-center'>
            <div className='bg-main h-fit w-[500px] p-11 rounded-2xl text-textColor'>
                <div className='flex items-center justify-center'>
                    <GiMagicHat className='text-[32px] mr-2 transform -rotate-12' />
                    <div className='italic text-[28px] font-medium'>
                        Hushlee
                    </div>
                </div>
                <div className='text-[32px] font-bold text-center mt-5 mb-3'>
                    Profile Setup
                </div>
                <div className='flex items-center justify-center mb-11'>
                    <Bubble $filled={currentPage === 1 as any}> </Bubble>
                    <span className='ml-6' />
                    <Bubble $filled={currentPage === 2 as any}> </Bubble>
                </div>
                <form>
                    <Grid container direction="column" spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="name"
                                key="name"
                                label="Name"
                                required
                                fullWidth
                            />    
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date Of Birth"
                                    // value={selectedDate}
                                    slotProps={
                                        {
                                            textField: {
                                                required: true,
                                                fullWidth: true,
                                            }
                                        }
                                    }
                                    
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
                            />  
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="hometown"
                                key="hometown"
                                label="Hometown"
                                fullWidth
                            />  
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default Page;