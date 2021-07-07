import React from 'react';
import Tab from './Tab/Tab';
import './Navbar.css'
import logos from '../../components/assets/images/Agro_Hut Logos/AgroHutLoged.png'
import { Link } from 'react-scroll'
const Navbar = () => {
    return (
        <section className="sticky-top" >
            <Tab />

            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3 ">
                    <div className="container-xl">
                        {/* Logo */}
                        <a className="navbar-brand" href="#">
                            {/* <img src={logos} className="h-8" alt="..." /> */}
                            <h4>Agro|HUT</h4>
                        </a>
                        {/* Navbar toggle */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            {/* Nav */}
                            <div className="navbar-nav mx-lg-auto">

                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                ><a className="nav-item nav-link active" href="#" aria-current="page">Home</a>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="reviews"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}

                                ><a className="nav-item nav-link active" href="#" aria-current="page">Reviews</a>
                                </Link>
                                <Link
                                    activeClass="active"
                                    to="products"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}

                                ><a className="nav-item nav-link active" href="" aria-current="page">Products</a>
                                </Link>


                                <a className="nav-item nav-link active" href="/addReview" aria-current="page">Add Review</a>
                                {/* <a className="nav-item nav-link" href="#">Product</a>
                                <a className="nav-item nav-link" href="#">Features</a>
                                <a className="nav-item nav-link" href="#">Pricing</a> */}
                            </div>
                            {/* Right navigation */}
                            <div className="navbar-nav ms-lg-4">
                                <a className="nav-item nav-link" href="/loginFormAdmin">Admin</a>
                            </div>
                            {/* Action */}
                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                <a href="/myOrders" className="btn btn-sm btn-primary w-full w-lg-auto">
                                    My Account
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </section>
    );
};

export default Navbar;