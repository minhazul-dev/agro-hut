import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Maintenance from '../Maintenance/Maintenance';
import Navbar from '../Navbar/Navbar';

import Products from '../Products/Products';
import SellPoster from '../SellPoster/SellPoster';
import Testimonials from '../Testimonials/Testimonials';
import WhyUs from '../WhyUs/WhyUs';



const Home = () => {
    return (

        <div>

            <Navbar />
            <Header />
            <Maintenance />
            <SellPoster />
            <Products />
            <WhyUs />
            <Testimonials />
            <Footer />

        </div>




    );
};

export default Home;



