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
            <Card className="w-[300px] mx-5 mt-3 mb-11 shadow-lg">
                <div className="relative h-40">
                    <Image
                    src={props.image}
                    alt="dp"
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <CardContent className="p-4 bg-accentMain">
                    <Typography gutterBottom variant="h6" component="div" className='flex text-[18px] items-center'>
                        <div>
                            {props.name}
                        </div>
                        <div className='text-gray-600 ml-2'>
                            @{props.id}
                        </div>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className='h-[40px]'>
                        {props.bio}
                    </Typography>
                    <div className='flex justify-center'>
                        <Button className="mt-4 px-8 bg-green-700" variant="contained" color="success"
                        onClick={handleClick}>
                            Message
                        </Button>
                    </div>                    
                </CardContent>
            </Card>
        </>
    );
};

export default SingleSuggestion;