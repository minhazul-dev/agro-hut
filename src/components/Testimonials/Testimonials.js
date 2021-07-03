import React, { useEffect, useState } from "react";
import "./Testimonials.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (

        <section className="gestimonials">
            <div className="testimonials-clean">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center"> Recent Reviews</h2>
                        <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                    </div>
                    <div className="row people">
                        {
                            reviews.map(review => <div className="col-md-6 col-lg-4 item">

                                <div className="box">
                                    <p className="description text-secondary">{review.description}</p>
                                </div>

                                <div className="author"><img className="rounded-circle" src={review.image} />
                                    <h5 className="name">{review.name}</h5>
                                    <p className="title text-primary">{review.location}</p>
                                </div>
                            </div>)

                        }

                    </div>


                </div>
            </div>

        </section >

    );
};

export default Testimonials;