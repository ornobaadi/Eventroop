import React from 'react';
import Banner from './Banner';
import Tabs from './Tabs';
import Events from './Events';

const Home = () => {
    return (
        <div>
            <div className='bg-yellow-50/30 pt-5'>
                <div className='w-19/20 mx-auto '>
                    <Banner />
                    <Tabs />
                </div>
            </div>
            <Events />
        </div>
    );
};

export default Home;