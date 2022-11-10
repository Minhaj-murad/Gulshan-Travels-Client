import React, {  useEffect, useState } from 'react';

import OverViewItem from './OverViewItems/OverViewItem';

const Overviews = ({hotel}) => {
   
    const [reviews,setReviews]=useState([]);
    console.log(hotel);
    const {_id}=hotel;
    console.log(_id);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?hotelid=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Submitted'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(revi => revi._id !== id);
                const submitting = reviews.find(revi => revi._id === id);
                const newreviews = [submitting, ...remaining];
                setReviews(newreviews);
            }
        })
    }
    return (
        <div className='grid grid-cols-4'>
           

               
                  
                        {
                           reviews.map(review => <OverViewItem
                                key={review._id}
                               review={review}
                                
                                handleStatusUpdate={handleStatusUpdate}
                            ></OverViewItem>)
                        }
                   
                
            </div>
        
    );
};

export default Overviews;