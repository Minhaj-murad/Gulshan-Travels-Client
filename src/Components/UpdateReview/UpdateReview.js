import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';



const UpdateReview = () => {

    const storedReview = useLoaderData();
    console.log(storedReview);

    const [update, setUpdate] = useState(storedReview);

    const handleStatusUpdate = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/reviews/${storedReview.hotelid}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...update }
        newUser[field] = value;
        setUpdate(newUser);
    }




    return (
        <div className='review'>


            <div >
                <h1 className='text-center mt-8 text-4xl font-bold text-amber-600'>Want to Update your a review?</h1>
                <div className='w-9/12 mx-auto mt-8'>
                    <div>
                        <form onSubmit={handleStatusUpdate } >
                            <textarea onChange={handleInputChange}  name="message" className="textarea textarea-breviewed h-24 w-full" placeholder="Your Message" required></textarea>
                            <button type="submit" className='btn btn-warning' >Update</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default UpdateReview;