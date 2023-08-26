import React, { useState, useRef, useEffect } from 'react';
import SingleSuggestion from './SingleSuggestion';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import { Card } from '@mui/material';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

interface SuggestionsBoxProps {
    text: string;
}

const SuggestionsBox: React.FC<SuggestionsBoxProps> = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
        }
    }, [scrollPosition]);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollPosition(event.currentTarget.scrollLeft);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <Card className='rounded-xl border-[1px] bg-main border-gray-600 w-[700px] my-5'>
            <div className='px-[50px] mt-5 text-gray-600 font-medium'>
                {props.text}
            </div>
            <div className='flex items-center mx-2'>
                {showLeftArrow && (
                    <AiOutlineLeft onClick={scrollLeft} className='cursor-pointer hover:scale-110 text-[36px] text-gray-600' />
                )}
                <div className='flex overflow-hidden' onScroll={handleScroll} ref={scrollContainerRef}>
                    <div className='flex space-x-3'> 
                        <SingleSuggestion image={img1} name='Jacqueline Saikia' id='jackie' bio="Movies buff, Kpop lover, bring me hot chocolate and ice cream." />
                        <SingleSuggestion image={img2} name='Christopher Deka' id='chris' bio="Real Madrid, avid reader, ping me :)" />
                        <SingleSuggestion image={img2} name='Christopher Deka' id='chris' bio="Real Madrid, avid reader, ping me :)" />
                        <SingleSuggestion image={img2} name='Christopher Deka' id='chris' bio="Real Madrid, avid reader, ping me :)" />
                    </div>
                </div>
                {showRightArrow && (
                    <AiOutlineRight onClick={scrollRight} className='cursor-pointer ml-3 hover:scale-110 text-[36px] text-gray-600' />
                )}
            </div>
        </Card>
    );
};

export default SuggestionsBox;
