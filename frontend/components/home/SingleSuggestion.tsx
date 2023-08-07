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
    bio: string;
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
            <Card className='flex items-center justify-between  border-gray-500 border-[1px] px-2 py-3 bg-[#FFD1E8] bg-opacity-70 rounded-xl my-5 mx-[50px]'>
                <div className='flex items-center'>
                    <div className='w-[100px]'>
                        <Image
                            src={props.image}
                            alt="dp"
                            className='rounded-full h-[60px] w-[60px]' 
                        />
                    </div>                        
                    <div className='w-full mr-2 '>
                        <div className='font-medium flex items-center'>
                            <div className='mr-2'>
                                {props.name}
                            </div>
                            <div className='text-gray-600'>
                                @{props.id}
                            </div>
                        </div>
                        <div className='text-gray-600'>
                            {props.bio}
                        </div>
                    </div>
                </div> 
                <div className=''>
                    <Button
                    variant='contained'
                    color='success'
                    className='mr-11 bg-green-600'
                    id={props.id}
                    onClick={handleClick}>
                        Message
                    </Button>
                </div>              
                
            </Card>
        </>
    );
};

export default SingleSuggestion;