import React from 'react';
import './Placeitem.css'
const PlaceItem = ({ place }) => {
    const { img, city, price, rating } = place;
    console.log(img, city, price, rating);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-96 w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {city}
                        <div className="badge badge-info">Exclusive</div>
                    </h2>
                    <p className='text-xl font-semibold text-amber-600'>Total Cost:    {price} $</p>
                    <div className="card-actions justify-end">
                        
                    <button className="btn btn-primary">Visit Today</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceItem;