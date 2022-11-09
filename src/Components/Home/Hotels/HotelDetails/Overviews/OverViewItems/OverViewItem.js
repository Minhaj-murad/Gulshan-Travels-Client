import React from 'react';

const OverViewItem = ({ review, handleStatusUpdate }) => {
    const {_id, reviewer, email, photo, message,status } = review;
    return (
        <div>
            <div className="card card-side  shadow-xl">
                <figure><img className='w-16 rounded-3xl' src={photo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{reviewer}</h2>

                    <p>{email}</p>
                    <p>{message}</p>
                    <button
                        onClick={() => handleStatusUpdate(_id)}
                        className="btn btn-ghost btn-xs">{status ? status : 'updating'}</button>

                </div>
            </div>
        </div>
    );
};

export default OverViewItem;