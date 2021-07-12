import React from 'react';
import "./SingleProducts.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router';
import logo from "../../components/assets/images/Agro_Hut Logos/Agro.svg"



const SingleProducts = ({ pd }) => {

    const { _id } = pd;
    console.log(_id);
    const history = useHistory();

    const showCheckout = (_id) => {
        const url = `/checkout/${_id}`
        history.push(url);
    };

    return (
        <section className="col-md-4 mainProductssection ">

            <div className="container d-flex justify-content-center">
                <figure className="cards card-product-grid card-lg"> <img className="productImage" src={pd.image} />
                    <figcaption className="info-wrap">
                        <div className="row">
                            <div className="col-md-9 col-xs-9 formediaQuery"> <h4>{pd.name}</h4> </div>
                            {/* <div className="col-md-3 col-xs-3">
                                <div className="rating text-right"> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <i className="fa fa-star" /> <span className="rated">Rated 4.0/5</span> </div>
                            </div> */}
                        </div>
                    </figcaption>
                    <div className="bottom-wrap-payment">
                        <figcaption className="info-wrap">
                            <div className="row">
                                <div className="col-md-9 col-xs-9 formediaQuery"> <h4>${pd.price}</h4> </div>
                                <div className="col-md-9 col-xs-9 formediaQuery"> <p>{pd.description}</p> </div>
                                {/* <div className="col-md-3 col-xs-3">
                                    <div className="rating text-right"> {pd.description} </div>
                                </div> */}
                            </div>
                        </figcaption>
                    </div>
                    <div className="bottom-wrap formediaQuery">
                        <button onClick={() => showCheckout(_id)} type="button" className="btn btn-outline-info ">Buy Now</button>
                    </div>
                </figure>
            </div>

        </section>


















        // <div className="col-md-3" id="products">
        //     <div className="product-grid">
        //         <div className="product-image">
        //             <div className="image">
        //                 <img className="pic-1" src={pd.image} />
        //                 <img className="pic-2" src={pd.image} />
        //             </div>
        //             <ul className="product-links">

        //                 <li> <FontAwesomeIcon icon={faShoppingCart} size='3x' /></li>
        //                 <li> <FontAwesomeIcon icon={faHeart} size='3x' /></li>
        //                 <li> <FontAwesomeIcon icon={faRandom} size='3x' /></li>
        //                 <li> <FontAwesomeIcon icon={faSearch} size='3x' /></li>
        //             </ul>
        //         </div>
        //         <div className="product-content">
        //             <h3 className="title "><a href="">{pd.name}</a></h3>
        //             <p className="text-center">{pd.description}</p>
        //             <p className="price"> $ {pd.price}</p>
        //             <div class="text-center">
        // <button onClick={() => showCheckout(_id)} type="button" class="btn btn-outline-info">Buy Now</button>
        //             </div>

        //         </div>
        //     </div>
        // </div>



    );
};

export default SingleProducts;