import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotelitems from '../Hotels/Hotelitems/Hotelitems';


const Allservices = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    
    return (
        <div >
            <h1 className='hotelsName  text-amber-600 font-extrabold text-4xl mt-6 text-center mb-6 '>Hotels Nearby places:</h1>
           <div className='grid grid-cols-3 gap-20'>
           
           {
                
               hotels.map(hotel => <Hotelitems
                key={hotel._id}
                hotel={hotel}></Hotelitems>)
            }
            
           </div>
        

        </div>
    );
};

export default Allservices;