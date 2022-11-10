import React from 'react';
 import './ReviewRow.css'
const ReviewRow = ({ review }) => {
    console.log(review);
    const { hotelName,  message, hotelimg } = review;


    return (
        <div className='reviewrow'>
            <div className="hero h-72 rounded-2xl bg-base-200">
                <div className="hero-content text-center">
                    <img className='w-48 h-48 rounded-full' src={hotelimg} alt="" />
                    <div className="max-w-md">
                        <h1 className="text-xl font-bold -mt-20 text-amber-600">{hotelName}</h1>
                        <p className="py-6 font-bold"> <span className='text-amber-600 underline '>My Reviews : </span>  <br />{message}</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewRow;