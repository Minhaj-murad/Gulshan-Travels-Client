import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../../../assests/carousel-img/img1.jpg';
import img2 from '../../../../assests/carousel-img/img2.jpg';
import img3 from '../../../../assests/carousel-img/img3.jpg';
import img4 from '../../../../assests/carousel-img/img4.webp';
import img5 from '../../../../assests/carousel-img/img5.jpg';
import img6 from '../../../../assests/carousel-img/img6.jpg';
import img7 from '../../../../assests/carousel-img/img7.jpg';
import img8 from '../../../../assests/carousel-img/img8.jpg';
import './Carousel.css'

const Carousel = () => {

    return (
        <div className=' mx-auto car-div'>
            <div className="carousel  w-full">
                <div id="item1" className="carousel-item relative  w-full">
                   <div className='car-image'>
                   <img src={img1}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1> <br />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img2}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img3}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img7}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item5" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img4}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item6" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img5}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item7" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img8}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item8" className="carousel-item relative w-full">
                <div className='car-image'>
                   <img src={img6}alt='' className="car-img rounded-xl shadow-2xl " />
                   </div>
                   <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                    <h1 className='text-6xl font-bold text-white'>
                       Visit  <br />
                         Canada<br />
                        Today <span  className='w-8 '><FontAwesomeIcon className='w-8' icon={faSuitcase}/></span>
                    </h1>
                </div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                    <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
                <a href="#item7" className="btn btn-xs">7</a>
                <a href="#item8" className="btn btn-xs">8</a>
            </div>
        </div>
    );
};

export default Carousel;