import React from 'react';
import SingleSuggestion from './SingleSuggestion';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import {Card} from '@mui/material';

interface SuggestionsBoxProps {
    text: string;
}

const SuggestionsBox: React.FC<SuggestionsBoxProps> = (props) => {
    return (
        <Card className='rounded-xl border-[1px] bg-main border-gray-600 w-full my-5'> 
            <div className='px-[50px]  mt-5 text-gray-600 font-medium'>
                {props.text}
            </div>
            <SingleSuggestion image={img1} name='Jacqueline Saikia' id='jackie' bio= "Movies buff, Kpop lover, bring me hot chocolate and ice cream."/>
            <SingleSuggestion image={img2} name='Christopher Deka' id='chris' bio= "Real Madrid, avid reader, ping me :)"/>
        </Card>
    );
};

export default SuggestionsBox;