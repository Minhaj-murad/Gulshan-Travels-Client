import React from 'react';
import './Animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'
const Animation = () => {
    
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='animation'>
          <div className='anime-text  mx-12'>
          <h1 className='text-5xl text-amber-700'>EXPLORE CANADA <br /> WITH <br /> GULSHAN TRAVELS <span><FontAwesomeIcon icon={faPlane} />  </span>  </h1>
          </div>
        </div>
    );
};

export default Animation;