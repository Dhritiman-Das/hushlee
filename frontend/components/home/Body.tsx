import React from 'react';
import SuggestionsBox from './SuggestionsBox';

const Body = () => {
    return (
        <div className=' flex'>
            <div className='w-full px-[100px] pb-[100px] overflow-y-scroll'>
                <SuggestionsBox text='From your university:'/>
                <SuggestionsBox text='From your city:'/>
                <SuggestionsBox text='People you may know:'/>
            </div>
            <div className='border-l-[1px] border-gray-600  h-screen w-[500px]'></div>
        </div>        
    );
};

export default Body;