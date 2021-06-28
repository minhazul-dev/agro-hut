import React from 'react';
import "./SellPoster.css"
import AgroHutLogo from '../assets/images/Agro_Hut Logos/AgroHutLoged.png'
import saleImg01 from '../assets/images/Sale_poster/add-img-01.jpg'
import saleImg02 from '../assets/images/Sale_poster/add-img-02.jpg'

// const saleData = [
//     {
//         name: 'vegetables',
//         img: saleImg01,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         name: 'fuits',
//         img: saleImg02,
//         description: 'Lorem ipsum dolor sit'

//     },
//     {
//         name: 'Dairy',
//         img: saleImg01,
//         description: 'Lorem ipsum dolor sit'

//     }
// ]

const SellPoster = () => {
    return (
        <section className="wrapper">
            <div className="container-fostrap">
                <div>
                    {/* <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" className="fostrap-logo" /> */}
                    <h1 className="heading mb-4">
                        Grab The Biggest Sale of The Month
                           </h1>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="card">
                                    <a className="img-card" href="">
                                        <img src={saleImg01} />
                                    </a>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            <a href=""> Lorem ipsum dolor sit amet.</a>
                                        </h4>
                                        <p className>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatibus.
                                             </p>
                                    </div>
                                    <div className="card-read-more">
                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                            Shop Now </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="card">
                                    <a className="img-card" href="">
                                        <img src={saleImg02} />
                                    </a>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            <a href=""> Lorem ipsum dolor sit amet.
                                               </a>
                                        </h4>
                                        <p className>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit!
                                         </p>
                                    </div>
                                    <div className="card-read-more">
                                        <a href="https://codepen.io/wisnust10/full/ZWERZK/" className="btn btn-link btn-block">
                                            Shop Now
                                         </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="card">
                                    <a className="img-card" href="">
                                        <img src={saleImg01} />
                                    </a>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            <a href="">Lorem ipsum dolor sit amet.
                        </a>
                                        </h4>
                                        <p className>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, a.
                      </p>
                                    </div>
                                    <div className="card-read-more">
                                        <a href="" className="btn btn-link btn-block">
                                            Shop Now
                      </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPoster;