import React from 'react';
import "./SingleProducts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';







const SingleProducts = ({ pd }) => {

    return (

        <div className="col-md-3">
            <div className="product-grid">
                <div className="product-image">
                    <a href="#" className="image">
                        <img className="pic-1" src={pd.img} />
                        <img className="pic-2" src={pd.img} />
                    </a>
                    <ul className="product-links">

                        <li> <FontAwesomeIcon icon={faShoppingCart} size='3x' /></li>
                        <li> <FontAwesomeIcon icon={faHeart} size='3x' /></li>
                        <li> <FontAwesomeIcon icon={faRandom} size='3x' /></li>
                        <li> <FontAwesomeIcon icon={faSearch} size='3x' /></li>
                    </ul>
                </div>
                <div className="product-content">
                    {/* <ul className="rating">
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="fa fa-star" />
                        <li className="far fa-star" />
                    </ul> */}
                    <h3 className="title"><a href="#">{pd.name}</a></h3>
                    <p>{pd.description}</p>
                    <div className="price"> price: $85.55</div>
                    <div class="text-center">
                        <button type="button" class="btn btn-outline-info">Buy Now</button>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default SingleProducts;