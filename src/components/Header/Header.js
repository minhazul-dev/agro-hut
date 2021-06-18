import React from 'react';
import "./Header.css"
import videoBD from '../assets/video/AgroHut intro.mp4'

const Header = () => {
    return (

        <div>
            <header>
                <div className="overlay" />
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={videoBD} type="video/mp4" />
                </video>
                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Welcome to <b>AGRO-HUT</b> Store</h1>
                            <p className="lead mb-0">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quis facere. Esse, laboriosam veritatis incidunt rem nesciunt quam. Earum aliquam, ducimus voluptas impedit non necessitatibus.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;