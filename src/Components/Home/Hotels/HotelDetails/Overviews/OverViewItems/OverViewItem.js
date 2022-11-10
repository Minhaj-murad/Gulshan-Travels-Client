import React from 'react';

const OverViewItem = ({ review }) => {
    console.log(review);
    const {name, photo, message } = review;
    return (
        <div className='bg-slate-100 w-72 rounded-2xl m-8'>
            <div className='flex justify-center'>
                <img className='w-12 h-12 mr-6 rounded-full' src={photo} alt="" />
                <h1 className='text-xl text-gray-600 font-semibold'>{name}</h1>
            </div>
            <div className='mt-6 '>
            <h1 className='text-xl text-gray-600 font-semibold'>Review: <hr /></h1> <br />
            <h1 className='text-lg text-gray-600 font-semibold text-center'>{message}</h1>
            </div>
        </div>
    );
};

export default OverViewItem;