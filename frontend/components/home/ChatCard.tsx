import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface ChatCardProps {
    image: StaticImageData;
    name: string;
    id: string;
}

const ChatCard: React.FC<ChatCardProps> = (props) => {
    return (
        <>
            <Card className='flex items-center px-2 bg-accentMain bg-opacity-80 rounded-xl my-5 cursor-pointer hover:scale-105'>
                <CardMedia
                    component="div" 
                    className='w-[100px] h-auto'
                >
                    <Image
                    src={props.image}
                    alt="dp"
                    className='rounded-full h-[60px] w-[60px]' 
                    />
                </CardMedia>
                <CardContent>
                    <Grid container spacing={0.5} className='font-medium'>
                        <Grid item xs={12}>
                            {props.name}
                        </Grid>
                        <Grid item xs={12}>
                            {props.id}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
};

export default ChatCard;