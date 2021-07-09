import React from 'react';
import "./Tab.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStreetView } from '@fortawesome/free-solid-svg-icons'
import { faAndroid, faFacebook, faGooglePlay, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Tab = () => {
    return (
        <div id="wrapper">
            {/* <h2 className="test">testing</h2> */}
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faSearch} size='1x' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faStreetView} size='1x' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faInstagram} size='1x' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faLinkedinIn} size='1x' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faGooglePlay} size='1x' />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon className="iconss" icon={faFacebook} size='1x' />
                    </a>
                </li>

            </ul>
        </div>

        // <div className="bg-light">
        //     <ul class="nav mb-1 mt-1">
        //         <li class="nav-item">
        //             <a class="nav-link active" aria-current="page" href="#">Call Now</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">+880 1304545454</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">My Account</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Our Location</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Save More on APP</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Download The APP Now</a>
        //         </li>

        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Watch Videos</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Become a Member</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Customer Care</a>
        //         </li>
        //         <li class="nav-item">
        //             <a class="nav-link" href="#">Track Order</a>
        //         </li>


        //     </ul>

        // </div>
    );
};

export default Tab;