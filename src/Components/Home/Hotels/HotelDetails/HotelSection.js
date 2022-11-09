import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const HotelSection = ({hotel}) => {
    const { img, price, rating, hotelName, place, description } = hotel;
    console.log(hotel);
    return (
        <div>
             <div className="card card-compact w-auto h-full mx-5 bg-base-100 shadow-2xl">
                <figure>
                    
                    <PhotoProvider>
                        <PhotoView src= {img} >
                        <img className='w-full ' src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body text-amber-600 text-center">
                    <h2 className="text-xl font-bold">{hotelName}</h2>
                    <h2 className="text-lg font-semibold">{place}</h2>


                    <h2 className="text-lg font-bold">Price : ${price}</h2>

                    <p className='mt-1 '><FontAwesomeIcon icon={faStar} />   {rating}</p>

                    <p className='text-white'>{description}</p>
                    <button className="btn btn-ghost w-36 mx-auto ">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotelSection;