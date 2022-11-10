import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/Authprovider';
import ReviewRow from './ReviewsRow/ReviewRow';
import './ReviewsRow/ReviewRow.css'
const Myreviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])



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
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(rev => rev._id !== id);
                const approving = reviews.find(rev => rev._id === id);
                approving.status = 'Approved'

                const newreviews = [approving, ...remaining];
                setReviews(newreviews);
            }
        })
    }

    return (
        <div className='reviewrow'>
            <h2 className="text-5xl text-center">Total Reviews : {reviews.length} reviews</h2>
            <div className="overflow-x-auto w-full mt-6 grid grid-cols-2 gap-20">
                
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                               
                                handleStatusUpdate={handleStatusUpdate}
                            ></ReviewRow>)
                        }
                
            </div>
        </div>
    );
};

export default Myreviews;