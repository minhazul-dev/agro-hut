import React from 'react';
import Tab from './Tab/Tab';
import './Navbar.css'
import logos from '../../components/assets/images/Agro_Hut Logos/AgroHutLoged.png'
const Navbar = () => {
    return (
        <section>
            <Tab />

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
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
                                <a className="nav-item nav-link active" href="#" aria-current="page">Home</a>
                                <a className="nav-item nav-link active" href="" aria-current="page">Products</a>
                                <a className="nav-item nav-link active" href="/addReview" aria-current="page">Add Review</a>
                                {/* <a className="nav-item nav-link" href="#">Product</a>
                                <a className="nav-item nav-link" href="#">Features</a>
                                <a className="nav-item nav-link" href="#">Pricing</a> */}
                            </div>
                            {/* Right navigation */}
                            <div className="navbar-nav ms-lg-4">
                                <a className="nav-item nav-link" href="#">Admin</a>
                            </div>
                            {/* Action */}
                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                <a href="#" className="btn btn-sm btn-primary w-full w-lg-auto">
                                    My Account
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>





















            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><b>AGRO HUT</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Sale</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                 </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/addReview">Add Review</a>
                            </li>


                        </ul>
                        <form className="d-flex">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav> */}
        </section>
    );
};

export default Navbar;