import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Hotel.css'
import Hotelitems from './Hotelitems/Hotelitems';

const Hotel = () => {
    const hotels = useLoaderData();
    console.log(hotels);
    const  lesshotels=hotels.slice(0, 3);
    console.log(lesshotels);
    return (
        <div >
            <h1 className='hotelsName  text-amber-600 font-extrabold text-4xl mt-6 text-center mb-6 '>Hotels Nearby places:</h1>
           <div className='grid grid-cols-3 gap-20'>
           
           {
                
                lesshotels.map(hotel => <Hotelitems
                key={hotel._id}
                hotel={hotel}></Hotelitems>)
            }
            
           </div>
          <div className='text-center mt-8'>
          <Link to='/allhotels'>  <button className='btn btn-primary rounded-xl  text-2xl'  >See all</button></Link>
          </div>

        </div>
    );
};

export default Hotel;