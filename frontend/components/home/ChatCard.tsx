import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface ChatCardProps {
    image: StaticImageData;
    name: string;
    id: string;
    recentMsg: string;
    time: string
}

const ChatCard: React.FC<ChatCardProps> = (props) => {
    return (
        <>
            <Card className='flex items-center p-2 bg-transparent border-[1px] border-gray-500 rounded-xl my-2 mx-2 cursor-pointer hover:scale-105'>
                <div className='mr-2 w-14'>
                    <Image
                    src={props.image}
                    alt="dp"
                    className='rounded-full h-[40px] w-[40px]' 
                    />
                </div>                  
                <div className='w-full mr-2'>
                    <div className='font-medium flex items-center'>
                        <div className='mr-2'>
                            {props.name}
                        </div>
                        <div className='text-gray-600'>
                            @{props.id}
                        </div>
                    </div>
                    <div className='text-gray-600 flex items-center justify-between'>
                        <div className=''>
                            {props.recentMsg}
                        </div>
                         <div>
                            | {props.time}
                         </div>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default ChatCard;