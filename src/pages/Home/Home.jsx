import React from 'react';
import Banner from './Banner';
import Tabs from './Tabs';

const Home = () => {
    return (
        <div className='bg-yellow-50/30 pt-5'>
            <div className='w-19/20 mx-auto '>
            <Banner />
            <Tabs />
            </div>
            
        </div>
    );
};

export default Home;