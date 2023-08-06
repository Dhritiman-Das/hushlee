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
        <div className='header h-fit border-b-[1px] py-3 px-[60px] border-gray-600 flex items-center justify-between'>
            <div className='flex items-center'>
                <Image src={img1} alt='dp' className='h-[60px] w-[60px] rounded-full'/>
                <div className='font-medium ml-5'>
                    <div>
                        Jacquline Saikia
                    </div>
                    <div>
                        @{props.chatId}
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