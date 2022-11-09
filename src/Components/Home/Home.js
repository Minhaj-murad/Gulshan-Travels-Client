import React from 'react';
import Hotel from './Hotels/Hotel';
import Places from './Hotels/Places/Places';


import Top from './Top/Top';


const Home = () => {
    
    return (
        <div>
            <Top></Top>
            <Hotel></Hotel>
            <Places> </Places>
        </div>
    );
};

export default Home;