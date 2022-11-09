import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSection from './HotelSection';
import Review from './Review';

const HotelDetails = () => {
    const hotel = useLoaderData();
    
    return (
        <div className='grid grid-cols-2 gap-2'>
            <HotelSection hotel= {hotel}></HotelSection>
            <Review></Review>
        </div>
    );
};

export default HotelDetails;