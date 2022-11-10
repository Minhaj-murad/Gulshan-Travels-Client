import React from 'react';

const OverViewItem = ({ review }) => {
    console.log(review);
    const {name, photo, message } = review;
    return (
        <div className='reviewrow'>
        <div className="hero h-72 rounded-2xl bg-base-200">
            <div className="inline ">
                <div className='flex w-full gap-4'>
                <img className='w-12 h-12 rounded-full -mt-20' src={photo} alt="" />
                <h1 className="text-xl font-bold -mt-20 text-amber-600">{name}</h1>
                </div>
                <div className="w-full -mt-10 -mr-10">
                   
                    <p className="py-6 font-bold"> <span className='text-amber-600 underline '> Reviews : </span>  <br />{message}</p>
                    
                </div>
            </div>
        </div>

    </div>
    );
};

export default OverViewItem;