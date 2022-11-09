import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/Authprovider';
import OverViewItem from './OverViewItems/OverViewItem';

const Overviews = () => {
    const {user}=useContext(AuthContext);
    const [reviews,setReviews]=useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

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
                submitting.status = 'Submitted'

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