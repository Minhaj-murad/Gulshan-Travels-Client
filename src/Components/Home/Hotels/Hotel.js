import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Hotel.css'
import Hotelitems from './Hotelitems/Hotelitems';

const Hotel = () => {
    const hotels = useLoaderData();

    return (
        <div>
            <h1 className='hotelsName  text-amber-600 font-extrabold text-4xl'>Hotels Nearby places:</h1>
            {
                hotels.map(hotel => <Hotelitems
                key={hotel.id}
                hotel={hotel}></Hotelitems>)
            }

        </div>
    );
};

export default Hotel;