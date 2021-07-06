import React from 'react';
import "./SingleProducts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router';







const SingleProducts = ({ pd }) => {

    const { _id } = pd;
    console.log(_id);
    const history = useHistory();

    const showCheckout = (_id) => {
        const url = `/checkout/${_id}`
        history.push(url);
    };

    return (

        <div className="col-md-3" id="products">
            <div className="product-grid">
                <div className="product-image">
                    <div className="image">
                        <img className="pic-1" src={pd.image} />
                        <img className="pic-2" src={pd.image} />
                    </div>
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
                    <h3 className="title "><a href="">{pd.name}</a></h3>
                    <p className="text-center">{pd.description}</p>
                    <p className="price"> $ {pd.price}</p>
                    <div class="text-center">
                        <button onClick={() => showCheckout(_id)} type="button" class="btn btn-outline-info">Buy Now</button>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default SingleProducts;