import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const HotelSection = ({hotel}) => {
    const { img, price, rating, hotelName, place, description } = hotel;
    console.log(hotel);
    return (
        <div>
             <div data-aos="fade-up" data-aos-duration="3000" className="card card-compact w-9/12 h-full mx-auto bg-base-100 shadow-2xl">
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

                </div>
            </div>
        </div>
    );
};

export default HotelSection;