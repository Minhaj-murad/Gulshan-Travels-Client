import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Hotel.css'
import Hotelitems from './Hotelitems/Hotelitems';

const Hotel = () => {
    const hotels = useLoaderData();

    return (
        <div >
            <h1 className='hotelsName  text-amber-600 font-extrabold text-4xl '>Hotels Nearby places:</h1>
           <div className='grid grid-cols-3 gap-12'>
           {
                hotels.map(hotel => <Hotelitems
                key={hotel.id}
                hotel={hotel}></Hotelitems>)
            }
           </div>

        </div>
    );
};

export default Hotel;