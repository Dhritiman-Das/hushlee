import React from 'react';
import {GiMagicHat} from 'react-icons/gi'

const page = () => {
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
                    <div className='h-[15px] w-[15px] rounded-full bg-accentMain mx-3'></div>
                    <div className='h-[15px] w-[15px] rounded-full bg-[#D9D9D9] mx-3'></div>
                </div>
                <div className='inputFields font-medium'>
                    <div>
                        <div className='text-gray-600'>
                            Name:
                        </div>
                        <div>
                            <input type="text" 
                            className='w-full mb-5 rounded-lg p-2 bg-transparent outline-none border-[1px] border-gray-600'/>
                        </div>
                    </div>
                    <div>
                        <div className='text-gray-600'>
                            Date Of Birth:
                        </div>
                        <div>
                            <input type="date" 
                            className='w-full mb-5 rounded-lg p-2 bg-transparent outline-none border-[1px] border-gray-600'/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default page;