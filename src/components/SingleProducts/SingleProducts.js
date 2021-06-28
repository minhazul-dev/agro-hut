import React from 'react';
import "./SingleProducts.css"
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
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                        <li><a href="#"><i className="far fa-heart" /></a></li>
                        <li><a href="#"><i className="fa fa-random" /></a></li>
                        <li><a href="#"><i className="fa fa-search" /></a></li>
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
                    <div className="price">$85.55</div>
                </div>
            </div>
        </div>



    );
};

export default SingleProducts;