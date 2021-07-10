import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import "./AdminDashboard.css"






const AdminDashboard = () => {

    const [reviews, setReviews] = useState([])
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    //fetching all orders
    useEffect(() => {
        fetch('https://thawing-fjord-24286.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setCustomers(data))

    }, [])

    //deleting reviews
    const deleteReview = id => {
        const url = `https://thawing-fjord-24286.herokuapp.com/deletereviews/${id}`;
        fetch((url), {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    alert('Product Deleted successfully')
                }
                // console.log('deleted successfully', results);
            })
        // console.log('btn clicked', id);
    }

    //////admin procedure
    const [isAdmin, setIsAdmin] = useState(false)
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`https://thawing-fjord-24286.herokuapp.com/isAdmin?email=${loggedInUser.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])
    console.log(isAdmin);

    return (

        <section>
            {
                isAdmin ? <div className="mb-5">
                    <nav role="navigation">
                        <ul className="main">
                            <li className="dashboard"><a href="/">Home</a></li>
                            {/* <li className="write"><a href="#">Write Post</a></li> */}
                            <li className="edit"><a href="/AllOrders">All Orders</a></li>
                            <li className="comments"><a href="/addProducts">Add Products</a></li>
                            <li className="comments"><a href="/addSalePoster">Add Sale Poster</a></li>
                            <li className="users"><a href="/manageproducts">Delete Products</a></li>
                            <li className="users"><a href="/makeAdmin">Make Admin</a></li>
                        </ul>
                    </nav>
                    <main role="main">
                        <section className="panel important">
                            <h3 className="display-6">Welcome Admin: <b>{loggedInUser.name} <span><img width="60px" height="60px" src={loggedInUser.image} className="rounded-circle" alt="Cinque Terre"></img></span></b></h3>

                            <ul>
                                <li>Important panel that will always be really wide Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                                <li>Aliquam tincidunt mauris eu risus.</li>
                                <li>Vestibulum auctor dapibus neque.</li>
                            </ul>
                        </section>
                        <section className="panel">
                            <h2> No of Reviews {reviews.length}</h2>
                            <ul>
                                {
                                    reviews.map(r => <li>Reviewer <b>{r.name}</b> </li>)
                                }
                            </ul>
                        </section>
                        <section className="panel">
                            <h2>Chart</h2>
                            <div id="containerPanel">
                                <div className="col-lg-3 col-xs-6">
                                    {/* small box */}
                                    <div className="small-box bg-aqua">
                                        <div className="inner">
                                            <h3>{customers.length}</h3>
                                            <p>Orders Placed</p>
                                        </div>
                                        <div className="icon">
                                            <i className="fa fa-shopping-cart" />
                                        </div>
                                        <a href="/allOrders" className="small-box-footer">
                                            More info <i className="fa fa-arrow-circle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="panel">
                            <h2>Reviews</h2>
                            {
                                reviews.map((review) => <div className="feedback">
                                    <p>{review.description}</p>
                                    <button className="btn btn-outline-warning btn-sm" onClick={() => deleteReview(review._id)} >Delete</button>
                                </div>)
                            }
                        </section>
                        <section className="panel ">
                            <h2> All Customers Information</h2>
                            <div>
                                {
                                    customers.map((customer) => <ul><li>{customer.email}</li>
                                    </ul>)
                                }
                            </div>

                        </section>
                    </main>
                </div> : <div className="container mt-5">
                    <h1 className="text-danger text-center"> THIS IS FOR ONLY SELECTED ADMIN.</h1>
                    <h1 className="text-danger text-center"> Please Leave the page.</h1>
                </div>
            }


        </section>
    );
};

export default AdminDashboard;