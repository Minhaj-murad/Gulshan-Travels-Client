import React from 'react';
import './Hotelitem.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Hotelitems = ({ hotel }) => {
    console.log(hotel);
    const {id, img, price, rating, hotelName, place, description } = hotel;
    return (
        <div>
            <div data-aos="fade-up" data-aos-duration="3000" className="card card-compact w-96 bg-base-100 shadow-2xl">
                <figure>
                    
                    <PhotoProvider>
                        <PhotoView src= {img} >
                        <img className='card-img ' src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body text-amber-600">
                    <h2 className="text-xl font-bold">{hotelName}</h2>
                    <h2 className="text-lg font-semibold">{place}</h2>


                    <h2 className="text-lg font-bold">Price : ${price}</h2>

                    <p className='mt-1 '><FontAwesomeIcon icon={faStar} />   {rating}</p>

                    <p className='text-white'>{description.length > 100 ? description.slice(0, 200) + '...' : description}</p>

                    <div className="card-actions  justify-end">
                        <button className="btn btn-primary"><Link to={`/hotels/${id}`} className=' font-bold'>See Details </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotelitems;