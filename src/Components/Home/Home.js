import React from 'react';
import Activities from './Activities/Activities';
import Hotel from './Hotels/Hotel';
import Places from './Hotels/Places/Places';


import Top from './Top/Top';


const Home = () => {
    
    return (
        <div>
            <Top></Top>
            <Hotel></Hotel>
            <Places> </Places>
            <Activities></Activities>

        </div>
    );
};

export default Home;