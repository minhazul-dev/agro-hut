import React from 'react';
import "./Footer.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className="container-fluid fcf mx-auto">
            <div className="row justify-content-center top-part">
                <div className="upperHeading col-md-6 text-center center-content mt-5">
                    <div className="d-flex-inline">
                        <h3 className="footer-heading">Start Working With Agro_Hut</h3>
                    </div>
                    <div className="d-flex-inline mt-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque accusamus placeat cumque atque reprehenderit id tenetur! Rem, eum voluptatibus ipsum at modi id hic.</p>
                    </div>
                    <div className="d-flex-inline pt-2"> <button className="btn-pink btn">Contact Now</button> </div>
                </div>
            </div>
            <div className="row">
                <div className="line mb-3 mx-auto" />
                <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
                    <div className="p-2 flex-fill bd-highlight mb-5 mb-md-0">
                        <h3>Agro-Hut</h3> <small>Copyright © 2021</small>
                    </div>
                    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                        <h5 className="places">Location 01</h5>
                        <p className="mb-0">Bydgoszcz Centrum Burnesa</p>
                        <p className="mb-0">ul Pzzenmdcwa 25, ibsura 24,</p>
                        <p className="mb-0">B5-7GB Bydgosrdz, Poland</p>
                    </div>
                    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                        <h5 className="places">Location 02</h5>
                        <p className="mb-0">ul Reyana 2-4</p>
                        <p className="mb-0">A0-100 Torun,</p>
                        <p className="mb-0">Poland</p>
                    </div>
                    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                        <h5 className="places">Location 03</h5>
                        <p className="mb-0">Brain Embassy</p>
                        <p className="mb-0">Alaya Jerasublisuble RS123</p>
                        <p className="mb-0">02-222 Warsawa</p>
                    </div>
                    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                        <h5 className="places">Location 04</h5>
                        <p className="mb-0">Google Campus</p>
                        <p className="mb-0">4-5 Barnhill, Shaneditch</p>
                        <p className="mb-0">London EC2A 4BK</p>
                    </div>
                    <div className="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                        <h5 className="places">Location 05</h5>
                        <p className="mb-0">Lorem, ipsum.</p>
                    </div>
                </div>
                <div className="line mb-3 mx-auto" />
            </div>
            <div className="row bottom-part">
                <div className="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
                    <div className="p-2 align-self-center flex-fill bd-highlight">
                        {/* <div className="fa fa-facebook px-2" />
                        <FontAwesomeIcon icon={faShoppingCart} size='3x' />
                        <div className="fa fa-linkedin px-2" />
                        <div className="fa fa-twitter px-2" />
                        <div className="fa fa-instagram px-2" /> */}
                        <FontAwesomeIcon icon={faFacebook} size='3x' />
                        <FontAwesomeIcon className="me-2 ms-2" icon={faInstagram} size='3x' />
                        <FontAwesomeIcon icon={faLinkedin} size='3x' />
                    </div>
                    <div className="p-2 row flex-fill bd-highlight justify-content-left">
                        <div className="p-2 d-lg-flex">
                            <div className="p-2 flex-fill d-flex bd-highlight">Services</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Portfolio</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Pricing</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Testimonials</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Team</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Blog</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Carrer</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">How we work</div>
                            <div className="p-2 flex-fill d-flex bd-highlight">Manifesto</div>
                        </div>
                    </div>
                    <div className="p-2 align-self-center flex-fill bd-highlight">
                        <div className="fa fa-mobile px-2 grey-text">&nbsp;&nbsp;<span id="contact">888-777-666</span></div>
                        <div className="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@agro_hut.in</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;