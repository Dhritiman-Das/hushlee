"use client"

import { profileSetupActions } from '@/redux/features/profileSetup-slice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { Button, Grid, TextField } from '@mui/material';
import React, {useRef, ChangeEvent, useEffect, MouseEventHandler} from 'react';
import { useDispatch } from 'react-redux';
import {RxCross2} from 'react-icons/rx'

const Setup2 = () => {
    const setupData = useAppSelector((state) => state.profileSetup.value);
    const dpname = useRef<HTMLElement | null>(null); 
    const dispatch = useDispatch<AppDispatch>();
    const showdp = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            return event.target.files[0].name;
        }
        return '';
    }
    const removeDP: MouseEventHandler<HTMLDivElement> = (event) => {
        dispatch(profileSetupActions.dpAdded(''));               
    };
    console.log(setupData);
    useEffect(() => {
        if(setupData.dp == ""){
            if(dpname.current){
                dpname.current.classList.add("hidden");                
            } 
        }else{
            if(dpname.current){
                dpname.current.classList.remove("hidden");
                
            }  
        }
    }, [setupData.dp])

    return (
        <div>
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12}>
                    <TextField 
                        id="college"
                        key="college"
                        label="College/University"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="bio"
                        key="bio"
                        label="Bio"
                        fullWidth
                        multiline
                        rows={5}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div className='flex items-center'>
                        <Button
                            variant="outlined"
                            component="label"
                            color='secondary'
                            >
                            Profile Pic
                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) => {dispatch(profileSetupActions.dpAdded(showdp(e)))}}
                            />
                        </Button>
                        <div className='ml-3 bg-background py-1 pl-4 flex items-center rounded-md hidden'  ref={dpname as React.LegacyRef<HTMLDivElement>}>
                            <div>
                                {setupData.dp}
                            </div>
                            <div className='ml-2 mr-2 cursor-pointer hover:scale-110'
                            onClick={removeDP}>
                                <RxCross2 />
                            </div>                                                        
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        fullWidth
                        >
                            Submit
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default Setup2;