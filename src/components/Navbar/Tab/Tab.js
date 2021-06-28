import React from 'react';


const Tab = () => {
    return (
        <div className="bg-light">
            <ul class="nav mb-1 mt-1">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Call Now</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">+880 1304545454</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">My Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Our Location</a>
                </li>

            </ul>

            {/* <ul className="nav justify-content-center">
                <li className="nav-item ">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul> */}
        </div>
    );
};

export default Tab;