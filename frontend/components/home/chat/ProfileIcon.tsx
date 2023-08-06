import React from 'react';
import img1 from '../../../assets/images/3.jpg'
import img2 from '../../../assets/images/2.jpg'
import Image from 'next/image';

interface ProfileIconProps {
    sender: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = (props) => {
    return (
        <div>
            {props.sender === 'me' && (
                <Image src={img1} alt="dp-me" className="w-[50px] h-[50px] rounded-full shadow-md shadow-gray-600"></Image>
            )}
            {props.sender === 'reply' && (
                <Image src={img2} alt="dp-reply" className="w-[50px] h-[50px] rounded-full shadow-md shadow-purple-600"></Image>
            )}
        </div>
    );
};

export default ProfileIcon;