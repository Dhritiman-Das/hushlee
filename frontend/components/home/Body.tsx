import React from 'react';
import SuggestionsBox from './SuggestionsBox';

const Body = () => {
    return (
        <div className='py-11 overflow-y-scroll flex-grow'>
            <div className='mx-[100px] pr-[200px] pb-[100px]'>
                <SuggestionsBox text='From your university:'/>
                <SuggestionsBox text='From your city:'/>
                <SuggestionsBox text='People you may know:'/>
            </div>
        </div>        
    );
};

export default Body;