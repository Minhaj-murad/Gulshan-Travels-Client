import React, { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/Authprovider';

const PeopleReview = ({hotel}) => {

    const {user} =useContext(AuthContext);
    console.log(user);
    const {_id,hotelName,img}=hotel;
     

    const handlePlacereview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            _id,
            reviewer: hotelName,
            email,
            photo:img,
            message
        }

       
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
                if(data.acknowledged){
                    alert('review added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
     
      
    return (
        <div>
            <div >
        <h1 className='text-center mt-8 text-4xl font-bold text-amber-600'>Want to give a review?</h1>
         <div className='w-9/12 mx-auto mt-8'>
             <div>
            <form onSubmit={handlePlacereview} >
                
                <div className='w-1/2 mx-auto mb-4'>
                    <h1 className='text-xl text-center font-bold text-amber-600'> Your Email</h1> 

                          <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-breviewed"  />
                </div>
                <textarea name="message" className="textarea textarea-breviewed h-24 w-full" placeholder="Your Message" required></textarea>

                <div className='text-center'>

               <input className='btn' type="submit" value="Submit" /> 
                
                </div>
            </form>
        </div>
        </div>
       </div>
        </div>
    );
};

export default PeopleReview;