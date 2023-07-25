import React from 'react';
import {GiMagicHat} from 'react-icons/gi'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import Link from 'next/link';

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
                <div className='text-[32px] font-bold text-center my-5'>
                    Login
                </div>
                <div className='inputFields font-medium'>
                    <input type="text" 
                    placeholder='Username'
                    className='w-full mb-5 rounded-lg p-2 bg-transparent outline-none border-[1px] border-gray-600 placeholder-gray-600'/>
                    <input type="password" 
                    placeholder='Password'
                    className='w-full mb-5 rounded-lg p-2 bg-transparent outline-none border-[1px] border-gray-600 placeholder-gray-600'/>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-button1 font-medium text-[20px] px-[90px] py-1 my-8 rounded-3xl hover:bg-[#D9D9D9]'>
                        Login
                    </button>
                </div>
                {/* <div className='separation flex items-center justify-between my-2 text-gray-600'>
                    <div className='h-[1px] w-[42%] bg-gray-600'></div>
                    <div className='text-[14px] font-medium'>or</div>
                    <div className='h-[1px] w-[42%] bg-gray-600'></div>
                </div>
                <div className='otherOptions my-5'>
                    <div className='flex items-center justify-center'>
                        <div className='google my-2 flex items-center bg-button1 px-2  py-1 w-[60%] rounded-3xl hover:bg-[#D9D9D9] cursor-pointer'>
                            <FcGoogle className='text-[32px] mr-2'/>
                            <div className='font-medium text-[16px]'>
                                Sign in with Google 
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='facebook my-2 flex items-center bg-button1 px-2 py-1 w-[60%] rounded-3xl hover:bg-[#D9D9D9] cursor-pointer'>
                            <BsFacebook className='text-[32px] mr-2 text-blue-600'/>
                            <div className='font-medium text-[16px]'>
                                Sign in with Facebook 
                            </div>
                        </div>
                    </div>                    
                </div> */}
                <div className='flex items-center justify-center text-gray-600'>
                    <div>
                        Don&apos;t have an account?
                    </div>
                    <div className='ml-2 font-medium hover:underline cursor-pointer'>
                        <Link href="/signup">Signup</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default page;