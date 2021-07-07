import React, { useEffect, useState } from 'react';
import "./SellPoster.css"
// import AgroHutLogo from '../assets/images/Agro_Hut Logos/AgroHutLoged.png'
// import saleImg01 from '../assets/images/Sale_poster/add-img-01.jpg'
// import saleImg02 from '../assets/images/Sale_poster/add-img-02.jpg'
import { ScaleLoader } from "react-spinners";
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll'
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

    const [salePoster, setSalePoster] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/salePosters')
            .then(res => res.json())
            .then(data => {
                setSalePoster(data)
                setLoading(false)
            })

    }, [])
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
                            {loading ? <div className="container text-center mt-5 mb-5"> <ScaleLoader /></div> :
                                salePoster.map(salePoster => <div className="col-xs-12 col-sm-4">
                                    <div className="card">
                                        <p className="img-card" href="">
                                            <img src={salePoster.image} />
                                        </p>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                <h4> {salePoster.name}</h4>
                                            </h4>
                                            <p className>
                                                {salePoster.description}
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <Link
                                                activeClass="active"
                                                to="products"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={600}>

                                                <a href="" className="btn btn-link btn-block">
                                                    Shop Now </a>
                                            </Link>


                                        </div>
                                    </div>
                                </div>)

                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellPoster;