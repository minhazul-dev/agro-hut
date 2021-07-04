import React, { useEffect, useState } from 'react';
import "./SellPoster.css"
// import AgroHutLogo from '../assets/images/Agro_Hut Logos/AgroHutLoged.png'
// import saleImg01 from '../assets/images/Sale_poster/add-img-01.jpg'
// import saleImg02 from '../assets/images/Sale_poster/add-img-02.jpg'
import { ScaleLoader } from "react-spinners";
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
        fetch('http://localhost:5000/salePosters')
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
                                        <a className="img-card" href="">
                                            <img src={salePoster.image} />
                                        </a>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                <h4> {salePoster.name}</h4>
                                            </h4>
                                            <p className>
                                                {salePoster.description}
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="/products" className="btn btn-link btn-block">
                                                Shop Now </a>
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