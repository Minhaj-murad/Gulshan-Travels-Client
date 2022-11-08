import React from 'react';
import Animation from './Animation/Animation';
import Carousel from './Carousel/Carousel';

const Top = () => {
    return (
        <div className='flex'>
           <div>
            <Animation></Animation>
            
           </div>
           <div><Carousel></Carousel></div>
        </div>
    );
};

export default Top;

