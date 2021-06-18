import React from 'react';
import Header from '../Header/Header';
import Maintenance from '../Maintenance/Maintenance';
import Navbar from '../Navbar/Navbar';
import SellPoster from '../SellPoster/SellPoster';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            {/* <Maintenance /> */}
            <SellPoster />
        </div>
    );
};

export default Home;