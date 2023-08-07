import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import img1 from '../../../assets/images/1.jpg';
import img2 from '../../../assets/images/2.jpg';
import { Button } from '@mui/material';
import Link from 'next/link';

interface ChatHeader {
    chatId: string;
}

const Header: React.FC<ChatHeader> = (props) => {
    return (
        <div className='header h-fit border-b-[1px] py-3 px-[30px] border-gray-600 flex items-center justify-between'>
            <div className='flex items-center'>
                <div className='mr-2 w-[80px]'>
                    <Image
                    src={img1}
                    alt="dp"
                    className='rounded-full h-[60px] w-[60px]' 
                    />
                </div>
                <div className='w-full mx-2'>
                    <div className='font-medium flex items-center'>
                        <div className='mr-2'>
                            Jacqueline Saikia
                        </div>
                        <div className='text-gray-600'>
                            @{props.chatId}
                        </div>
                    </div>
                    <div className='text-gray-600 flex items-center justify-between'>
                        Active 4 h ago
                    </div>
                </div>
            </div>
            <div className=''>
                <Button
                variant='outlined'
                color='secondary'
                className='mr-5'
                >
                    Options
                </Button>
                <Link href='/home'> 
                    <Button variant='contained' color='error'>
                        Close
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;