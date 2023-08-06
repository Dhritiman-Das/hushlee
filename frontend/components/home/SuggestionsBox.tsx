import React from 'react';
import SingleSuggestion from './SingleSuggestion';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';

interface SuggestionsBoxProps {
    text: string;
}

const SuggestionsBox: React.FC<SuggestionsBoxProps> = (props) => {
    return (
        <div className='rounded-xl border-[1px] border-gray-600 w-full my-5'>
            <div className='mx-[50px] mt-5'>
                {props.text}
            </div>
            <SingleSuggestion image={img1} name='Jacqueline Saikia' id='jackie'/>
            <SingleSuggestion image={img2} name='Christopher Deka' id='chris'/>
        </div>
    );
};

export default SuggestionsBox;