import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlaceItem from './PlaceItem';

const Places = () => {
    const places=useLoaderData();
    console.log(places);
    return (
        <div data-aos="fade-up" data-aos-duration="3000" >
           <h1 className='  text-amber-600 font-extrabold text-4xl mt-6 text-center mb-6 '>Our Fetured Tours</h1>
           <p className=' text-amber-600 font-extrabold text-xl w-9/12 mx-auto mt-6 text-center mb-6'>You will be amazed by all the things you can do in the these City Area. Include these essentials in your itinerary, they are not to be missed! Outdoors Nearby. Vibrant History. Family Activities. Vibrant Culture</p>
          <div className='grid grid-cols-2 gap-10 px-6'>
          {
            places.places.map(place=> <PlaceItem key={place.id}
            place={place}></PlaceItem>)
           }
          </div>
        </div>
    );
};

export default Places;