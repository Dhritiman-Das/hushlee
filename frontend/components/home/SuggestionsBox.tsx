import React from 'react';
import SingleSuggestion from './SingleSuggestion';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';

const SuggestionsBox = () => {
    return (
        <div className='rounded-xl border-[1px] border-gray-600 w-full'>
            <div className='mx-[50px] mt-5'>
                From your university:
            </div>
            <SingleSuggestion image={img1} name='Jacqueline Saikia' id='@jackie'/>
            <SingleSuggestion image={img2} name='Christopher Deka' id='@chris'/>
        </div>
    );
};

export default SuggestionsBox;