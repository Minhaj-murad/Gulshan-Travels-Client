import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

const AddHotels = () => {
 

    const handlePlacehotel = event => {
        event.preventDefault();
        const form = event.target;
        const hotelName =form.hotelName.value ;
        const price = form.price.value;
        const place = form.place.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const img=form.photoURL.value;
        

        const hotel = {
            hotelName,
            rating,
            price,
            place,
           description,
           img
        }

       

        fetch('http://localhost:5000/hotels', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(hotel)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('hotel added successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
                



    return (
        <div>
             <form onSubmit={handlePlacehotel} >
                <h2 className="text-4xl text-center text-amber-600 mb-8">Add New Hotel </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="hotelName" type="text" placeholder="Hotel Name" className="input input-ghost w-full  input-bhoteled" />
                    <input name="place" type="text" placeholder="Place" className="input input-ghost w-full  input-bhoteled" required />
                    <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bhoteled" required />
                    <input name="photoURL" type="text" placeholder="PhotoURL" className="input input-ghost w-full  input-bhoteled" required />
                    <input name="rating" type="text" placeholder="rating" className="input input-ghost w-full  input-bhoteled" required />
                    <input name="description" type="text" placeholder="Hotel description"  className="input input-ghost w-full  input-bhoteled"  />
                </div>
            

                <input className='btn mt-6' type="submit" value="Add Hotel" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddHotels;