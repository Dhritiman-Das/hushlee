import React from 'react';
import {GiMagicHat} from 'react-icons/gi'
import SearchBar from './SearchBar';
import dp from '../../assets/images/3.jpg'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='bg-main h-[80px] px-14 py-5 w-full flex items-center justify-between'>
            <div className='flex items-center justify-center'>
                <GiMagicHat className='text-[32px] mr-2 transform -rotate-12' />
                <div className='italic text-[28px] font-medium'>
                    Hushlee
                </div>
            </div>
            <SearchBar />
            <div>
                <Image src={dp} alt='dp' className='rounded-full h-[50px] w-[50px] cursor-pointer hover:scale-110' />
            </div>
        </div>
    );
};

export default Header;