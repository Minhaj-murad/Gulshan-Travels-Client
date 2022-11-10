import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../AuthProvider/Authprovider';

import './Review.css'
const Review = ({hotel}) => {
    const { user } = useContext(AuthContext);
    const{_id,hotelName,price,img}=hotel;


    const handlePlacereview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const message = form.message.value;
      
        const review = {
            hotelid:_id,
            hotelName,
            price,
            email,
            hotelimg:img,
            photo: user?.photoURL,
            name: user?.displayName,
            message
        }
        console.log(review.hotelid);

      console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added successfully')
                    form.reset();

                }


            })
            .catch(er => console.error(er));

    }




    return (
        <div className='review'>

            {user?.uid ?
                (<div >
                    <h1 className='text-center mt-8 text-4xl font-bold text-amber-600'>Want to give a review?</h1>
                    <div className='w-9/12 mx-auto mt-8'>
                        <div>
                            <form onSubmit={handlePlacereview} >

                                <div className='w-1/2 mx-auto mb-4'>
                                    <h1 className='text-xl text-center font-bold text-amber-600'> Your Email</h1> <span>  <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-breviewed" readOnly /></span>
                                </div>
                                <textarea name="message" className="textarea textarea-breviewed h-24 w-full" placeholder="Your Message" required></textarea>

                                <div className='text-center'>
                                    <input className='btn' type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>) :
                (<h1 className='text-3xl text-amber-600 font-bold '>
                    Please <Link className='text-cyan-600 font-bold' to="/login">Log in</Link> to post your reviews
                </h1>)
            }

        </div>

    );
};

export default Review;