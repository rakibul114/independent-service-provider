import React from 'react';
import banner from '../../images/cover.jpg';
import Packages from '../Packages/Packages';


const Home = () => {
    
    return (
        <div>
            <img src={banner} alt="" />
            <Packages></Packages>
        </div> 
    
    );
};

export default Home;