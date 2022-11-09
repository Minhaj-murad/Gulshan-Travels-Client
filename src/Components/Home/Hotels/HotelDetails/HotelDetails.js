import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HotelSection from './HotelSection';
import Review from './Review';

const HotelDetails = () => {
    const hotel = useLoaderData();
    
    return (
        <div>
            <HotelSection hotel= {hotel}></HotelSection>
            <Review></Review>
        </div>
    );
};

export default HotelDetails;