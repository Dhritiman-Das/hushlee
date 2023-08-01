"use client"

import React, {useEffect} from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { homeActions } from '@/redux/features/home-slice';

interface SuggestionProps {
    image: StaticImageData;
    name: string;
    id: string;
}

const SingleSuggestion: React.FC<SuggestionProps> = (props) => {
    const data = useAppSelector((state) => state.home);
    const dispatch = useDispatch<AppDispatch> ();
    console.log(data);

    
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        
        dispatch(homeActions.toggleChatOpen({id: props.id, open: true}));
    }
    return (
        <>
            <Card className='flex items-center justify-between px-2 py-3 bg-main bg-opacity-80 rounded-xl my-5 mx-[50px]'>
                <div className='flex items-center'>
                    <CardMedia
                        component="div" 
                        className='w-[100px] h-auto ml-8'
                    >
                        <Image
                        src={props.image}
                        alt="dp"
                        className='rounded-full h-[80px] w-[80px]' 
                        />
                    </CardMedia>
                    <CardContent>
                        <Grid container spacing={0.5} className='font-medium text-[20px]'>
                            <Grid item xs={12}>
                                {props.name}
                            </Grid>
                            <Grid item xs={12}>
                                @{props.id}
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>                
                <Button
                variant='contained'
                color='success'
                className='mr-11'
                id={props.id}
                onClick={handleClick}>
                    Message
                </Button>
            </Card>
        </>
    );
};

export default SingleSuggestion;