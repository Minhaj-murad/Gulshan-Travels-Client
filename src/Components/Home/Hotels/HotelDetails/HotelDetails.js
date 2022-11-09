import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSection from './HotelSection';
import Review from './Review';

const HotelDetails = () => {
    const hotel = useLoaderData();
    
    return (
        <div className=''>
            <HotelSection hotel= {hotel}></HotelSection>
            <Review hotel={hotel}></Review>
        </div>
    );
};

export default HotelDetails;