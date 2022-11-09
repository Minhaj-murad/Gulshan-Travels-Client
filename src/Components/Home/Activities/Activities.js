import React from 'react';
import img from '../../../assests/Background/bg-2.jpg'
import './Activities.css'
const Activities = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" >
            <h1 className='  text-amber-600 font-extrabold text-4xl mt-6 text-center mb-6 '> Popular Activities <hr /></h1>
            <div className="hero min-h-screen" style={{ backgroundImage: `url${img}` }}>
                <div className="hero-overlay bg-opacity-60 grid grid-cols-3 gap-10">
                   
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img' src="https://www.scubapro.com/sites/scubapro_site/files/scuba-equipment-20211108.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-amber-600 fotn-bold text-2xl">Scuva Diving</h2>
                            <p>Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface air supply.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img'src="https://www.realsimple.com/thmb/X_pAYDA5BH0Hc0FgofVe-IwKf6I=/2000x1334/filters:fill(auto,1)/hiking-benefits-2000-8006a4b1b6e14de3ad5e041c2b1c4f6e.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-amber-600 fotn-bold text-2xl">Hill Hiking</h2>
                            <p>Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. Walking for pleasure developed in Europe during the eighteenth century.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img' src="https://i.natgeofe.com/n/ed276186-3a2c-4d2a-b3d6-ca745c2d0850/01booktalkbarbariandays.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-amber-600 fotn-bold text-2xl">Surfing</h2>
                            <p>Surfing is a surface water sport ; The term surfing refers to a person riding a wave using a board, regardless of the stance. There are several types of boards.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96 bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img'src="https://aceraft.com/wp-content/uploads/2019/05/touring-kayaks-summersville-lake-ace-adventure-resort-3.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-amber-600 fotn-bold text-2xl">kayaking</h2>
                            <p>Kayaking is the use of a kayak for moving over water. It is distinguished from canoeing by the sitting position of the paddler and the number of blades on </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96  bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img'src="https://media.istockphoto.com/id/1209988354/photo/young-man-skateboarding-in-los-angeles.jpg?s=612x612&w=0&k=20&c=8s3Uwce5kW_WPn6xSdYv6Asbtm3eMEizBTneznuYbu4=" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-amber-600 fotn-bold text-2xl">Skateboarding</h2>
                            <p>Skateboarding is an action sport originating in the United States that involves riding and performing tricks using a skateboard, as well as a recreational</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 h-96  bg-base-100 shadow-xl image-full">
                        <figure><img className='activities-img'src="https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2016/07/SkiWords.jpg?fit=crop" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title  text-amber-600 fotn-bold text-2xl">Skiing</h2>
                            <p>Skiing is the use of skis to glide on snow. Variations of purpose include basic transport, a recreational activity, or a competitive winter sport.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Activities;